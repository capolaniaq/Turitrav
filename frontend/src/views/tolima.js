import React from "react";
import MainHeader from "./headertt";
import ModulePlaces from "./moduleplaces";
import FetchData from "./fetchData";


function Tolima() {

    let list_places = FetchData('http://localhost:8000/place_activities.json','Tolima');


    return (
        <div>
            <MainHeader />
            {list_places.map(places =>
                <ModulePlaces place={places.place_name}
                    calificacion={places.calification}
                    dpto={places.department}
                    mun={places.city}
                    categoria={places.category}
                    img={places.img}
                    img2={places.img2}
                    descrip={places.description} />
            )}
        </div>
    )

}

export default Tolima;