import React from 'react'
//import './Item.css'
import excelIcon from './excel.svg'

function Item(props) {
    return (
        <div className="Item flex justify-around items-center bg-white rounded m-1 px-2 py-2">
            <div className="wrap-img mx-2">
                <img className="w-8" src={excelIcon} alt={props.value.name}/>
            </div>
            <div className="wrap-text mx-2 p-1 flex-1">
                <p className="text-base">{props.value.name}</p>
                <p className="text-sm">{props.value.size}</p>
            </div>
        </div>
    )
}

export default Item