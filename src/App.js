import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home.js'
import User from './User'
import Head from './layout/Head'

export default function App () {
  return (
    <Router>
      <Head/>
      <Switch>
        <Route path="/user" component={User}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router>
  )
}
