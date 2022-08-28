import React from "react";


export function OutputPalabras({ arr }){

    return <ul id="containerLi">{arr.map(( palabras, index )=> <li key={palabras + index}>{ palabras }</li>)}</ul>
}