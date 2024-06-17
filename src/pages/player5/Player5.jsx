import React from 'react';
import './player5.css';
import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Player() {
    const navigate = useNavigate();

    return (
        <div className='player'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/X4bF_quwNtw' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player-info">
                <p>37M views</p>
                <p>Official Trailer | Season 1 | LUCIFER</p>
                <p> 9 years ago </p>
            </div>
        </div>
    )
}

export default Player