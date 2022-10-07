import InputText from "./inputText"
import Button from "./button"

const AddItemForm = ({ handleSubmit, inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form>
      <InputText
        label="Añadir elemento"
        name="grocery-item-name"
        placeholder="Escribre el nombre del elemento..."
        onChange={handleInputChange}
        value={inputValue}
      />
      <Button handleClick={handleSubmit}>Añadir</Button>
    </form>
  )
}

export default AddItemForm
