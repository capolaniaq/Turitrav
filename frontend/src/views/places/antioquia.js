import React from "react";
import placeJson from '../../jsonfiles/antioquia.json';
import MainHeader from "../headertt";
import ModulePlaces from "../moduleplaces";


function PlaceAntioquia() {
    let data = [];

    async function getData(url='') {
        let response = await fetch(url);
        let data = await response.json();
        addData(data.results);
    }

    function addData(object) {
        for (let i = 0; i < object.length; i++) {
            data.push(object[i]);
        }
    }

    getData('http://localhost:8000/place_activies.json');

    let lugares = data;


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