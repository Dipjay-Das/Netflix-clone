import React, { useEffect, useRef } from 'react'
import './titleCards.css'
// import cards_data from '../Assets/cards/Cards_data'
import fst from '../Assets/cards/card1.jpg';
import second from '../Assets/cards/card2.jpg';
import third from '../Assets/cards/card4.jpg';
import fourth from '../Assets/cards/card5.jpg';
import fifth from '../Assets/cards/card6.jpg';
import sixth from '../Assets/cards/card7.jpg';
import sevth from '../Assets/cards/card8.jpg';
import eigth from '../Assets/cards/card9.jpg';
import { Link } from 'react-router-dom';

function TitleCards({ title, category }) {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }


  useEffect(() => {
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    // <div className='title-cards'>
    //   <h2>{title ? title : 'Popular on Netflix'}</h2>
    //   <div className="card-list" ref={cardsRef}>
    //     {cards_data.map((card, index) => {
    //       return <Link to={`/player/:50`} className="card" key={index}>
    //         <img src={card.image} alt="" />
    //       </Link>
    //     })}
    //   </div>

    // </div>

    <div className='title-cards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        <Link to={`/player/:50`} className="card">
          <img src={fst} alt="" />
        </Link>
        <Link to={`/player2/:50`} className="card">
          <img src={second} alt="" />
        </Link>
        <Link to={`/player3/:50`} className="card">
          <img src={third} alt="" />
        </Link>
        <Link to={`/player4/:50`} className="card">
          <img src={fourth} alt="" />
        </Link>
        <Link to={`/player5/:50`} className="card">
          <img src={fifth} alt="" />
        </Link>
        <Link to={`/player6/:50`} className="card">
          <img src={sixth} alt="" />
        </Link>
        <Link to={`/player7/:50`} className="card">
          <img src={sevth} alt="" />
        </Link>
        <Link to={`/player8/:50`} className="card">
          <img src={eigth} alt="" />
        </Link>
      </div>

    </div>




  )
}

{/* <p>{card.name}</p> */ }
export default TitleCards