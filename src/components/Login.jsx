import { useDispatch, useSelector } from 'react-redux';
import Button from './UI/Button';
import { authAction } from '../store';
import { useRef } from 'react';

const Login = () => {
  const emailRef = useRef();
  const loginStatus = useSelector((state) => state.auth.isLoggedIn);
  const email = useSelector((state) => state.auth.email);

  const dispatch = useDispatch();

  const hangleLogin = (ev) => {
    ev.preventDefault();
    console.log('pateikta');
    console.log('emailRef.current ===', emailRef.current.value);
    dispatch(authAction.login(emailRef.current.value));
  };
  return (
    <div>
      <h2 className='text-2xl my-3'>Login</h2>
      <p className='tex-2xl'>Login status is: {loginStatus.toString()}</p>
      {loginStatus && (
        <h2 className='text-3xl border rounded-md text-center text-green-700 bg-green-200 py-5'>
          You are logged in as {email}
        </h2>
      )}

      {loginStatus === false && (
        <form noValidate onSubmit={hangleLogin} className='flex flex-col gap-3 md:w-1/2'>
          <input
            ref={emailRef}
            type='email'
            placeholder='Email'
            className='border border-gray-300 rounded-md p-2 mb-2'
          />
          <input
            type='password'
            placeholder='Password'
            className='border border-gray-300 rounded-md p-2 mb-2'
          />
          <Button type='submit'>Submit</Button>
        </form>
      )}
    </div>
  );
};

export default Login;
// forma su email ir password

// susieti formos pateikima su funkcija ir sutbdyti perkrovima

// pateikiant forma atlikti login veiksma is redux
