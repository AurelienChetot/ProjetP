import IMG from "/assets/imghome.jpg";
import Logo from "/assets/favicone.png";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-slate-50 to-indigo-100 ">
      <div className="flex justify-center">
        <img
          className="h-32 w-32 mt-4 rounded-[50%] border-2 border-indigo-400"
          src={Logo}
          alt="Logo"
        />
      </div>
      <h1 className="text-center pt-5 pb-2 text-xl font-bold pl-1 pr-1 ">
        Bienvenue sur le site de{" "}
        <span className="text-indigo-600">Patricia Deias</span>,{" "}
        Psychopraticienne
      </h1>
      <div className="flex flex-col items-center">
        <img src={IMG} alt="photo" className="h-60 w-64 rounded-2xl " />
        <p className="pl-6 pr-6 pt-2 pb-5 lg:pr-80 lg:pl-80">
          Je suis ravie de vous accueillir sur mon site. En tant que
          psychopraticienne, je suis dévouée à accompagner mes clients dans leur
          cheminement personnel vers le bien-être et l'équilibre mental. Mon
          approche bienveillante et personnalisée vise à vous aider à surmonter
          les défis émotionnels et psychologiques que vous pouvez rencontrer.
        </p>
        <h2 className="pt-5 text-xl text-center pl-1 pr-1 font-bold border-t-2 border-t-blue-950 w-4/5 lg:w-2/6">
          Que pouvez-vous trouver sur mon site ?
        </h2>
        <p className="pl-6 pr-6 pt-2 pb-5 lg:pr-80 lg:pl-80">
          Je suis ravie de vous accueillir sur mon site. En tant que
          psychopraticienne, je suis dévouée à accompagner mes clients dans leur
          cheminement personnel vers le bien-être et l'équilibre mental. Mon
          approche bienveillante et personnalisée vise à vous aider à surmonter
          les défis émotionnels et psychologiques que vous pouvez rencontrer.
        </p>
        <h3 className="pt-5 text-xl text-center pl-1 pr-1 font-bold border-t-2 border-t-blue-950 w-4/5 lg:w-2/6">
          De quelle façon un psychopraticien peut-il vous aider ?
        </h3>
        <p className="pl-6 pr-6 pt-2 pb-5 lg:pr-80 lg:pl-80">
          Les psychopraticiens interviennent auprès des personnes qui ont des
          problèmes divers. Voici une liste des difficultés les plus courantes :
          problèmes conjugaux et familiaux, maladies ou blessures, la perte d’un
          être cher, l’anxiété, la solitude, la dépression, les aspects
          psychologiques de maladies médicales, la toxicomanie, les problèmes de
          comportement, troubles de la nourriture et du sommeil, problèmes
          sexuels, difficultés au travail, les problèmes d’éducation des enfants
          et les soins aux personnes âgées.
        </p>
        <h4 className="pt-5 text-xl text-center pl-1 pr-1 font-bold border-t-2 border-t-blue-950 w-4/5 lg:w-2/6">
          Pourquoi devriez-vous consulter un psychopraticien ?
        </h4>
        <p className="pl-6 pr-6 pt-2 pb-5 lg:pr-80 lg:pl-80">
          Lorsque vous rencontrez des problèmes au cours de votre vie,
          généralement vous les solutionnez par vous-même ou bien vous
          bénéficiez du soutien de votre famille/amis. Mais parfois, vous aurez
          besoin d’un professionnel qui bénéficie d’une formation et une
          expérience probante pour pouvoir vous aider et surtout sur qui vous
          pouvez compter et qui est objectif. Dans ce cas-là, vous pouvez faire
          appel à un psychopraticien agréé.
        </p>
      </div>
    </div>
  );
}
