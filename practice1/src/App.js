import React, { useMemo, useReducer } from 'react';
import './App.css';
import Counter from './components/Counter';
import Hello from './components/Hello'
import Wrapper from './components/Wrapper';
import InputSample from './components/InputSample';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function countActiveUsers(users) {

  console.log('활성 사용자 수를 세는중...');
  return users.filter(user=>user.active).length;

}

const initialState = {

  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gamil.com',
      active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@gamil.com',
        active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "ONCREATE" :
      return {
        users: [...state.users, action.user]
      }

    case "ONTOGGLE" :
      return {
        users: state.users.map( user => user.id === action.id ? {...user, active: !user.active} : user)
      }
    case "ONREMOVE" :
      return {
        users: state.users.filter(user => user.id !== action.id)
      }
    default :
      return state;
  }
};

export const UserDispatch = React.createContext(null);

function App() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users } = state;

  /* these functions are replaced by Context(Provider)
  const onToggle = useCallback((id) => {
    dispatch({type:"ONTOGGLE", id})
  }, [])

  const onRemove = useCallback((id) => {
    dispatch({type:"ONREMOVE", id})
  }, []); */


  const count = useMemo( () => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <Wrapper>
        <Hello 
          name="효석" 
          color="blue" 
          isSpecial
        />
        <Hello color="white" />
        <Counter />
        <InputSample />
        <UserList users={users} />
        <CreateUser />
        <div>활성 사용자수 : {count}</div>
      </Wrapper>
    </UserDispatch.Provider>
  );
}

export default App;
