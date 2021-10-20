import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import Recommendation from './Recommendation/Recommendation'
import './Recommendations.css'

const Recommendations = ({ recommendedTracks }) => {
    return (
        <div className="recommendationsContainer">
            {recommendedTracks.map((track) => (
                <Recommendation key={uuidv4()} track={track} />
            ))}
            
        </div>
    )
}

export default Recommendations
