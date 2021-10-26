function Category(props) {

    return (

        <div className="col-animal">
            <div>
                <div>
                    <img className="img-animal" src={props.img} alt="" />
                </div>
                <div className="card-body">
                    <h3 className="descrip-animal"><b>{props.nombre}</b></h3>
                </div>
            </div>
        </div>

    )

}

export default Category;
