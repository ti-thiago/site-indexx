import React from "react";

import logo from "./asteroth-logo.png";
import tibiaLogo from "./tibia-logo.png";
import lineageLogo from "./lineage-logo.png";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div className="content">
        <div className="logo">
          <p>Bem vindo a</p>
          <img src={logo} alt="" />
        </div>

        <div className="games">
          <div className="lineage">
            <img src={lineageLogo} alt="Lineage2 Logo" />
            <h2>L2 Essence Server</h2>
            <p>Jogue Lineage2 com a nova classe, Death Knight!</p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open("http://lineage.asteroth.com.br", "_blank");
              }}
              className="button button--mimas"
            >
              <span>Play Lineage 2 Essence</span>
            </button>
          </div>

          <div className="tibia">
            <img src={tibiaLogo} alt="Tibia Logo" />
            <h2>Open Tibia Server</h2>
            <p>Conquiste e domine a ilha de Asteroth em Tibia</p>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open("http://tibia.asteroth.com.br", "_blank");
              }}
              className="button button--mimas"
            >
              <span>Play Tibia 12.60</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
