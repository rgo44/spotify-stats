import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TrackPopularity from './TrackPopularity/TrackPopularity'
import ArtistPopularity from './ArtistPopularity/ArtistPopularity'
import PopularityCategory from './PopularityCategory/PopularityCategory'
import Bar from '../Bar/Bar'

import './Popularity.css'

const Popularity = ({ tracksPopularity, artistsPopularity}) => {
    const [avgPopularity, setAvgPopularity] = useState(0);
    const [trackPopularity, setTrackPopularity] = useState({mainstream: 0, trendy: 0, average: 0, obscure: 0});
    const [artistPopularity, setArtistPopularity] = useState({mainstream: 0, trendy: 0, average: 0, obscure: 0});


    useEffect(() => {
        tracksPopularity.sort((a,b) => {
            return b.popularity - a.popularity
        })

    }, [tracksPopularity])

    useEffect(() => {
        artistsPopularity.sort((a,b) => {
            return b.popularity - a.popularity
        })
        
    }, [artistsPopularity])

    useEffect(() => {
        if (tracksPopularity.length===0)
            return
        if (artistsPopularity.length===0)
            return
            
        let tracksTotal = tracksPopularity.map(track => track.popularity).reduce((prev, next) => prev + next);
        let artistsTotal = artistsPopularity.map(artist => artist.popularity).reduce((prev, next) => prev + next);
        setAvgPopularity( (tracksTotal + artistsTotal) / (tracksPopularity.length + artistsPopularity.length) )

    }, [tracksPopularity, artistsPopularity])

    useEffect(() => {
        if (tracksPopularity.length!==50)
            return
        
        setTrackPopularity({mainstream: 0, trendy: 0, average: 0, obscure: 0});
        for (let i=0; i < tracksPopularity.length ; i++) {
            if (tracksPopularity[i].popularity >= 80) 
                setTrackPopularity((prevState) => ({...prevState, mainstream: prevState.mainstream+=1}))
            else if (tracksPopularity[i].popularity < 80 && tracksPopularity[i].popularity >= 60)
                setTrackPopularity((prevState) => ({...prevState, trendy: prevState.trendy+=1}))
            else if (tracksPopularity[i].popularity < 60 && tracksPopularity[i].popularity >= 50)
                setTrackPopularity((prevState) => ({...prevState, average: prevState.average+=1}))            
            else
                setTrackPopularity((prevState) => ({...prevState, obscure: prevState.obscure+=1})) 
            
        }

    }, [tracksPopularity])

    useEffect(() => {
        if (artistsPopularity.length!==50)
            return
        
        setArtistPopularity({mainstream: 0, trendy: 0, average: 0, obscure: 0});
        for (let i=0; i < artistsPopularity.length ; i++) {
            if (artistsPopularity[i].popularity >= 80) 
                setArtistPopularity((prevState) => ({...prevState, mainstream: prevState.mainstream+=1}))
            else if (artistsPopularity[i].popularity < 80 && artistsPopularity[i].popularity >= 60)
                setArtistPopularity((prevState) => ({...prevState, trendy: prevState.trendy+=1}))
            else if (artistsPopularity[i].popularity < 60 && artistsPopularity[i].popularity >= 50)
                setArtistPopularity((prevState) => ({...prevState, average: prevState.average+=1}))            
            else
                setArtistPopularity((prevState) => ({...prevState, obscure: prevState.obscure+=1})) 
            
        }

    }, [artistsPopularity])

    return (
        <div className="popularityContainer">
            <div className="popularityAvgContainer">
                <span className="headingWhite">How basic is my taste?</span>
                <div className="popularityAvg">
                    <Bar barName="highlight pop" width={`${(avgPopularity/2)+((avgPopularity/2)/2)}vw`}/>
                    <Bar barName="total pop" width={"75vw"}/>
                </div>
            </div>

            <div className="popularityCategories">
                <div className="popularityCategory">
                    <span className="headingWhite">Tracks Popularity</span>
                    <PopularityCategory mainstream={trackPopularity.mainstream} trendy={trackPopularity.trendy} average={trackPopularity.average} obscure={trackPopularity.obscure}/>
                    <div className="popularTracker">
                        <div className="popularity">
                            <span className="headingWhite">Most Popular Tracks</span>
                            <div>
                                {tracksPopularity.slice(0,5).map((track, i) => (
                                    <TrackPopularity key={uuidv4()} index={i+1} name={track.name} artist={track.artist} popularity={track.popularity}/>
                                ))}
                            </div>
                        </div>

                        <div className="popularity">
                            <span className="headingWhite">Least Popular Tracks</span>
                            <div>
                                {tracksPopularity.slice(-5).sort((a,b) =>a.popularity-b.popularity).map((track, i) => (
                                    <TrackPopularity key={uuidv4()} index={i+1} name={track.name} artist={track.artist} popularity={track.popularity}/>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                <div className="popularityCategory">
                    <span className="headingWhite">Artists Popularity </span>
                    <PopularityCategory mainstream={artistPopularity.mainstream} trendy={artistPopularity.trendy} average={artistPopularity.average} obscure={artistPopularity.obscure}/>
                    <div className="popularTracker">
                        <div className="popularity">
                            <span className="headingWhite">Most Popular Artists</span>
                            <div>
                                {artistsPopularity.slice(0,5).map((artist, i) => (
                                    <ArtistPopularity key={uuidv4()} index={i+1} artist={artist.name} popularity={artist.popularity}/>
                                ))}
                            </div>
                            
                        </div>

                        <div className="popularity">
                            <span className="headingWhite">Least Popular Artists</span>
                            <div>
                                {artistsPopularity.slice(-5).sort((a,b) =>a.popularity-b.popularity).map((artist, i) => (
                                    <ArtistPopularity key={uuidv4()} index={i+1} artist={artist.name} popularity={artist.popularity}/>
                                ))}
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Popularity
