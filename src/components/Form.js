import React, { useState, useRef } from 'react'
import Input from './Input'
import InputDropArea from './InputDropArea'
import uploadRequest from '../services/uploads'
import './Form.css'

function Form(props) {

    const [files, setFiles] = useState([])
    const [isSuccessful, setIsSuccessful] = useState(false)
    const onResultCallback = props.onResult
    const titleRef = useRef()
    const descriptonRef = useRef()
    const uploadFile = (e) => {
        e.preventDefault()
        console.log(titleRef.current)
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
            onResultCallback(response)
        })
    }

    return (
        <div className="Form">
            <form onSubmit={uploadFile}>
                <Input type="text" name="title" placeholder="Title" ref={titleRef} readOnly={false} />
                <Input type="text" name="description" placeholder="Description" ref={descriptonRef} readOnly={false}/>
                <InputDropArea files={files} setFiles={setFiles}/>
                <button type="submit">Enviar</button>
            </form>
            {isSuccessful?<div>Datos cargados</div>:null}
        </div>
    )
}

export default Form