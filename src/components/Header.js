import React from 'react'
import './Header.css'
import IconButton from '@mui/material/IconButton';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img className="header_logo" src="logo192.png" alt="header"/>
            <IconButton>
                <ModeCommentIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header