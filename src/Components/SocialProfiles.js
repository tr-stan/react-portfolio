import React, { Component } from 'react'
import SOCIAL_PROFILES from '../data/socialProfiles'

const SocialProfile = props => {
    const { id, link, image } = props.socialProfile
    return (
    	<div  key={id} style={{display: 'inline-block'}}>
    	<a href={link}><img src={image} alt={`social profile ${id}`} style={{width: 35, margin: 35}}/></a>
    	</div>
    )
}

const SocialProfiles = () => (
	<div>
	<h2>Connect With Me!</h2>
	{SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
		return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
	})}
	</div>
)
export default SocialProfiles