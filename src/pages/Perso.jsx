import "../App.scss";

import DIPLOME from "/assets/diplome2.jpeg";

export default function Perso() {
  return (
    <div className="bg-stone-100 pt-16">
      <h1 className="text-center pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-b-2 border-b-stone-950">
        Qui-<span className="text-customColor">Suis</span>-Je ?
      </h1>
      <h2 className="text-center text-2xl font-bold pb-3 pt-3">
        Patricia Deias
      </h2>
      <p className=" pl-4 pr-4 text-xl font-bold text-center">
        Accompagnatrice en Développement{" "}
        <span className="text-customColor underline">Personnel</span> &{" "}
        <span className="text-customColor underline">Professionnel</span>
      </p>
      <p className=" pl-4 pr-4 pt-2 pb-2 text-center">
        Avec une riche expérience en insertion professionnelle, j'ai décidé de
        poursuivre mon chemin pour devenir psychopraticienne. Mon objectif est
        de vous accompagner sur la voie du développement personnel et
        professionnel, en vous offrant un soutien personnalisé et bienveillant.
      </p>
      <h3 className=" pl-4 pr-4 pt-4 ml-4 mr-4 text-xl font-bold text-center  border-t-2 border-t-stone-950">
        Mon <span className="text-customColor underline">Parcours</span>
      </h3>
      <p className=" pl-4 pr-4 pt-2 pb-2 text-center">
        Anciennement spécialisée dans l'insertion professionnelle, j'ai acquis
        une solide expertise en aidant des personnes à retrouver leur place dans
        le monde du travail. Cette expérience m'a permis de comprendre les défis
        uniques que chacun peut rencontrer sur le plan professionnel et
        personnel.
      </p>
      <div className="bg-customColor mb-6 ml-2 mr-2 rounded-2xl">
        <img className="pl-4 pr-4 pt-4 pb-4" src={DIPLOME} alt="img perso" />
      </div>
      <h3 className=" pl-4 pr-4 pt-4 ml-4 mr-4 text-xl font-bold text-center  border-t-2 border-t-stone-950">
        Ma <span className="text-customColor underline">Mission</span>
      </h3>
      <p className=" pl-4 pr-4 pt-2 font-bold text-center">
        Aujourd'hui, en tant qu'accompagnatrice en développement personnel et
        professionnel, je m'engage à :{" "}
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        <span className="font-bold">1.</span>{" "}
        <span className="text-colorBrown">
          Vous aider à identifier et surmonter les obstacles
        </span>{" "}
        qui entravent votre épanouissement. Que ce soit des blocages
        émotionnels, des difficultés relationnelles, ou des défis
        professionnels, je suis là pour vous soutenir.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        <span className="font-bold">2.</span>{" "}
        <span className="text-colorBrown">
          Vous fournir les outils nécessaires pour développer vos compétences
        </span>{" "}
        personnelles et professionnelles. Mon objectif est de vous aider à
        renforcer votre confiance en vous, à améliorer vos compétences en
        communication et à atteindre vos objectifs personnels et professionnels
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        <span className="font-bold">3.</span>{" "}
        <span className="text-colorBrown">
          Vous guider vers une meilleure compréhension de vous-même et de vos
          aspirations.
        </span>{" "}
        Ensemble, nous travaillerons pour clarifier vos objectifs de vie,
        découvrir vos passions et élaborer un plan pour atteindre votre bien
        être.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        <span className="font-bold">4.</span>{" "}
        <span className="text-colorBrown">
          Offrir un accompagnement bienveillant et personnalisé.
        </span>{" "}
        Chaque personnes est unique, et mon approche est adaptée à vos besoins
        spécifiques, avec une écoute attentive et une empathie sincère.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        <span className="font-bold">5.</span>{" "}
        <span className="text-colorBrown">
          Promouvoir votre bien-être mental et émotionnel.
        </span>{" "}
        En tant que psychopraticienne, je suis dédiée à vous aider à trouver un
        équilibre intérieur, à gérer le stress et à cultiver une paix intérieure
        durable.
      </p>
      <h3 className=" pl-4 pr-4 pt-4 ml-4 mr-4 text-xl font-bold text-center  border-t-2 border-t-stone-950">
        <span className="text-customColor underline">Pourquoi Moi ?</span>
      </h3>
      <p className=" pl-4 pr-4 pt-2 font-bold text-center">
        En choisissant de travailler avec moi, vous bénéficiez de :
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        •<span className="text-colorBrown"> Une expérience</span> pratique en
        insertion professionnelle et en développement personnel.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        •<span className="text-colorBrown"> Une approche</span> personnalisée et
        bienveillante.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        •<span className="text-colorBrown"> Un engagement</span> à vous voir
        réussir et vous épanouir.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 font-bold text-center">
        Je suis passionnée par l'idée d'aider les gens à réaliser leur plein
        potentiel et à vivre une vie plus satisfaisante et équilibrée. Mon
        parcours et ma formation me permettent d'offrir un accompagnement de
        qualité, adapté à vos besoins et aspirations.
      </p>
    </div>
  );
}
