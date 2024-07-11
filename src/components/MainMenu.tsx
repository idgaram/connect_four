import "../Styles/MainMenu.css";

import logo from "../assets/images/logo.svg";
import pvp from "../assets/images/player-vs-player.svg";

const MainMenu = ({ setDisplayRules, displayRules }) => {
  const handleDisplayRules = () => {
    setDisplayRules(!displayRules);
  };

  return (
    <section className="main-menu">
      <div className="logo-container">
        <img src={logo} alt="game logo" />
      </div>
      <div className="pvp main-menu-button">
        <p>PLAY VS PLAYER</p>
        <img src={pvp} alt="" />
      </div>
      <button
        className="main-menu-game-rules main-menu-button"
        onClick={handleDisplayRules}
      >
        <p>GAME RULES</p>
      </button>
    </section>
  );
};

export default MainMenu;
