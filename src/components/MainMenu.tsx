import { Link } from "react-router-dom";
import "../Styles/MainMenu.css";

import logo from "../assets/images/logo.svg";
import pvp from "../assets/images/player-vs-player.svg";
import Button from "./Button";

type MainMenuProps = {
  setDisplayRules: (displayRules: boolean) => void;
  displayRules: boolean;
};

const MainMenu = ({ setDisplayRules, displayRules }: MainMenuProps) => {
  const handleDisplayRules = () => {
    setDisplayRules(!displayRules);
  };

  return (
    <section className="main-menu">
      <div className="logo-container">
        <img src={logo} alt="game logo" />
      </div>
      <Button className="pvp main-menu-button" onClick={() => null}>
        <Link to="/pvp-game" className="pvp-link">
          <p>PLAY VS PLAYER</p>
          <img src={pvp} alt="" />
        </Link>
      </Button>
      <Button
        className="main-menu-game-rules main-menu-button"
        onClick={handleDisplayRules}
      >
        <p>GAME RULES</p>
      </Button>
    </section>
  );
};

export default MainMenu;
