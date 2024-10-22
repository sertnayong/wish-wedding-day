"use client";
import { useSectionInView } from '@/lib/useInView';
import React from 'react'
import Image from "next/image";

type Props = {}

const Blessing = (props: Props) => {
  const { ref } = useSectionInView("#blessing", 0.5);
  return (
    <section
      ref={ref}
      id="blessing"
      className="mb-28 max-w-[74rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <p className="text-2xl">Blessing</p>
      </div>
    </section>
  );
}

export default Blessing