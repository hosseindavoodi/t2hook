import react from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import UserDashbord from "./pages/UserDashbord";
import card from "./pages/card";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Router>
      <div>
  
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav1">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link  className="nav-link" to="/pages/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pages/UserDashbord">UserDashbord</Link>
            </li>
            
          </ul>
        </nav>

        <Redirect from="/" to="/pages/Home" />

        <Switch>
          <Route path="/pages/UserDashbord">
            <UserDashbord />
          </Route>
         
          <Route path="/pages/Home">
            <Home />
          </Route>
          <Route path="/card/:id" component={card} />

        </Switch>
        
      </div>
    </Router>
  );
}


