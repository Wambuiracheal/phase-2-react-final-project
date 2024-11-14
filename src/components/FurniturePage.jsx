import React,{useState,useEffect} from 'react'
import NewFurnitureForm from './NewFurnitureForm'
import FurnitureList from './FurnitureList'
import Search from  "./Search"

function FurniturePage(){
    const[furniture,setFurniture] = useState([])
    const[searchFurniture,setSearchFurniture] = useState("")
    useEffect(() => {
        fetch('https://woody-furniture-shop.onrender.com/furniture')
        .then(res => res.json())
        .then(data => {
            setFurniture(data)
        })
    },[])

    //setting the search button
    const displayFurniture = furniture.filter((woody) => woody.name.toLowerCase().includes(searchFurniture.toLowerCase())
)
    return(
        <main>
            <NewFurnitureForm furniture = {furniture} setFurniture = {setFurniture}/>
            <Search searchforme = {setSearchFurniture}/>
            <FurnitureList furniture={displayFurniture} setFurniture={setFurniture}/>
        </main>
    )

}

export default FurniturePage