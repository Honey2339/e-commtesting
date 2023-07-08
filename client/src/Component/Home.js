import React from 'react'
import homeLogo from "../images/home-img.png"
import "./Home.css"
import {motion} from "framer-motion"

function Home() {
  return (
    <motion.main
    style={{}}
    initial={{opacity:0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className='home-container'>

      <div className="home-img">
        <img src={homeLogo}></img>
      </div>
      <div className="home-text">
        <h4>Best Quality Product</h4>
        <h2>Join The Organic Movement!</h2>
        <p>The customer is very important, the customer will be followed by the customer.<br/> As the land of the land, the mourning nor the corporal of the land, the pillow of the lion.</p>
        <button className='btn noDecoration'><a href='http://localhost:3000/everything'>Shop Now</a></button>
      </div>
    </motion.main>
  )
}

export default Home