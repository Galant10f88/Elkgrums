import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'relative',
    container: 'before:content-[""] before:bg-black before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url("https://akns-images.eonline.com/eol_images/Entire_Site/20121016/634.mm.cm.111612.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top")] before:bg-cover before:bg:-center before:opacity-30 before:blur',
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
                        <li className={style.list}>-Create a React application that pulls data from this API (https://disneyapi.dev/) ... Click the wand below to open api</li>
                        <li className={style.list}>-Output the responses as Cards using the Bootstrap 5 Framework</li>
                        <li className={style.list}>-Add an input box to filter the Cards based on the character's name</li>
                        <li className={style.list}>-Add a sort function to sort the Cards alphabetically</li>
                        <li className={style.list}>-Provide a link to a Git Repo with the relevant files and build instructions</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Req