import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

const Navbar = () => {
  return (

    <Router>
      <header>
        <h1>
          Space Travelers' Hub
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="link">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/missions" className="link">Missions</NavLink>
            </li>
            <li>
              <NavLink to="/myProfile" className="link">My Profile</NavLink>
            </li>
          </ul>
        </nav>
        </header>

      <Switch>
        <Route path="/">
          {/* <Rockets /> */}
        </Route>
        <Route path="/mission">
          {/* <Missions /> */}
        </Route>
        <Route path="/myProfile">
          {/* <MyProfile /> */}
        </Route>
      </Switch>
    </Router>
  )
}

export default Navbar;