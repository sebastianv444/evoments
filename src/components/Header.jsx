import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full p-10 bg-gray-700">
      <Link to={"/"}>
        <img
          src="/LogosEvoments/LogoEvoments-imagotipo.png"
          alt="Logo del Nav"
          className="w-50"
        />
      </Link>
      <nav></nav>
    </header>
  );
}

export default Header;
