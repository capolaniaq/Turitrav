import React from "react";
import culturasJson from "../jsonfiles/culture.json"
import MainFooter from "./footertt";
import MainHeader from "./headertt";
import Category from "./modulecateg";

function FuncCultura() {

    let culturas = culturasJson
    return (
        <div>
            <MainHeader />
            <div>
                <img src="imgs/cultura/cultura.png" />
            </div>

            <div className="cont2">
                <div className="container">
                    <div className="row-animal">

                        {culturas.map(cultura =>
                            <Category nombre={cultura.nombre}
                                img={cultura.img} />
                        )}

                    </div>
                </div>
            </div>
            
            <MainFooter/>

        </div>


    );
}

export default FuncCultura;