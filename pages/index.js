import Head from "next/head"
import Heading1 from "../components/heading1"
import GroceriesManager from "../components/groceriesManager"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Grocery list app</title>
        <meta name="description" content="Grocery list app with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Heading1>Tu lista de la compra</Heading1>
        <GroceriesManager />
      </main>
    </div>
  )
}
