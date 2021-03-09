import React, { forwardRef } from 'react'
//import './Input.css'

const Input = forwardRef((props, ref) => {
    return (
        <div className="Input rounded">
            <label className="text-md font-semibold text-gray-700">{props.name}</label>
            <input className="form-input w-full px-2 py-2 my-2 rounded-md focus:border-indigo-500" {...props} ref={ref}/>
        </div>
    )
})


export default Input;