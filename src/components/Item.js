import React from 'react'
//import './Item.css'
import excelIcon from './excel.svg'

function Item(props) {

    const { index, deleteFile } = props

    const deleteAction = (e) => {
        deleteFile(index)
    }

    return (
        <div className="Item flex justify-around items-center bg-white rounded m-1 px-2 py-2">
            <div className="wrap-img mx-2">
                <img className="w-8" src={excelIcon} alt={props.value.name}/>
            </div>
            <div className="wrap-text mx-2 p-1 flex-1">
                <p className="text-base">{props.value.name}</p>
                <p className="text-sm">{props.value.size}</p>
            </div>
            <button
                className="w-8 text-red-500 hover:text-red-900 focus:outline-none"
                title="Eliminar"
                onClick={deleteAction}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    )
}

export default Item