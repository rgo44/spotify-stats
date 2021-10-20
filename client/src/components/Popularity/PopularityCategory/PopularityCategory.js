import React from 'react'

import Bar from '../../Bar/Bar'
import './PopularityCategory.css'

const PopularityCategory = ({ mainstream, trendy, average, obscure}) => {
    return (
        <div className="popularCategoryContainer">
            <span className="subheadingWhite">mainstream</span>
            <div className="barInfo">
                <Bar barName="total" width={`${mainstream+1}vw`}/>
                <span className="subheadingGray">{mainstream}</span>
            </div>
                    
            <span className="subheadingWhite">trendy</span>
            <div className="barInfo">
                <Bar barName="total" width={`${trendy+1}vw`}/>
                <span className="subheadingGray">{trendy}</span>
            </div>

            <span className="subheadingWhite">average</span>
            <div className="barInfo">
                <Bar barName="total" width={`${average+1}vw`}/>
                <span className="subheadingGray">{average}</span>
            </div>

            <span className="subheadingWhite">obscure</span>
            <div className="barInfo">
                <Bar barName="total" width={`${obscure+1}vw`}/>
                <span className="subheadingGray">{obscure}</span>
            </div>
        </div>
    )
}

export default PopularityCategory
