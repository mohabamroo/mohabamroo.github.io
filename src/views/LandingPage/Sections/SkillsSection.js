/* eslint-disable react/prop-types */
import React from 'react';
// plugin that creates slider
import Slider from 'nouislider';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import Muted from 'components/Typography/Muted.js';
// you would import our component like this
import GridItem from 'components/Grid/GridItem.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';

const useStyles = makeStyles(styles);

export default function SkillsSection() {
	const classes = useStyles();

	React.useEffect(() => {
		return function cleanup() {};
	});

	const skillsList = [
		{
			title: 'Web Development',
			icon: 'code',
			description:
				'Experinced Fullstack development using different tech stacks toimplement responsive websites from portfolio sites to ERP system',
			divClass: 'rainbow-2',
			link: 'web-dev',
		},
		{
			title: 'Mobile Development',
			icon: 'developer_mode',
			description:
				'Developing mobile applications using React Native, from festivals to uber-like apps',
		},
	];

	const renderSkill = ({
		title,
		icon,
		description,
		divClass = '',
		link = null,
	}) => {
		return (
			<div className={'skill-card rainbow ' + divClass}>
				<i className="material-icons">{icon}</i>

				<h4>{link ? <a href={link}>{title}</a> : title}</h4>
				<Muted>
					<p>{description}</p>
				</Muted>
			</div>
		);
	};

	return (
		<div className={classes.sections}>
			<div className={classes.container}>
				<div className={classes.title}>
					<h2>Skills</h2>
				</div>

				<GridItem className="skills-grid">
					{skillsList.map(skillObj => renderSkill(skillObj))}
				</GridItem>
			</div>
		</div>
	);
}
