import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <div className='searchBar'>
      <div className='input-group'>
        <input type="search"
          name="Search"
          id="Search" placeholder='Enter the Address' />
      </div>
      <div className='btn'>
        <button type="submit"> Search</button>
      </div>
    </div>
  )
}

export default Search