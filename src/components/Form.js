import React, { useState, useRef } from 'react'
import Input from './Input'
import InputDropArea from './InputDropArea'
import uploadRequest from '../services/uploads'
import './Form.css'

function Form() {

    const [files, setFiles] = useState([])
    const [isSuccessful, setIsSuccessful] = useState(false)

    const titleRef = useRef()
    const descriptonRef = useRef()
    const uploadFile = (e) => {
        e.preventDefault()
        const data = {
            title: titleRef.current.value,
            description: descriptonRef.current.value,
            files: files.reduce((acc, current) => {
                return [...acc, current.content]
            }, [])
        }
        console.log(data)
        uploadRequest(data, response => {
            console.log(response)
            setIsSuccessful(true)
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
            {isSuccessful?<div>Datos cargados</div>:null}
        </div>
    )
}

export default Form