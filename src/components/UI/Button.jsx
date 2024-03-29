const Button = ({ children, onClick = () => {}, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded'>
      {children}
    </button>
  );
};

export default Button;
