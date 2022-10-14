const getLocalStorageData = () => {
  if (typeof window !== "undefined") {
    const groceryList = localStorage.getItem("groceryList")
    return groceryList ? JSON.parse(groceryList) : []
  }
  return []
}

const setLocalStorageData = (newGroceryList) => {
  if (typeof window !== "undefined" && Array.isArray(newGroceryList)) {
    localStorage.setItem("groceryList", JSON.stringify(newGroceryList))
  }
}

export { getLocalStorageData, setLocalStorageData }
