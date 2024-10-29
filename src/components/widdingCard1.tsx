import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GiCottonFlower } from "react-icons/gi";
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
      className='h-auto w-full rounded-t-full mt-8 shadow-2xl p-8 relative overflow-hidden ' style={{ backgroundColor: '#AFD7F6' }}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >


      {/* Invitation Heading */}
      <motion.div className='text-center space-y-6 mt-2'>
        <motion.p
          className='text-5xl font-extrabold text-white'
          variants={textVariants}
          custom={0.1}
        >
          <span className="relative font-extrabold text-white text-8xl" style={{ top: '-0.8rem' }}>T</span>
          <span className="relative font-extrabold text-white text-8xl" style={{ top: '0.8rem' }}>S</span>
        </motion.p>
        <motion.p
          className='text-lg font-bold text-gray-700'
          variants={textVariants}
          custom={0.2}
        >
          23 NOVEMBER 2024
        </motion.p>

        {/* Custom Message */}
        <motion.p
          className='flex flex-row text-xl font-light leading-relaxed text-white'
          variants={textVariants}
          custom={0.3}
        >
          <span className='font-extrabold text-white'>สวัสดีค่ะ ตาลกับพี่เสริช มีข่าวดีจะมาแจ้งให้ทุกคนทราบ! กว่า 10 ปีที่เราได้รู้จักและเรียนรู้กัน และตอนนี้พวกเรากำลังจะก้าวไปอีกขั้นของชีวิตคู่<br />

            แล้ว พวกเรายินดีมากๆ ที่จะเชิญเพื่อนๆ พี่ๆ น้องๆ ทุกคนที่รักมาร่วมเป็นส่วนหนึ่งในวันสำคัญนี้ งานของเราจัดขึ้นที่บ้านเกิดของตาลเอง ซึ่งเป็นงานเล็กๆ อบอุ่นและเรียบง่าย<br />

            อย่าลืม สำหรับท่านที่สามารถมาร่วมงานได้ เรียนเชิญด้วยความยินดีเลยนะคะ และสำหรับท่านที่ไม่สะดวก ไม่เป็นไรค่ะ เพียงแค่ส่งคำอวยพรให้เราผ่าน ecard ที่เราเตรียมไว้ก็เพียงพอแล้ว คำอวยพรของทุกคนจะเป็นความทรงจำที่เราจะเก็บไว้อย่างดีตลอดไป<br />

            แล้ว ขอบคุณมากๆ ค่ะ</span>
        </motion.p>

        <div className='flex flex-row justify-center items-center'>
          <motion.div
            className="flex justify-center space-x-4 mt-4 text--2xl text-red-500"
            animate={{
              x: [-5, 5, -5],  // Moves left and right
              rotate: [0, 5, -5, 0], // Slight rotation to enhance the wind effect
            }}
            transition={{
              duration: 2,         // Controls the speed of the animation
              repeat: Infinity,    // Loops the animation indefinitely
              ease: "easeInOut",  // Smooth easing for the motion
            }}
          >
            <GiCottonFlower />

          </motion.div>
          <motion.div
            className="flex justify-center space-x-4 mt-4 text--2xl text-red-500"
            animate={{
              x: [-5, 5, -5],  // Moves left and right
              rotate: [0, 5, -5, 0], // Slight rotation to enhance the wind effect
            }}
            transition={{
              duration: 2,         // Controls the speed of the animation
              repeat: Infinity,    // Loops the animation indefinitely
              ease: "easeInOut",  // Smooth easing for the motion
            }}
          >
            <GiCottonFlower />

          </motion.div>
          <motion.div
            className="flex justify-center space-x-4 mt-4 text--2xl text-red-500"
            animate={{
              x: [-5, 5, -5],  // Moves left and right
              rotate: [0, 5, -5, 0], // Slight rotation to enhance the wind effect
            }}
            transition={{
              duration: 2,         // Controls the speed of the animation
              repeat: Infinity,    // Loops the animation indefinitely
              ease: "easeInOut",  // Smooth easing for the motion
            }}
          >
            <GiCottonFlower />

          </motion.div>
        </div>
      </motion.div>

    </motion.div>

  );
};

export default WeddingCard1;
