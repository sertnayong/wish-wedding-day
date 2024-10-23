import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      className='h-auto w-full bg-white rounded-xl mt-8 shadow-xl p-8 relative overflow-hidden'
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {/* Invitation Heading */}
      <motion.div className='text-center space-y-6'>
        <motion.p
          className='text-4xl font-extrabold text-sky-800'
          variants={textVariants}
          custom={0.1}
        >
          TOGETHER
        </motion.p>
        <motion.p
          className='text-xl font-light'
          variants={textVariants}
          custom={0.2}
        >
          WITH THEIR FAMILIES
        </motion.p>

        {/* Couple Names */}
        <motion.p
          className='text-4xl font-bold text-sky-800'
          variants={textVariants}
          custom={0.3}
        >
          Sert & Tan
        </motion.p>

        {/* Invitation Message */}
        <motion.p
          className='text-[18px] font-light'
          variants={textVariants}
          custom={0.4}
        >
          THEY REQUEST THE HONOR OF <br />
          YOUR PRESENCE AT <br />
          THE WEDDING RECEPTION OF
        </motion.p>

        {/* Event Date */}
        <motion.p
          className='text-4xl font-extrabold text-sky-800'
          variants={textVariants}
          custom={0.5}
        >
          23 • 12 • 24
        </motion.p>

        {/* Optional: Image Placeholder for E-Card */}
        {/* Uncomment and use if needed */}
        {/* <motion.div
          className='w-full h-[200px] bg-gray-200 rounded-lg flex items-center justify-center'
          variants={textVariants}
          custom={0.6}
        >
          <img
            src='ecard/75/i2n2kp.png'
            alt='Wedding E-Card'
            className='w-full h-full object-cover rounded-lg'
          />
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default WeddingCard2;
