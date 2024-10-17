'use client'
import { Link } from '@/lib/types'
import Hamburger from 'hamburger-react'
import React from 'react'
import clsx from 'clsx'
import NextLink from 'next/link'
import { useActiveSectionContext } from '@/containers/active-section'

import {AnimatePresence, motion} from 'framer-motion'

type HamburgerMenuProps = {
    links: Link[]
}

 const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const menuTrigger = {
        visible: {scale:1, opacity: 0.7, y:0},
        tap: {scale: 0.85},
        hover: {scale: 1.2},
    }
  return (
   <div className='md:hidden top-5 right-5 fixed w-60 z-[999] flex flex-col items-end gap-2'>
    <motion.button 
    variants={menuTrigger}
    initial='visible'
    whileTap='tap'
    whileHover='hover'
    className='bg-white w-[3rem] drop-shadow backdrop-blur-[0.5rem] border-slque-500 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950'>
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20}/>
    </motion.button>
   <AnimatePresence>
   {isOpen && (
        <div className='w-full bg-white drop-shadow-sm border border-slate-500 dark:border-white border-opacity-60 shadow-2xl rounded-2xl flex flex-col items-center justify-center dark:bg-gray-950'>
        {links.map((link, index) => (
                <div >
                    <NextLink href={link.hash}>
                        {link.nameEng}
                    </NextLink>
                </div>
        ))}
    </div>
   )}
   </AnimatePresence>
   </div>

  )
}

export default HamburgerMenu