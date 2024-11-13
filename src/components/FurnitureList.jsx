import React from 'react'
import FurnitureCard from "./FurnitureCard"

function FurnitureList({furniture,setFurniture}){

    return(
        <div className='cards'>
            {furniture.length > 0?furniture.map(furn => (
                <div key={furn.id}>
                    <FurnitureCard 
                         name={furn.name}    
                         wood={furn.wood}
                         image={furn.image}
                         id={furn.id}
                         price={furn.price}
                         furniture={furniture}
                         setFurniture={setFurniture}
                    />
                   
                </div>
            )):null}
        </div>
     
    )

}

export default FurnitureList