import { SignedOut, SignIn } from "@clerk/clerk-react"

function Login() {
  return (
    <>
    <div className="bg-gradient-to-b from-[#24274f] to-[#55F1FF] h-screen flex items-center justify-center">
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <SignedOut>
            <SignIn
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
          </SignedOut>
        </div> 
      </div>
</>
  )
}

export default Login