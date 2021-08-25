import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [name,setName]=useState("")
  const [category,setCategory]=useState("Select")

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault()
    if (name.length === 0){
      alert("Name Required")
    } else if (category === "Select") {
      alert("Category Required!")
    }else{
      const formData = {id: uuid(), name, category,}
      onItemFormSubmit(formData)
  }
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value ="Select">Select</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
