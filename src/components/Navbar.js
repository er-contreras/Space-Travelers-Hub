import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styles from '../assets/styles/Navbar.module.css';
import MyProfile from './myProfile';
import Missions from './missionsList';
import Rockets from './rockets';

const Navbar = () => (
  <Router>
    <header className={styles.navbarHeader}>
      <div className={styles.logo_cnt}>
        <div className={styles.logo} />
        <h1>
          Space Travelers Hub
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName={styles.link}>Rockets</NavLink>
          </li>
          <li>
            <NavLink to="/missions" activeClassName={styles.link}>Missions</NavLink>
          </li>
          <hr className={styles.line} />
          <li>
            <NavLink to="/myProfile" activeClassName={styles.link}>My Profile</NavLink>
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
