import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grocery list app</title>
        <meta name="description" content="Grocery list app with NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to my grocery list app</h1>
      </main>
    </div>
  )
}
