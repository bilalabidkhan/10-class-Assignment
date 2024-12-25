"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface Data {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: number,
};

const page = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false)
  useEffect (() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
    const fetchData = async () => {
     const response = await fetch (
        "https://fakestoreapi.com/products"
     );
     const parsedResponse: Data[] =await response.json();
     console.log("todos >>>", parsedResponse);
     setData(parsedResponse);
    };
    fetchData();  
  }, []);
    return (
    <div className='bg-slate-300'>
      <div className='font-extrabold text-center pt-10'>
        CLIENT SIDE DATA FETCHING
      </div>
     <div className='w-full container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]  '>
      {data.map((todo, index) => (
        <div className='flex justify-center items-center border m-10 bg-white hover:backdrop: rounded-xl'>
          <div key={index} className='w-full shadow-lg to-inherit py-6 sm:py-8 md:py-10 lg:py-12 hover:scale-[1.05]'>
            <div className='h-[140px] w-full text-balance'>
            <Image src={todo.image} alt={todo.title} width={100} height={100} className='w-[80px] bg-cover ml-20'></Image>
            </div>
            <p className='font-semibold ml-4 text-gray-400'>Id: {todo.id}</p>
            <p className='font-bold ml-4 text-black'>Title: {todo.title}</p>
            <p className='font-medium text-base text-black line-clamp-2 overflow-hidden ml-4'>Description: {todo.description}</p>
            <p className='font-medium ml-4 text-black'>Category: {todo.category}</p>
            <p className='font-medium ml-4 text-black'>Price: {todo.price}</p>
            <div className='pt-4'>
              <button className='p-4 ml-4 border rounded-2xl text-white bg-black hover:bg-green-400'>Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default page
