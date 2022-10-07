const InputText = ({ label, name, placeholder, onChange, value }) => {
  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-blue-500"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-blue-500 block w-full p-2.5 placeholder-gray-400"
      />
    </>
  )
}

export default InputText
