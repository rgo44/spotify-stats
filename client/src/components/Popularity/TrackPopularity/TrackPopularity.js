import React from 'react'

const TrackPopularity = ({ index, name, artist }) => {
    return (
        <div>
            <span className="subheadingGray">{index}</span>
            <span className="subheadingWhite">{name}</span>
            <span className="subheadingGray">{artist}</span>
        </div>
    )
}

export default TrackPopularity
