import React from 'react'

import './Track.css'

const Track = ({ track, index }) => {

    return (
        (index >= 0 && index < 3) ?
        <div className="topThree">
            <div className="albumImage">
                <img alt={track.album.name} src={track.album.images[2].url}></img>
            </div>
            <div className="trackInfo">
                <div>
                    <span className="headingGray">{index+1}</span> 
                    <span className="headingWhite">{track.name}</span>
                </div>
                <span className="headingGray"> {track.artists[0].name}</span>
            </div>
        </div> 
        : 
        <div className="topFifty">
            <span className="subheadingGray">{index+1}</span> 
            <span className="subheadingWhite">{track.name}</span>
            <span className="subheadingGray"> {track.artists[0].name}</span>
        </div>
    )
}

export default Track

