import React from 'react'

const ArtistPopularity = ({ index, artist }) => {
    return (
        <div>
            <span className="subheadingGray">{index}</span>
            <span className="subheadingWhite">{artist}</span>
        </div>
    )
}

export default ArtistPopularity
