import React, { Component } from 'react'
import PROJECTS from '../data/projects'

class Project extends Component {
	render() {
		const { title, image, description, link, id } = this.props.project
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
}

export default class Projects extends Component {
	render() {
		return (
			<section>
				<h2>Highlighted Projects</h2>
				
				{
					PROJECTS.map(PROJECT => {
						return (
							<Project key={PROJECT.id} project={PROJECT} />
						)
					})
				}
				
			</section>
		)
	}
}