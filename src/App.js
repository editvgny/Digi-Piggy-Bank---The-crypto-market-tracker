import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Watchlist from './components/Watchlist';
import Header from "./components/elements/Header";
import TopMenu from "./components/elements/TopMenu";

function App() {
    return (
        <Router>
            <Header />
            <TopMenu />
            <div className="App">
                <Route exact path="/" component={Home}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/watchlist" component={Watchlist}/>
            </div>
        </Router>
    );
}

export default App;
