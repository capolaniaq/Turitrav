import MainFooter from "./footertt";

function PageWrapper() {

  return (
    <div>
      <header className="header">
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className="logo" src="imgs/newturitravrm.png" />
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
                    <li><a className="dropdown-item" href="/antioquia"><img className="iconuser" src="imgs/icons/brujula.png" />Antioquia</a></li>
                    <li><a className="dropdown-item" href="/boyaca"><img className="iconuser" src="imgs/icons/brujula.png" />Boyacá</a></li>
                    <li><a className="dropdown-item" href="/caldas"><img className="iconuser" src="imgs/icons/brujula.png" />Caldas</a></li>
                    <li><a className="dropdown-item" href="/cundinamarca"><img className="iconuser" src="imgs/icons/brujula.png" />Cundinamarca</a></li>
                    <li><a className="dropdown-item" href="/huila"><img className="iconuser" src="imgs/icons/brujula.png" />Huila</a></li>
                    <li><a className="dropdown-item" href="/nortesantander"><img className="iconuser" src="imgs/icons/brujula.png" />Norte de Santander</a></li>
                    <li><a className="dropdown-item" href="/quindio"><img className="iconuser" src="imgs/icons/brujula.png" />Quindio</a></li>
                    <li><a className="dropdown-item" href="/risaralda"><img className="iconuser" src="imgs/icons/brujula.png" />Risaralda</a></li>
                    <li><a className="dropdown-item" href="/santander"><img className="iconuser" src="imgs/icons/brujula.png" />Santander</a></li>
                    <li><a className="dropdown-item" href="/tolima"><img className="iconuser" src="imgs/icons/brujula.png" />Tolima</a></li>
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
                    <li><a className="dropdown-item" href="/gastronomy"><img className="iconuser" src="imgs/icons/salad.png" />Gastronomia</a></li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/information">Informacion</a>
                </li>

              </ul>
              <div>
                <input className="round" type="search" placeholder="  Search" />

              </div>
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
      </header>


      <div className="titulo">
        <img src="imgs/places/2.png" />

      </div>

      <div>
        <img className="banner0" src="imgs/banner0.png" />
      </div>
      <div className="cont2">
        <div class="container">
          <div class="row">

            <div class="col-md-3">
              <div >
                <a href="/fauna">
                  <img class="img-place" src="imgs/fauna/1.png" alt="fauna" />
                </a>
                <div class="card-body">
                  <h3 class="descrip"><b>Fauna</b></h3>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div >
                <a href="/flora">
                  <img class="img-place" src="imgs/flora0.png" alt="cocuy" />
                </a>
                <div class="card-body">
                  <h3 class="descrip"><b>Flora</b></h3>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div >
                <a href="/culture">
                  <img class="img-place" src="imgs/cultura0.png" alt="cocuy" />
                </a>
                <div class="card-body">
                  <h3 class="descrip"><b>Cultura</b></h3>
                </div>
              </div>
            </div>

            <div class="col-md-3">
              <div >
                <a href="/gastronomy">
                  <img class="img-place" src="imgs/gastro0.png" alt="cocuy" />
                </a>
                <div class="card-body">
                  <h3 class="descrip"><b>Gastronomia</b> </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a href="alojador"> <img className="banner0" src="imgs/bannerpost.png" /></a>
      </div>

      <div className="cont2">
        <div class="container">
          <div class="row">

            <div class="col-md-4">
              <div >
                <img class="img-place" src="imgs/home/1.png" alt="cocuy" />

              </div>
            </div>

            <div class="col-md-4">
              <div >
                <img class="img-place" src="imgs/home/4.png" alt="cocuy" />

              </div>
            </div>

            <div class="col-md-4">
              <div >
                <a href="/tolima">
                  <img class="img-place" src="imgs/home/3.png" alt="cocuy" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MainFooter />

    </div>


  );
}

export default PageWrapper;