import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgAlarm } from "react-icons/cg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");

  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer: number | null = null; // Define como null inicialmente
  
    if (isRunning) {
      timer = window.setInterval(() => { // Usa window.setInterval para garantir compatibilidade com navegador
        setTime((prev) => prev + 1);
      }, 1000);
    } else if (timer !== null) {
      clearInterval(timer);
    }
  
    return () => {
      if (timer !== null) clearInterval(timer);
    };
  }, [isRunning]);
  
  

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#11175a] text-white flex justify-between items-center px-6 py-4 z-50">
      {/* Logo e Nome */}
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="text-3xl font-inter bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
          Blossom Boost
        </span>
      </div>

      {/* Links de Navegação */}
      <div className="hidden md:flex gap-x-32 absolute left-1/2 transform -translate-x-1/2">
        {["Dashboard", "Tables", "Protocols", "Goals"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className={`bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent hover:from-blue-300 hover:via-blue-400 hover:to-blue-500 transition text-lg font-medium pb-1 ${
              activeLink === item ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveLink(item.toLowerCase())}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Botão + Timer + Foto de Perfil */}
      <div className="flex items-center gap-6">
        {/* Timer - Animação de entrada e saída */}
        <div
          className={`${
            isRunning ? "opacity-100 scale-100" : "opacity-0 scale-90"
          } transition-all duration-500 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-4 py-1 rounded-full text-lg font-semibold`}
        >
          {formatTime(time)}
        </div>

        {/* Botão para iniciar/parar o Timer */}
        <button
          type="button"
          onClick={() => setIsRunning(!isRunning)}
          className="flex items-center justify-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-2.5 transition-all duration-300 transform hover:scale-110"
        >
          <CgAlarm className="w-5 h-5" />
        </button>

        {/* Perfil do Usuário */}
        <div className="relative">
          <img
            src="/user.jpg"
            alt="Perfil"
            className="w-11 h-11 rounded-full cursor-pointer border-1 border-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-[2px]"
            onClick={() => setIsOpen(!isOpen)}
          />

          {/* Modal Dropdown */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-3">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded">My Metrics</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded">My Wiki</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded">Sair</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

