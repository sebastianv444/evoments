import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img
        src="/LogosEvoments/LogoEvoments-imagotipo.png"
        alt=""
        width={600}
        style={{ marginRight: "72px" }}
      />
      <h2 style={{fontSize: "30px"}}>PRÓXIMAMENTE...</h2>
      <p>
        Somos Evoments, una aplicación innovadora donde podrás crear, gestionar
        y administrar tus eventos de forma sencilla y eficiente. Nuestro
        objetivo es conectar a organizadores con usuarios que buscan
        experiencias únicas, permitiendo que estos puedan adquirir entradas de
        forma rápida, interactiva y sin complicaciones. Somos un equipo de
        jóvenes ambiciosos con ganas de revolucionar la forma en que se viven y
        se comparten los eventos. Además, si tienes una idea para un evento pero
        no sabes cómo publicarlo o promocionarlo, Evoments está aquí para
        ayudarte. Te apoyamos desde el primer paso, asegurándonos de que tu
        evento llegue al público adecuado y tenga el impacto que deseas.
      </p>
      <br />
      <br />
      <br />
      <img src="/pre-landing/construccion.png" alt="construccion" width={230} />
      <br />
      <br />
      <h2>Desarrolladores:</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <p>👨‍💻 Iván de la Torre Moreno</p>
        <a href="https://www.instagram.com/" target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "8px" }}
          >
            <path
              d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <p>👨‍💻 Sebastián Moreno Villalobos</p>
        <a href="https://www.instagram.com/" target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginTop: "8px" }}
          >
            <path
              d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
