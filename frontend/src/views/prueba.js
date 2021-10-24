import React from "react";
import HeaderPrueba from "./headertt";

function Prueba(props){
    return(
        <div>
            <HeaderPrueba />
            {props.children}
        </div>
        
    )
}

export default Prueba