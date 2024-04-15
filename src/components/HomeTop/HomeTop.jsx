import React from 'react'
import './HomeTop.scss'

function HomeTop() {
  return (
    <div className='home__top'>
     <div>
     <h2 className='ht_h2'>Jaegar Resto</h2>
      <p className='ht_p'>Tuesday, 2 Feb 2021</p>
     </div>
     <form action="#">
        <label htmlFor="search">
        <i className="bi bi-search"></i>
        </label>
        <input type="text" placeholder='Search for food, coffe, etc..'/>
     </form>
    </div>
  )
}

export default HomeTop
