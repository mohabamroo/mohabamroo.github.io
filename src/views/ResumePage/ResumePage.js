/* eslint-disable no-unused-vars */
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/resume.js';
import CardBody from 'components/Card/CardBody';

const useStyles = makeStyles(styles);

export default function ResumePage(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Parallax
				style={{
					margin: 'auto',
					backgroundPositionX: 'right',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
				}}
				backgroundImageFilter="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3) ), "
				image={require('assets/img/resume.jpeg')}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand + ' wrap'}>
								<h1 className={classes.title}>Full Resume.</h1>
							</div>
							<h4 style={{ maxWidth: 400 }}>
								Started learning 2016, worked as a freelancer
								<br />
								joined later as a part-timer backend and frontend,
								<br />
								finally worked full-time as a fullstack developer and gained
								expierence over time to plan, design and implement developing
								different size projects
							</h4>
							<br />
							<Button
								color="danger"
								className="primary-color"
								link
								size="lg"
								href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fas fa-download" />
								Download C.V.
								<br />
								<span>PDF format</span>
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
				<GridContainer
					container
					direction="row"
					justify="center"
					alignItems="center"
					dark
				>
					<GridItem item lg={12} md={12} xs={12}>
						<h3 className="resume__section__title">Education</h3>

						<div className="timeline">
							<CardBody>
								<div className="timeline-item">
									<h4 className="item-title">Nozha Language School, Hegaz</h4>
									<span className="item-period">2000-2014</span>
									<span className="item-small">Tahnwya 3amma</span>
									<p className="item-description">
										Graduated with a 98.9% score (Scientific/Math)
									</p>
								</div>
							</CardBody>

							<CardBody>
								<div className="timeline-item">
									<h4 className="item-title">German University in Cairo</h4>
									<span className="item-period">Octobre 2014 - June 2019</span>
									<span className="item-small">
										Media Engineering and Technology department
									</span>
									<p className="item-description">
										Bachelor Project A+: Recommender System for Competitive
										Problems - Codeforces
										<br />
										Cumulative GPA: A (1.29)
									</p>
								</div>
							</CardBody>
						</div>
					</GridItem>

					<hr />
					<GridItem lg={12} md={12} xs={12}>
						<h3 className="resume__section__title">Work expierence</h3>

						<div className="timeline">
							<CardBody>
								<div className="timeline-item">
									<h4 className="item-title">
										Preventia Technologies <span>Canada</span>
									</h4>
									<span className="item-period">Jan. 2019 - PRESENT</span>
									<span className="item-small">Senior Fullstack Developer</span>
									<p className="item-description">
										Implemented an Angular 7 doctors dashboard Clinical Platform
										aimed for the canadian clinical system.
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
