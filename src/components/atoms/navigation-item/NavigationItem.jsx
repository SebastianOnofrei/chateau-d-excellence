import React from 'react'
import './NavigationItem.scss';

const NavigationItem = (props) => {
  return (
    
    <li>
        <span className="horizontal-line"></span>
        <a href={'#'+props.text}>{props.text}</a>
    </li>
  )
}

export default NavigationItem