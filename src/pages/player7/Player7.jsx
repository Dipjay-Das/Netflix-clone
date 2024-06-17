import React from 'react';
import './player7.css';
import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Player7() {
    const navigate = useNavigate();

    return (
        <div className='player7'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/KPmFaL3gOrI' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player7-info">
                <p>
                249K views</p>
                <p>Young Sheldon Season 7 Super Bowl Trailer (HD) Final Season</p>
                <p>3 months ago</p>
            </div>
        </div>
    )
}

export default Player7