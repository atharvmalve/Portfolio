'use client'
import styles from './ProjectSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const anim = {
    initial: {width: 0},
    open: {width: "auto", transition: {duration: 0.4, ease: [0.23, 1, 0.32, 1]}},
    closed: {width: 0}
}

export default function ProjectSection({project}) {

    const [isActive, setIsActive] = useState(false);

    const { title1, title2, src } = project;
    return (
        <div onMouseEnter={() => {setIsActive(true)}} onMouseLeave={() => {setIsActive(false)}} className={styles.project}>
            <div className='flex'>
                <p>{title1}</p>
                <p>{title2}</p>
            </div>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className={styles.imgContainer}>
                <img src={`/medias/${src}`}></img>
            </motion.div>
        </div>
    )
}