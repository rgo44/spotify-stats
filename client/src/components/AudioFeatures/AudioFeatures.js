import React, { useState, useEffect } from 'react'

import './AudioFeatures.css'
import Bar from '../Bar/Bar'

const AudioFeature = ({ audioFeatures }) => {
    const [acousticness, setAcousticness] = useState(0);
    const [danceability, setDanceability] = useState(0);
    const [energy, setEnergy] = useState(0);
    const [instrumentalness, setInstrumentalness] = useState(0);
    const [liveness, setLiveness] = useState(0);
    const [loudness, setLoudness] = useState(0);
    const [speechiness, setSpeechiness] = useState(0);
    const [tempo, setTempo] = useState(0);
    const [valence, setValence] = useState(0);

    useEffect(() => {
        if (audioFeatures[0]===null) 
            return
        if (audioFeatures.length===0)
            return
        
        let acousticTotal = audioFeatures.map(feature => feature.acousticness).reduce((prev, next) => prev + next);
        setAcousticness(acousticTotal / audioFeatures.length);

        let danceTotal = audioFeatures.map(feature => feature.danceability).reduce((prev, next) => prev + next);
        setDanceability(danceTotal / audioFeatures.length);

        let energyTotal = audioFeatures.map(feature => feature.energy).reduce((prev, next) => prev + next);
        setEnergy(energyTotal / audioFeatures.length);

        let instrumentalTotal = audioFeatures.map(feature => feature.instrumentalness).reduce((prev, next) => prev + next);
        setInstrumentalness(instrumentalTotal / audioFeatures.length);

        let liveTotal = audioFeatures.map(feature => feature.liveness).reduce((prev, next) => prev + next);
        setLiveness(liveTotal / audioFeatures.length);

        let loudTotal = audioFeatures.map(feature => feature.loudness).reduce((prev, next) => prev + next);
        setLoudness(loudTotal / audioFeatures.length);

        let speechTotal = audioFeatures.map(feature => feature.speechiness).reduce((prev, next) => prev + next);
        setSpeechiness(speechTotal / audioFeatures.length);

        let tempoTotal = audioFeatures.map(feature => feature.tempo).reduce((prev, next) => prev + next);
        setTempo(tempoTotal / audioFeatures.length);

        let valenceTotal = audioFeatures.map(feature => feature.valence).reduce((prev, next) => prev + next);
        setValence(valenceTotal / audioFeatures.length);

    }, [audioFeatures])

    return (
        <div className="audioFeaturesContainer">
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">acousticness</div>
                <Bar barName="highlight" width={acousticness.toFixed(2)*200}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks that have no electric instruments</span>
            </div>
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">danceability</div>
                <Bar barName="highlight" width={danceability.toFixed(2)*200}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks that will make you move and dance</span>            
            </div>
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">energy</div>
                <Bar barName="highlight" width={energy.toFixed(2)*200}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks that are fast, loud, and noisy</span>            
            </div>
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">instrumentalness</div>
                <Bar barName="highlight" width={instrumentalness.toFixed(2)*200}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks that contain no vocals</span>
            </div>
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">liveness</div>
                <Bar barName="highlight" width={liveness.toFixed(2)*200}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks that are performed live</span>
            </div>
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">loudness</div>
                <Bar barName="highlight" width={(loudness+120).toFixed(2)*1}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks overall loudness in decibels</span>
            </div>
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">speechiness</div>
                <Bar barName="highlight" width={speechiness.toFixed(2)*200}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks that contain spoken words</span>
            </div>
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">tempo</div>
                <Bar barName="highlight" width={tempo.toFixed(2)*1}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks overall estimated tempo in beats per minute</span>
            </div>
            <div className="audioFeaturesItems">
                <div className="headingWhite pb">valence</div>
                <Bar barName="highlight" width={valence.toFixed(2)*200}/>
                <Bar barName="total" width={200}/>
                <span className="subheadingGray">tracks overall positivity</span>
            </div>
        </div>
    )
}

export default AudioFeature
