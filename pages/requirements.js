import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'relative',
    container: 'before:content-[""] before:bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://www.fieldandstream.com/uploads/2021/10/29/ElkSnow.jpg?auto=webp")] before:bg-cover before:bg:-center before:opacity-50 before:blur',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/2',
    title: 'relative text-black text-[40px] font-semibold',
    list: 'text-black text-2xl mt-[0.8rem] mb-[1.2rem]',
}

const Req = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Requirements list
                    </div>
                    <ul>
                        <li className={style.list}>-Build a nice website with Elementor. I did not do that. I built this with React. Fail</li>
                        <li className={style.list}>-Make a new homePage. I did that. Success!</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Req