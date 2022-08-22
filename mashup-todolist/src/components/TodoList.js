import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../context/ToDoProvider';

const TodoListContainer = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto;
`

export default function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListContainer>
        {todos.map(item=>(
            <TodoItem 
              text={item.text} 
              done={item.done} 
              key={item.id} 
              id={item.id}
            />
          ))}
    </TodoListContainer>
  )
}
