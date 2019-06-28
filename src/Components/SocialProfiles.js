import React, { Component } from 'react'
import SOCIAL_PROFILES from '../data/socialProfiles'
import SOCIAL_PROFILES_LIGHT from '../data/socialProfilesLight'

const SocialProfile = props => {
    const { id, link, image } = props.socialProfile
    return (
    	<a href={link} style={{display: 'block'}}><img className='nav-img' src={image} alt={`social profile ${id}`}/></a>
    )
}

const SocialProfiles = props => {
	const profiles = props.mode ? SOCIAL_PROFILES : SOCIAL_PROFILES_LIGHT
    return (
        <div>
			{profiles.map(SOCIAL_PROFILE => {
				return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
			})}
		</div>
    )
}
export default SocialProfiles