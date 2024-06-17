import React from 'react';
import './player4.css';
import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Player4() {
    const navigate = useNavigate();

    return (
        <div className='player4'>
            <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/7ePxlGxDqe8' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player4-info">
                <p>1.2M views</p>
                <p>The Ghost - Theatrical | Official Trailer</p>
                <p>1 year ago </p>
            </div>
        </div>
    )
}

export default Player4