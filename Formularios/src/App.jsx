import React, { useState } from "react"
import { Character } from "./Character";
import { CharacterCheckbox } from "./CharacterCheckbox"

function App() {
  let [selectedCharacter, setSelectedCharacter] = useState("");
  let CharacterArray = ['Scout','Soldier','Pyro','Demoman','Heavy','Engineer','Medic','Sniper','Spy'];
  const characterAnswers = {
    Scout: {
      name: "boston",
      age: 23
    },

    Soldier: {
      name: 'John Doe',
      age: 41
    },
    Pyro: {
      name: "Baloonicorn",
      age: "The best"
    },
    Demoman: {
      name: "Tavish Degroot",
      age: 42
    },
    Heavy: {
      name: "sacha",
      age: 51
    },
    Engineer: {
      name: "Dell Conagher",
      age: 43
    },
    Medic: {
      name: "",
      age: 23
    },
    Sniper: {
      name: "mom",
      age: 2
    },
    Spy: {
      name: "french",
      age: 2
    }
  };

  function onChangeHandler(event){
    const target = event.target;
    let value = target.value;
    setSelectedCharacter(value)
    let checkbox = document.querySelector("#selectCharacter");
    checkbox.style.display = "none";
  }

  return <>
    <h1>Quiz Personajes TF2</h1>
    <div id="card">
      <CharacterCheckbox CharacterArray={CharacterArray} onChangeHandler={onChangeHandler}/>
      <Character character={selectedCharacter} characterAnswers={characterAnswers}/>
    </div>
  </>

}

export default App
