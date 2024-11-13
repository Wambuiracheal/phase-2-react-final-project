import React from 'react'


function Search(searchforme){
    //HANDLESEARCH
    function handleSearch(e){
        searchforme(e.target.name)
    }
    return(
        <div className='search-me'>
            <label htmlFor='search'>Search me...</label>
            <input type='text' id='search' placeholder='search for me ...' onChange={handleSearch}/>
        </div>
    )
}

export default Search