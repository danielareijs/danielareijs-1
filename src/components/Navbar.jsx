import React from 'react';
import '../css/navbar.css';
import DanielaReijsLogo from '../images/danielareijs_logo.png';
import {useState} from 'react';
import { Link } from 'react-scroll'
import {HiMenuAlt4} from 'react-icons/hi'
import {TiTimes} from 'react-icons/ti'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const navLinks = [
        {
            title: 'Home',
            to: 'navbar'
        }, {
            title: 'Projects',
            to: 'projects'
        }, {
            title: 'Skills',
            to: 'skills'
        }
    ]

    const handleClick = () => {
        setClick(!click)
    }

    const closeDropdown = () => {
        setClick(!click)
    }

    return (
        <div className={click ? 'navbar active' : 'navbar'}>
            <div className="nav-links" >
                <div onClick={handleClick} className="menu-icon" style={{position: 'fixed', top: '50px', right: '50px'}}>
                    {!click && <HiMenuAlt4 />}
                    {click && <TiTimes />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {navLinks.map(link => {
                        return(
                            <li className="nav-item">
                                <Link 
                                className="nav-link"
                                to={link.to}
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={closeDropdown}
                                >{link.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="nav-logo">
                <img src={DanielaReijsLogo} style={{width: '150px'}}/>
            </div>
            <div>
                <a href="/" className="btn full-btn sm-btn-hide"><span>Get in touch</span></a>
            </div>
        </div>
    )
}

export default Navbar