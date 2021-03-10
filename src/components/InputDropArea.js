import React, { useState } from 'react'
import Item from './Item'
//import './InputDropArea.css'

function EmptyStateText(props) {

    const { value } = props

    return (
        <div className="h-40 flex flex-col justify-end items-center">
            <p className="my-2">
                { value ? value : 'Puedes arrastrar un archivo y soltarlo (uno a la vez)' }
            </p>
            <div className="w-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
        </div>
    )
}

function InputDropArea(props) {

    const {files, setFiles} = props
    const [areaMessage, setAreaMessage] = useState('')

    const formatBytes = (bytes, decimals) => {
        if(bytes === 0) return '0 Bytes'
        const k = 1024
        const dm = decimals || 2
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
    }

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
            setFiles([...files, { name: file.name, size: formatBytes(file.size), content: file }])
        }
    }

    const onDragOver = (e) => {
        console.log('Drag Over')
        e.preventDefault()
        setAreaMessage('Suelta el archivo seleccionado')
    }

    const onDragLeave = (e) => {
        console.log('Drag Leave')
        e.preventDefault()
        setAreaMessage('Puedes arrastrar un archivo y soltarlo (uno a la vez)')
    }

    const deleteFile = (index) => {
        setFiles([...files.filter((item, i) => i !== index)])
    }

    return (
        <div className="InputDropArea h-64 p-2 bg-indigo-200 hover:bg-indigo-300" onDragEnter={onDragEnter} onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}>
            { files.length === 0 ? <EmptyStateText value={areaMessage} /> : null }
            {
                files.map((item, index) => (<Item key={index} index={index} value={item} deleteFile={deleteFile} />))
            }
        </div>
    )
}

export default InputDropArea