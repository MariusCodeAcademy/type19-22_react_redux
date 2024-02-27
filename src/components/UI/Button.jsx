const Button = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className='border border-indigo-800 rounded-md px-2 py-1 bg-indigo-300 text-white'>
      {children}
    </button>
  );
};

export default Button;
