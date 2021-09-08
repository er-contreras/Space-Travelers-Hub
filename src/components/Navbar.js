import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import '../assets/styles/Navbar.css';
import MyProfile from './myProfile';
import Missions from './missionsList';
import Rockets from './rockets';

const Navbar = () => (
  <Router>
    <header>
      <div className="logo_cnt">
        <div className="logo" />
        <h1>
          Space Travelers Hub
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="link">Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions" activeClassName="link">Missions</NavLink>
          </li>
          <hr className="line" />
          <li>
            <NavLink to="/myProfile" activeClassName="link">My Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <Switch>
      <Route exact path="/">
        <Rockets />
      </Route>
      <Route path="/missions">
        <Missions />
      </Route>
      <Route path="/myProfile">
        <MyProfile />
      </Route>
    </Switch>
  </Router>
);

export default Navbar;
