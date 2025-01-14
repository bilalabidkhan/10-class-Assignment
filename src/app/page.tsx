import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-slate-400 pt-16 pb-24">
       <div className="text-center pt-28">
         <button className="border rounded-xl pt-4 pb-4 pl-2 pr-2 lg:pl-10 lg:pr-10 bg-black text-white hover:bg-white hover:text-black">
          <Link href={"/clientside"}>Client Side Data</Link>
         </button> 
       </div> 
       <div className="text-center pt-6">
         <button className="border rounded-xl pt-4 pb-4 pl-2 pr-2 lg:pl-10 lg:pr-10 bg-black text-white hover:bg-white hover:text-black">
          <Link href={"/serverside"}>Server Side Data</Link>
         </button>
       </div>
    </div>
  ); 
}
