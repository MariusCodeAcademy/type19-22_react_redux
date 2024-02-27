import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import './styles/App.css';
import Login from './components/Login';

const App = () => {
  const counter = useSelector((state) => state.counter.counterValue);
  return (
    <div className='App container mx-auto px-8 '>
      <Header />
      <h1 className='text-3xl font-bold underline'>Hello redux ({counter})</h1>
      <hr />
      <Login />
      <Counter />
    </div>
  );
};

export default App;
