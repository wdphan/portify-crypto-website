import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Notification from './components/Notification'
import Header from './Header'
import Prices from './CoinPrices'
import Coin from './Coin'

function App() {
  return (
    <Router>
      <Notification/>
      <Header/>
    <div>
        <Switch>
          <Route path="/CoinPrices">
         <Prices/>
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