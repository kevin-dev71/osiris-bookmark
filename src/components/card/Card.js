import React, { useEffect } from "react";

import CardCSS from './card.module.css'

const Card = ({bookmark}) => {

  useEffect(() => {
    (async () => {
      const res = await fetch("bookmark")
      console.log(res)
    })()
  }, [])

  return (
    <div className={CardCSS.card}>
      <div className={`${CardCSS['card-header']} ${CardCSS['animated-bg']}`} id="header">
        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />
      </div>

      <div className={CardCSS['card-content']}>
        <h3 className={`${CardCSS['card-title']} ${CardCSS['animated-bg']} ${CardCSS['animated-bg-text']}`} id="title">
          Titulo 1
        </h3>
        <p className={CardCSS['card-excerpt']} id="excerpt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis
          <span className={`${CardCSS['animated-bg-text']} ${CardCSS['animated-bg']}`}>&nbsp;</span>
          <span className={`${CardCSS['animated-bg-text']} ${CardCSS['animated-bg']}`}>&nbsp;</span>
          <span className={`${CardCSS['animated-bg-text']} ${CardCSS['animated-bg']}`}>&nbsp;</span>
        </p>
      </div>
    </div>
  )
}

export default Card;
