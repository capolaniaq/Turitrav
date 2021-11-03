import React from "react";
import FetchData from "../fetchData";
import MainHeader from "../headertt";
import ModulePlaces from "../moduleplaces";


function PlaceQuindio() {

    let list_places = FetchData('http://localhost:8000/place_activities.json','Quindio');


    return (
        <div>
            <MainHeader />
            {list_places.map(places =>
                <ModulePlaces place={places.place_name}
                    calificacion={places.calification}
                    dpto={places.deparmtent}
                    mun={places.city}
                    categoria={places.category}
                    img={places.img}
                    img2={places.img2}
                    descrip={places.description} />
            )}
        </div>
    )

}

export default PlaceQuindio;