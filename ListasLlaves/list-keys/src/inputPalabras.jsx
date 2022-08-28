import React from "react";

export function InputPalabras({ onSubmitFunction, placeholder }){
    return <input className="inputElement" type="text" placeholder={ placeholder } onSubmit={onSubmitFunction}/>
}
