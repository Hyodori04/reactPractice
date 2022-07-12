import logo from './logo.svg';
import './App.css';
import User from './components/User';


function App() {
  const user= {
    id: 1,
    username: 'velopert'
  };
  return (
      <User />
  );
}

export default App;
