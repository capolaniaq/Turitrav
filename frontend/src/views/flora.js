import React from "react";
import Category from "./modulecateg";
import floraJson from "../jsonfiles/flora.json"
import MainHeader from "./headertt";
import MainFooter from "./footertt";

function FuncFlora() {

    let plantas = floraJson

    return (
        <div>
            <MainHeader />
            <div>
                <img src="imgs/flora/flora.png" />
            </div>

            <div className="cont2">
                <div className="container">
                    <div className="row-animal">

                        {plantas.map(planta =>
                            <Category img={planta.img}
                                nombre={planta.nombre} />
                        )}
                    </div>
                </div>
            </div>

            <MainFooter />
        </div>
    );
}

export default FuncFlora;