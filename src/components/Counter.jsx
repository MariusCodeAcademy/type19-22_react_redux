import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import { cActions } from '../store';

const Counter = () => {
  // nuskaidom redux counter data
  const counterValFromStore = useSelector((state) => state.counterValue);
  console.log('counterValFromStore ===', counterValFromStore);
  // pasiimti showCounter reiksme
  const toShow = useSelector((state) => state.showCounter);
  console.log('toShow ===', toShow);
  // atlikti veiksma su redux naudojam dispatch
  const dispatch = useDispatch();

  const goUp = () => {
    // dispatch({ type: 'UP' });
    dispatch(cActions.up()); // pridadamas unikalus id
  };

  // goDown
  const goDown = () => {
    dispatch({ type: 'DOWN' });
  };
  // padidinti reiksme argumentu
  const upBy = (arg) => {
    dispatch({ type: 'UP_BY', payload: arg });
  };

  const toggleLabel = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className='bg-white border p-6 rounded-md inline-block mt-7 shadow-md'>
      <Button onClick={toggleLabel}>toggle label</Button>
      {toShow && (
        <>
          <h2 className='text-2xl'>Push ups</h2>
          <p className='text-3xl text-center mb-4'>{counterValFromStore}</p>
        </>
      )}
      <div className='flex gap-3'>
        <Button onClick={goUp}>Up</Button>
        <Button onClick={goDown}>Down</Button>
        <Button onClick={() => upBy(7)}>7Up</Button>
      </div>
    </div>
  );
};

export default Counter;
