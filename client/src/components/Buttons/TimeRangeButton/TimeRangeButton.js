import React from 'react'

import './TimeRangeButton.css'

const TimeRangeButton = ({type, handleTimeRange, timeRange}) => {
    return (
        <div className="buttons">
            <button className={timeRange==='short_term' ? 'button selected' : 'button'} onClick={() => handleTimeRange(type, 'short_term')}>4 WEEKS</button>
            <button className={timeRange==='medium_term' ? 'button selected' : 'button'} onClick={() => handleTimeRange(type, 'medium_term')}>6 MONTHS</button>
            <button className={timeRange==='long_term' ? 'button selected' : 'button'} onClick={() => handleTimeRange(type, 'long_term')}>All TIME</button>
        </div>
    )
}

export default TimeRangeButton
