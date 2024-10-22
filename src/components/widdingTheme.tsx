import React from 'react'

type Props = {}

const WeddingTheme = (props: Props) => {
    return (
        <>
            <div className='h-[180px] w-full bg-gradient-to-r from-cyan-700 via-teal-400 to-emerald-500 rounded-bl-[50px] rounded-tr-[50px] mt-8 shadow-xl relative overflow-hidden'>
                {/* Decorative Border Glow */}
                <div className='absolute inset-0 rounded-bl-[50px] rounded-tr-[50px] bg-gradient-to-r from-cyan-300 via-white to-emerald-300 opacity-20 blur-[100px]' />

                {/* Background message */}
                <p className='absolute inset-0 flex items-center justify-center text-8xl text-white font-extrabold opacity-10 drop-shadow-[0_5px_5px_rgba(0,0,0,0.2)]'>
                    THEME
                </p>

                {/* Content */}
                <div className='relative z-10'>
                    <div className='flex items-center justify-end'>
                        <p className='text-5xl text-white font-bold p-6 shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:text-yellow-300'>
                            THEME
                        </p>
                    </div>
                </div>

                {/* Additional Decoration */}
                <div className='absolute top-0 right-0 bg-gradient-to-br from-white/40 to-transparent rounded-full h-[200px] w-[200px] blur-xl opacity-30'></div>
                <div className='absolute bottom-0 left-0 bg-gradient-to-tl from-white/40 to-transparent rounded-full h-[150px] w-[150px] blur-xl opacity-30'></div>
            </div>
        </>
    )
}

export default WeddingTheme;
