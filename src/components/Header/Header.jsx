import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'

function Header() {
    return (
        <header className='header'>
            <nav className="nav">
                <Link className='logo'>
                    <img src={logo} alt="" />
                </Link>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link>
                            <i class="bi bi-house"></i>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link>
                            <i class="bi bi-percent"></i>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link>
                            <i class="bi bi-pie-chart"></i>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link>
                            <i class="bi bi-envelope"></i>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link>
                            <i class="bi bi-bell"></i>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link>
                            <i class="bi bi-gear"></i>
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link>
                            <i class="bi bi-box-arrow-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
