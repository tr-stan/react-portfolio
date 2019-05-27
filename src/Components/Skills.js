import React, { Component } from 'react';
import SKILLS from '../data/skills';

const Skills = () => {
	const frontend = SKILLS['frontend'].map(SKILL => (<li key={SKILL.id} className={SKILL.category}>{SKILL.name}</li>));
	const backend = SKILLS['backend'].map(SKILL => (<li key={SKILL.id} className={SKILL.category}>{SKILL.name}</li>));
	const misc = SKILLS['misc'].map(SKILL => (<li key={SKILL.id} className={SKILL.category}>{SKILL.name}</li>));

	return (
		<section id="skills">
			<h2>Skills</h2>
			<div className="skillset">
				<h3>[...frontend]</h3>
				<ul>
				{frontend}
				</ul>
			</div>
			<div className="skillset">
				<h3>[...backend]</h3>
				<ul>
				{ backend }
				</ul>
			</div>
			<div className="skillset">
				<h3>[...rest]</h3>
				<ul>
				{ misc }
				</ul>
			</div>
		</section>
	)
}

export default Skills
