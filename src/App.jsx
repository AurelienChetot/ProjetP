import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  // Afficher le popup automatiquement au premier chargement
  useEffect(() => {
    setShowPopup(true);
  }, []);

  // Fonction pour afficher le popup quand l'icône est cliquée
  const handlePopupToggle = () => {
    setShowPopup((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <div>
        {/* Popup affiché quand showPopup est true */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md text-center">
              <h2 className="text-xl font-bold text-customColor mb-2">
                Information
              </h2>
              <p className="text-gray-700">
                Ceci est la première version du site que ma cliente a validé. Je
                le laisse en ligne pour montrer mon évolution dans le web.
              </p>
              <p className="text-gray-900">
                {" "}
                Vous pouvez retrouvez le site à cette adresse :{" "}
                <a
                  className="popup-link"
                  target="blank"
                  href="https://www.patricia-deias.com"
                >
                  https://www.patricia-deias.com
                </a>{" "}
              </p>
              <button
                className="mt-4 px-4 py-2 bg-customColor text-white rounded-lg hover:bg-colorB"
                onClick={() => setShowPopup(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        )}

        <Outlet />
      </div>
      <Footer />

      {/* Icône pour rappeler le popup */}
      <button
        className="fixed bottom-5 right-5 w-12 h-12 p-3 rounded-full bg-customColor text-white shadow-lg hover:bg-custom-hover flex items-center justify-center"
        onClick={handlePopupToggle}
      >
        <i className="fas fa-info-circle text-xl">i</i>
      </button>
    </>
  );
}

export default App;
