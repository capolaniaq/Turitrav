import React from "react";
import hospedajeBoyacaJson from '../jsonfiles/alojamientos/boyaca.json'
import MainFooter from "../views/footertt";
import MainHeader from "../views/headertt";
import ModuleAlojamiento from "../views/modulealojamiento";


function FuncHospedajesBoyaca() {

    let hospedajes = hospedajeBoyacaJson


    return (
        <div>

            <MainHeader />

            <div className="row">
                <div className="col-6">

                    {hospedajes.map(hospe =>
                        <ModuleAlojamiento place={hospe.lugar}
                            nombre={hospe.nombre}
                            lugar={hospe.lugar}
                            ciudad={hospe.ciudad}
                            precio={hospe.precio}
                            img={hospe.img}
                            contacto={hospe.contacto}
                        />
                    )}
                </div>
                <div className="col-4">
                    
                </div>

            </div>

            <MainFooter />
        </div>

    )

}

export default FuncHospedajesBoyaca;