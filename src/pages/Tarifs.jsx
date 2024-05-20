import MAINTENANCE from "/assets/maintenance.gif";

export default function Tarifs() {
  return (
    <div className="bg-stone-100 pt-16">
      <h1 className="text-center text-customColor underline pt-5 pb-4 ml-4 mr-4 text-2xl font-bold pl-1 pr-1 border-b-2 border-b-stone-950">
        Maintenance Tarifs
      </h1>
      <div className="bg-customColor mt-6 mb-6 ml-2 mr-2 rounded-xl">
        <img
          className="pt-4 pb-4 pl-2 pr-2"
          src={MAINTENANCE}
          alt="maintenance"
        />
      </div>
      <p className="text-center pb-6 font-bold">
        Retrouvez-moi sur <br />
        <a
          className="text-colorBrown underline"
          href="https://portfolio-aurelienchetot.netlify.app/"
          target="_blank"
        >
          https://portfolio-aurelienchetot.com
        </a>
      </p>
    </div>
  );
}
