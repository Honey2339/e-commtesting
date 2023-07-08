import React from 'react'
import "./Everything.css"
import { motion } from 'framer-motion';

function Everything(props) {

  const data = props.data.map((item , index) => (
    <div className='item' key={index}>
      <img src={item.url} alt="images" className='images'></img>
      <h3>{item.name}</h3>
      <h5>${item.price}</h5>
      <p className='item-rating'>Star : {item.star}</p>
    </div>
  ));

  return (
    <motion.main
    style={{}}
    initial={{opacity:0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className='eve-container'>

      <div className="eve-text">
        <h4>Home/Shop</h4>
        <h2>Shop</h2>
        <p>Best Selling Items</p>
      </div>
      <div>
        <h3 className="data-container">{data}</h3>

      </div>
    </motion.main>
  )
}

export default Everything