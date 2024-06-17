import React from 'react';
import './player3.css';
import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Player3() {
    const navigate = useNavigate();

    return (
        <div className='player3'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/MWOlnZSnXJo' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player3-info">
                <p> 4.3M views </p>
                <p>Jawan | Official Trailer</p>
                <p>7 months ago</p>
            </div>
        </div>
    )
}

export default Player3