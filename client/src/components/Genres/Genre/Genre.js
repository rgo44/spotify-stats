import React from 'react'

import './Genre.css'
import Bar from '../../Bar/Bar'

const Genre = ({ genre, index }) => {
    return (
        <div className="genreContainer">
            <span className="headingWhite">{genre[0]}</span>
            <div className="barInfo">
                <Bar barName="total gd" width={`${genre[1]}vw`}/>
                <span className="subheadingGray">{genre[1]}</span>
            </div>

        </div>
    )
}

export default Genre
