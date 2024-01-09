import React, { useState } from "react";
import { colours, font_families } from "../styles";

function ScoreCardModule() {
  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0]); // Scores for 6 players
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [playerNames, setPlayerNames] = useState([
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
    "Player 5",
    "Player 6",
  ]);

  const handleScoreUpdate = (value) => {
    if (selectedPlayer !== null) {
      const updatedScores = [...scores];
      updatedScores[selectedPlayer] += value;
      setScores(updatedScores);
    }
  };

  const handleNameChange = (index, newName) => {
    const updatedNames = [...playerNames];
    updatedNames[index] = newName;
    setPlayerNames(updatedNames);
  };

  const handleReset = () => {
    setScores([0, 0, 0, 0, 0, 0]);
  };
  const handlePlayerClick = (index) => {
    setSelectedPlayer(index === selectedPlayer ? null : index);
  };

  const playerStyles = {
    border: "1px solid #ccc",
    padding: "8px",
    cursor: "pointer",
    margin: "4px",
    borderRadius: "4px",
    height: "80px",
    backgroundColor: colours.button_filling,
  };

  const selectedPlayerStyles = {
    ...playerStyles,
    boxShadow: "0 0 10px 0 " + colours.white,
    backgroundColor: colours.roost_blue,
  };

  const buttonStyles = {
    margin: "4px",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "1px solid #ccc",
    height: "60px",
  };

  return (
    <div
      style={{
        backgroundColor: colours.roost_pink,
        display: "flex",
        flexDirection: "row",
        borderRadius: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            fontFamily: font_families.roost,
            fontSize: 40,
            padding: "8px",
            color: colours.white,
            margin: 0,
          }}
        >
          Scorecard
        </p>

        <button style={buttonStyles} onClick={() => handleScoreUpdate(-5)}>
          -5
        </button>
        <button style={buttonStyles} onClick={() => handleScoreUpdate(-1)}>
          -1
        </button>
        <button style={buttonStyles} onClick={() => handleScoreUpdate(1)}>
          +1
        </button>
        <button style={buttonStyles} onClick={() => handleScoreUpdate(5)}>
          +5
        </button>
        <button style={buttonStyles} onClick={() => handleScoreUpdate(-10)}>
          +10
        </button>
        <button style={buttonStyles} onClick={() => handleReset()}>
          Reset
        </button>
      </div>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          justifyItems: "center",
          paddingLeft: 5,
          width: "100%",
          textAlign: "center",
        }}
      >
        {scores.map((score, index) => (
          <div
            style={
              index === selectedPlayer ? selectedPlayerStyles : playerStyles
            }
            onClick={() => handlePlayerClick(index)}
          >
            <input
            style={{margin: 0, width: '70%', textAlign: 'center'}}
              type="text"
              value={playerNames[index]}
              onChange={(e) => handleNameChange(index, e.target.value)}
            />

            <p style={{ fontSize: 30, margin: 0 }}>{score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScoreCardModule;
