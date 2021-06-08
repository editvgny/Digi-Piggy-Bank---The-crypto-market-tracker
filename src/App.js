import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Watchlist from './components/Watchlist';
import Header from "./components/elements/Header";
import TopMenu from "./components/elements/TopMenu";
import CoinDetail from "./components/CoinDetail";

function App() {
    return (
        <Router>
            <Header />
            <TopMenu />
            <div className="App">
                <Route exact path="/" component={Home}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/watchlist" component={Watchlist}/>
                <Route path="/coins/:id" component={CoinDetail}/>
            </div>
        </Router>
    );
}

export default App;
