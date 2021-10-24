import React from 'react'
import faunaJson from '../jsonfiles/fauna.json'
import Category from './modulecateg';
import MainHeader from './headertt';
import MainFooter from './footertt';


function FuncFauna() {

    let animales = faunaJson
    return (
        <div>

            <MainHeader />
            <div>
                <img src="imgs/fauna/fauna1.png" />
            </div>

            <div className="cont2">
                <div className="container">
                    <div className="row-animal">

                        {animales.map(animal =>
                            <Category img={animal.img}
                                nombre={animal.nombre} />
                        )}
                    </div>
                </div>
            </div>

            <MainFooter />
        </div>

    );
}

export default FuncFauna;


