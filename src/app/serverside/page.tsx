import React from 'react';

type Data = {
  id: number,
  name: string,
  type: string,
  avalible: boolean,
}

const page = async () => {
  const url = await fetch("https://simple-books-api.glitch.me/books/")
  const data: Data[] = await url.json();
  return (
    <div className='bg-gray-800'>
     <div className='pt-4 w-full justify-center items-center'>
       <div className='flex justify-center text-center p-4 text-white sm:p-6'>
          SERVER SIDE DATA FETCHING
       </div>
       <div className='py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mx-10'>
        {data.map((todo, index) => 
        <div key={index} className='w-full text-center border py-6 bg-slate-300 space-y-4 hover:scale-[1.05] rounded-xl'>
          <p className='font-bold'>{todo.name}</p>
          <p className='pr-2'>Type: {todo.type}</p>
          <p
            className={`font-bold mb-4 ${
              todo.avalible ? "text-green-500" : "text-green-500"
                }`}
              >
             {todo.avalible ? "Available" : "Available"}        
          </p>
        </div>
        )};
       </div>
     </div>
    </div>
  );
};

export default page
