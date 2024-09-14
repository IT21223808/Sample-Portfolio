"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import { slideInFromLeft } from '@/utils/motion'
import { slideInFromRight } from '@/utils/motion'
import Image from "next/image";
import { SparklesIcon } from '@heroicons/react/24/solid'


const AboutContent = () => {
    return (
        <motion.div
            initial='hidden'
            animate='visible'
            className='flex flex-row items-center justify-center px-20 mt-2 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-cyan-500 '
            >
                About Me
            </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px]'
                >
                    I&apos;m an undergraduate Student. I'm quite passionate about Information technology ,Computer programming and Online marketing. 
                    It's engaging for me to build new technologies, explore technological issues, and create software programs for many platforms. Definitely, I am creative and innovative.
                    Working in a team environment and getting to know new individuals is something I appreciate. Additionally, I relish connecting with clients. 
                    I have an extrovert personality along with the quality of leading from front and am a quick learner.
                    Additionally, I excel at working under pressure and have excellent stress management skills..
                </motion.p>
            </div>
            <motion.div
                variants={slideInFromRight(0.9)}
                className='w-full h-full flex justify-center items-center'
            >
                <Image
                    src="/user.png"
                    alt="work icon"
                    height={300}
                    width={300}
                />
            </motion.div>
        </motion.div>
    )
}

export default AboutContent