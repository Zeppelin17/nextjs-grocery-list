const Button = ({ handleClick, children, btnType = false }) => {
  const btnStyles =
    btnType === "secondary"
      ? "text-blue-500 bg-gray-100 hover:bg-gray-200"
      : "text-gray-100 bg-blue-500 hover:bg-gray-100 hover:text-blue-500"

  return (
    <button
      onClick={handleClick}
      className={`mb-2 py-1 px-2 block text-sm border border-blue-500 rounded ${btnStyles} hover:shadow-sm`}
    >
      {children}
    </button>
  )
}

export default Button
