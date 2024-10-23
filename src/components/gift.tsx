import React, { useState, useEffect } from 'react';
import { BsCopy } from "react-icons/bs";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from '@/components/modal';

type Props = {}

const Gift = (props: Props) => {
    const accountNumber = '123-4-56789-0';
    const [copied, setCopied] = useState(false);
    const [showModal, setShowModal] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(accountNumber);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Framer motion animation controls
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger animation when 20% of the component is visible
    });

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0, opacity: 1 });
        } else {
            controls.start({ x: -100, opacity: 0 });
        }
    }, [controls, inView]);

 useEffect(() => {
        if (copied) {
            setShowModal(true);
            setTimeout(() => setShowModal(false), 2000);  // Hide modal after 2 seconds
        }
    }, [copied]);

    return (
        <>
            <motion.div
                ref={ref}
                animate={controls}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className='h-[180px] w-full bg-gradient-to-t from-blue-200 from-10% to-blue-700 to-90% mt-6 shadow-2xl relative'
            >
                {/* Background message */}
                <p className='absolute inset-0 flex items-start justify-center p-4 text-4xl text-white font-extrabold opacity-4'>
                    GIFT
                </p>

                {/* Content */}
                <div className='flex relative z-10'>
                    <div className='flex flex-row items-center justify-center p-6 space-x-16'>
                        {/* QR Code Section */}
                        <div className='w-2/5 h-[120px] flex items-center justify-center p-2 bg-gradient-to-r from-white to-gray-200 rounded-sm shadow-lg'>
                            <div className='w-full h-full bg-gray-300 rounded-sm flex items-center justify-center'>
                                <span className='text-gray-500 font-semibold'>QR Code</span>
                            </div>
                        </div>

                        {/* Message Section */}
                        <div className='w-3/5 space-y-2 text-left mt-10'>
                            <p className='text-sm font-bold text-black'>
                                ธนาคาร
                                <span className='text-white text-sm pl-2 font-medium'>กสิกรไทย</span>
                            </p>
                            <p className='text-sm font-bold text-black'>
                                ชื่อบัญชี
                                <span className='text-white text-sm pl-2 font-medium'>นาย นาย นาย</span>
                            </p>
                            <p className=' flex text-sm font-bold text-black'>
                                เลขที่บัญชี
                                <span className='text-white text-sm pl-2 font-medium'>
                                    {accountNumber}
                                </span>
                                <BsCopy
                                    className='ml-3 text-xl text-gray-300 cursor-pointer hover:text-white transition-all duration-200'
                                    title="Copy to clipboard"
                                    onClick={handleCopy}
                                    aria-label="Copy account number to clipboard"
                                />
                            </p>
                        </div>
                    </div>
                    <div>
                        {copied && (
                            <Modal
                            show={showModal}
                            message="Copied (คัดลอคเลขบัญชีแล้ว)"
                        />
                        )}
                    </div>
                </div>


            </motion.div>

            {/* Animation for Copied Message */}
            <style jsx>{`
                @keyframes fadeInOut {
                    0%, 100% {
                        opacity: 0;
                    }
                    25%, 75% {
                        opacity: 1;
                    }
                }
                .animate-fadeInOut {
                    animation: fadeInOut 2s ease-in-out;
                }
            `}</style>
        </>
    );
}

export default Gift;
