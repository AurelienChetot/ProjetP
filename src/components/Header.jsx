import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import Menu from "/assets/menu.svg";
import CROSS from "/assets/cross.svg";
import MUSIC from "/soundtrack/music.mp3";
import "../App.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleInteraction = () => {
      audio.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    };

    document.addEventListener("click", handleInteraction, { once: true });

    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-custom-bg bg-cover bg-center h-80 border-b-2 border-b-stone-950 lg:h-[750px]">
      <div className="flex flex-col items-center pt-24 lg:pt-32 md:pt-24">
        <h1 className="font-royal bg-gradient-to-r from-stone-900 via-stone-600 to-stone-900 text-transparent bg-clip-text flex text-center text-8xl lg:text-[15rem]">
          Patricia <br />
          Deias
        </h1>
      </div>
      <div className="flex justify-center">
        <audio
          className="w-64 pb-6"
          ref={audioRef}
          src={MUSIC}
          controls
          loop
        ></audio>
      </div>
      <div className={menuOpen ? "sidenav active" : "sidenav"}>
        <video autoPlay muted loop className="background-video">
          <source src="../assets/butterfly.mp4" type="video/mp4" />
        </video>
        <p className="close" onClick={toggleMenu}>
          <span className="cursor-menu-close">
            <img className="w-20" src={CROSS} alt="cross" />
          </span>
        </p>
        <ul
          tabIndex={0}
          className="dropdown-content mt-3 z-[1] p-2 rounded-box w-52"
        >
          <li className="text-customColor font-bold text-xl text-center">
            <Link to="/" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <Link to="/qui-suis-je" onClick={closeMenu}>
              Qui suis-je
            </Link>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <Link to="/seance" onClick={closeMenu}>
              Mes séances
            </Link>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <Link to="/therapie" onClick={closeMenu}>
              Thérapie
            </Link>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <Link to="/objectifs" onClick={closeMenu}>
              Objectifs de la thérapie
            </Link>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <Link to="/tarifs" onClick={closeMenu}>
              Tarifs
            </Link>
          </li>
          <li className="text-customColor font-bold text-xl text-center pt-2">
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
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
