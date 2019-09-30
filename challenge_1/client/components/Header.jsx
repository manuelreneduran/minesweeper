import React from 'react';
import Search from './Search.jsx';

function Header( {searchChangeHandler, onSubmitHandler} ) {
  return (
    <div id="header">
      <Search searchChangeHandler={searchChangeHandler} onSubmitHandler={onSubmitHandler}/>
    </div>
  )
}

export default Header;