import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";

const KEY = "evoments:userRole";
const Context = createContext({
  isLoading: true,
  isCreator: false,
  stripeAccountId: null,
});

export function UserRoleProvider({ children }) {
  const { getToken } = useAuth();
  const { user, isSignedIn } = useUser();
  const stored = JSON.parse(localStorage.getItem(KEY) || "null");
  const [state, setState] = useState({
    isLoading: stored === null,
    isCreator: stored?.isCreator || false,
    stripeAccountId: stored?.stripeAccountId || null,
  });

  useEffect(() => {
    if (!isSignedIn) {
      setState({ isLoading: false, isCreator: false, stripeAccountId: null });
      localStorage.removeItem(KEY);
      return;
    }
    if (stored !== null) return;

    let m = true;
    (async () => {
      try {
        setState((s) => ({ ...s, isLoading: true }));
        const token = await getToken();
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users/rol`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "x-clerk-user-id": user.id,
            },
          }
        );
        if (!m) return;
        const { isCreator, stripeAccountId } = res.data;
        setState({ isLoading: false, isCreator, stripeAccountId });
        localStorage.setItem(
          KEY,
          JSON.stringify({ isCreator, stripeAccountId })
        );
      } catch {
        if (!m) return;
        setState({ isLoading: false, isCreator: false, stripeAccountId: null });
      }
    })();
    return () => {
      m = false;
    };
  }, [user, isSignedIn]);

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export const useUserRole = () => useContext(Context);
