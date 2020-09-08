import React, { useState, useRef } from 'react'
import Input from './Input'
import InputDropArea from './InputDropArea'
import './Form.css'

function Form() {

    const [files, setFiles] = useState([])
    const titleRef = useRef()
    const descriptonRef = useRef()
    const uploadFile = (e) => {
        e.preventDefault()
        console.log({
            title: titleRef.current.value,
            description: descriptonRef.current.value,
            files: files
        })
    }

    return (
        <div className="Form">
            <form onSubmit={uploadFile}>
                <Input type="text" name="title" placeholder="Title" refe={titleRef}/>
                <Input type="text" name="description" placeholder="Description" refe={descriptonRef}/>
                <InputDropArea files={files} setFiles={setFiles}/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form