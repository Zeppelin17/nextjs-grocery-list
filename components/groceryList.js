import GroceryListItem from "./groceryListItem"

const GroceryList = ({ groceries, handleDeleteItem, handleToggleItem }) => {
  console.log(groceries)
  return (
    <ul className="grid grid-cols-2 gap-2 lg:grid-cols-3">
      {groceries.map((item) => (
        <GroceryListItem
          key={item.name}
          item={item}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </ul>
  )
}

export default GroceryList
