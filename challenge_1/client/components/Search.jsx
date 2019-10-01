import React from 'react';

function Search( {searchChangeHandler, searchSubmitHandler } ) {
  return (
    <div id="search-wrapper">
      <form id="search-form" onSubmit={e => searchSubmitHandler(e)}>
        <input id="search" name="search" onChange={e => searchChangeHandler(e)}></input>
        <button placeholder="Ex. Alexander Hamilton">Search</button>
      </form>
    </div>
  )
}

export default Search;