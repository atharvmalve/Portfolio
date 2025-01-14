'use client'
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Lenis from 'lenis';
import dynamic from "next/dynamic";



const Text = dynamic(() => import('@/components/TextOverlay'), {
  ssr: false,
});


export default function Home() {
  useEffect( () => {

    const lenis = new Lenis()



    function raf(time) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  }, [])
  return (
    <main className=" bg-black w-full   scrollbar-thin scrollbar-thumb-[#CFFF00]  scrollbar-track-neutral-900">
      <Hero/>
      <Text/>
      <Projects/>
      <Footer/>
    </main>
  );
}