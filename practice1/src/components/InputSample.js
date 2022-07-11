import React, { useState, useRef } from 'react';

function InputSample() {
    const [ inputs, setInputs ]= useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onInit = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    }
    
    const onChange = (e) => {
        const { value, name } = e.target
        setInputs({...inputs, [name] : value})
    }


    return (
        <div>
            <input name="name" placeholder='이름' onChange={onChange} ref={nameInput} value={name} />
            <input name="nickname" placeholder='닉네임' onChange={onChange} value={nickname} />
            <button onClick={onInit}>초기화</button>
            <div>
                <b>이름: {name}  닉네임 : {nickname}</b>
            </div>
        </div>
    )
}

export default React.memo(InputSample);