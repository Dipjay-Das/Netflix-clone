import React from 'react';
import './play.css';
// import back_arrow from '../../Assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';


function Play() {
    // const navigate = useNavigate();

    return (
        <div className='play'>
            {/* <img src={back_arrow} alt="" onClick={() => { navigate(-2) }} /> */}
            <iframe width='90%' height='90%' src='https://www.youtube.com/embed/80dqOwAOhbo' frameborder="0" title='trailer' allowFullScreen></iframe>
            <div className="player-info">
                <p>5.9M views </p>
                <p>The Protector | Official Trailer [HD]</p>
                <p>5 years ago</p>
            </div>
        </div>
    )
}

export default Play;