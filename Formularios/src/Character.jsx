import React, { useState } from "react";
import { OutputCharacter } from "./OutputCharacter";

export function Character({ character, characterAnswers }){
    let [nameCharacter, setNameCharacter] = useState("")
    let [ageCharacter, setAgeCharacter] = useState("");
    let [output, setOutput] = useState("");
    let [localCharacterAnswers, setLocalCharacterAnswers] = useState()

    function submitHandler(event){
        event.preventDefault()
        let isNameCharacterCorrect =  characterAnswers[character].name == document.getElementById("nameCharacter").value ? true: false;
        let isAgeCharacterCorrect = characterAnswers[character].age == document.getElementById("ageCharacter").value ? true: false;
        if(isNameCharacterCorrect && isAgeCharacterCorrect){
            setOutput(<OutputCharacter character={character}/>)
        }
        else if(isNameCharacterCorrect == false|| isAgeCharacterCorrect == false){
            setOutput(<OutputCharacter isFalse={false}/>)
        }
    }

    if(!character){
        return null
    }

    else{
        return <>
            <form onSubmit={submitHandler}>
                <div id="inputsContainer">
                    <h2>{ character }</h2>
                    <label>
                        <span>Cual es el nombre del {character} <br /></span>
                        <input id="nameCharacter" name={nameCharacter}/>
                    </label>
                    <label>
                        <span>Cual es la edad del {character} <br /></span>
                        <input id="ageCharacter" name={ageCharacter}/>
                    </label>
                    <button type="submit">Envíar</button>
                    {/* { output } */}
                    { output }
                </div>
                <img src={`../assets/${character}.jpg`} alt="" />
            </form>
        </>
    }
}