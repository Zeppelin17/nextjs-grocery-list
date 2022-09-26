import { useState } from "react"
import Head from "next/head"
import Heading1 from "../components/heading1"
import Heading2 from "../components/heading2"
import InputText from "../components/inputText"

export default function Home() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <Head>
        <title>Grocery list app</title>
        <meta name="description" content="Grocery list app with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading1>Welcome to my grocery list app</Heading1>
        <Heading2>Welcome to my grocery list app</Heading2>
        <InputText
          label="Input label"
          name="input-test"
          placeholder="Test field"
          onChange={handleInputChange}
          value={inputValue}
        />
      </main>
    </div>
  )
}
