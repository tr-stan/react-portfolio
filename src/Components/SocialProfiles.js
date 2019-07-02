import React, { Component } from 'react'
import SOCIAL_PROFILES from '../data/socialProfiles'

const SocialProfile = props => {
    const { id, link, image, text } = props.socialProfile
    return (
    	<a href={link} style={{display: 'block'}}><img data-tip={text} className='nav-img' src={image} alt={`social profile ${id}`}/></a>
    )
}

const SocialProfiles = props => {
    return (
        <div>
			{SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
				return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
			})}
		</div>
    )
}
export default SocialProfiles