import React from 'react'
import { useState } from 'react'

const AddProductPage = ({addProduct}) => {
    const[inputValues,setInputValues] = useState();
    const onHandleChange = (event)=>{
        const name =event.target.name;
        const value =event.target.value;
        setInputValues({...inputValues,[name]:value})
    }
    const onHandleSubmit = (e)=>{
        e.preventDefault();
        addProduct(inputValues)
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" placeholder='Name' name="name" onChange={onHandleChange} id="" />
                <input type="text" placeholder='Price' name="price" onChange={onHandleChange} id="" />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddProductPage