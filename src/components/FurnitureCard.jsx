import React from 'react'
function FurnitureCard(){
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter new name...' value={newFun.name} onChange={handleChange}/>
            <input type='wood-type' placeholder='enter new wood-tye...' value={newFun.wood-type} onChange={handleChange}/>
            <input type='image' placeholder='enter new image-url...' value={newFun.image} onChange={handleChange}/>
            <input type='price' placeholder='enter new price...' value={newFun.price} onChange={handleChange}/>
            <button>Update</button>
        </form>
    )
}