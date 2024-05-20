import "../App.scss";
import ROOM1 from "/assets/room1.jpeg";
import ROOM2 from "/assets/room2.jpeg";
import ROOM3 from "/assets/room3.jpeg";
import ROOM4 from "/assets/room4.jpeg";
import ROOM5 from "/assets/room5.jpeg";
import BUDDHA4 from "/assets/buddha4.jpeg";
import DECO4 from "/assets/deco4.jpeg";

export default function Seance() {
  return (
    <div className="bg-stone-100 pt-16">
      <h1 className="text-center pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-b-2 border-b-stone-950">
        Les <span className="text-customColor">Séances</span>
      </h1>
      <p className=" pl-4 pr-4 pt-2 font-bold text-center">
        Lors de nos séances, vous serez accueilli(e) dans un espace{" "}
        <span className="text-colorBrown">chaleureux</span> et{" "}
        <span className="text-colorBrown">bienveillant</span> situé à l'adresse{" "}
        <span className="text-colorBrown">
          13 Rue des Petites Rattes à Epervans,71380
        </span>
        . Mon objectif est de créer un environnement sûr où vous pouvez vous
        sentir à l'aise pour explorer vos émotions, vos pensées et vos
        expériences de vie.
      </p>
      <div className="carousel carousel-center max-w-full p-4 mb-6 ml-2 mr-2 space-x-4 bg-customColor rounded-box ">
        <div className="carousel-item">
          <img src={ROOM3} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={ROOM2} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={ROOM1} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={ROOM4} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={ROOM5} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={DECO4} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={BUDDHA4} className="rounded-box" />
        </div>
      </div>
    </div>
  );
}
