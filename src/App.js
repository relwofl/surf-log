// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Weather from "./components/Weather"
import LogForm from "./components/LogForm"
import Logs from "./containers/Logs"


function App() {
  return (
    <div className="App">
    
     <Navbar />
      <Switch>
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
      <Route path="/">
      <Home />
          </Route>
      </Switch>

    </div>
  )
}

export default App;

