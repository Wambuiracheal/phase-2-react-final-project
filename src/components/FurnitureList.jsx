import React from 'react'
import FurnitureCard from "./FurnitureCard"

function FurnitureList({furniture,setFurniture}){

    return(
        <ul>
            {furniture.length > 0?furniture.map(fun => (
                <li key={fun.id}>
                    <FurnitureCard 
                         name={fun.name}
                         wood-type={fun.wood-type}
                         image={fun.image}
                         price={fun.price}
                         furniture={furniture}
                         setFurniture={setFurniture}
                    />
                   
                </li>
            )):null}
        </ul>
     
    )

}

export default FurnitureList