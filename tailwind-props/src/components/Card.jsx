import React from 'react'

const Card = () => {
  return (
    <div>
        <img 
           src="https://images.pexels.com/photos/18681384/pexels-photo-18681384/free-photo-of-gaming.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Img" 
        />
        <h1 className='text-2xl bg-green-500 p-3 rounded'>
        A rounded card for photos
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, saepe.</p>
    </div>
  )
}

export default Card
