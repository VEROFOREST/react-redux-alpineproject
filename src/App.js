import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


import Jantes from './components/jantes';
import Version from './components/version';
import Sellerie from './components/sellerie';
import Equipements from './components/equipements';
import Accessoires from './components/accessoires';
import Couleurs from './components/couleurs';
import JantesList from './components/jantesList';


const  App = () => {
 
   return (
     
      <Router>
        <div className="App">
          <Switch>
          <Route exact path="/">
            <Version />
          </Route>
          <Route path="/couleurs">
            <Couleurs />
          </Route>
         
          <Route path="/jantes">
            <Jantes />
          </Route>
          <Route path="/sellerie">
            <Sellerie />
          </Route>
          <Route path="/equipements">
            <Equipements />
          </Route>
          <Route path="/accessoires">
            <Accessoires />
          </Route>
         
        </Switch>
         
        </div>
      </Router>
      
      
    );
  
}

export default App;
