function Lodgment(props) {
    return (

        <div className="row-lodgment">
            <div className="col lodgment">
                <div className="sonlodgment">
                   <a href={props.url}> <img className="imghospedaje" src={props.img} /></a>
                </div>

                <div className="sonlodgment">

                    <img className="iconHos" src="/imgs/icons/star.png" />
                    <img className="iconHos" src="/imgs/icons/corazon.png" />
                </div>
                <div className="sonlodgment">
                    <h4><b>{props.nombre}</b></h4>
                </div>

                <div className="sonlodgment">
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

export default Lodgment;