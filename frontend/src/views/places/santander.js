import React from "react";
import MainHeader from "../headertt";
import ModulePlaces from "../moduleplaces";
import FetchData from "../fetchData";


function PlaceSantander() {

    let list_places = FetchData('http://localhost:8000/place_activities.json', 'Santander');

    return (
        <div>
            <MainHeader />
            {list_places.map(places =>
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

export default PlaceSantander;