import { useState } from "react";

import GameRules from "../components/GameRules";
import MainMenu from "../components/MainMenu";

function App() {
  const [displayRules, setDisplayRules] = useState<boolean>(false);

  console.log(displayRules);
  return (
    <div className="bg">
      <MainMenu setDisplayRules={setDisplayRules} displayRules={displayRules} />
      {displayRules && (
        <GameRules
          setDisplayRules={setDisplayRules}
          displayRules={displayRules}
        />
      )}
    </div>
  );
}

export default App;
