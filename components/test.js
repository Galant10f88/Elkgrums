import { useEffect, useState } from 'react'
import React from 'react';
import Link from 'next/link'
import DisnCard from '../components/testCard'
import axios from 'axios'

const style = {
  wrapper: `mx-auto grid max-w-fit flex-1 grid-cols-1 gap-8 p-10 pt-24 md:grid-cols-2 md:pt-0 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5`,
  loading: `text-white text-2xl`
}



const Listings = () => {

  const [posts, setPosts] = React.useState([]);

  const getData = async () => {
    const response = await axios.get(
      'https://api.disneyapi.dev/characters'
    );
    console.log(response.data.results);
    setPosts(response.data.results);
  };

  console.log(posts)

  return (
    <div className = {style.wrapper}>
        <>
        {posts && posts.map && posts?.map((listing) => (
          <div
          key = {listing.name}
        >
          <a>
             <DisnCard listing = {listing}/>
          </a>
          </div>
        ))}
      </>
    </div>
  )
}

export default Listings

/*

const client = axios.create({
  baseURL: "https://api.disneyapi.dev/characters" 
});

const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get('?_limit=10').then((response) => {
         setPosts(response.data);
      });
   }, []);

  //const characters = 'https://api.disneyapi.dev/characters';

  const data = Array.from(posts);

  console.log(posts)

  */