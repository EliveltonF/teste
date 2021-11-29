import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import BotaoEntrada from './ButtonEntrada';
import BotaoSaida from './ButtonSaida';


function App() {
  const home = () => {
    return (
      <BotaoEntrada></BotaoEntrada>
    )
  }

  const end = () => {
    return (
      <BotaoSaida></BotaoSaida>
    )
  }

  return (
    <div className="main">
      <header className="topo">
      </header>
      <div className="centro">
        <Router>
          <>
            <div className="Page">
              <div className="Link" >
                <Link to="/">home</Link>
              </div>
              <div className="Link" >
                <Link to="/end">end</Link>
              </div>
            </div>
            <Route path="/" exact component={home} />
            <Route path="/end" component={end} />
          </>
        </Router>


      </div>
    </div>

  )
}

export default App;