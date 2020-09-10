import React, { forwardRef } from 'react'
import './Input.css'

const Input = forwardRef((props, ref) => {
    return (
        <div className="Input">
            <input {...props} ref={ref}/>
        </div>
    )
}) 


export default Input;