import React from "react";
import placeJson from '../../jsonfiles/antioquia.json';
import MainHeader from "../headertt";
import ModulePlaces from "../moduleplaces";


function PlaceAntioquia() {

    let lugares = placeJson


    return (
        <div>
            <MainHeader />
            {lugares.map(places =>
                <ModulePlaces place={places.lugar}
                    calificacion={places.calificacion}
                    dpto={places.dpto}
                    mun={places.muni}
                    categoria={places.categoria}
                    img={places.img}
                    img2={places.img2}
                    descrip={places.descripcion} />
            )}
        </div>
    )

}

export default PlaceAntioquia;