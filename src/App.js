import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home.js'
import User from './pages/User'
import Search from './pages/Search'
import Layout from './layout/Layout'

export default function App () {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/search" component={Search}/>
          <Route path="/user" component={User}/>
          <Route path="/" component={Home}/>
        </Switch>
      </Layout>
    </Router>
  )
}
