
function ModulePlaces(props) {

    return (
        <div>

            <div className="row">
                <div className="col-3">
                    <div className="sonimgmodule">
                        <img className="imgmodule" src={props.img} />
                    </div>
                </div>
                <div className="col-7">
                    <div className="sonsonmodule">
                        <div>
                            <h5>
                                {props.categoria}  <img src={props.img2} width="35px" />
                            </h5>
                        </div>
                        <div>
                            <h4><b>
                                {props.place}
                            </b></h4>
                        </div>
                        <div>
                            <h5>
                                {props.mun} - {props.dpto}
                            </h5>
                        </div>
                        <div className="descriplace">
                            <p>
                                {props.descrip}
                            </p>
                        </div>
                    </div>
                    <div className="sonsonmodule">
                        <div className="star">
                            <div className="colstar">
                                <img src="/imgs/icons/corazon.png" width="25px" />
                            </div>
                            <div className="colstar">
                                <img src="/imgs/icons/star.png" width="25px" />
                            </div>

                            <div className="colstar">
                                <h5>
                                    <b>{props.calificacion}</b>
                                </h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default ModulePlaces;