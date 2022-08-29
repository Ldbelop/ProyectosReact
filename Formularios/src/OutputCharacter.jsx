import React from "react";

export function OutputCharacter({ character, isFalse }){
    function reloadPage(){
        setTimeout(() => window.location.reload(), 2000)
    }
    

    if(character){
        return <>
        <h2 id="outputText">Felicitaciones</h2>
        <img src={`../assets/${character}Won.png`}/>
    </>
    }
    else{
        return <>
        <h2 id="outputText">Lo sentimos, tu pc se autodestruirá en 2 segundos</h2>
        <img id="lostGame" src={`../assets/lost.jpg`} onLoad={reloadPage}/>
    </>
    }
}