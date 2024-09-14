import React from 'react'
import AboutContent from '../sub/AboutContent'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

const About = () => {
    return (
        <div className='relative flex flex-col h-full w-full'>
                <AboutContent />
            </div>
    )
}

export default About