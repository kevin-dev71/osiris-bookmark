import React from 'react';

import Aside from './aside/Aside'
import Menu from './menu/Menu'
import Main from './main/Main'

import './App.css'

function App() {
  return (
    <>
      <Menu />
      <Aside />
      <Main />
    </>
  );
}

export default App;