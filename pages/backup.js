import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'relative',
    contentWrapper: 'flex h-screen relative justify-center flex-wrap items-center',
    copyContainer: 'w-1/2',
    title: 'relative text-black text-[40px] font-semibold',
    list: 'text-black text-2xl mt-[0.8rem] mb-[1.2rem]',
}

const Cards = () => {
    const [characters, setCharacters] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = async () => {
        const characterResponse = await fetch("https://api.disneyapi.dev/characters");
        const jsonObj = await characterResponse.json();
        console.log(jsonObj);
        setCharacters(jsonObj.data);
    }

    return (
        <div className={style.wrapper}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Disney Characters
                    </div>
                    <div> Search bar </div>
                    <div> Sort button </div>
                    <div style={{ display: "flex", flexDirection: "row", maxWidth: "100%", gap: 30, flexWrap: "wrap" }}>
                        {characters.map((character, index) => {
                            return (
                                <div className="card" style={{ width: "18rem"}} key={`character-${character.name}-${index}`}>
                                    <img src={character.imageUrl} className="card-img-top" style={{ width: "100%", height: 200, objectFit: "contain" }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{character.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards