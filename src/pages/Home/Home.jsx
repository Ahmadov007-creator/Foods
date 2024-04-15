import React, { useState } from 'react'
import HomeNav from '../../components/HomeNav/HomeNav'
import HomeTop from '../../components/HomeTop/HomeTop'
import Order from '../../components/Order/Order';
import { data } from '../../lib/data';
import './Home.scss'

function Home() {
  let localFood = []
  const [category, setCategory] = useState('milliy')
  function setFood(item){
    localFood.push(item);
    window.localStorage.setItem('localfood', JSON.stringify(localFood))
    }
  return (
    <div className='home'>
     <div className="home__inner">
     <HomeTop />
      <HomeNav category={category} setCategory={setCategory} />
      <div className='home__control'>
        <h3 className='cont_h3'>Choose Dishes</h3>
        <select className="sel">
          <option selected>Dine In</option>
          <option value="1" hidden>Dine In</option>
          <option value="2">To Go</option>
          <option value="3">Delivery</option>
        </select>


      </div>
      <ul className="home__list">
        {
          data && data.filter((i) => i.category == category).map((item, index) => (
            <li onClick={()=> setFood(item)} key={index} className="home__item">
              <img src={item.img} alt="" />
              <h3 className='cat_h3'>{item.name}</h3>
              <p className='cat_p'>{item.price}</p>
              <p className='cat_p_2'>{item.category}</p>
            </li>
          ))
        }

      </ul> 
     </div>
      <Order/>
    </div>
  )
}

export default Home
