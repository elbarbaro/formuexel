import React from 'react'
import Item from './Item'
import './InputDropArea.css'

function InputDropArea(props) {

    const {files, setFiles} = props

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