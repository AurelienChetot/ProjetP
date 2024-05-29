import "../App.scss";

import DIPLOME from "/assets/diplome2.jpeg";

export default function Perso() {
  return (
    <div className="bg-stone-100 pt-16">
      <div className="lg:flex lg:flex-col lg:items-center">
        <h1 className="text-center text-customColor underline pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-b-2 border-b-stone-950 lg:w-2/6 lg:pb-16 lg:pt-16">
          Qui-Suis-Je ?
        </h1>
      </div>
      <h2 className="text-center text-colorBrown text-2xl font-bold pb-3 pt-3 lg:pt-16">
        Patricia Deias
      </h2>
      <p className=" pl-4 pr-4 text-xl font-bold text-center">
        Accompagnatrice en Développement{" "}
        <span className="text-customColor underline">Personnel</span> &{" "}
        <span className="text-customColor underline">Professionnel</span>
      </p>
      <p className=" pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-16">
        Avec une riche expérience en insertion professionnelle, j'ai décidé de
        poursuivre mon chemin pour devenir psychopraticienne. Mon objectif est
        de vous accompagner sur la voie du développement personnel et
        professionnel, en vous offrant un soutien personnalisé et bienveillant.
      </p>
      <div className="lg:flex lg:flex-col lg:items-center">
        <h3 className=" pl-4 pr-4 pt-4 ml-4 mr-4 text-xl text-customColor underline font-bold text-center  border-t-2 border-t-stone-950 lg:w-2/6 lg:pt-16 lg:pb-8">
          Mon Parcours
        </h3>
      </div>
      <p className=" pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-16">
        Anciennement spécialisée dans l'insertion professionnelle, j'ai acquis
        une solide expertise en aidant des personnes à retrouver leur place dans
        le monde du travail. Cette expérience m'a permis de comprendre les défis
        uniques que chacun peut rencontrer sur le plan professionnel et
        personnel.
      </p>
      <div className="flex justify-center bg-customColor mb-6 ml-2 mr-2 rounded-2xl lg:ml-80 lg:mr-80 lg:mb-16 ">
        <img className="pl-4 pr-4 pt-4 pb-4" src={DIPLOME} alt="img perso" />
      </div>
      <div className="lg:flex lg:flex-col lg:items-center">
        <h3 className=" pl-4 pr-4 pt-4 ml-4 mr-4 text-xl text-customColor underline font-bold text-center  border-t-2 border-t-stone-950 lg:w-2/6 lg:pt-16">
          Ma Mission
        </h3>
      </div>
      <p className=" pl-4 pr-4 pt-2 font-bold text-center lg:pb-6 lg:pt-6">
        Aujourd'hui, en tant qu'accompagnatrice en développement personnel et
        professionnel, je m'engage à :{" "}
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-8">
        <span className="font-bold">1.</span>{" "}
        <span className="text-colorBrown">
          Vous aider à identifier et surmonter les obstacles
        </span>{" "}
        qui entravent votre épanouissement. Que ce soit des blocages
        émotionnels, des difficultés relationnelles, ou des défis
        professionnels, je suis là pour vous soutenir.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-8">
        <span className="font-bold">2.</span>{" "}
        <span className="text-colorBrown">
          Vous fournir les outils nécessaires pour développer vos compétences
        </span>{" "}
        personnelles et professionnelles. Mon objectif est de vous aider à
        renforcer votre confiance en vous, à améliorer vos compétences en
        communication et à atteindre vos objectifs personnels et professionnels.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-8">
        <span className="font-bold">3.</span>{" "}
        <span className="text-colorBrown">
          Vous guider vers une meilleure compréhension de vous-même et de vos
          aspirations.
        </span>{" "}
        Ensemble, nous travaillerons pour clarifier vos objectifs de vie,
        découvrir vos passions et élaborer un plan pour atteindre votre bien
        être.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-8">
        <span className="font-bold">4.</span>{" "}
        <span className="text-colorBrown">
          Offrir un accompagnement bienveillant et personnalisé.
        </span>{" "}
        Chaque personnes est unique, et mon approche est adaptée à vos besoins
        spécifiques, avec une écoute attentive et une empathie sincère.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-16">
        <span className="font-bold">5.</span>{" "}
        <span className="text-colorBrown">
          Promouvoir votre bien-être mental et émotionnel.
        </span>{" "}
        En tant que psychopraticienne, je suis dédiée à vous aider à trouver un
        équilibre intérieur, à gérer le stress et à cultiver une paix intérieure
        durable.
      </p>
      <div className="lg:flex lg:flex-col lg:items-center">
        <h3 className=" pl-4 pr-4 pt-4 ml-4 mr-4 text-xl font-bold text-center  border-t-2 border-t-stone-950 lg:pb-6 lg:pt-16 lg:w-2/6">
          <span className="text-customColor underline">Pourquoi Moi ?</span>
        </h3>
      </div>
      <p className=" pl-4 pr-4 pt-2 font-bold text-center lg:pr-[30%] lg:pl-[30%] lg:pb-6">
        En choisissant de travailler avec moi, vous bénéficiez de :
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-8">
        •<span className="text-colorBrown"> Une expérience</span> pratique en
        insertion professionnelle et en développement personnel.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-8">
        •<span className="text-colorBrown"> Une approche</span> personnalisée et
        bienveillante.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center lg:pr-[30%] lg:pl-[30%] lg:pb-8">
        •<span className="text-colorBrown"> Un engagement</span> à vous voir
        réussir et vous épanouir.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-6 font-bold text-center lg:pr-[30%] lg:pl-[30%] lg:pb-16">
        Je suis passionnée par l'idée d'aider les gens à réaliser leur plein
        potentiel et à vivre une vie plus satisfaisante et équilibrée. Mon
        parcours et ma formation me permettent d'offrir un accompagnement de
        qualité, adapté à vos besoins et aspirations.
      </p>
    </div>
  );
}
