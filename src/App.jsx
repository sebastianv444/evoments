import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Nuestro sitio web</h2>
      <h1>PRÓXIMAMENTE...</h1>
      <p>
        Nuestro proyecto llamado evoments sería una página web para crear
        eventos y gestionar eventos. Desarrollar una plataforma web donde se
        puedan crear, gestionar y asistir a eventos dentro de una zona creada
        ficticiamente por nosotros. La aplicación estará dirigida tanto a
        creadores de eventos como a clientes que deseen asistir a ellos.
      </p><br /><br /><br />
      <img
        src="../public/pre-landing/construccion.png"
        alt="construccion"
        width={230}
      /><br /><br />
      <h3>Desarrolladores:</h3>
      <p>Iván de la Torre Moreno</p>
      <p>Sebastián Moreno Villalobos</p>
    </>
  );
}

export default App;
