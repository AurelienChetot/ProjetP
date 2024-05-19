import { useState } from "react";

import Menu from "/assets/menu.svg";
import CROSS from "/assets/cross.svg";
import "../App.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-custom-bg bg-cover bg-center h-80  border-b-2 border-b-stone-950 lg:h-[750px]">
      <div className="flex flex-col items-center pt-24">
        <h1 className="font-royal bg-gradient-to-r from-stone-900 via-stone-600 to-stone-900 text-transparent bg-clip-text flex text-center text-8xl ">
          Patricia <br />
          Deias
        </h1>
      </div>
      <div className={menuOpen ? "sidenav active" : "sidenav"}>
        <p className="close" onClick={toggleMenu}>
          <span className="cursor-menu-close">
            <img className="w-20" src={CROSS} alt="cross" />
          </span>
        </p>
        <ul
          tabIndex={0}
          className=" dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
        >
          <li className="text-customColor font-bold text-xl text-center">
            <a onClick={closeMenu}>Accueil</a>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <a onClick={closeMenu}>Qui suis-je</a>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <a onClick={closeMenu}>Mes séances</a>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <a onClick={closeMenu}>Thérapie</a>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <a onClick={closeMenu}>Objectifs</a>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <a onClick={closeMenu}>Tarifs</a>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <a onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
      <a id="openBtn" onClick={toggleMenu}>
        <span className="burger-icon">
          <img
            className="w-16 absolute right-0 mt-8"
            src={Menu}
            alt="menuSvg"
          />
        </span>
      </a>
    </div>
  );
}
