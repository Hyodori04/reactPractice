import './App.scss';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className="buttons">
          <Button size="large" onClick={() => console.log('클릭했음')}>Button</Button>
          <Button size="medium">Button</Button>
          <Button size="small">Button</Button>
      </div>
      <div className="buttons">
          <Button size="large" color="gray">Button</Button>
          <Button size="medium" color="gray">Button</Button>
          <Button size="small" color="gray">Button</Button>
      </div>
      <div className="buttons">
          <Button size="large" color="pink">Button</Button>
          <Button size="medium" color="pink">Button</Button>
          <Button size="small" color="pink">Button</Button>
      </div>
      <div className="buttons">
          <Button size="large" color="blue" outline>Button</Button>
          <Button size="medium" color="gray" outline>Button</Button>
          <Button size="small" color="pink" outline>Button</Button>
      </div>
      <div className="buttons">
          <Button size="large" color="blue" fullWidth>Button</Button>
          <Button size="medium" color="gray" fullWidth>Button</Button>
          <Button size="small" color="pink" fullWidth outline>Button</Button>
      </div>
    </div>
  );
}

export default App;
