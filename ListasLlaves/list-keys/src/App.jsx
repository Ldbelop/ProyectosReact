import React from "react";
import { useState } from "react";
import { InputPalabras } from "./inputPalabras";
import { OutputPalabras } from "./outputPalabras";


export function App(){
    let [elementsToRender, setElementsToRender] = useState([])
    
    function renderElements(){
        let elementsNodeList = document.querySelectorAll(".inputElement");
        setElementsToRender(elementsToRender = []);
        for(let i = 0; i < elementsNodeList.length; i++){
            elementsToRender.push(elementsNodeList[i].value)
        }
        if(elementsToRender.length < 5){
            setElementsToRender(elementsToRender = [])
            alert("Ingresa todos los campos")
        }
        console.log(elementsToRender)
    }


    return <>
        <h1>Ejemplo de Listas y Keys</h1>
        <div id="inputPalabras--container">
            <h2>Campo 1</h2>
            <InputPalabras placeholder="Campo 1"/>
            <h2>Campo 2</h2>
            <InputPalabras placeholder="Campo 2"/>
            <h2>Campo 3</h2>
            <InputPalabras placeholder="Campo 3"/>
            <h2>Campo 4</h2>
            <InputPalabras placeholder="Campo 4"/>
            <h2>Campo 5</h2>
            <InputPalabras placeholder="Campo 5"/>
            <OutputPalabras arr={elementsToRender}/>
            <button type="submit" onClick={renderElements}>Envíar</button>
        </div>
    </>
}