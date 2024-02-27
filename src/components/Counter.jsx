import { useSelector } from 'react-redux';

const Counter = () => {
  // nuskaidom redux data
  const counterValFromStore = useSelector((state) => {
    console.log('state ===', state);
    return 5;
  });
  console.log('counterValFromStore ===', counterValFromStore);
  return (
    <div className='bg-white border p-6 rounded-md inline-block mt-7 shadow-md'>
      <h2 className='text-2xl'>Push ups</h2>
      <p className='text-3xl text-center mb-4'>0</p>
      <div className='flex gap-3'>
        <button className='border border-indigo-800 rounded-md px-2 py-1 bg-indigo-300 text-white'>
          Up
        </button>
        <button className='border border-indigo-800 rounded-md px-2 py-1 bg-indigo-300 text-white'>
          Down
        </button>
      </div>
    </div>
  );
};

export default Counter;
