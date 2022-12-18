import React from 'react'
import { Link } from "react-scroll";
import './NavbarElements.css'

const Navbar = () => {
  return (
    <div class='divNav'>
      <div class='Navbar'>

        <Link id='Name' activeClass="active" to="home" spy={true} smooth={true}>JHUN-THOMAS CALAHATIAN</Link>

        <ul>

          <li><Link to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
          <li><Link to="contact" spy={true} smooth={true}>Contact</Link></li>
          <li><Link to="resume" spy={true} smooth={true}>Resume</Link></li>

          
        </ul>

          {/* <div class='bg-slate-400 h-16 left-0 top-0'>
            <ul class='list-none m-0 p-0 overflow-hidden'>
                <li class='float-left'><a class='block text-white font-bold text-center m-1 p-4 ml-16' href='#home'>JHUN-THOMAS CALAHATIAN</a></li>

                <li class='float-right'><a class='block text-white text-center m-1 p-4 mr-16' href='#contact'>Resume</a></li>
                <li class='float-right'><a class='block text-white text-center m-1 p-4' href='#contact'>Contact</a></li>
                <li class='float-right'><a class='block text-white text-center m-1 p-4' href='#projects'>Projects</a></li>
                <li class='float-right'><a class='block text-white text-center m-1 p-4' href='#about'>About</a></li>

            </ul>
          </div> */}

      </div>
    </div>
  )
}

export default Navbar