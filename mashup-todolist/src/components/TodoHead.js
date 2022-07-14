import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    
    padding : 48px 32px 24px 24px;

    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        font-size: 21px;
        color: #868e96;
    }

    .tasks-left {
        margin-top: 36px;
        font-size: 18px;
        font-weight: 600;
        color: #20c997;
    }
`




function TodoHead() {
  return (
    <Container>
        <h1>2019년 7월 10일</h1>
        <div className="day">수요일</div>
        <div className="tasks-left">할 일 2개 남음</div>
    </Container>
  )
}

export default TodoHead