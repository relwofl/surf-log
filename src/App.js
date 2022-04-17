// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Weather from "./components/Weather"
import LogForm from "./components/LogForm"
import Logs from "./components/Logs"


function App() {
  return (
    <div className="App">
      <h1>Surf Log</h1>
        <Router>
        <div>
        <Navbar />
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
            </Switch>
            </div>
         </Router>
        
    </div>


  )
}

export default App;

