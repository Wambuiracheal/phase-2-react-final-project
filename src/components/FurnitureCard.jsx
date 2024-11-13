import React,{useState} from 'react'
function FurnitureCard({id,name,image,wood,price,furniture,setFurniture}){
    const[newFurnData,setNewFurnData] = useState({
        name:"",
        wood:"",
        image:"",
        price:0,
    })

    //DELETE FUNCTION
    function handleDelete(){
        fetch(`http://localhost:3000/furniture/${id}`,{
            method: "DELETE",
            headers:{
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            let remainderOfFurn = furniture.filter(furn = furn.id !== id)
            setFurniture(remainderOfFurn)
        })
        .catch(err => console.log(err))
    }

    //HANDLEEDIT FUNCTION
    function handleChange(e){
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value

        setNewFurnData({
            ...newFurnData,
            [name]:value
        })
    }

    //EDIT FUNCTION
    function handleSubmit(){
        fetch(`http://localhost:3000/furniture/${id}`,{
            method: "PATCH",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(newFurnData)
        })
        .then (res => res.json())
        .then (furnt => {
            let editedFurniture = furniture.map(furn =>{
                if(furn.id){
                    furn.name= furnt.name,
                    furn.wood= furnt.wood,
                    furn.price= furnt.price,
                    furn.id= furnt.id
                }
                return(furn)
            })
            setFurniture(editedFurniture)
        })
    }

    return(
        <li>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <h3>{wood}</h3>
            <p>Price: ${price}</p>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter new name...' value={newFurnData.name} onChange={handleChange}/>
            <input type='wood-type' placeholder='enter new wood-tye...' value={newFurnData.wood} onChange={handleChange}/>
            <input type='image' placeholder='enter new image-url...' value={newFurnData.image} onChange={handleChange}/>
            <input type='price' placeholder='enter new price...' value={newFurnData.price} onChange={handleChange}/>
            <button type='submit' className='btn-edit'>Edit Furniture</button>
        </form>
        <button onClick={handleDelete} className='btn-delete'>Delete</button>
        </li>


    )
}

export default FurnitureCard