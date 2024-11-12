import React from 'react'
import videofondo from '../../assets/videos/videofondo.mp4';
import "./fondo.css";

export const Fondo = () => {
  return (
    <div className='Fondo'>
        <video className='videoFondo' autoPlay loop muted  src={videofondo}/>
        <div>
            <p></p>
        </div>
    </div>
  )
}
