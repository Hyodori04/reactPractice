import React, { useContext, useCallback } from 'react';
import { UserDispatch } from '../App'

const User = React.memo( function User({ user }) {
    const dispatch = useContext(UserDispatch);

    const onToggle = useCallback(() => {
        dispatch({type:"ONTOGGLE", id:user.id})
    }, [dispatch, user.id]);
    
    const onRemove = useCallback(() => {
        dispatch({type:"ONREMOVE", id:user.id})
    }, [dispatch, user.id]);

    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green': 'black'
                }}
                onClick={onToggle}
            >
                {user.username}
            </b> 
            <span>({user.email})</span>
            <button onClick={onRemove} >삭제</button>
        </div>
    )
});

function UserList({users}) {
    
    return (
        <>
        {users.map((user) => {
            return(
                <User user={user} key={user.id} />
            );
        })}
        </>
    );

}
// key 의 중요성 키가 없으면 추가 삭제시, 기존의 것들을 밀어내거나 당겨오는 방식으로 수정
// 키가 있으면 밀어내거나 당겨오는 리렌더링 없이 원하는 자리에 추가된 컴포넌트만 추가딘다.
export default React.memo(UserList);