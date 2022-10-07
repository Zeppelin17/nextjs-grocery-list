import GroceryListItem from "./groceryListItem"

const GroceryList = ({ groceries, handleDeleteItem }) => {
  return (
    <ul>
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
