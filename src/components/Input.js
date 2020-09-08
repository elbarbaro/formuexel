import React from 'react'
import './Input.css'

function Input(props) {

    const { name, type, placeholder, refe } = props;

    return (
        <div className="Input">
            <input name={name} type={type} placeholder={placeholder} ref={refe}/>
        </div>
    )
}


export default Input;