import React from 'react'
import './Input.css'

function Input(props) {

    const { name, type, placeholder } = props;

    return (
        <div className="Input">
            <input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}


export default Input;