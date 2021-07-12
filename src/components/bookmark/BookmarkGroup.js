/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons'

// CSS
import BookmarkCss from "./bookmark.module.css"

// Components
import Bookmark from './Bookmark'

const myLinks = [
  'https://www.youtube.com/',
  'https://dribbble.com/',
  'https://www.instagram.com/osirisberbesia/'
]

const BookmarkGroup = () => {
  return (
    <div className={BookmarkCss.bookmark__category}>
      <h3>Categoria 1</h3>
      {myLinks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} />)}
        <button className={BookmarkCss.bookmark__toggle}>
          <FontAwesomeIcon icon={faChevronUp} />
          <FontAwesomeIcon icon={faTimes} />
        </button>
    </div>

        
  )
}

export default BookmarkGroup
