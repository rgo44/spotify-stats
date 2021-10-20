import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import './Genres.css'
import Genre from './Genre/Genre'

const Genres = ({ genres }) => {
    const [sortedGenres, setSortedGenres] = useState([]);
    const [tenGenres, setTenGenres] = useState([]);

    useEffect(() => {
        let items = Object.keys(genres).map((genre) => {
            return [genre, genres[genre]];
        });
        
        items.sort(function(first, second) {
            return second[1] - first[1];
        });

        setSortedGenres(items);

    }, [genres])

    useEffect(() => {
        setTenGenres(sortedGenres.slice(0,10))

    }, [sortedGenres])


    return (
        <div className="genresContainer">
            {tenGenres.map((genre, i) => (
                <Genre key={uuidv4()} genre={genre} index={i}/>
            ))}
        </div>
    )
}


export default Genres
