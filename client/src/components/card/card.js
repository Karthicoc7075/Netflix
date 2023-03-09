import React, { useState } from 'react';
import './card.css';


function Card({children,...restProps}) {
    const [info,setInfo] = useState(false);


  return (
    <div className='card__wrapper' {...restProps} >
      <div className='card'  >
         {children}
      </div>
    </div>
  )
}

export default Card;
