import InputText from "./inputText"
import Button from "./button"

const AddItemForm = ({
  handleSubmit,
  handleClearList,
  inputValue,
  setInputValue,
}) => {
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
      <span className="flex flex-col">
        <Button handleClick={handleSubmit}>Añadir</Button>
        <Button handleClick={handleClearList} btnType="secondary">
          Limpiar Lista
        </Button>
      </span>
    </form>
  )
}

export default AddItemForm
