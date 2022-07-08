import React from 'react'

const Search = ({searchAll, setSearchAll}) => {
  return (
    <form className='all-search' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'></label>
        <input
            className='search-search'
            type = "text"
            placeholder='search'
            value={searchAll}
            onChange = {(e) => setSearchAll(e.target.value)}
            />

    </form>
  )
}

export default Search