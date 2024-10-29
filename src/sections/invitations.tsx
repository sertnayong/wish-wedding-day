"use client";
import React, { FC, useEffect } from 'react';
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Invitations: FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      id="invitations"
      className="mb-4 max-w-[74rem] text-center sm:mb-0"
    >     
        <div className="flex items-center justify-center">
          <Image
            src="/invitations.jpg"
            width={480}
            height={480}
            alt="Invitation photo"
            quality={100}
            priority
            className="object-cover rounded-lg shadow-lg"
          />
    
      </div>
    </section>
  );
};

export default Invitations;
