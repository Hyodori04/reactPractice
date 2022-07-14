import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';


const AppBlock = styled.div `
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 3rem;
  }
`
function App() {

  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    setDialog(false);
  };

  const onCancel = () => {
    setDialog(false);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      <>
      <AppBlock>
          <ButtonGroup>
            <Button>Button</Button>
            <Button color="gray">Button</Button>
            <Button color="pink">Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="pink" size="small">Button</Button>
            <Button color="pink" size="medium">Button</Button>
            <Button color="pink" size="large">Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button outline >Button</Button>
            <Button size="small" outline>Button</Button>
            <Button color="pink" size="large">Button</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button outline fullWidth>Button</Button>
            <Button size="small" outline fullWidth>Button</Button>
            <Button onClick={onClick} color="pink" size="large" fullWidth>Button</Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={dialog}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
