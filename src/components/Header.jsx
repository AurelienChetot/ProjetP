import Logo from "/assets/favicone.png";

export default function Header() {
  return (
    <div className=" bg-stone-300 flex border-b-2 border-b-stone-950 flex flex-col">
      <div className="flex flex-col items-center ">
        <img
          className="h-30 w-32 mt-4 rounded-full shadow-xl"
          src={Logo}
          alt="Logo"
        />
        <h1 className="bg-gradient-to-r from-stone-900 via-zinc-500 to-stone-900 inline-block text-transparent bg-clip-text flex text-center text-4xl mb-2">
          Psychopraticienne <br /> Patricia <br />
          Deias
        </h1>
      </div>
      <div className="dropdown flex justify-end">
        <div tabIndex={0} role="button" className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-yellow-800"
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
          <li className="text-yellow-800">
            <a>Homepage</a>
          </li>
          <li className="text-yellow-800">
            <a>Portfolio</a>
          </li>
          <li className="text-yellow-800">
            <a>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
