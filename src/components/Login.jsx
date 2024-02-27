import Button from './UI/Button';

const Login = () => {
  const hangleLogin = (ev) => {
    ev.preventDefault();
    console.log('pateikta');
  };
  return (
    <div>
      <h2>Login</h2>
      <form noValidate onSubmit={hangleLogin} className='flex flex-col gap-3 md:w-1/2'>
        <input
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
    </div>
  );
};

export default Login;
// forma su email ir password

// susieti formos pateikima su funkcija ir sutbdyti perkrovima

// pateikiant forma atlikti login veiksma is redux
