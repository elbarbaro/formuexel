import React, { useRef } from 'react'
import Input from './Input'
import correctIcon from './correct.svg'
import errorIcon from './error.svg'
import './DialogResult.css'

function DialogResult(props) {

    const {editorUrl, publishedUrl, result} = props

    const editorRef = useRef()
    const publishedRef = useRef()

    let className = 'DialogResult border-radius'
    if(result) className += ' border-success'
    else className += '  border-error'

    return (
        <div className={className}>
            <div className="image">
                <img src={result?correctIcon:errorIcon} alt="correct result"/>
            </div>
            <div className="dialog-body">
                <h2 className="text-center">{result?'Formulario creado':'Ocurrio un problema'}</h2>
                <p>Ahora puedes compartir los siguientes enlaces para editar o ver el formulario</p>
                <div className="dialog-actions">
                    <p>Editar</p>
                    <div>
                        <Input type="text" readOnly={true} value={editorUrl} ref={editorRef}/>
                        <button>Copy</button>
                    </div>
                </div>
                <div>
                    <p>Compartir</p>
                    <div>
                        <Input type="text" readOnly={true} value={publishedUrl} ref={publishedRef}/>
                        <button>Copy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DialogResult