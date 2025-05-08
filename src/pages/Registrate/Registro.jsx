import { SignUp } from "@clerk/clerk-react";

function Registro() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#24274f] to-[#55F1FF] h-screen flex items-center justify-center ">
        <div style={{ transform: "translateY(130px)" }}>
          <SignUp
            signInUrl={`${import.meta.env.VITE_BASEAPP_URL}/login`}
            fallbackRedirectUrl="/sync"
            appearance={{
              elements: {
                card: {
                  backgroundImage: "linear-gradient(to right,#FFFFFF,#55F1FF)",
                  backdropFilter: "blur(7px)",
                  borderRadius: "16px",
                  color: "white",
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Registro;
