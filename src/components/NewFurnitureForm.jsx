import React,{useState} from "react"

function NewFurnitureForm({furniture,setFurniture}){
    const [newFurn, setNewFurniture] = useState({
        name:"",
        wood:"",
        image:"",
        price:0
    })

    //handleChange
    function handleChange(e){
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value

        setNewFurniture({
            ...newFurn,
            [name]:value
        })
    }

    //handle new plant
    function handleSubmit(){
        fetch('https://woody-furniture-shop.onrender.com/furniture',{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFurn)
        })
        .then(res => res.json())
        .then(furn => setFurniture([...furniture,furn]),
            setNewFurniture({
                name:"",
                wood:"",
                image:"",
                price:0
            })
        )
        .catch((err) => console.log(err))
    }
    return(
        <div className="new-furniture">
            <h2>Add a new Furniture here:</h2>
            <form onSubmit={handleSubmit}>
            <input type='text' name="name" placeholder='enter new name...' value={newFurn.name} onChange={handleChange}/><br />
            <input type='text' name="wood" placeholder='enter new wood-type...' value={newFurn.wood} onChange={handleChange}/><br />
            <input type='text' name="image" placeholder='enter new image-url...' value={newFurn.image} onChange={handleChange}/><br />
            <input type='number' name="price" placeholder='enter new price...' value={newFurn.price} onChange={handleChange}/><br />
            <button type="submit" className="btn-edit">Add</button>
        </form>
        </div>
    )
}

export default NewFurnitureForm
