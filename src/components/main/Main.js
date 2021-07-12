import React from 'react'

import Card from '../card/Card'

import MainCSS from './main.module.css'

const myLinks = [
  'https://www.youtube.com/',
  'https://dribbble.com/',
  'https://www.instagram.com/osirisberbesia/'
]

const Main = () => {
  return (
    <div className={MainCSS.main}>
      {myLinks.map((bookmark, idx) => <Card key={idx} bookmark={bookmark} />)}      
    </div>
  )
}

export default Main