import React, { Component } from 'react'
import SOCIAL_PROFILES from '../data/socialProfiles'

class SocialProfile extends Component {
    render() {
        const { id, link, image } = this.props.socialProfile
        return (
        	<div  key={id} style={{display: 'inline-block'}}>
        	<a href={link}><img src={image} alt={`social profile ${id}`} style={{width: 35, margin: 35}}/></a>
        	</div>
        )
    }
}

export default class SocialProfiles extends Component {
    render() {
        return (
        	<div>
        	<h2>Connect With Me!</h2>
        	{SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
        		return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
        	})}
        	</div>
        )
    }
}