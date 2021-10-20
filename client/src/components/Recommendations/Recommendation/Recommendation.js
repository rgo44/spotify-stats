import React from 'react'

import './Recommendation.css'

const Recommendation = ({ track }) => {
    return (
        <div className="recommendationContainer">
            <img className="image" alt={track.album.name} src={track.album.images[2].url}></img>
            <div className="recommendationInfo">
                <span className="subheadingWhite">{track.name}</span>
                <span className="subheadingGray"> {track.artists[0].name}</span>
            </div>
        </div> 
    )
}

export default Recommendation

