import '../css/banner.css';
import '../css/button.css';
import React from 'react'
import Navbar from './Navbar';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
// import { IoIosArrowDown } from 'react-icons/io';

const Banner = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner-info">
                <h1>Hi, I'm Daniela.</h1>
                <h2>A passionate Full Stack Web Developer<br></br>
                and a bla bla bla tjolahopp.</h2>
                <div className="social-media">
                    <a href="/" target="_blank" style={{background: "#0a66c2", borderColor: "#0a66c2"}}><FaLinkedinIn/></a>
                    <a href="/" target="_blank" style={{background: "#15a7fb", borderColor: "#15a7fb"}}><FaFacebookF/></a> 
                    <a href="/" target="_blank" style={{background: "#d32e7d", borderColor: "#d32e7d"}}><FaInstagram/></a> 
                    <a href="/" target="_blank" style={{background: "#22272d", borderColor: "#22272d"}}><FaGithub/></a>  
                </div>
                <a href="#projects" className="btn outline-btn"><span>View my work</span></a>
            </div>
            {/* <h3 style={{position: 'absolute', bottom: 0, width: '100%'}}>
                    <IoIosArrowDown style={{fontSize: '100px' }}/>
            </h3> */}
        </div>
    )
}

export default Banner