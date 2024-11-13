import React,{useState} from "react"

function NewFurnitureForm({furniture,setFurniture}){
    const[newFun,setNewFurniture] = useState({
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
            ...newFun,
            [name]:value
        })
    }
    function NewFurnitureForm(){
        fetch('http://localhost:3000/furniture',{
            method: "POST",
            headres:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFun)
        })
        .then(res => res.json())
        .then(fun => setFurniture([furniture,fun]),
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
            <input type='text' placeholder='enter new name...' value={newFun.name} onChange={handleChange}/>
            <input type='text' placeholder='enter new wood-tye...' value={newFun.wood} onChange={handleChange}/>
            <input type='text' placeholder='enter new image-url...' value={newFun.image} onChange={handleChange}/>
            <input type='number' placeholder='enter new price...' value={newFun.price} onChange={handleChange}/>
            <button>Update</button>
        </form>
        </div>
    )
}

export default NewFurnitureForm
