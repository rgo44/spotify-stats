import React from 'react'

import './Artist.css'

const Artist = ({ artist, index }) => {
    return (
        (index >= 0 && index < 3) ?
        <div className="topThree">
            <img className="albumImage" alt={artist.name} src={artist.images[2].url}></img>
            <span className='headingGray'>{index+1}</span> 
            <span className='headingWhite'>{artist.name}</span>
        </div>
        :
        <div className="topFifty">
            <span className='subheadingGray'>{index+1}</span> 
            <span className='subheadingWhite'>{artist.name}</span>
        </div>
    )
}

export default Artist
