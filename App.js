import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home.js';
import SciDePage from './components/SciDePage.js';
import ComSciRes from './components/ComSciRes.js';
import ApexChart from './components/ApexChart.js'
import RankDe from './components/RankDe.js';
import Rank from './components/Rank.js';
import PhySciRes from './components/PhySciRes.js';
import MathSciRes from './components/MathSciRes.js';
import EnDePage from './components/EnDePage.js';
import CivEnRes from './components/CivEnRes.js';
import ChemEnRes from './components/ChemEnRes.js';
import ComEnRes from './components/ComEnRes.js';

class App extends Component {
  render() {
      return (
       <BrowserRouter>
         <Switch>
           <Route exact path="/" component={Home} ></Route>
           <Route path="/SciDePage" component={SciDePage}></Route>
           <Route path="/ComSciRes" component={ComSciRes}></Route>
           <Route path="/ApexChart" component={ApexChart}></Route>
           <Route path="/RankDe" component={RankDe}></Route>
           <Route path="/Rank" component={Rank}></Route>
           <Route path="/PhySciRes" component={PhySciRes}></Route>
           <Route path="/MathSciRes" component={MathSciRes}></Route>
           <Route path="/EnDePage" component={EnDePage}></Route>
           <Route path="/CivEnRes" component={CivEnRes}></Route>
           <Route path="/ChemEnRes" component={ChemEnRes}></Route>
           <Route path="/ComEnRes" component={ComEnRes}></Route>
         </Switch>
       </BrowserRouter>
  );
 }
}

export default App;