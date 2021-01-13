import './App.css';
import ResumenInventario from './components/layout/ResumenInventario'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  return (

    <Router basename={'/registro-inventario'}>
      <Switch>
       <Route exact path="/" component={ResumenInventario}/>
      </Switch>
    </Router>
  );
}

export default App;
