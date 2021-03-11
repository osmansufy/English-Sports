import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import './assets/css/style.css'
import ReactDOM from "react-dom";
import {

  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import LeagueDetails from './Components/Leagues/LeagueDetails';
function App() {
  const route=(
    <Switch>
    <Route path="/league/:id" >
      <LeagueDetails />
      </Route>
        <Route path="/">
        <Home />
        </Route>
      </Switch>
  )
  return (
    <div className="App">
   {/* <Header></Header> */}
   {route}
    </div>
  );
}

export default App;
