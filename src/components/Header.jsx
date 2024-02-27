import { useSelector } from 'react-redux';

export default function Header() {
  const counter = useSelector((state) => state.counter.counterValue);
  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  console.log('isAuth ===', isAuth);
  return (
    <header className='bg-slate-300'>
      <div className='container flex justify-between items-center'>
        <a to={'/'}>
          <h2 className='text-3xl leading-none p-3'>Logo</h2>
        </a>
        <nav className='flex items-center'>
          <a className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/'}>
            Counters ({counter})
          </a>
          <a className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/'}>
            Home
          </a>
          {isAuth === false && (
            <a className='text-lg p-3 hover:bg-slate-700 hover:text-white' to={'/login'}>
              Login
            </a>
          )}
          {isAuth && (
            <span className='text-lg p-3 hover:bg-slate-700 hover:text-white'>Logout</span>
          )}
        </nav>
      </div>
    </header>
  );
}
