import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import Bar from '../Bar/Bar'
import './Decade.css'

const Decade = ({ releaseDates }) => {

    const [decades, setDecades] = useState( {"1900": 0, "1910": 0, "1920": 0, "1930": 0, "1940": 0, "1950": 0, "1960": 0, "1970": 0, "1980": 0, "1990": 0, "2000": 0, "2010": 0, "2020": 0, } );
    const [topDecades, setTopDecades] = useState([]);


    useEffect(() => {
        if (releaseDates.length===0)
            return

        setDecades({ "1900": 0, "1910": 0, "1920": 0, "1930": 0, "1940": 0, "1950": 0, "1960": 0, "1970": 0, "1980": 0, "1990": 0, "2000": 0, "2010": 0, "2020": 0, } );
        releaseDates.forEach((track) => {
            let year = parseInt(track.releaseDate);
            if (year >= 2020) {
                setDecades((prevState) => ({...prevState, "2020": prevState["2020"]+1}))
            }
            else if (year < 2020 && year >= 2010) {
                setDecades((prevState) => ({...prevState, "2010": prevState["2010"]+1}))
            }
            else if (year < 2010 && year >= 2000) {
                setDecades((prevState) => ({...prevState, "2000": prevState["2000"]+1}))
            }
            else if (year < 2000 && year >= 1990) {
                setDecades((prevState) => ({...prevState, "1990": prevState["1990"]+1}))
            }
            else if (year < 1990 && year >= 1980) {
                setDecades((prevState) => ({...prevState, "1980": prevState["1980"]+1}))
            }
            else if (year < 1980 && year >= 1970) {
                setDecades((prevState) => ({...prevState, "1970": prevState["1970"]+1}))
            }
            else if (year < 1970 && year >= 1960) {
                setDecades((prevState) => ({...prevState, "1960": prevState["1960"]+1}))
            }
            else if (year < 1960 && year >= 1950) {
                setDecades((prevState) => ({...prevState, "1950": prevState["1950"]+1}))
            }
            else if (year < 1950 && year >= 1940) {
                setDecades((prevState) => ({...prevState, "1940": prevState["1940"]+1}))
            }
            else if (year < 1940 && year >= 1930) {
                setDecades((prevState) => ({...prevState, "1930": prevState["1930"]+1}))
            }
            else if (year < 1930 && year >= 1920) {
                setDecades((prevState) => ({...prevState, "1920": prevState["1920"]+1}))
            }
            else if (year < 1920 && year >= 1910) {
                setDecades((prevState) => ({...prevState, "1910": prevState["1910"]+1}))
            }
            else {
                setDecades((prevState) => ({...prevState, "1900": prevState["1900"]+1}))
            }
        })
        
    }, [releaseDates])

    useEffect(() => {
        // Create items array
        let decadeArr = Object.keys(decades).map(function(key) {
        return [key, decades[key]];
        });

        // Sort the array based on the second element
        decadeArr.sort(function(a, b) {
        return b[1] - a[1];
        });

        setTopDecades(decadeArr.slice(0,3).filter((item) => item[1]!==0))

    }, [decades])

    return (
            <div className="decades">
                {topDecades.map((decade) => (
                    <div key={uuidv4()} className="decade">
                        <div className="headingWhite">{decade[0]}</div>
                        <Bar barName="total gd" width={`${decade[1]}vw`}/>
                        <div className="headingGray">{decade[1]}</div>
                    </div>
                ))}
            </div>
    )
}

export default Decade
