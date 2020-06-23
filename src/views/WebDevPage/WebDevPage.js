import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import CardBody from 'components/Card/CardBody';
import image1 from 'assets/img/bg.jpg';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

// TODO: add experience document and sections
export default function WebDevPage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Parallax filter image={require('assets/img/landing-bg.jpg')}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>Fullstack Web Development.</h1>
							<h4>
								Experinced Fullstack development using different tech stacks
								toimplement responsive websites from portfolio sites to ERP
								system
							</h4>
							<br />
							<Button
								color="danger"
								size="lg"
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fas fa-download" />
								Download Full Details Document
							</Button>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div
				className={classNames(
					classes.main,
					classes.mainRaised,
					classes.gridContainer,
					'dark-bg'
				)}
			>
				{/* Tangram CRM Project */}
				<GridContainer
					container
					direction="row"
					justify="center"
					className="projects-container"
					alignItems="center"
					dark
				>
					<GridItem item lg={6} md={6} xs={12}>
						<h3 className="project-title">
							<span className="badge">Tangram CRM</span>
						</h3>

						<div className="timeline">
							<CardBody>
								<div className="timeline-item">
									<h4 className="item-title">Nozha Language School, Hegaz</h4>
									<span className="item-period">2000-2014</span>
									<span className="item-small">Tahnwya 3amma</span>
									<p className="item-description">
										Tangram CRM (Customer Relation Management) is a software
										product which includes multiple modules that offers small
										and middle-size tour operators/companies{' '}
										<li>Market Research</li>
										<li>Product Planning</li>
										<li>Tasks Management</li>
										<li>Feature Implementation</li>
										<li>Deployment</li>
									</p>

									<p>
										Technologies used
										<ul>
											<li>Node.js, Express.js</li>
											<li>Sequelize</li>
											<li>Angular 4</li>
											<li>ngx Materialize</li>
										</ul>
									</p>
								</div>
							</CardBody>
						</div>
					</GridItem>
					<GridItem item lg={6} md={6} xs={12}>
						<img src={image1} alt="First slide" className="slick-image" />
					</GridItem>
				</GridContainer>

				<GridContainer
					container
					direction="row"
					justify="center"
					className="projects-container"
					alignItems="center"
					dark
				>
					<GridItem item lg={6} md={6} xs={12}>
						<img src={image1} alt="First slide" className="slick-image" />
					</GridItem>
					<GridItem item lg={6} md={6} xs={12}>
						<h3 className="project-title">
							<span className="badge">Tangram CRM</span>
						</h3>

						<div className="timeline">
							<CardBody>
								<div className="timeline-item">
									<h4 className="item-title">Nozha Language School, Hegaz</h4>
									<span className="item-period">2000-2014</span>
									<span className="item-small">Tahnwya 3amma</span>
									<p className="item-description">
										Tangram CRM (Customer Relation Management) is a software
										product which includes multiple modules that offers small
										and middle-size tour operators/companies{' '}
										<li>Market Research</li>
										<li>Product Planning</li>
										<li>Tasks Management</li>
										<li>Feature Implementation</li>
										<li>Deployment</li>
									</p>

									<p>
										Technologies used
										<ul>
											<li>Node.js, Express.js</li>
											<li>Sequelize</li>
											<li>Angular 4</li>
											<li>ngx Materialize</li>
										</ul>
									</p>
								</div>
							</CardBody>
						</div>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
