import "../Styles/GameRules.css";

const GameRules = ({ setDisplayRules, displayRules }) => {
  const handleDisplayRules = () => {
    setDisplayRules(!displayRules);
  };

  return (
    <section className="game-rules ">
      <h1>RULES</h1>
      <h2>OBJECTIVE</h2>
      <p>
        Be the first player to connect 4 of the same colored discs in a row
        (either vertically, horizontally, or diagonally).
      </p>
      <h2>HOW TO PLAY</h2>
      <ol>
        <li>Red goes first in the first game.</li>
        <li>
          Players must alternate turns, and only one disc can be dropped in each
          turn.{" "}
        </li>
        <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
        <li>The starter of the previous game goes second on the next game.</li>
      </ol>

      <div className="button-container">
        <button
          className="game-rules-check-button"
          onClick={handleDisplayRules}
        >
          <svg
            width="70px"
            height="75px"
            viewBox="0 0 70 75"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>icon-check</title>
            <g
              id="Designs"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="icon-check">
                <circle
                  id="Oval-Copy-37"
                  fill="#000000"
                  cx="35"
                  cy="35"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-38"
                  fill="#000000"
                  cx="35"
                  cy="40"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-39"
                  fill="#FD6687"
                  cx="35"
                  cy="35"
                  r="32"
                ></circle>
                <polyline
                  id="Path"
                  stroke="#FFFFFF"
                  stroke-width="3"
                  points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
                ></polyline>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default GameRules;
