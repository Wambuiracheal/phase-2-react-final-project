import React,{useState} from 'react'
function FurnitureCard({id,name,image,wood,price,furniture,setFurniture}){
    const[newFurnData,setNewFurnData] = useState({
        name:"",
        wood:"",
        image:"",
        price:0,
        id:0
    })

    //DELETE FUNCTION
    function handleDelete(e){
        e.preventDefault()
        fetch(`https://woody-furniture-shop.onrender.com/furniture/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(() => {
            let remainderOfFurn = furniture.filter(furn => furn.id !== id)
            setFurniture(remainderOfFurn)
        })
        .catch(err => console.log(err))
    }

    //HANDLEEDIT FUNCTION
    function handleChange(e){
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value

        setNewFurnData({
            ...newFurnData,
            [name]:value
        })
    }

    //EDIT FUNCTION
    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://woody-furniture-shop.onrender.com/furniture/${id}`,{
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFurnData)
        })
        .then (res => res.json())
        .then (furnt => {
            let editedFurniture = furniture.map(furn =>{
                if(furn.id === id){
                    furn.name= furnt.name,
                    furn.wood= furnt.wood,
                    furn.price= furnt.price
                }
                return(furn)
            })
            setFurniture(editedFurniture)
            alert(`updated ${name}`)
        })
        .catch(err => console.log(err))
    }

    return(
        <div className='card'>
            <img id='image' src={image} alt={name}/>
            <h2 className='item'>{name}</h2>
            <h3 className='item-2'>{wood}</h3>
            <h4 className='item-3'>${price}</h4>
            <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='enter new name...' value={newFurnData.name} onChange={handleChange}/><br />
            <input type='text' name='wood' placeholder='enter new wood-tye...' value={newFurnData.wood} onChange={handleChange}/><br />
            <input type='text' name='image' placeholder='enter new image-url...' value={newFurnData.image} onChange={handleChange}/><br />
            <input type='number' name='price' placeholder='enter new price...' value={newFurnData.price} onChange={handleChange}/><br />
    
            <button type='submit' className='btn-edit'>Edit Furniture</button>
        </form><br />
        <button onClick={handleDelete} className='btn-delete'>Delete</button>
        </div>


    )
}

export default FurnitureCard