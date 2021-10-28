import React from "react";
import tolimaJson from '../jsonfiles/tolima.json'
import MainHeader from "./headertt";
import ModulePlaces from "./moduleplaces";


function Tolima() {

    let list = [];
    let data_results = fetch('http://localhost:8000/place_activities.json').then(response => response.json())

    data_results.then(data => {
        list = data.results;
    })

    let lugares = list;
		return (
        <div>
            <MainHeader/>
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

export default Tolima;