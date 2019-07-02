import React, { Component } from 'react'
import PROJECTS from '../data/projects'

const Project = props => {
    const { title, image, description, link, id } = props.project
    return (
        <div className='project'>
				<h3>{title}</h3>
				<div>
					<a href={link}>
					<img src={image} alt={`portfolio project ${id}`}/>
					</a>
					<p>{description}</p>
				</div>
		</div>
    )
}

const Projects = props => {
    let name = props.className ? props.className : '';
    return (
        <section id='projects-section' className={name} style={props.style}>
			<div className='section-heading'>
				<h2>Highlighted Projects</h2>
			</div>
			
			{
				PROJECTS.map(PROJECT => (<Project key={PROJECT.id} project={PROJECT} />))
			}
		</section>
    )
}

export default Projects