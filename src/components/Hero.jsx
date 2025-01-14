'use client'
import dynamic from "next/dynamic";
import React, { useRef } from 'react';
import { useScroll } from "framer-motion";

const Scene = dynamic(() => import('@/components/Scene'), {
  ssr: false,
});

export default function Hero() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    // <main className="w-screen h-screen">
      <div ref={container} className="h-[300vh] bg-red-00 relative "> 
        <div className="sticky top-0 h-screen">
          <Scene scrollProgress={scrollYProgress}/>
          <div 
              className="absolute top-0  m-2 md:m-5 text-center h-svh bg-blue-00" 
              >
                <div>
                  <h1 className=" text-md md:text-4xl font-bold font-poppins text-[#CFFF00] drop-shadow-xl text-wrap">atharv<span className="text-white">.</span></h1>
                </div>
              </div>
            <div 
            className="absolute top-0  w-full text-center flex justify-center items-center h-svh bg-blue-00" 
            >
              <div>
                <h1 className=" text-4xl md:text-7xl font-bold font-poppins text-white drop-shadow-2xl text-wrap">Great Artists, <span className="text-[#CFFF00]">Ship.</span></h1>
                <p className="text-md  md:text-xl mt-2 shadow-2xl text-neutral-300 font-regular font-poppins">From Idea to Reality, I Help You Ship Products.</p>
              </div>
            </div>
        </div>
      </div>
    // </main>
  );
}