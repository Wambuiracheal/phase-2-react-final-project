import React from 'react'
import FurnitureCard from "./FurnitureCard"

function FurnitureList({furniture,setFurniture}){

    return(
        <ul>
            {furniture.length > 0?furniture.map(furn => (
                <li key={furn.id}>
                    <FurnitureCard 
                         name={furn.name}    
                         wood={furn.wood}
                         image={furn.image}
                         price={furn.price}
                         furniture={furniture}
                         setFurniture={setFurniture}
                    />
                   
                </li>
            )):null}
        </ul>
     
    )

}

export default FurnitureList