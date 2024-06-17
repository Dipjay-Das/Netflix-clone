import React from 'react'
import Navbar from '../../navbar/Navbar'
import './home.css'
import hero_banner from '../../Assets/hero_banner.jpg'
import hero_title from '../../Assets/hero_title.png'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import TitleCards from '../../titleCards/TitleCards'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom';



function Home() {
    return (
        <div className='home'>
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="" className='banner-img' />
                <div className="hero-caption">
                    <img src={hero_title} alt="" className='caption-img' />
                    <p>Discovering his ties to a secret ancient order, a young man living in modern Insanbul embarks on a quest to save the city from an immortal enemy</p>
                    <div className="hero-btns">
                        <Link to={`/player20/:50`} className='play-box'>
                            <button className='btn'>
                                <FaPlay className='playIcon' />
                                {<p>Play</p>}
                            </button>
                        </Link>
                        <button className='btn dark-btn'>
                            <IoIosInformationCircleOutline className='infoIcon' />
                            <p>More Info</p>
                        </button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            {/* <div className='more-cards'>
                <TitleCards title={'Blockbuster Movies'}/>
                <TitleCards title={'Only on Netflix'}/>
                <TitleCards title={'Upcoming'}/>
                <TitleCards title={'Top Pics for You'}/>
            </div> */}
            <Footer />
        </div >
    )
}

export default Home