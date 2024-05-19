export default function Header() {
  return (
    <div className="bg-custom-bg bg-cover bg-center  border-b-2 border-b-stone-950">
      <div className="flex flex-col items-center pt-10">
        <h1 className="bg-gradient-to-r from-stone-900 via-stone-600 to-stone-900 text-transparent bg-clip-text flex text-center text-4xl mb-2">
          Patricia <br />
          Deias
        </h1>
      </div>
      <div className="dropdown flex justify-end">
        <div tabIndex={0} role="button" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-customColor"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li className="text-indigo-800 text-xl text-center">
            <a>Accueil</a>
          </li>
          <li className="text-indigo-800 text-xl text-center pt-2">
            <a>Qui suis-je</a>
          </li>
          <li className="text-indigo-800 text-xl text-center pt-2">
            <a>Mes séances</a>
          </li>
          <li className="text-indigo-800 text-xl text-center pt-2">
            <a>Thérapie</a>
          </li>
          <li className="text-indigo-800 text-xl text-center pt-2">
            <a>Objectifs</a>
          </li>
          <li className="text-indigo-800 text-xl text-center pt-2">
            <a>Tarifs</a>
          </li>
          <li className="text-indigo-800 text-xl text-center pt-2">
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
