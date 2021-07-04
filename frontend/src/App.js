import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Components/MainComponents/HomePage';
import About from './Components/MainComponents/About';
import BuyerDashboard from './Components/BuyerComponents/BuyerDashboard';
import SellerDashboard from './Components/SellerComponents/SellerDashboard'
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<HomePage/>
				</Route>
				<Route exact path="/about">
					<About/>
				</Route>
				<Route exact path="/buyerdashboard">
					<BuyerDashboard/>
				</Route>
				<Route exact path="/sellerdashboard">
					<SellerDashboard/>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;