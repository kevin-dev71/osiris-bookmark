/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Bookmark = ({bookmark}) => {
  return (
    <a href={bookmark}>{bookmark}</a>
  )
}

export default Bookmark
