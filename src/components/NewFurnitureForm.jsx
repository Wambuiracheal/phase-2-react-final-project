import React,{useState} from "react"

function NewFurnitureForm({furniture,setFurniture}){
    const[newFurn,setNewFurniture] = useState({
        name:"",
        wood:"",
        image:"",
        price:0,
    })
    function handleChange(e){
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value

        setNewFurniture({
            ...newFurn,
            [name]:value
        })
    }
    function handleSubmit(){
        fetch('http://localhost:3000/furniture',{
            method: "POST",
            headres:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFurn)
        })
        .then(res => res.json())
        .then(furn => setFurniture([furniture,furn]),
            setNewFurniture({
                name:"",
                wood:"",
                image:"",
                price:0,
            })
        )
        .catch((err) => console.log(err))
    }
    return(
        <div className="new-furniture">
             <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter new name...' value={newFurn.name} onChange={handleChange}/>
            <input type='text' placeholder='enter new wood-tye...' value={newFurn.wood} onChange={handleChange}/>
            <input type='text' placeholder='enter new image-url...' value={newFurn.image} onChange={handleChange}/>
            <input type='number' placeholder='enter new price...' value={newFurn.price} onChange={handleChange}/>
            <button>Update</button>
        </form>
        </div>
    )
}

export default NewFurnitureForm
