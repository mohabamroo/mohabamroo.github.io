import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.9.0';
import 'assets/scss/styles.scss';
// pages for this product
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import WebDevPage from 'views/WebDevPage/WebDevPage.js';
import ResumePage from 'views/ResumePage/ResumePage.js';
import Components from 'views/Components/Components.js';
import Header from 'components/Header/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Footer from 'components/Footer/Footer';

const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Header
			rightLinks={<HeaderLinks />}
			fixed
			color="transparent"
			changeColorOnScroll={{
				height: 100,
				color: 'dark',
			}}
		/>
		<Switch>
			<Route path="/web-dev" component={WebDevPage} />
			<Route path="/resume" component={ResumePage} />
			<Route path="/landing" component={LandingPage} />
			<Route path="/profile-page" component={ProfilePage} />
			<Route path="/login-page" component={LoginPage} />
			<Route path="/" component={Components} />
		</Switch>
		<Footer />
	</Router>,
	document.getElementById('root')
);
