import Head from 'next/head'
import Header from '@/components/layout/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Welcome to ALX Project 2" />
      </Head>
      <Header />
      <main className="p-6 text-center">
        <h2 className="text-xl font-medium">Hello, welcome to ALX Project 2 homepage 🎉</h2>
      </main>
    </div>
  )
}
