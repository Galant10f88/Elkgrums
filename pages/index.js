//import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

//min-h-screen

const style = {
  container: 'before:content-[""] before:bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://www.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg")] before:bg-cover before:bg:-center before:opacity-60 before:blur',
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
          <a className="text-green-600" href="https://area15.com/">
            ElkGrums Coffee!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Best coffee on this side of the Mississippi.
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://www.fake-coffee.com/"
            className="mt-6 w-96 rounded-xl border border-green-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Order Coffee &rarr;</h3>
            <p className="mt-4 text-xl">
              This is the best place to buy coffee if you don't hate dogs.
            </p>
          </a>

          <a
            href="../../requirements"
            className="mt-6 w-96 rounded-xl border border-green-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Requirements &rarr;</h3>
            <p className="mt-4 text-xl">
              Requirements for this application exercise.
            </p>
          </a>

          <a
            href="https://702pros.com/"
            className="mt-6 w-96 rounded-xl border border-green-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">702 Pros &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover the best place in the 702 for websites.
            </p>
          </a>

          <a
            href="https://www.twofolio.com/"
            className="mt-6 w-96 rounded-xl border border-green-600 p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">TwoFolio &rarr;</h3>
            <p className="mt-4 text-xl">
               TwoFolio for Powerful Property Manager Software Solutions!
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
