import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin,FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1F233E] text-white py-8">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

    {/* Logo */}
    <div className="text-2xl font-bold text-[#2B7FFF]">
      <Link to="/">Evoments</Link>
    </div>

    {/* Enlaces */}
    <div className="flex flex-col md:flex-row gap-4 text-sm">
      <Link to="/" className="text-[#2B7FFF] hover:text-[#52DBEC] transition">Inicio</Link>
      <Link to="/events" className="text-[#2B7FFF] hover:text-[#52DBEC] transition">Evento</Link>
      <Link to="/creadorEvents" className="text-[#2B7FFF] hover:text-[#52DBEC] transition">Crea tu propio evento</Link>
      <Link to="/contact" className="text-[#2B7FFF] hover:text-[#52DBEC] transition font-semibold">Contacto</Link>
    </div>

    {/* Redes sociales */}
    <div className="flex gap-4 text-[#52DBEC]">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg"><FaFacebookF /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg"><FaTwitter /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg"><FaInstagram /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg"><FaLinkedin /></a>
      <a href="https://github.com/sebastianv444/evoments" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg"><FaGithub /></a>
    </div>
  </div>

  {/* Línea inferior */}
  <div className="border-t border-[#2B7FFF] mt-6 pt-4 text-center text-sm text-[#52DBEC]">
    © {new Date().getFullYear()} Evoments. Todos los derechos reservados.
  </div>
</footer>
  );
};

export default Footer;
