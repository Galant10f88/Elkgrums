import { useEffect, useState } from 'react'
import Link from 'next/link'
import NFTCard from '../components/testCard'

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`,
  loading: `text-white text-2xl`
}

const Listings = () => {
    /*
  const marketplace = useMarketplace("0x8F449a9ea0F414140C7c06Af4A63BD1FB2DAE2Da")
  const {data: listings, isLoading: loadingListings} = useActiveListings(marketplace)

  useEffect(()=> {
    getListings()
  }, [])
  
  const getListings = async () => {
    try {
      const list = await marketplace.getActiveListings()

      setListings(list)
    } catch (error) {
      console.log(error)
    }
  }
  */

  const characters = 'https://api.disneyapi.dev/characters';

  const data = Array.from(characters);

  return (
    <div className = {style.wrapper}>
        <>
        {data?.map((listing) => (
          <a>
             <NFTCard listing = {listing}/>
          </a>
        ))}
      </>
    </div>
  )
}

export default Listings