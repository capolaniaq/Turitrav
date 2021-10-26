function ModuleAlojamiento(props) {
    return (

        <div className="col fatherhos">
            <div className="sonhos">
                <img className="imghospedaje" src={props.img} />
            </div>
            <div className="sonhos">
                <div>
                    <img className="iconHos" src="/imgs/icons/star.png" />
                    <img className="iconHos" src="/imgs/icons/corazon.png" />
                </div>
                <div>
                    <br />
                    <h3>{props.nombre}</h3>
                </div>
                <div>
                    <p>{props.lugar} - {props.ciudad}</p>
                </div>
                <div>
                    <h5><b>{props.precio}  / noche</b></h5>
                </div>
                <div>
                    <p>
                        <img className="iconHos1" src="/imgs/icons/whatsapp.png" />{props.contacto}
                    </p>
                </div>
                <div>
                    <img className="iconHos" src="/imgs/icons/bed1.png" />
                    <img className="iconHos" src="/imgs/icons/wifi1.png" />
                    <img className="iconHos" src="/imgs/icons/tv.png" />
                    <img className="iconHos" src="/imgs/icons/desayuno1.png" />
                    <img className="iconHos" src="/imgs/icons/cocina1.png" />
                </div>
            </div>
        </div>

    )
}

export default ModuleAlojamiento