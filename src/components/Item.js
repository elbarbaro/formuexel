import React from 'react'
import './Item.css'
import excelIcon from './excel.svg'

function Item(props) {
    return (
        <div className="Item">
            <div className="wrap-img">
                <img src={excelIcon} alt={props.value.name}/>
            </div>
            <div className="wrap-text">
                <p>{props.value.name}</p>
                <p>{props.value.size}</p>
            </div>
        </div>
    )
}

export default Item