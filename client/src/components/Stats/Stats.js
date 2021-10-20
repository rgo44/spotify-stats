import React from 'react'

import AudioFeatures from '../AudioFeatures/AudioFeatures'
import Popularity from '../Popularity/Popularity'
import Decade from '../Decade/Decade'

import './Stats.css'

const Stats = ({ audioFeatures, tracksPopularity, artistsPopularity, releaseDates }) => {
    return (
        <div className="statsContainer">
            <span className="title">Audio Features</span>
            <AudioFeatures audioFeatures={audioFeatures}/>
            <span className="title">Decades</span>
            <Decade releaseDates={releaseDates}/>
            <span className="title">Popularity</span>
            <Popularity tracksPopularity={tracksPopularity} artistsPopularity={artistsPopularity}/> 
        </div>
    )
}

export default Stats
