import React from 'react';

function Search( {searchChangeHandler, onSubmitHandler} ) {
  return (
    <div id="search-wrapper">
      <form>
        <input id="search" name="search" onChange={e => searchChangeHandler(e)}></input>
        <button placeholder="Ex. Alexander Hamilton">Search</button>
      </form>
    </div>
  )
}

export default Search;