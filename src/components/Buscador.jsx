import { twMerge } from "tailwind-merge";

function Buscador({ className }) {
  return (
    <div
      className={twMerge(
        "relative w-[590px] bg-gray-100 rounded-2xl shadow-md p-1.5 transition-all duration-150 ease-in-out hover:shadow-lg",
        className
      )}
    >
      <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
        </svg>
      </div>
      <input
        type="text"
        className="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent rounded-lg focus:outline-none"
        placeholder="conciertos, partidos, etc..."
      />
      <button className="absolute right-1 top-1 bottom-1 px-6 bg-blue-600 text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5044e4] cursor-pointer">
        Buscar
      </button>
    </div>
  );
}

export default Buscador;
