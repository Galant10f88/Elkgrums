import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'relative h-[130vh]',
    title: 'relative text-black text-[40px] font-semibold items-center',
    name: 'text-green-500',
    em: 'text-green-500 text-lg',
}

const Req = () => {
    return (
        <div className={style.wrapper}>
                    <div className={style.title}>
                        Developed by <span className={style.name}> Galant </span> 🍀
                    </div>
                    <div className={style.em}>
                        Pythondev90@yahoo.com
                    </div>
                </div>
    )
}

export default Req