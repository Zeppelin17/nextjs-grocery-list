import { useState } from "react"
import Icon from "./icon"

const GroceryListItem = ({ item, handleDeleteItem, handleToggleItem }) => {
  const [itemDone, setItemDone] = useState(item.done)
  const [itemHover, setItemHover] = useState(false)

  let doneStyle = itemDone
    ? "line-through border-blue-100 bg-gray-50"
    : "border-blue-500"
  let hoverStyle = itemHover ? "bg-blue-100" : "bg-blue-50"
  let itemActions = itemHover ? true : false

  const toggleItemHover = () => {
    const newItemHover = !itemHover
    setItemHover(newItemHover)
  }

  const handleCheck = () => {
    const newItemDone = !itemDone
    setItemDone(newItemDone)
    handleToggleItem(item)
  }

  const deleteItem = () => {
    handleDeleteItem(item)
  }

  return (
    <li
      onMouseEnter={toggleItemHover}
      onMouseLeave={toggleItemHover}
      onTouchStart={handleCheck}
      className={`flex justify-between p-2 mb-2 text-blue-500 rounded border ${hoverStyle} ${doneStyle}`}
    >
      <span>{item.name}</span>
      {itemActions && (
        <span className="flex space-x-4">
          <Icon icon="check" onClick={handleCheck} />{" "}
          <Icon icon="trash" onClick={deleteItem} />
        </span>
      )}{" "}
    </li>
  )
}

export default GroceryListItem
