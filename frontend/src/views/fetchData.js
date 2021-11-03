import React, { useState, useEffect } from "react";


function FetchData(url, department) {

    const [list_places, setPlaces] = useState([]);
    const fetchData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPlaces(data.results);
    };

    useEffect(() => {
        fetchData();
    }, []);

    let list_places_deparment = [];

    for (let i = 0; i < list_places.length; i++) {
        if (list_places[i].department === department) {
            list_places_deparment.push(list_places[i]);
        }
    }

	return (list_places_deparment);
}

export default FetchData;