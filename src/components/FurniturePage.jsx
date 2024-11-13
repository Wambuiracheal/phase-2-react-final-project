import React,{useState,useEffect} from 'react'
import NewFurnitureForm from './NewFurnitureForm'
import FurnitureList from './FurnitureList'
import Search from  "./Search"

function FurniturePage(){
    const[furniture,setFurniture] = useState([])
    const[searchFurniture,setSearchFurniture] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/furniture')
        .then(res => res.json())
        .then(data => {
            setFurniture(data)
        })
    },[])

    //setting the search button
    const displayFurniture = furniture.filter((woody) => woody.name.toLowerCase().includes(searchFurniture.toLowerCase()))

    return(
        <main>
            <Search searchforme = {setSearchFurniture}/>
            <NewFurnitureForm furniture = {furniture} setFurniture = {setFurniture}/>
            <FurnitureList furniture={displayFurniture} setFurniture={setFurniture}/>
        </main>
    )

}

export default FurniturePage