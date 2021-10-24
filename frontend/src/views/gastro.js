import React from "react";
import comidasJson from "../jsonfiles/gastro.json"
import MainFooter from "./footertt";
import MainHeader from "./headertt";
import Category from "./modulecateg";

function FuncGastro() {

    let comidas = comidasJson
    return (
        <div>
            <MainHeader />
            <div>
                <img src="imgs/gastro/gastro.png" />
            </div>

            <div className="cont2">
                <div className="container">
                    <div className="row-animal">

                        {comidas.map(comida =>
                            <Category img={comida.img}
                                nombre={comida.nombre} />
                        )}

                    </div>
                </div>
            </div>




            <MainFooter />
        </div>


    );
}

export default FuncGastro;