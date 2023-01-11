import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { RxDiscordLogo } from 'react-icons/rx'
import { RxTwitterLogo } from 'react-icons/rx'
import { RxInstagramLogo } from 'react-icons/rx'

//bg-gradient-to-r from-sky-500 via-orange-200 to-yellow-600

const style = {
    footer: `flex h-24 w-full items-center justify-center border-t border-black text-blue-700`,
    social: 'flex items-center justify-center',
    discord: 'text-white text-2xl px-4 font-bold hover:text-fuchsia-500 border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-full shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    insta: 'text-white text-2xl px-4 font-bold hover:text-fuchsia-500 border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-full shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    twit: 'text-white text-2xl px-4 font-bold hover:text-fuchsia-500 border border-transparent hover:border-cyan-300 bg hover:bg-[#04111d] rounded-full shadow-lg hover:shadow-cyan-400/90 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    boxy: 'grid grid-rows-1 bg-gradient-to-r from-blue-500 via-orange-200 to-yellow-400 w-screen rounded-none p-8 border border-transparent',
    media: 'relative text-gray-400 text-center text-[30px] font-semibold',
    row: 'grid grid-rows-2'
}


const Footer = () => {
    return (
        <div className={style.footer}>
        <a
          className="flex items-center justify-center gap-2"
          href="https://disneyapi.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with{' '}
          <Image src="/magic.png" alt="magic Logo" width={60} height={60} />
          Magic
        </a>
        </div>
    )
}

export default Footer