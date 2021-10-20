import React from 'react'

import { AiOutlinePlusSquare } from 'react-icons/ai'
import './AddPlaylistButton.css'

const AddPlaylistButton = ({ tracks, type, range, handleCreatePlaylist }) => {

    return (
        <div className="playlistButtonContainer">
            <button className="playlistButton" onClick={() => handleCreatePlaylist(type, range, tracks)}>
                < AiOutlinePlusSquare />
                <span className="buttonTitle">Create Playlist</span>
            </button>
        </div>
    )
}

export default AddPlaylistButton
