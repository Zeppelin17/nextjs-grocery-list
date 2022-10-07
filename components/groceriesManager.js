import { useState } from "react"
import GroceryList from "./GroceryList"
import Heading2 from "./heading2"
import AddItemForm from "./addItemForm"
import ResultMessage from "./resultMessage"

const GroceriesManager = () => {
  const [inputValue, setInputValue] = useState("")
  const [groceryList, setGroceryList] = useState([])
  const [resultMessage, setResultMessage] = useState("")
  const [messageType, setMessageType] = useState("ok")

  const handleSubmit = (e) => {
    e.preventDefault()
    let msg = ""
    let newGroceryList = [...groceryList]
    const itemExist = newGroceryList.find((item) => item === inputValue)
    if (itemExist) {
      setMessageType("error")
      msg = `¡Ya hay ${inputValue} en la lista!`
    } else {
      setMessageType("ok")
      msg = `Añadido ${inputValue} en la lista`

      newGroceryList.push(inputValue)
      setGroceryList(newGroceryList)
    }
    setResultMessage(msg)
    setInputValue("")
  }

  return (
    <>
      <div className="flex flex-col space-y-8 md:grid md:items-start md:gap-8 md:space-y-0 md:grid-cols-2 lg:grid-cols-3">
        <section className="p-4 border-2 border-blue-500 rounded shadow-md md:col-span-1 lg:col-span-1">
          <Heading2>Añade elementos a la lista</Heading2>
          <AddItemForm
            handleSubmit={handleSubmit}
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
            <GroceryList groceries={groceryList} />
          </section>
        )}
      </div>
    </>
  )
}

export default GroceriesManager
