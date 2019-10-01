import React from 'react';
import Search from './Search.jsx';

function Header( {searchChangeHandler, searchSubmitHandler } ) {
  return (
    <div id="header">
      <Search searchChangeHandler={searchChangeHandler} searchSubmitHandler={searchSubmitHandler}/>
    </div>
  )
}

export default Header;