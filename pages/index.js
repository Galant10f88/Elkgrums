//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

//min-h-screen

const style = {
  container: 'before:content-[""] before:bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://disneyconnect.com/app/uploads/sites/4/2022/06/0901ZQ_0332MS_JRoh-scaled.jpg")] before:bg-cover before:bg:-center before:opacity-40 before:blur',
  contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
}

const Home = () => {
  return (
    <div className="relative flex h-[130vh] flex-col items-center justify-center py-2">
      <div className={style.container}>
      <div className={style.contentWrapper}>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://area15.com/">
            Disney15!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Visit the characters page to find all your favorite Disney Characters!
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="../../characters"
            className="mt-6 w-96 rounded-xl border border-yellow-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Disney Characters &rarr;</h3>
            <p className="mt-4 text-xl">
              Find all your favorite characters from the Disney franchise.
            </p>
          </a>

          <a
            href="../../requirements"
            className="mt-6 w-96 rounded-xl border border-yellow-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Requirements &rarr;</h3>
            <p className="mt-4 text-xl">
              Requirements for this application exercise.
            </p>
          </a>

          <a
            href="https://www.area15.com/"
            className="mt-6 w-96 rounded-xl border border-yellow-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Visit Area15 &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and enjoy the most interesting place in Las Vegas.
            </p>
          </a>

          <a
            href="https://www.disney.com/"
            className="mt-6 w-96 rounded-xl border border-yellow-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Visit Disney &rarr;</h3>
            <p className="mt-4 text-xl">
              Click here to visit the most magical place on Earth!
            </p>
          </a>
        </div>
      </main>
      </div>
      </div>
    </div>
  )
}

export default Home
