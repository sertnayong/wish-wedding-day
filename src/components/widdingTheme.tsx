import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {}

const WeddingTheme = (props: Props) => {
    // Framer Motion Animation Controls
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Adjust when the animation should trigger (20% in view)
    });

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0, opacity: 1 });
        } else {
            controls.start({ x: 100, opacity: 0 });
        }
    }, [controls, inView]);

    return (
        <>
            <motion.div
                ref={ref}
                animate={controls}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className='h-[180px] sm:h-[140px] w-full bg-gradient-to-r from-cyan-700 via-teal-400 to-emerald-500 rounded-bl-[50px] rounded-bl-[30px] mt-8 shadow-xl relative overflow-hidden'
            >
                {/* Decorative Border Glow */}
                <div className='absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] bg-gradient-to-r from-cyan-300 via-white to-emerald-300 opacity-20 blur-[100px]' />

                {/* Background message */}
                <p className='absolute inset-0 flex items-center justify-center text-8xl sm:text-8xl text-white font-extrabold opacity-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'>
                    THEME
                </p>

                {/* Content */}
                <div className='relative z-10'>
                    <div className='flex items-center justify-end pt-5 pr-5 pb-'>
                        <p className='text-2xl sm:text-2xl text-white font-extrabold'>
                            THEME
                        </p>
                        
                    </div>
                    <div className='pr-5 pl-20'>
                             <div className="flex justify-center items-center h-[2px] w-[100%] rounded-md bg-gray-200"/>
                    </div>
                </div>

                {/* Additional Decoration */}
                <div className='absolute top-0 right-0 bg-gradient-to-br from-white/40 to-transparent rounded-full h-[200px] sm:h-[150px] w-[200px] sm:w-[150px] blur-xl opacity-30'></div>
                <div className='absolute bottom-0 left-0 bg-gradient-to-tl from-white/40 to-transparent rounded-full h-[150px] sm:h-[100px] w-[150px] sm:w-[100px] blur-xl opacity-30'></div>
            </motion.div>
        </>
    );
}

export default WeddingTheme;
