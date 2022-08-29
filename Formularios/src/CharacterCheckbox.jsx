import React from "react";
import { useState } from "react";

export function CharacterCheckbox({ CharacterArray,onChangeHandler }){
    let [imageState, setImageState] = useState("");
    
    function loadCharacter(event){
        setImageState(event.target.value)
    }


    return <>
                <section id="selectCharacter">
                    <h2>Selecciona el personaje</h2>
                    <div >
                        {CharacterArray.map(character => 
                                            <label key={`${character}ContainerId`}>
                                                    {character}
                                                    <input onMouseOver={loadCharacter} type="radio" name="character" value={character} onClick={onChangeHandler}/>
                                            </label>
                        )}
                    </div>
                    <img src={`../assets/${imageState}TPose.png`} alt="" />
                </section>
            </>
}