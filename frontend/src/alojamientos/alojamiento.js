import React from 'react'
import lodgment from '../jsonfiles/alojamientos/alojamientos.json'
import MainHeader from '../views/headertt';
import MainFooter from '../views/footertt';
import Lodgment from '../views/hotels';


function FuncHospedajes() {

    let hotels = lodgment
    return (
        <div>

            <MainHeader />

            <div className="cont3">
                <div className="container">
                    <div className="row-hos">

                        {hotels.map(hotel =>
                            <Lodgment img={hotel.img}
                                nombre={hotel.nombre}
                                url={hotel.url}/>
                        )}
                    </div>
                </div>
            </div>

            <MainFooter />
        </div>

    );
}

export default FuncHospedajes;