import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Artist from './Artist/Artist'

const TopArtists = ({ artists }) => {
    return (
        <div className="tracks">
            <div className="topThrees">
                {artists.slice(0,3).map((artist, i) => (
                    <Artist key={uuidv4()} artist={artist} index={i} />
                ))}
            </div>
            <div className="topContainer">
                <div className="top">
                    {artists.slice(3,artists.length).map((artist, i) => (
                        <Artist key={uuidv4()} artist={artist} index={i+3} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}


export default TopArtists
