import { useState } from "react";
import Gameboard from "./components/Gameboard";
import Playerinfo from "./components/Playerinfo";


function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Playerinfo initialName="deepanshu" playersymbol="X" isActive={activePlayer === 'X'} />
          <Playerinfo initialName="priyanshu" playersymbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <Gameboard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} setWinner={setWinner} />

        {winner && (
          <div className="winner-announcement">
            <p>Congratulations {winner} is the winner!</p>
          </div>
        )}
      </div>
      LOG
    </main>
  );
}

export default App;
