import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import User from './User'

export default function App () {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/user">user</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/user" component={User}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  )
}
