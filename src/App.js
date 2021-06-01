import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from "./components/elements/Header";
import TopMenu from "./components/elements/TopMenu";

function App() {
    return (
        <Router>
            <Header />
            <TopMenu />
            <div className="App">
                <Route exact path="/" component={Home}/>
            </div>
        </Router>
    );
}

export default App;
