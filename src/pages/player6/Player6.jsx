import React from 'react';
import './player6.css';
import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Player6() {
    const navigate = useNavigate();

    return (
        <div className='player6'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/iD3TZ_Xxc14' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player6-info">
                <p>57M views </p>
                <p>The Railway Men | Official Trailer</p>
                <p>7 months ago</p>
            </div>
        </div>
    )
}

export default Player6