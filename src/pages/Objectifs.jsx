import OBJECTIF from "/assets/objectifs.jpeg";

export default function Objectifs() {
  return (
    <div className="bg-stone-100 pt-16">
      <h1 className="text-center text-customColor underline pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-b-2 border-b-stone-950">
        L'Objectifs de la Thérapie
      </h1>
      <p className="pl-4 pr-4 pt-6 pb-2 text-center text-xl font-bold">
        ● Trouver un <span className="text-customColor">Sens</span> de{" "}
        <span className="text-customColor">Direction</span>
      </p>
      <p className="pl-4 pr-4 pt-4 pb-2 text-center">
        Beaucoup de gens viennent en thérapie parce qu'ils se sentent perdus ou
        déconnectés de leur objectif de vie. Un des principaux objectifs de la
        thérapie est d'aider les clients à identifier leurs valeurs, leurs
        passions et leurs aspirations, afin qu'ils puissent trouver un sens de
        direction et de motivation dans leur vie.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center text-xl font-bold">
        ● Améliorer la <span className="text-customColor">Santé Mentale</span>
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        Beaucoup de gens viennent en thérapie parce qu'ils se sentent perdus ou
        déconnectés de leur objectif de vie. Un des principaux objectifs de la
        thérapie est d'aider les clients à identifier leurs valeurs, leurs
        passions et leurs aspirations, afin qu'ils puissent trouver un sens de
        direction et de motivation dans leur vie.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center text-xl font-bold">
        ● Renforcer <span className="text-customColor">l'Estime de Soi</span>
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        Beaucoup de gens viennent en thérapie parce qu'ils se sentent perdus ou
        déconnectés de leur objectif de vie. Un des principaux objectifs de la
        thérapie est d'aider les clients à identifier leurs valeurs, leurs
        passions et leurs aspirations, afin qu'ils puissent trouver un sens de
        direction et de motivation dans leur vie.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center text-xl font-bold">
        ● Améliorer <span className="text-customColor">les Relations</span>
      </p>
      <p className="pl-4 pr-4 pt-2 pb-2 text-center">
        Les relations interpersonnelles sont au cœur de notre bien-être
        émotionnel. En thérapie, les clients peuvent travailler sur la
        communication, la résolution de conflits, l'établissement de limites
        saines, et d'autres compétences relationnelles pour améliorer leurs
        relations avec les autres.
      </p>
      <p className="pl-4 pr-4 pt-2 pb-6 text-center font-bold">
        Avec l'aide de mes services, vous retrouverez un équilibre tant sur le
        plan mental que émotionnel. Je vous guiderai dans votre parcours pour
        surmonter les obstacles qui entravent votre bien-être, vous fournissant
        les outils et les ressources nécessaires pour rétablir l'harmonie dans
        votre vie.
      </p>
      <div className="bg-customColor mb-6 ml-2 mr-2 rounded-2xl">
        <img className="pl-4 pr-4 pt-4 pb-4" src={OBJECTIF} alt="img perso" />
      </div>
    </div>
  );
}
