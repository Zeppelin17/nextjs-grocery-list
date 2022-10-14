import GroceryListItem from "./groceryListItem"

const GroceryList = ({ groceries, handleDeleteItem }) => {
  return (
    <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3">
      {groceries.map((item) => (
        <GroceryListItem
          key={item}
          item={item}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  )
}

export default GroceryList
