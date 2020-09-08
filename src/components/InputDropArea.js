import React, { useState } from 'react'
import Item from './Item'
import './InputDropArea.css'

function InputDropArea() {

    const [files, setFiles] = useState([])

    const onDragEnter = (e) => {
        console.log('Drag Enter')
        console.log(e)
    }

    const onDrop = (e) => {
        e.preventDefault()
        console.log('Drop')
        const { dataTransfer } = e
        if(dataTransfer.files.length > 0) {
            const file = dataTransfer.files[0]
            setFiles([...files, file.name])
        }
    }

    const onDragOver = (e) => {
        console.log('Drag Over')
        e.preventDefault()
    }

    return (
        <div className="InputDropArea" onDragEnter={onDragEnter} onDrop={onDrop} onDragOver={onDragOver}>
            {
                files.map((item, index) => (<Item key={index} value={item}/>))
            }
        </div>
    )
}

export default InputDropArea