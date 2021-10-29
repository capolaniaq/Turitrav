import React from "react";
import MainHeader from "../headertt";
import fetchData from "../fetchData";
import ModulePlaces from "../moduleplaces";


function PlaceBoyaca() {

    let lugares = fetchData('http://localhost:8000/place_activities.json', 'Boyaca');


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

export default PlaceBoyaca;