import { useState } from "react";


function FormularioParaSerCreador() {
 const [chat,setchat] = useState(["🤖 Hola, ¿cómo te llamas?"]);
 const [paso,setpaso] = useState(0);
 const [input,setinput] = useState("");
 console.log("chat",chat)
 console.log("paso",paso)
 console.log("input",input)

const handleSend = () =>{
  const newChat = [...chat,`👤 ${input}`];
  if (paso == 0) newChat.push("🤖 ¿Cuál es tu correo?")
  if(paso == 1) newChat.push("🤖 !Gracias por reñenar este cuestionario!");

  setchat(newChat);
  setinput("")
  setpaso(paso+1);
};

  return (
    <>
     <div className="max-w-md mx-auto mt-10 bg-gray-100 p-6 rounded-2xl shadow-md">
        <div className="space-y-2 h-64 overflow-y-auto">
          {chat.map((msg,i) =>{
            return <div key={i} className={`text-sm ${msg.startsWith("🤖") ? "text-left" : "text-right"}`}>{msg}</div>
          })}
        </div>
        <div className="mt-4 flex">
          <input
            className="flex-1 p-2 border rounded"
            value={input}
            onChange={(e) => setinput(e.target.value)}
          />
          <button className="ml-2 btn" onClick={handleSend}>Enviar</button>
        </div>
     </div>
    </>
  )
}

export default FormularioParaSerCreador