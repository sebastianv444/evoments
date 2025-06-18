import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth, useUser } from "@clerk/clerk-react";
import EvoApi from "@/services/MyAPI/EvoApi";

const KEY = "evoments:isAdmin";
const AdminContext = createContext({
  isLoading: true,
  isAdmin: false,
});

export function AdminProvider({ children }) {
  const { getToken } = useAuth();
  const { user, isSignedIn } = useUser();
  const stored = JSON.parse(localStorage.getItem(KEY) || "null");
  const [state, setState] = useState({
    isLoading: stored === null,
    isAdmin: stored?.isAdmin || false,
  });

  useEffect(() => {
    if (!isSignedIn) {
      setState({ isLoading: false, isAdmin: false });
      localStorage.removeItem(KEY);
      return;
    }
    if (stored !== null) return;

    const email = user.primaryEmailAddress?.emailAddress;
    let mounted = true;
    (async () => {
      try {
        setState((s) => ({ ...s, isLoading: true }));
        const res = await EvoApi.post(`/api/admin/comprobacionAdmin`, {
          email,
        })
        if (!mounted) return;
        const { isAdmin } = res.data;
        setState({ isLoading: false, isAdmin });
        localStorage.setItem(KEY, JSON.stringify({ isAdmin }));
      } catch {
        if (!mounted) return;
        setState({ isLoading: false, isAdmin: false });
      }
    })();
    return () => {
      mounted = false;
    };
  }, [user, isSignedIn]);

  return (
    <AdminContext.Provider value={state}>{children}</AdminContext.Provider>
  );
}

export const useAdmin = () => useContext(AdminContext);
