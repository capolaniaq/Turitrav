import React from "react";
import FetchData from "../fetchData";
import MainHeader from "../headertt";
import ModulePlaces from "../moduleplaces";


function PlaceHuila() {

    let lugares = FetchData('http://localhost:8000/place_activities.json', 'Huila');


    return (
        <div>
            <MainHeader />
            {lugares.map(places =>
                <ModulePlaces place={places.lugar}
                    calificacion={places.calificacion}
                    dpto={places.department}
                    mun={places.muni}
                    categoria={places.categoria}
                    img={places.img}
                    img2={places.img2}
                    descrip={places.description} />
            )}
        </div>
    )

}

export default PlaceHuila;