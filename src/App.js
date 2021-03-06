// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Weather from "./components/Weather"
import LogForm from "./components/LogForm"
import Logs from "./components/Logs"
import SingleLog from "./components/SingleLog"


function App() {
  return (
<Router>
    <div className="App">
      <h1>Surf Log</h1>
      <Navbar />
        <div className="body">
            <Switch>
             <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/weather">
                  <Weather />
              </Route>
              <Route path="/LogForm">
                  <LogForm />
              </Route>
              <Route path="/Logs">
                  <Logs />
              </Route>
              <Route path="/Session/:id">
                  <SingleLog />
              </Route>
            </Switch>
            </div>
    </div>
    </Router>

  )
}

export default App;

