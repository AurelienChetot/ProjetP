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
        <span className="text-customColor underline">Les Séances</span>
      </h1>
      <p className=" pl-4 pr-4 pt-2 pb-6 font-bold text-center">
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
      <h1 className="text-center pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-t-2 border-t-stone-950">
        <span className="text-customColor underline">L'accueil</span>
      </h1>
      <p className=" pl-4 pr-4 pt-2 pb-6 font-bold text-center">
        Dès que vous franchissez la porte,{" "}
        <span className="text-customColor">vous serez enveloppé(e)</span> par
        une atmosphère apaisante et accueillante. Mon cabinet a été
        soigneusement conçu pour offrir{" "}
        <span className="text-customColor">un refuge tranquille</span> loin du
        stress quotidien. Vous trouverez des espaces confortables où nous
        pourrons discuter en toute{" "}
        <span className="text-customColor">confidentialité</span>
        et des coins plus intimes pour les moments de réflexion et de détente.
      </p>
      <h2 className="text-center pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-t-2 border-t-stone-950">
        <span className="text-customColor underline">L'Approche</span>
      </h2>
      <p className=" pl-4 pr-4 pt-2 pb-2 font-bold text-center">
        Chaque séance est unique et adaptée à vos besoins spécifiques. Je crois
        en une approche holistique qui prend en compte tous les aspects de votre
        bien-être:
      </p>
      <p className=" text-lg text-colorBrown text-center">↬ Physique</p>
      <p className=" text-lg text-colorBrown text-center">↬ Emotionnel</p>
      <p className=" text-lg text-colorBrown text-center">↬ Mental</p>
      <p className=" text-lg text-colorBrown text-center">↬ Spirituel</p>
      <p className="text-center pl-4 pr-4 pt-2 pb-2">
        {" "}
        En travaillant ensemble, nous explorerons les défis que vous rencontrez
        et développerons des stratégies pour surmonter les obstacles qui se
        dressent sur votre chemin.
      </p>
    </div>
  );
}
