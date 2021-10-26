import MainFooter from "./footertt";

function FuncAlojador() {

    return (
        <div>
            <header className="header2" >
                <nav className="navbar2">
                        <a href="/">
                            <img className="logohospedador" src="/imgs/icons/logoblue.png" alt="" width="60" />
                        </a>
                </nav>
            </header>
            <div className="row hospedador">
                <div className="col-6">
                    <div>
                        <img src="/imgs/hospedado1.png" width="100%" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="textohospedador">
                        <p><b>Brinda tus servicios de hospadaje y/o turismo cuando quieras</b></p>
                    </div>
                    <div className="textohospedador">
                        <h4><b><input className="clickhospedador" type="button" value="Vamos !" /></b></h4>
                    </div>
                </div>
            </div>


            <MainFooter />
        </div>
    )
}

export default FuncAlojador;