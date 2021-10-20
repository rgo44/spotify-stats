import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Track from './Track/Track'

import './TopTracks.css'

const TopTracks = ({ tracks }) => {

    return (
        <div className="tracks">
            <div className="topThrees">
                {tracks.slice(0,3).map((track, i) => (
                    <Track key={uuidv4()} track={track} index={i} />
                ))}
            </div>
            <div className="topContainer">
                <div className="top">
                    {tracks.slice(3,tracks.length).map((track, i) => (
                        <Track key={uuidv4()} track={track} index={i+3} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default TopTracks

