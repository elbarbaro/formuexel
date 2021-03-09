import React, { useState, useRef } from 'react'
import Input from './Input'
import InputDropArea from './InputDropArea'
import uploadRequest from '../services/uploads'
//import './Form.css'

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
        <div className="Form md:w-1/2 sm:w-full mx-auto mt-10 shadow-md bg-white py-4 px-4 rounded-md inset-0">
            <form onSubmit={uploadFile}>
                <Input type="text" name="title" placeholder="Title" ref={titleRef} readOnly={false} />
                <Input type="text" name="description" placeholder="Description" ref={descriptonRef} readOnly={false}/>
                <InputDropArea files={files} setFiles={setFiles}/>
                <div className="flex justify-center">
                    <button className="flex-initial w-64 m-10 btn bg-teal-500 text-white hover:bg-teal-800" type="submit">Enviar</button>
                </div>
            </form>
            {isSuccessful?<div>Datos cargados</div>:null}
        </div>
    )
}

export default Form