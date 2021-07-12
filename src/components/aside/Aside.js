/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AsideCSS from './aside.module.css'

// Components
import BookmarkGroup from '../bookmark/BookmarkGroup'

const Aside = () => {
  return (
    <div className={AsideCSS['bookmark-group']}>
      <div className={AsideCSS.bookmark__container}>
        <BookmarkGroup />
        <BookmarkGroup />
      </div>      
    </div>
  );
};

export default Aside;
