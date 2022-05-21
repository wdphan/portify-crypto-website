import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Notification from './components/Notification'
import Header from './Header.jsx'
import CoinPrices from './CoinPrices'
import Coin from './Coin'
import Home from './Home'

function App() {
  return (
    <Router>
      <Notification/>
      <Header/>
    <div>
        <Switch>
          <Route path="/" exact component={Home}>
         <Home/>
         </Route>
          <Route path="/CoinPrices" exact component={CoinPrices}>
         <CoinPrices/>
         </Route>
          <Route path="/Coin">
         <Coin/>
         </Route>
         </Switch>
      </div>
    </Router>
  )
}

export default App