import React from 'react'
import FurnitureCard from "./FurnitureCard"

function FurnitureList({furniture,setFurniture}){

    return(
        <div className='cards'>
            {furniture.length > 0?furniture.map(furn => (
                    <FurnitureCard 
                         name={furn.name}    
                         wood={furn.wood}
                         image={furn.image}
                         id={furn.id}
                         price={furn.price}
                         key={furn.id}
                         furniture={furniture}
                         setFurniture={setFurniture}
                    />
                   
            )):null}
        </div>
     
    )

}

export default FurnitureList