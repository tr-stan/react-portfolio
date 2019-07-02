import React, { Component } from "react";
import SKILLS from "../data/skills";

const Skills = () => {
	const frontend = SKILLS["frontend"].map(SKILL => (<li key={SKILL.id} className={SKILL.category}>{SKILL.name}</li>));
	const backend = SKILLS["backend"].map(SKILL => (<li key={SKILL.id} className={SKILL.category}>{SKILL.name}</li>));
	const misc = SKILLS["misc"].map(SKILL => (<li key={SKILL.id} className={SKILL.category}>{SKILL.name}</li>));

	return (
		<section id="skills-section">
			<div className="section-heading">
				<h2>Skills</h2>
			</div>
			<div id="skills">
					<ul className="skillset">
					{frontend}
					</ul>
					<ul className="skillset">
					{ backend }
					</ul>
					<ul className="skillset">
					{ misc }
					</ul>
			</div>
		</section>
	)
}

export default Skills
