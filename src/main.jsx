import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { Notificador } from "./components/Notificador";
import { UserRoleProvider } from "./context/UserRol.context";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        {/* Toaster global */}
        <Notificador />
        <UserRoleProvider>
          <App />
        </UserRoleProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
