import './App.css';
import Compo from './component';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const home = () => {
  return (
    <div className="teste">
      <input type="text" placeholder="AAA-0000"></input>
      <button onClick={() => { console.log('alooo') }}>Confirmar Entrada</button>
    </div>
  )
}
const end = () => {
  return (
    <div className="teste">
      <input></input>
      <button onClick={() => { console.log('alooo') }}>Pagamento</button>
      <button onClick={() => { console.log('alooo') }}>Saída</button>
      <a>VER HISTÓRICO</a>
    </div>
  )
}
function App() {
  function botao() {
    alert('ok')
  }
  return (



    <div className="main">
      <header className="topo"></header>
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