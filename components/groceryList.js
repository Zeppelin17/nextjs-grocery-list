const GroceryList = ({ groceries }) => {
  return (
    <ul>
      {groceries.map((item) => (
        <li key={item} className="p-2 mb-2 bg-blue-50 text-blue-500 rounded">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default GroceryList
