import React, { useState } from 'react';

function FormControl ({ label, type, placeholder, ...restParams }) {

    const [toogleType, setType] = useState(true)

    function handleType () {
        setType(!toogleType)
    }

    return (
        <div className="form-control">
            <label>{ label }</label>
            { type === 'password' && <i onClick={ (e) => handleType() } className="toggle-password ion-eye" /> }
            <input type={toogleType ? 'password' : 'text'} placeholder={placeholder} { ...restParams } />
        </div>
    )
}

export default FormControl