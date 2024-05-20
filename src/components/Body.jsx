import IMG from "/assets/imghome.gif";
import Logo from "/assets/favicone.png";
import THERAPIE from "/assets/psy.jpeg";
import IMG1 from "/assets/img1.jpeg";
import DECO1 from "/assets/deco1.jpeg";
import DECO2 from "/assets/deco2.jpeg";
import DECO3 from "/assets/deco3.jpeg";
import DECO5 from "/assets/deco5.jpeg";
import BUDDHA2 from "/assets/buddha2.jpeg";
import PRESENTATION from "/assets/presentation.gif";

export default function Home() {
  return (
    <div className="bg-stone-100 flex flex-col items-center pt-16">
      <div className="flex justify-center">
        <img
          className="h-32 w-32 mt-4 rounded-[50%] border-2 border-customColor"
          src={Logo}
          alt="Logo"
        />
      </div>
      <h1 className="text-center pt-5 pb-2 text-xl font-bold pl-1 pr-1 ">
        Bienvenue sur le site de{" "}
        <span className="text-customColor">Patricia Deias</span>,{" "}
        Psychopraticienne
      </h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center lg:flex-row lg:mb-6">
          <img
            src={IMG}
            alt="photo"
            className="h-60 w-64 border-4 border-customColor rounded-2xl lg:ml-[20%] lg:h-96 lg:w-96"
          />
          <p className="pl-6 pr-6 pt-2 pb-5 text-center 2xl:pr-44 2xl:pl-10 2xl:text-2xl 2xl:text-left xl:text-left xl:border-l-2 xl:border-t-stone-950 ">
            Je suis ravie de vous accueillir sur mon site. En tant que
            psychopraticienne, je suis dévouée à accompagner mes clients dans
            leur cheminement personnel vers le bien-être et l'équilibre mental.
            Mon approche bienveillante et personnalisée vise à vous aider à
            surmonter les défis émotionnels et psychologiques que vous pouvez
            rencontrer.
          </p>
        </div>

        <h2 className="pt-5 text-2xl text-customColor text-center pl-1 pr-1 font-bold border-t-2 border-t-stone-950 w-4/5 lg:w-2/6">
          Que pouvez-vous trouver sur mon site ?
        </h2>
        <p className="pl-6 pr-6 pt-2 pb-5 text-center  lg:pr-80 lg:pl-80">
          Je suis ravie de vous accueillir sur mon site. En tant que
          psychopraticienne, je suis dévouée à accompagner mes clients dans leur
          cheminement personnel vers le bien-être et l'équilibre mental. Mon
          approche bienveillante et personnalisée vise à vous aider à surmonter
          les défis émotionnels et psychologiques que vous pouvez rencontrer.
        </p>
        <div className="carousel carousel-center max-w-full p-4 mb-6 ml-2 mr-2 space-x-4 bg-customColor rounded-box ">
          <div className="carousel-item">
            <img src={THERAPIE} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={IMG1} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={BUDDHA2} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={DECO2} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={DECO5} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={DECO3} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={DECO1} className="rounded-box" />
          </div>
        </div>
        <h3 className="pt-5 text-2xl text-customColor  text-center pl-1 pr-1 font-bold border-t-2 border-t-stone-950 w-4/5 lg:w-2/6">
          De quelle façon un psychopraticien peut-il vous aider ?
        </h3>
        <p className="pl-6 pr-6 pt-2 pb-5 text-center  lg:pr-80 lg:pl-80">
          Les psychopraticiens interviennent auprès des personnes qui ont des
          problèmes divers. Voici une liste des difficultés les plus courantes :
          problèmes conjugaux et familiaux, maladies ou blessures, la perte d’un
          être cher, l’anxiété, la solitude, la dépression, les aspects
          psychologiques de maladies médicales, la toxicomanie, les problèmes de
          comportement, troubles de la nourriture et du sommeil, problèmes
          sexuels, difficultés au travail, les problèmes d’éducation des enfants
          et les soins aux personnes âgées.
        </p>
        <h4 className="pt-5 text-2xl text-customColor text-center pl-1 pr-1 font-bold border-t-2 border-t-stone-950 w-4/5 lg:w-2/6">
          Pourquoi devriez-vous consulter un psychopraticien ?
        </h4>
        <p className="pl-6 pr-6 pt-2 pb-5 text-center  lg:pr-80 lg:pl-80">
          Lorsque vous rencontrez des problèmes au cours de votre vie,
          généralement vous les solutionnez par vous-même ou bien vous
          bénéficiez du soutien de votre famille/amis. Mais parfois, vous aurez
          besoin d’un professionnel qui bénéficie d’une formation et une
          expérience probante pour pouvoir vous aider et surtout sur qui vous
          pouvez compter et qui est objectif. Dans ce cas-là, vous pouvez faire
          appel à un psychopraticien agréé.
        </p>
        <div className="bg-customColor mb-16 ml-2 mr-2 rounded-2xl">
          <img
            className="pl-4 pr-4 pt-4 pb-4"
            src={PRESENTATION}
            alt="img perso"
          />
        </div>
      </div>
    </div>
  );
}
