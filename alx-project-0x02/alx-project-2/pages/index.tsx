import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-6">
        <p className="text-lg">Welcome to our New Project!</p>
      </main>
    </>
  );
}
