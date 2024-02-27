import Counter from './components/Counter';
import Header from './components/Header';
import './styles/App.css';

const App = () => {
  return (
    <div className='App container mx-auto px-8 '>
      <Header />
      <h1 className='text-3xl font-bold underline'>Hello redux</h1>
      <hr />
      <Counter />
    </div>
  );
};

export default App;
