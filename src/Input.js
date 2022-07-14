import React from 'react'

const Input = ({fruitesData, handleChange}) => {
    console.log(fruitesData, "fr");
    const {id,
        isChecked,
        value} = fruitesData;

  return (
    <div>
        <input type="checkbox" checked={isChecked}  value={value} name={value}  onChange={handleChange}/> {value}
    </div>
  )
}

export default Input