import {
  // useCallback,
  useEffect,
  useState,
} from "react";
import { COLS, createEmptyGrid, ROWS } from "../utils/utils";
import whiteGrid from "../assets/images/board-layer-white-small.svg";
import blackGrid from "../assets/images/board-layer-black-small.svg";
import yellow from "../assets/images/counter-yellow-large.svg";
import red from "../assets/images/counter-red-small.svg";
import "../Styles/PvpGames.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const PvpGame = () => {
  const [grid, setGrid] = useState<number[][]>(createEmptyGrid());
  const [playerTurn, setPlayerTurn] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [winner, setWinner] = useState<number>(Number.NaN);

  // const runConnectFourTurn = useCallback(() => {

  //   setGrid((currentGrid) =>{
  //     const newGrid = currentGrid.map((arr) => [...arr])
  //   })
  // });

  const handleClick = (COL: number) => {
    // implémenter logique de placement de jeton
  };

  useEffect(() => {
    //win condition check
    //set winner status to the player if win condition check is true
  }, [grid]);

  return (
    <div>
      <Header />

      <div className="pvp-container">
        <div className="relative-game-grid">
          <img src={whiteGrid} className="small-white-grid" alt="whiteGrid" />
          <img src={blackGrid} className="small-black-grid" alt="blackGrid" />
          <div
            className="game-grid"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${COLS}, 46px)`,
              gridTemplateRows: `repeat(${ROWS}, 46px)`,
              marginLeft: "-7px",
              marginTop: "6px",

              gap: "1px 0.5px",
              // zIndex: 4,

              // margin: "auto",
            }}
          >
            {grid.map((rows, originalRowIndex) =>
              rows.map((_cols, originalColIndex) => (
                <button
                  type="button"
                  key={`${originalRowIndex}-${originalColIndex}`}
                  // className="grid-box"
                >
                  <img src={red} alt="" />
                </button>
              ))
            )}
          </div>
        </div>
        {winner ? (
          <div>a</div>
        ) : (
          <div className="player-turn-container">
            <p>PLAYER {playerTurn}'S TURN</p>
            <h2>14s</h2>
          </div>
        )}
      </div>
    </div>
  );
};
export default PvpGame;
