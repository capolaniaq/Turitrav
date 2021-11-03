import './App.css';
import FormLogIn from './views/formlogin';
import PageWrapper from './views/home';
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import FormNewUser from './views/formnewuser';
import FuncFauna from './views/fauna';
import FuncFlora from './views/flora';
import FuncGastro from './views/gastro';
import FuncCultura from './views/cultura';
import NotFound from './views/notfound';
import Tolima from './views/tolima';
import Prueba from './views/prueba';
import FuncAlojador from './views/alojador';
import FuncHospedajesCaldas from './alojamientos/hcaldas';
import FuncHospedajesQuindio from './alojamientos/hquindio';
import FuncHospedajesRisaralda from './alojamientos/hrisaralda';
import FuncHospedajesSantander from './alojamientos/hsantander';
import FuncHospedajesTolima from './alojamientos/htolima';
import FuncHospedajesAntioquia from './alojamientos/hantioquia';
import FuncHospedajesCundinamarca from './alojamientos/hcundinamarca';
import FuncHospedajesBoyaca from './alojamientos/hboyaca';
import FuncHospedajesHuila from './alojamientos/hhuila';
import FuncHospedajesNorteS from './alojamientos/hnortesantander';
import FuncHospedajes from './alojamientos/alojamiento';
import PlaceSantander from './views/places/santander';
import PlaceAntioquia from './views/places/antioquia';
import PlaceBoyaca from './views/places/boyaca';
import PlaceCundinamarca from './views/places/cundinamarca';
import PlaceCaldas from './views/places/caldas';
import PlaceHuila from './views/places/huila';
import PlaceNorteSantander from './views/places/nortesantander';
import PlaceRisaralda from './views/places/risaralda';
import PlaceQuindio from './views/places/quindio';


function App() {
  return (
 
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={PageWrapper} />
      <Route exact path="/prueba" component={Prueba} />
      <Route excat path="/flora" component={FuncFlora} />
      <Route excat path="/fauna" component={FuncFauna} />
      <Route excat path="/culture" component={FuncCultura} />
      <Route excat path="/gastronomia" component={FuncGastro} />
      <Route excat path="/formlogin" component={FormLogIn} />
      <Route excat path="/formnewuser" component={FormNewUser} />

      <Route exact path="/alojador" component={FuncAlojador}/>
      <Route exact path="/hotels" component={FuncHospedajes}/>

      <Route exact path="/hantioquia" component={FuncHospedajesAntioquia}/>
      <Route exact path="/hboyaca" component={FuncHospedajesBoyaca}/>
      <Route exact path="/hcaldas" component={FuncHospedajesCaldas}/>
      <Route exact path="/hcundinamarca" component={FuncHospedajesCundinamarca}/>
      <Route exact path="/hhuila" component={FuncHospedajesHuila}/>
      <Route exact path="/hnortesantander" component={FuncHospedajesNorteS}/>
      <Route exact path="/hquindio" component={FuncHospedajesQuindio}/>
      <Route exact path="/hrisaralda" component={FuncHospedajesRisaralda}/>
      <Route exact path="/hsantander" component={FuncHospedajesSantander}/>
      <Route exact path="/htolima" component={FuncHospedajesTolima}/>
      
      <Route exact path="/antioquia" component={PlaceAntioquia}/>
      <Route exact path="/boyaca" component={PlaceBoyaca}/>
      <Route exact path="/cundinamarca" component={PlaceCundinamarca}/>
      <Route exact path="/caldas" component={PlaceCaldas}/>
      <Route exact path="/huila" component={PlaceHuila}/>
      <Route exact path="/nortesantander" component={PlaceNorteSantander}/>
      <Route exact path="/risaralda" component={PlaceRisaralda}/>
      <Route exact path="/quindio" component={PlaceQuindio}/>
      <Route exact path="/santander" component={PlaceSantander}/>
      <Route exact path="/tolima" component={Tolima}/>      
      
      <Route component={NotFound}/>

      </Switch>
    </BrowserRouter>


            

    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
