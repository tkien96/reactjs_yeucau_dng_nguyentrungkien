import React, { useState } from 'react';

function DomBasic () {
    const [text, setText] = useState('???');

    function handleChangeInput(str){
        setText(str)
    }

    return (
        <>
            <input type="text" id="fullname" onChange={ (e) => handleChangeInput(e.target.value) } /> <br/>
            <h3>Giá trị nhập của user: <span className="text">{ text }</span></h3>
        </>
    );
}

export default DomBasic;