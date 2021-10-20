import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'


import TopTracks from '../Tracks/TopTracks'
import TopArtists from '../TopArtists/TopArtists'
import Genres from '../Genres/Genres'
import Stats from '../Stats/Stats'
import Recommendations from '../Recommendations/Recommendations'
import AddPlaylistButton from '../Buttons/AddPlaylistButton/AddPlaylistButton'
import TimeRangeButton from '../Buttons/TimeRangeButton/TimeRangeButton'
import useAuth from '../../useAuth'

import './Home.css'

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID
})

const Home = ({ code }) => {
    const accessToken = useAuth(code);

    const [topShortTermArtists, setTopShortTermArtists] = useState([]);
    const [topMediumTermArtists, setTopMediumTermArtists] = useState([]);
    const [topLongTermArtists, setTopLongTermArtists] = useState([]);
    const [timeRangeArtists, setTimeRangeArtists] = useState('short_term');

    const [topShortTermTracks, setTopShortTermTracks] = useState([]);
    const [topMediumTermTracks, setTopMediumTermTracks] = useState([]);
    const [topLongTermTracks, setTopLongTermTracks] = useState([]);
    const [timeRangeTracks, setTimeRangeTracks] = useState('short_term');

    const [topGenres, setTopGenres] = useState([]);
    const [selectedRangeGenre, setSelectedRangeGenre] = useState([]);
    const [timeRangeGenres, setTimeRangeGenres] = useState('short_term');

    const [selectedRangeTrackStats, setSelectedRangeTrackStats] = useState([]);
    const [selectedRangeArtistStats, setSelectedRangeArtistStats] = useState([]);
    const [tracksAudioFeatures, setTracksAudioFeatures] = useState([]);
    const [trackPopularity, setTrackPopularity] = useState([]);
    const [artistPopularity, setArtistPopularity] = useState([]);
    const [trackReleaseDates, setTrackReleaseDates] = useState([])
    const [timeRangeStats, setTimeRangeStats] = useState('short_term');

    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        if (!accessToken) 
            return
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken])


    useEffect(() => {
        if (!accessToken) 
            return

        spotifyApi.getMyTopTracks({
            time_range: 'short_term',
            limit: 50,
            offset: 0,
            })
            .then(function(data) {
                let topTracks = data.body.items;
                setTopShortTermTracks(topTracks);
            }, function(err) {
                console.log('Something went wrong!', err);
            });
        
        spotifyApi.getMyTopTracks({
            time_range: 'medium_term',
            limit: 50,
            offset: 0,
            })
            .then(function(data) {
                let topTracks = data.body.items;
                setTopMediumTermTracks(topTracks);
            }, function(err) {
                console.log('Something went wrong!', err);
            });
        
        spotifyApi.getMyTopTracks({
            time_range: 'long_term',
            limit: 50,
            offset: 0,
            })
            .then(function(data) {
                let topTracks = data.body.items;
                setTopLongTermTracks(topTracks);
            }, function(err) {
                console.log('Something went wrong!', err);
            });

    }, [accessToken])
    
    useEffect(() => {
        if (!accessToken) 
            return

        spotifyApi.getMyTopArtists({
            time_range: 'short_term',
            limit: 50,
            offset: 0,
            })
            .then(function(data) {
            let topArtists = data.body.items;
            setTopShortTermArtists(topArtists);
            }, function(err) {
            console.log('Something went wrong!', err);
            });

        spotifyApi.getMyTopArtists({
            time_range: 'medium_term',
            limit: 50,
            offset: 0,
            })
            .then(function(data) {
            let topArtists = data.body.items;
            setTopMediumTermArtists(topArtists);
            }, function(err) {
            console.log('Something went wrong!', err);
            });

        spotifyApi.getMyTopArtists({
            time_range: 'long_term',
            limit: 50,
            offset: 0,
            })
            .then(function(data) {
            let topArtists = data.body.items;
            setTopLongTermArtists(topArtists);
            }, function(err) {
            console.log('Something went wrong!', err);
            });

    }, [accessToken])

    useEffect(() => {
        if (timeRangeGenres === 'short_term')
            setSelectedRangeGenre(topShortTermArtists)
        if (timeRangeGenres === 'medium_term')
            setSelectedRangeGenre(topMediumTermArtists)
        if (timeRangeGenres === 'long_term')
            setSelectedRangeGenre(topLongTermArtists)
        
    }, [topShortTermArtists, topMediumTermArtists, topLongTermArtists, timeRangeGenres])

    useEffect(() => {

        let genres = [];
        selectedRangeGenre.map((artist) => artist.genres.map((genre) => genres.push(genre)));

        let genreCount = {}
        genres.forEach((i) => { genreCount[i] = (genreCount[i] || 0) + 1; });
        setTopGenres(genreCount);
            
    }, [selectedRangeGenre])

    useEffect(() => {
        if (timeRangeStats === 'short_term')
            setSelectedRangeTrackStats(topShortTermTracks)
        if (timeRangeStats === 'medium_term')
            setSelectedRangeTrackStats(topMediumTermTracks)
        if (timeRangeStats === 'long_term')
            setSelectedRangeTrackStats(topLongTermTracks)

    }, [topShortTermTracks, topMediumTermTracks, topLongTermTracks, timeRangeStats])

    useEffect(() => {
        if (timeRangeStats === 'short_term')
            setSelectedRangeArtistStats(topShortTermArtists)
        if (timeRangeStats === 'medium_term')
            setSelectedRangeArtistStats(topMediumTermArtists)
        if (timeRangeStats === 'long_term')
            setSelectedRangeArtistStats(topLongTermArtists)

    }, [topShortTermArtists, topMediumTermArtists, topLongTermArtists, timeRangeStats])

    useEffect(() => {

        setTrackPopularity([]);
        setTrackReleaseDates([]);
        setArtistPopularity([]);

        selectedRangeTrackStats.map((track) => ( setTrackPopularity(
            prevState => ([...prevState, { name: track.name, artist: track.artists[0].name, popularity: track.popularity}])
        )));

        selectedRangeTrackStats.map((track) => ( setTrackReleaseDates(
            prevState => ([...prevState, { name: track.name, artist: track.artists[0].name,releaseDate: track.album.release_date.substring(0,4) }])
        )));

        selectedRangeArtistStats.map((artist) => ( setArtistPopularity(
            prevState => ([...prevState, { name: artist.name, popularity: artist.popularity, id: artist.id}])
        )));



    }, [selectedRangeArtistStats, selectedRangeTrackStats])

    useEffect(() => {
        if (!accessToken) 
            return
        
        let trackIds = selectedRangeTrackStats.map((track) => (track.id));

        spotifyApi.getAudioFeaturesForTracks(trackIds)
            .then(function(data) {
                setTracksAudioFeatures(data.body.audio_features);
            }, function(err) {
                console.log('Something went wrong!', err);
            });

    }, [accessToken, selectedRangeTrackStats])

    useEffect(() => {
        if (!accessToken) 
            return
        if (artistPopularity.length===0 || artistPopularity.length!==50)
            return
        if (tracksAudioFeatures.length===0 || tracksAudioFeatures.length!==50 )
            return

        let artistIds = artistPopularity.map((artist) => artist.id).slice(0,5);
        let energy = tracksAudioFeatures.map((feature) => feature?.energy);

        setRecommendations([]);
        spotifyApi.getRecommendations({
            min_energy: energy,
            seed_artists: artistIds,
            min_popularity: 40
            })
            .then(function(data) {
                let tracks = data.body.tracks

                let artistIds2 = artistPopularity.map((artist) => artist.id).slice(-5);

                spotifyApi.getRecommendations({
                    min_energy: energy,
                    seed_artists: artistIds2,
                    min_popularity: 40
                    })
                    .then(function(data) {
                        data.body.tracks.map((track) => tracks.push(track))
                        setRecommendations(tracks);
                    }, function(err) {
                        console.log("Something went wrong!", err);
                    });


            }, function(err) {
                console.log("Something went wrong!", err);
            });

        
        
        

    }, [accessToken, artistPopularity, tracksAudioFeatures])

    const getTracks = (range) => {
        if (range==='short_term')
            return topShortTermTracks
        else if (range==='medium_term')
            return topMediumTermTracks
        else 
            return topLongTermTracks
    }

    const getArtists = (range) => {
        if (range==='short_term')
            return topShortTermArtists
        else if (range==='medium_term')
            return topMediumTermArtists
        else 
            return topLongTermArtists
    }

    const getPlaylistInfo = (type, range) => {
        let playlistName;
        let playlistDesc;

        if (type==='tracks') {
            if (range==='short_term') {
                playlistName = 'Your Top Tracks (4 weeks)'
                playlistDesc = 'Your top 50 tracks from the past 4 weeks'
            }
                
            else if (range==='medium_term') {
                playlistName = 'Your Top Tracks (6 months)'
                playlistDesc = 'Your top 50 tracks from the past 6 months'
            }
            else {
                playlistName = 'Your Top Tracks (All Time)'
                playlistDesc = 'Your top 50 tracks of all time'
            }
        }
        else if (type==='artists') {
            if (range==='short_term') {
                playlistName = 'Your Top Artists (4 weeks)'
                playlistDesc = 'Your top 50 artists from the past 4 weeks'
            }
                
            else if (range==='medium_term') {
                playlistName = 'Your Top Artists (6 months)'
                playlistDesc = 'Your top 50 artists from the past 6 months'
            }
            else {
                playlistName = 'Your Top Artists (All Time)'
                playlistDesc = 'Your top 50 artists of all time'
            }
        }
        else {
            if (range==='short_term') {
                playlistName = 'Song Recommendations (4 weeks)'
                playlistDesc = 'Songs you might like based on your recent listening'
            }
                
            else if (range==='medium_term') {
                playlistName = 'Song Recommendations (6 months)'
                playlistDesc = 'Songs you might like based on your past 6 months listening history'
            }
            else {
                playlistName = 'Song Recommendations (All Time)'
                playlistDesc = 'Songs you might like based on your top all time listening history'
            }
        }

        return [playlistName, playlistDesc]
    }

    const handleTimeRange = (type, value) => {
        if (type==='artists')
            setTimeRangeArtists(value)
        if (type==='tracks')
            setTimeRangeTracks(value)
        if (type==='genres') {
            setTimeRangeGenres(value)
        }
        if (type==='stats') {
            setTimeRangeStats(value);
        }

    }

    const handleCreatePlaylist = (type, range, tracks) => {
        let playlistInfo = getPlaylistInfo(type, range);
        let playlistName = playlistInfo[0];
        let playlistDesc = playlistInfo[1];
        let tracksUri = tracks.map((track) => track.uri)

        // Create a playlist
        spotifyApi.createPlaylist(playlistName, { 'description': playlistDesc, 'public': true })
            .then(function(data) {
                console.log('Created playlist!');
                let playlistId = data.body.id;

                // Add tracks to a playlist
                spotifyApi.addTracksToPlaylist(playlistId, tracksUri)
                .then(function(data) {
                    console.log('Added tracks to playlist!');
                }, function(err) {
                    console.log('Something went wrong!', err);
                });

            }, function(err) {
                console.log('Something went wrong!', err);
            });
        
    }


    return (
        <div className="homeContainer">
            <div className="titleContainer">
                <span className="title">My Top Tracks</span>
                <TimeRangeButton type='tracks' handleTimeRange={handleTimeRange} timeRange={timeRangeTracks}/>
            </div>
            <TopTracks tracks={getTracks(timeRangeTracks)}/>
            <AddPlaylistButton tracks={getTracks(timeRangeTracks)} type='tracks' range={timeRangeTracks} handleCreatePlaylist={handleCreatePlaylist}/>

            <div className="titleContainer">
                <span className="title">My Top Artists</span>
                <TimeRangeButton type='artists' handleTimeRange={handleTimeRange} timeRange={timeRangeArtists}/>
            </div>
            <TopArtists artists={getArtists(timeRangeArtists)}/>
            <AddPlaylistButton tracks={getTracks(timeRangeArtists)} type='artists' range={timeRangeArtists} handleCreatePlaylist={handleCreatePlaylist}/>

            <div className="titleContainer">
                <span className="title">My Top Genres</span>
                <TimeRangeButton type='genres' handleTimeRange={handleTimeRange} timeRange={timeRangeGenres}/>
            </div>
            <Genres genres={topGenres} />

            <div className="titleContainer">
                <span className="title">My Music Analysis</span>
                <TimeRangeButton type='stats' handleTimeRange={handleTimeRange} timeRange={timeRangeStats}/>
            </div>
            <Stats audioFeatures={tracksAudioFeatures} tracksPopularity={trackPopularity} artistsPopularity={artistPopularity} releaseDates={trackReleaseDates}/>

            <div className="titleContainer">
                <span className="title">Here are some song recommendations based on your listening</span>
            </div>
            <Recommendations recommendedTracks={recommendations}/>
            <AddPlaylistButton tracks={recommendations} type='stats' range={timeRangeStats} handleCreatePlaylist={handleCreatePlaylist}/>

        </div>
    )
}

export default Home;
