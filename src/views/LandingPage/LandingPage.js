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
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/material-kit-react/views/landingPage.js';

// Sections for this page
import SkillsSection from './Sections/SkillsSection';

import _glitchEffect from 'assets/css/glitch.scss';

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
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
				image={require('assets/img/personal_small.jpeg')}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand + ' wrap'}>
								<h1
									data-text="Mohab Amr"
									className={classes.title + ' glitch glitch-header'}
								>
									Mohab
								</h1>
							</div>
							<h3 className={classes.subtitle + ' glitch-subtitle'}>
								A fullstack developer and a part-time
								<span className="special">nihilist</span>.
							</h3>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>

			<div className={classNames(classes.main, classes.mainRaised)}>
				<SkillsSection />
			</div>
		</div>
	);
}
