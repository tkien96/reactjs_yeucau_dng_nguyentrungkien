import React, { useState } from 'react';

function FormControl ({ label, type, ...restParams }) {

    const [ipType, setType] = useState(type)
    const [icClass, setClass] = useState('toggle-password ion-eye-disabled')
    
    function handleType () {
        if(ipType === 'password'){
            setType('text')
            setClass('toggle-password ion-eye')
        }
        if(ipType === 'text'){
            setType('password')
            setClass('toggle-password ion-eye-disabled')
        }
    }

    return (
        <div className="form-control">
            <label>{ label }</label>
            { type === 'password' && <i onClick={ () => handleType() } className={ icClass } /> }
            <input type={ ipType } { ...restParams } />
        </div>
    )
}

export default FormControl