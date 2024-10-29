import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";
type Props = {};

const WeddingCard2 = (props: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is visible
  });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      //className='h-auto w-full bg-white rounded-t-full mt-8 shadow-xl p-8 relative overflow-hidden'
      className='h-auto w-full mt-8 shadow-xl relative overflow-hidden'
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Invitation Heading */}

      {/* <motion.div className='text-center'>
        <motion.p
          className='text-lg text-sky-800 mt-5'
          variants={textVariants}
          custom={0.1}
        >
          TOGETHER <br/>
          WITH THEIR FAMILIES
        </motion.p>
  
        <motion.p
          className='text-4xl font-bold text-sky-800 mt-10'
          variants={textVariants}
          custom={0.3}
        >
         <span className='text-sky-500 text-5xl'>Prasert</span>  <br/> <div className='mt-4'><span className='text-sm text-sky-500'>and</span> <span className='text-sky-500 text-5xl'>Charuwan</span> </div>
        </motion.p>
        <motion.p
          className='text-[14px] font-light text-sky-800 mt-10'
          variants={textVariants}
          custom={0.2}
        >
         WE INVITE THEY REQUEST THE HONOR OF <br />
          YOUR PRESENCE AT <br />
          THE WEDDING RECEPTION OF
        </motion.p>
        <motion.p
          className='text-2xl font-extrabold text-sky-800 mt-5'
          variants={textVariants}
          custom={0.5}
        >
          23 • 12 • 24
        </motion.p>
      </motion.div> */}
       <div className="flex items-center justify-center">
          <Image
            src="/itinerary.png"
            width={480}
            height={480}
            alt="Invitation photo"
            quality={100}
            priority
            className="object-cover rounded-lg shadow-lg"
          />
    
      </div>
      
    </motion.div>
  );
};

export default WeddingCard2;
