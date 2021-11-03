import MainFooter from "./footertt";

function PageWrapper() {

  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className="logo" src="imgs/icons/icono.png" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Descubre
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/antioquia">Antioquia</a></li>
                    <li><a className="dropdown-item" href="/boyaca">   Boyacá</a></li>
                    <li><a className="dropdown-item" href="/caldas">   Caldas</a></li>
                    <li><a className="dropdown-item" href="/cundinamarca">   Cundinamarca</a></li>
                    <li><a className="dropdown-item" href="/huila">   Huila</a></li>
                    <li><a className="dropdown-item" href="/nortesantander">   Norte de Santander</a></li>
                    <li><a className="dropdown-item" href="/quindio">   Quindio</a></li>
                    <li><a className="dropdown-item" href="/risaralda">   Risaralda</a></li>
                    <li><a className="dropdown-item" href="/santander">   Santander</a></li>
                    <li><a className="dropdown-item" href="/tolima">   Tolima</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/hotels"><img className="iconuser" src="imgs/icons/cabana.png" /> Alojamiento</a></li>
                    <li><a className="dropdown-item" href="/senderismo"><img className="iconuser" src="imgs/icons/adventurer.png" />Senderismo</a></li>
                    <li><a className="dropdown-item" href="/montana"><img className="iconuser" src="imgs/icons/mountain.png" />Montaña</a></li>
                    <li><a className="dropdown-item" href="/flora"><img className="iconuser" src="imgs/icons/leaves.png" />Flora</a></li>
                    <li><a className="dropdown-item" href="/fauna"><img className="iconuser" src="imgs/icons/paw.png" />Fauna</a></li>
                    <li><a className="dropdown-item" href="/culture"><img className="iconuser" src="imgs/icons/culture.png" />Cultura</a></li>
                    <li><a className="dropdown-item" href="/gastronomy"><img className="iconuser" src="imgs/icons/salad.png" />Gastronomía</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/information">Informacion</a>
                </li>

              </ul>
              {/* <div>
                <input className="round" type="search" placeholder="  Buscar" />

              </div> */}
              <form className="d-flex">

                <button className="btn" type="submit"><img className="iconoh" src="imgs/2.png" /></button>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <img className="iconoh" src="imgs/32.png" />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="/formlogin"><img className="iconuser" src="imgs/userinicio.png" />Inicia Sesión</a></li>
                    <li><a className="dropdown-item" href="/formnewuser"><img className="iconuser" src="imgs/usernew.png" />Registrate</a></li>
                    <li><a className="dropdown-item" href="/help"><img className="iconuser" src="imgs/help.png" />Ayuda</a></li>
                    <li><a className="dropdown-item" href="#"></a></li>

                  </ul>
                </li>
                <button className="btn" type="submit"><img className="iconoh" src="imgs/1.png" /></button>
              </form>
            </div>
          </div>
        </nav>

        <div class="textos-header">
          <p className="text-turitrav"><b>T u r i t r a v</b></p>
          <a href="/formnewuser"><h4><b><input className="clickhospedador" type="button" value="Sé un Turitraver!" /></b></h4></a>

        </div>

      </header>

      <div className="titulo">
        <img className="banner0" src="imgs/places/2.png" />

      </div>

      <div>
        <img className="banner0" src="imgs/banner0.png" />
      </div>
      <div className="cont2">
        <div class="container">
          <div class="row category">

            <div class="col-md-3">
              <div className="imagen-port">
                <img class="img-place" src="imgs/fauna/1.png" alt="fauna" />
                <div class="hover-galeria">
                  <a href="/fauna">
                    <img src="/imgs/icons/paw.png" alt="" />
                  </a>
                </div>
              </div>
              <a className="descrip" href="/gastronomia">
                <h3 className="descrip" ><b>Fauna</b></h3>
              </a>
            </div>

            <div class="col-md-3">
              <div className="imagen-port">
                <img class="img-place" src="imgs/flora0.png" alt="flora" />
                <div class="hover-galeria">
                  <a href="/flora">
                    <img src="/imgs/icons/leaves.png" alt="" />
                  </a>
                </div>
              </div>
              <a className="descrip" href="/gastronomia">
                <h3 className="descrip" ><b>Flora</b></h3>
              </a>
            </div>

            <div class="col-md-3">
              <div className="imagen-port">
                <img class="img-place" src="imgs/cultura0.png" alt="cultura" />
                <div class="hover-galeria">
                  <a href="/culture">
                    <img src="/imgs/icons/culture.png" alt="" />
                  </a>
                </div>
              </div>
              <a className="descrip" href="/gastronomia">
                <h3 className="descrip" ><b>Cultura</b></h3>
              </a>
            </div>

            <div class="col-md-3">
              <div className="imagen-port">
                <img class="img-place" src="imgs/gastro0.png" alt="gastronomia" />
                <div class="hover-galeria">
                  <a href="/gastronomia">
                    <img src="/imgs/icons/salad.png" alt="" />
                  </a>
                </div>
              </div>
              <a className="descrip" href="/gastronomia">
                <h3 className="descrip" ><b>Gastronomía</b></h3>
              </a>

            </div>

          </div>
        </div>
      </div>

      <div>
        <a href="alojador"> <img className="banner0" src="imgs/bannerpost.png" /></a>
      </div>

      <div className="cont2">
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <div className="imagen-port">

                <img className="img-place" src="imgs/home/1.png" alt="cocuy" />

                <div class="hover-galeria">
                  <a href="/boyaca">
                    <img src="/imgs/icons/ave2.png" alt="" />
                  </a>
                  <h4><b>Vamos!</b></h4>
                </div>

              </div>
            </div>

            <div className="col-md-4">
              <div className="imagen-port">

                <img className="img-place" src="imgs/home/4.png" alt="cocuy" />

                <div class="hover-galeria">
                  <a href="/huila">
                    <img src="/imgs/icons/ave2.png" alt="" />
                  </a>
                  <h4><b>Vamos!</b></h4>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="imagen-port">

                <img className="img-place" src="imgs/home/3.png" alt="cocuy" />
                <div class="hover-galeria">
                  <a href="/tolima">
                    <img src="/imgs/icons/ave2.png" alt="" />
                  </a>
                  <h4><b>Vamos!</b></h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="row turitravers">
        <div>
        <h1><b>Turitravers</b></h1>
        </div>
        <div className="col-lg-5 row clients">
          <div className="col-lg-4">
            <img className="img-turitraver" src="/imgs/home/6.png" />
          </div>
          <div className="col-lg-7">
            <h5>Turitrav me ha permitido conocer maravillas de la naturaleza en nuestro país que no imagina que podía llegar a tener.</h5>
          </div>
        </div>
        <div className="col-lg-5 row clients">
          <div className="col-lg-4">
            <img className="img-turitraver" src="/imgs/home/5.png" />
          </div>
          <div className="col-lg-7">
            <h5>Poder encontrar hermosos paisajes escondidos ha sido lo mejor gracias a turitrav.</h5>
          </div>
        </div>
      </div>



      <MainFooter />

    </div>


  );
}

export default PageWrapper;