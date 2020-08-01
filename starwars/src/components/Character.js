// Write your Character component here
import React from "react";

const Character = ({ character }) => {


  return (

    <div className="character-panel">
      <div className="panel-bar">
        <h3>{character.name}</h3>
        <div className="panel-btn">
          <button>?</button>
        </div>
      </div>
      <div className="character-data">{character}</div>
    </div>


  )
}



export default Character