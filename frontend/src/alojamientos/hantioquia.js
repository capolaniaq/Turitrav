import React from "react";
import hospedajeAntioquiaJson from '../jsonfiles/alojamientos/antioquia.json'
import MainFooter from "../views/footertt";
import MainHeader from "../views/headertt";
import ModuleAlojamiento from "../views/modulealojamiento";


function FuncHospedajesAntioquia() {

    let hospedajes = hospedajeAntioquiaJson


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

export default FuncHospedajesAntioquia;