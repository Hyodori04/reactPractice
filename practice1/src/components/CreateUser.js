import React, { useCallback, useContext, useRef } from 'react';
import useInputs from '../hooks/useInputs';
import { UserDispatch } from '../App'

function CreateUser() {

    const [{username, email}, onChange, reset] = useInputs({
        username: '',
        email: '',
    });

    const dispatch = useContext(UserDispatch);

    const nextId = useRef(4);

    const onCreate = useCallback(() => {

        const user = {
            id:nextId.current,
            username,
            email
        };
        dispatch({type:"ONCREATE", user})
        reset();
        nextId.current +=1;
    }, [dispatch, username, email, nextId, reset])
    
    return (
        <div>
            <input 
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input 
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    )

}

export default React.memo(CreateUser);