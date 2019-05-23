import React, { Component } from 'react'
import PROJECTS from '../data/projects'

const Project = props => {
	const { title, image, description, link, id } = props.project
		return (
			<div className='project'>
			<h3>{title}</h3>
			<a href={link}>
			<img src={image} alt={`portfolio project ${id}`}/>
			</a>
			<p>{description}</p>
			</div>
		)
}

const Projects = () => (
	<section>
		<h2>Highlighted Projects</h2>
		
		{
			PROJECTS.map(PROJECT => (<Project key={PROJECT.id} project={PROJECT} />))
		}
	</section>
)

export default Projects