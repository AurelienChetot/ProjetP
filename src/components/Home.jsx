import IMG from "/assets/imghome.jpg";
import Logo from "/assets/favicone.png";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-slate-50 to-indigo-200 ">
      <div className="flex justify-center">
        <img
          className="h-32 w-32 mt-4 rounded-[50%] border-2 border-indigo-400"
          src={Logo}
          alt="Logo"
        />
      </div>
      <h1 className="text-center pt-5 pb-2 text-xl font-bold pl-1 pr-1">
        Bienvenue sur le site de{" "}
        <span className="text-indigo-600">Patricia Deias</span>,{" "}
        Psychopraticienne
      </h1>
      <div className="flex flex-col items-center">
        <img src={IMG} alt="photo" className="h-60 w-64 rounded-2xl " />
        <p className="pl-6 pr-6 pt-2 pb-5">
          Je suis ravie de vous accueillir sur mon site. En tant que
          psychopraticienne, je suis dévouée à accompagner mes clients dans leur
          cheminement personnel vers le bien-être et l'équilibre mental. Mon
          approche bienveillante et personnalisée vise à vous aider à surmonter
          les défis émotionnels et psychologiques que vous pouvez rencontrer.
        </p>
        <h2 className="pt-5 text-xl text-center pl-1 pr-1 font-bold border-t-2 border-t-stone-950 ">
          Que pouvez-vous trouver sur mon site ?
        </h2>
        <p className="pl-6 pr-6 pt-2 pb-5">
          Je suis ravie de vous accueillir sur mon site. En tant que
          psychopraticienne, je suis dévouée à accompagner mes clients dans leur
          cheminement personnel vers le bien-être et l'équilibre mental. Mon
          approche bienveillante et personnalisée vise à vous aider à surmonter
          les défis émotionnels et psychologiques que vous pouvez rencontrer.
        </p>
      </div>
    </div>
  );
}
