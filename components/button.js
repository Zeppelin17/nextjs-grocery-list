const Button = ({ handleClick, children }) => {
  return (
    <button
      onClick={handleClick}
      className="mb-2 py-1 block text-sm text-gray-100 bg-blue-500 px-2 border border-blue-500 rounded hover:bg-gray-100 hover:text-blue-500 hover:shadow-sm"
    >
      {children}
    </button>
  )
}

export default Button
