import THERAPIE from "/assets/therapie.jpeg";

export default function Therapie() {
  return (
    <>
      <div className="bg-stone-100 pt-16">
        <h1 className="text-center text-customColor underline pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-b-2 border-b-stone-950">
          La Thérapie
        </h1>
        <p className=" pl-4 pr-4 pt-4 font-bold text-center">
          Dans le cadre de mes services, je propose une variété de{" "}
          <span className="text-customColor">thérapies</span> et d'approches
          pour vous aider à surmonter les défis de la vie et à retrouver un{" "}
          <span className="text-customColor">équilibre intérieur.</span> Chaque
          thérapie est conçue pour répondre à vos besoins uniques et vous
          accompagner dans votre parcours{" "}
          <span className="text-customColor">
            de guérison et de croissance personnelle.
          </span>
        </p>
        <div className="bg-customColor mb-6 ml-2 mr-2 mt-6 rounded-2xl">
          <img
            className="pl-4 pr-4 pt-4 pb-4"
            src={THERAPIE}
            alt="img therapie"
          />
        </div>
        <h2 className="text-center text-customColor underline pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-t-2 border-t-stone-950">
          Votre Parcours de Guérison
        </h2>
        <p className=" pl-4 pr-4 pb-6 font-bold text-center">
          Chaque <span className="text-customColor">séance</span> de{" "}
          <span className="text-customColor">thérapies</span> est une étape sur
          votre parcours de guérison et de transformation. Ensemble, nous
          explorerons{" "}
          <span className="text-customColor">
            {" "}
            les défis que vous rencontrez
          </span>
          , les schémas de pensée qui vous limitent et les ressources internes
          que vous <span className="text-customColor">possédez</span> pour
          surmonter ces obstacles.
        </p>
        <h3 className="text-center text-customColor underline pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-t-2 border-t-stone-950">
          Faire le Premier Pas
        </h3>
        <p className=" pl-4 pr-4 pb-6 font-bold text-center">
          Si vous vous sentez <span className="text-customColor">prêt(e)</span>{" "}
          à commencer votre voyage vers le{" "}
          <span className="text-customColor">bien-être</span> et la guérison, je
          suis là pour vous accompagner. Prendre rendez-vous est le premier pas
          vers une vie plus <span className="text-customColor">épanouie</span>{" "}
          et <span className="text-customColor">satisfaisante</span> .
        </p>
      </div>
    </>
  );
}
