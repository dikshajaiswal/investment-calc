import { useState } from "react";

export default function UserInputs({initialVal, symbol, onChangeVal}) {
  const [inputVal, setInputVal] = useState(initialVal);
  // const [isEditing, setIsEditing] = useState(false);

//   function handleEditClick() {
//     setIsEditing((editing) => !editing);
//     if (isEditing)
//       onChangeName(symbol, playerName);
//   }
  function handleChange(event) {
    onChangeVal(symbol, event.target.value);
    setInputVal(event.target.value);
  }

//   let editablePlayerName = <span className="player-name">{playerName}</span>;

//   if (isEditing) {
//     editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
//   }

  return (
    <li>
      <input type="text" required value={inputVal} onChange={handleChange} />
    </li>

  );
}
