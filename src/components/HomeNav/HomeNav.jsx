import React from 'react'
import { useState } from 'react';
import { data } from '../../lib/data';
import './HomeNav.scss'

function HomeNav({category, setCategory}) {
    let categoryArr = []
    data.forEach((item) => {
        if (!categoryArr.includes(item.category)) {
            categoryArr.push(item.category);
        }
    })
    return (
        <div className='home__nav'>
            <ul className="hn__list">
                {
                    categoryArr.map((item, index) => (
                        <li onClick={()=> setCategory(item)} key={index} className={category == item ? 'hn__item active' : 'hn__item'}>
                            {item}
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default HomeNav
