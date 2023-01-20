import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
//import { AiOutlineSearch } from 'react-icons/ai'
//import { CgProfile } from 'react-icons/cg'
import elk from '../public/bElk.png'

const style = {
    wrapper: 'justify-between sticky top-0 z-50 bg-[#04111d] bg-opacity-20 w-screen px-[1.2rem] py-4 flex shadow-xl backdrop-blur-sm bg-gradient-to-r from-green-500/70 via-white/50 to-green-300/70',
    logoContainer: 'flex items-center cursor-pointer',
    logoText: 'ml-[0.8rem] text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-black font-semibold text-4xl',
    headerItems: 'flex items-center justify-end',
    headerBut: 'text-xl text-black px-2 font-bold hover:text-sky-500 border border-transparent bg hover:bg-transparent transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer',
    hidden: 'text-transparent px-4 font-bold',
}


const Header = () => {
    return <div className={style.wrapper}>
        <Link href="/">
            <div className={style.logoContainer}>
                    <Image src={elk} height={50} width={50} alt='' />
                    <div className={style.logoText}>ElkGrums Coffee</div>
            </div>
        </Link>
            <div className={style.headerItems}>
                <Link href="https://www.fake-coffee.com/">
                    <div className={style.headerBut}> Order </div>
                </Link>
                <Link href="../../dev">
                    <div className={style.hidden}> . </div>
                </Link>
                <Link href="https://702pros.com/">
                    <div className={style.headerBut}> About Us </div>
                </Link>
                <Link href="../../poke">
                    <div className={style.hidden}> . </div>
                </Link>
            </div>
    </div>
}

export default Header