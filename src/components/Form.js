import React from 'react'
import Input from './Input'
import InputDropArea from './InputDropArea'
import './Form.css'

function Form() {
    return (
        <div className="Form">
            <form>
                <Input type="text" name="title" placeholder="Title"/>
                <Input type="text" name="description" placeholder="Description"/>
                <InputDropArea/>
            </form>
        </div>
    )
}

export default Form