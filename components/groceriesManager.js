import { useState, useEffect } from "react"
import GroceryList from "./GroceryList"
import Heading2 from "./heading2"
import AddItemForm from "./addItemForm"
import ResultMessage from "./resultMessage"
import { getLocalStorageData, setLocalStorageData } from "../apis/localStorage"

const GroceriesManager = () => {
  const [inputValue, setInputValue] = useState("")
  const [groceryList, setGroceryList] = useState([])
  const [resultMessage, setResultMessage] = useState("")
  const [messageType, setMessageType] = useState("ok")

  useEffect(() => {
    setGroceryList(getLocalStorageData())
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    let msg = ""
    let newGroceryList = [...groceryList]
    const itemExist = newGroceryList.find((item) => item.name === inputValue)
    if (itemExist) {
      setMessageType("error")
      msg = `¡Ya hay ${inputValue} en la lista!`
    } else {
      setMessageType("ok")
      msg = `Añadido ${inputValue} en la lista`

      newGroceryList.push({ name: inputValue, done: false })
      setGroceryList(newGroceryList)
      setLocalStorageData(newGroceryList)
    }
    setResultMessage(msg)
    setInputValue("")
  }

  const handleClearList = (e) => {
    e.preventDefault()
    setGroceryList([])
    setLocalStorageData([])
  }

  const handleDeleteItem = (item) => {
    const newGroceryList = groceryList.filter(
      (listItem) => listItem.name != item.name
    )
    setGroceryList(newGroceryList)
    setLocalStorageData(newGroceryList)

    setMessageType("ok")
    const msg = `Eliminado ${item} de la lista`
    setResultMessage(msg)
  }

  const handleToggleItem = (item) => {
    const newItem = groceryList.find((listItem) => listItem.name === item.name)
    newItem.done = !newItem.done
    const newGroceryList = [...groceryList]
    setGroceryList(newGroceryList)
    setLocalStorageData(newGroceryList)
  }

  return (
    <>
      <div className="flex flex-col space-y-8 md:grid md:items-start md:gap-8 md:space-y-0 md:grid-cols-2 lg:grid-cols-3">
        <section className="p-4 border-2 border-blue-500 rounded shadow-md md:col-span-1 lg:col-span-1">
          <Heading2>Añade elementos a la lista</Heading2>
          <AddItemForm
            handleSubmit={handleSubmit}
            handleClearList={handleClearList}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <ResultMessage messageType={messageType}>
            {resultMessage}
          </ResultMessage>
        </section>
        {groceryList.length > 0 && (
          <section className="p-4 border-2 border-blue-500 rounded shadow-md md:col-span-1 lg:col-span-2">
            <Heading2>Tu lista actual</Heading2>
            <GroceryList
              groceries={groceryList}
              handleDeleteItem={handleDeleteItem}
              handleToggleItem={handleToggleItem}
            />
          </section>
        )}
      </div>
    </>
  )
}

export default GroceriesManager
