'use client';
import styles from './TextOverlay.module.css'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "Hi, I'm Atharv, a Product Builder based in Pune, India. I specialize in crafting exceptional digital experiences through a blend of UI/UX Design and Full-Stack Development. With a passion for building impactful solutions, I enjoy bringing innovative ideas to life for businesses of all sizes.";

export default function TextOverlay() {

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top`,
            end: `+=${window.innerHeight /1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      // body.push(<p key={word + "_" + i}>{letters}</p>)
      if (word === 'Design' || word === 'Product' || word === 'UI/UX' || word === 'Full-Stack'|| word === 'Development.' || word === 'Builder') {
        body.push(<p key={word + "_" + i} style={{ color: '#CFFF00' }}>{letters}</p>)
      } else {
        body.push(<p key={word + "_" + i}>{letters}</p>)
      }
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

  return (
    <>
      <main ref={container} className={styles.main}>
      <h1 className='text-2xl md:text-5xl md:mt-32 mt-5 md:mb-32 font-poppins font-semibold '>About Me<span className='text-[#CFFF00]'>.</span></h1>
          <div className='md:flex md:gap-10 md:justify-between'>
            <img src='/images/atharvimg.jpg' className='w-96 h-96 mt-2  rounded-xl mb-5'></img>
            <div ref={body} className={styles.body}>
              {
                splitWords(phrase)
              }
            </div>
          </div>  
      </main>
    </>
  )
}