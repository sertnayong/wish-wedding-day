import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {};

const WeddingCard1 = (props: Props) => {
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
      {/* E-Card Image */}
      <motion.div
      className='w-[80px] h-[80px] bg-gray-200 rounded-lg flex items-center justify-center mx-auto'
      variants={textVariants}
      custom={0.15}
    >
        <img
          src='ecard/75/ejang9.png'
          alt='Wedding E-Card Cover'
          className='w-full h-full object-cover rounded-lg'
        />
      </motion.div>

      {/* Invitation Heading */}
      <motion.div className='text-center space-y-6 mt-8'>
        <motion.p
          className='text-4xl font-extrabold text-sky-800'
          variants={textVariants}
          custom={0.2}
        >
          22 DECEMBER 2024
        </motion.p>

        {/* Custom Message */}
        <motion.p
          className='text-xl font-light leading-relaxed text-gray-700'
          variants={textVariants}
          custom={0.3}
        >
          ‌สวัสดีค่า จอย & เอก ดีใจมากๆ ที่จะเชิญเพื่อนๆ พี่ๆ น้องๆ ที่เรารักมาร่วมในวันสำคัญของพวกเรา <br />
          พวกเราตื่นเต้นมากๆ ที่พี่ๆ เพื่อนๆ ญาติของเรา จะได้มาร่วมแสดงความยินดีกับเรา <br />
          5 ปีแล้วที่จอย&เอก ได้รู้จักกัน ได้รักกัน และวันนี้ เรากำลังจะก้าวสู่อีกขั้นหนึ่งของชีวิต <br />
          มาเจอกันให้ได้นะคะ
        </motion.p>

      </motion.div>
    </motion.div>
  );
};

export default WeddingCard1;
