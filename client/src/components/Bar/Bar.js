import React from 'react'

import './Bar.css'

const Bar = ({ barName, width }) => {
    return (
        <div className={`bar ${barName}`} style={{width: width}}/>
    )
}

export default Bar
