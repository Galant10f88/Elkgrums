import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { RxDiscordLogo } from 'react-icons/rx'
import { RxTwitterLogo } from 'react-icons/rx'
import { RxInstagramLogo } from 'react-icons/rx'

const style = {
    connect: `flex h-26 w-full items-center justify-center border-t border-black text-blue-700`,
    social: 'flex items-center justify-center',
    discord: 'text-green-700 text-2xl px-4 font-bold hover:text-white border border-transparent bg hover:bg-transparent rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    insta: 'text-green-700 text-2xl px-4 font-bold hover:text-white border border-transparent bg hover:bg-transparent rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    twit: 'text-green-700 text-2xl px-4 font-bold hover:text-white border border-transparent bg hover:bg-transparent rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    boxy: 'bg-gradient-to-r from-green-500 via-orange-200 to-sky-400 w-screen rounded-none p-8 border border-transparent',
    media: 'relative text-gray-700 text-center text-[30px] font-semibold',
}


const Media = () => {
    return (
        <div className={style.connect}>
          <div className={style.boxy}>
            <div className={style.media}>
              Connect with Us!
            </div>
            <div className={style.social}>
                            <Link href='https://www.instagram.com/702pros/?hl=en'>
                                <div className={style.insta}><RxInstagramLogo/></div>
                            </Link>
                            <Link href='https://www.facebook.com/702pros/'>
                                <div className={style.discord}><RxDiscordLogo/></div>
                            </Link>
                            <Link href='https://twitter.com/702pros'>
                                <div className={style.twit}><RxTwitterLogo/></div>
                            </Link>
            </div>
          </div>
      </div>
    )
}

export default Media