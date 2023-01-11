import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//import { AiOutlineSearch } from 'react-icons/ai'
//import { CgProfile } from 'react-icons/cg'
import mick from '../public/mick.png'

const style = {
    wrapper: 'justify-between sticky top-0 z-50 bg-[#04111d] bg-opacity-20 w-screen px-[1.2rem] py-4 flex shadow-xl backdrop-blur-sm bg-gradient-to-r from-blue-500/70 via-white/50 to-yellow-300/70',
    logoContainer: 'flex items-center cursor-pointer',
    logoText: 'ml-[0.8rem] text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white font-semibold text-4xl',
    headerItems: 'flex items-center justify-end',
    headerBut: 'text-xl text-blue-700 px-2 font-bold hover:text-orange-500 border border-transparent bg hover:bg-transparent transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    cheating: 'text-transparent px-4 font-bold',
}


const Header = () => {
    return <div className={style.wrapper}>
        <Link href="/">
            <div className={style.logoContainer}>
                    <Image src={mick} height={50} width={50} alt='' />
                    <div className={style.logoText}>Disney15</div>
            </div>
        </Link>
            <div className={style.headerItems}>
                <Link href="../../characters">
                    <div className={style.headerBut}> Characters </div>
                </Link>
                <Link href="../../dev">
                    <div className={style.cheating}> . </div>
                </Link>
                <Link href="../../requirements">
                    <div className={style.headerBut}> Requirements </div>
                </Link>
                <Link href="../../testpage">
                    <div className={style.cheating}> . </div>
                </Link>
            </div>
    </div>
}

export default Header