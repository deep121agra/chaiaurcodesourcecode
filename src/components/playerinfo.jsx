import { useState } from "react";

function Playerinfo({ initialName, playersymbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setEditing] = useState(false);

  function Clicked() {
    setEditing(!isEditing);
    console.log('cl');
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayer = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayer = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayer}
        <span className="player-symbol">{playersymbol}</span>
      </span>
      <button onClick={Clicked}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

export default Playerinfo;
