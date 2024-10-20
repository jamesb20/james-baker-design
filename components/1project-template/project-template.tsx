'use client'

import "./style.css";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function numOfImagesInFolder(num: number): number[] {
    const result: number[] = [];
    for (let i = 1; i <= num; i++) {
        result.push(i);
    }
    return result;
}


function Image({ id, fileName }: { id: number, fileName: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section>
            <div ref={ref}>
                <img src={`/${fileName}/${id}.jpg`} alt={`${fileName}/id.jpg`} />
            </div>
            <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
        </section>
    );
}

export default function ProjectTemplate({ fileName, fileLen }: { fileName: string, fileLen: number }) {
    const { scrollYProgress } = useScroll();
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const fileLength = numOfImagesInFolder(fileLen)
    
    const [fileLenArr, setFileLenArr] = useState<number[]>(fileLength);
    console.log(fileLen)


    return (
        <div>
            <motion.div className="progress-bar" style={{ scaleX }} />
            {fileLenArr.map((image) => (
                // eslint-disable-next-line react/jsx-key
                <Image id={image} fileName={fileName} />
            ))}
            {
               
            }
        </div>
    );
}
