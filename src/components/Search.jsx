import React from 'react'


function Search({searchforme}){
    //HANDLESEARCH
    function handleSearch(e){
        searchforme(e.target.value)
    }
    return(
        <div className='search-me'>
            <label htmlFor='search'>Search: </label>
            <input type='text' id='search' placeholder='search for me here...' onChange={handleSearch}/>
        </div>
    )
}

export default Search