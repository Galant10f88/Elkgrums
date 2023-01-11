import React from 'react'
import Link from 'next/link'
import Listings from '../components/test'

const style = {
    wrapper: 'relative h-[800vh]',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/2',
    title: 'relative text-black text-[40px] font-semibold',
    list: 'text-black text-2xl mt-[0.8rem] mb-[1.2rem]',
}

const Cards = () => {

    return (
        <div className={style.wrapper}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Disney Characters
                    </div>
                    <div> Search bar </div>
                    <div> Sort button </div>
                    <div> Cards </div>
                    <Listings/>
                </div>
            </div>
        </div>
    )
}

export default Cards