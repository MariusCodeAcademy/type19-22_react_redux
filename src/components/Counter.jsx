import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';

const Counter = () => {
  // nuskaidom redux counter data
  const counterValFromStore = useSelector((state) => state.counterValue);
  console.log('counterValFromStore ===', counterValFromStore);

  // atlikti veiksma su redux naudojam dispatch
  const dispatch = useDispatch();

  const goUp = () => {
    dispatch({ type: 'UP' });
  };

  return (
    <div className='bg-white border p-6 rounded-md inline-block mt-7 shadow-md'>
      <h2 className='text-2xl'>Push ups</h2>
      <p className='text-3xl text-center mb-4'>{counterValFromStore}</p>
      <div className='flex gap-3'>
        <Button onClick={goUp}>Up</Button>
        <Button>Down</Button>
      </div>
    </div>
  );
};

export default Counter;
