import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"


function App() {
  return (
    <div className="App">
    
     <Navbar />
      <Switch>
      <Route path="/about">
            <About />
      </Route>
      
      <Route path="/">
      <Home />
          </Route>
      </Switch>
    </div>
  )
}

export default App;

