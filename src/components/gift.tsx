import React, { useState, useEffect, useRef } from 'react';
import { BsCopy } from "react-icons/bs";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Modal from '@/components/modal';

type Props = {}

const Gift = (props: Props) => {
    const accountNumber = '123-4-56789-0';
    const [copied, setCopied] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null); // Ref for backup copy method

    const handleCopy = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(accountNumber)
                .then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                })
                .catch((err) => {
                    console.error("Clipboard copy failed, falling back to input method:", err);
                    copyWithFallback();
                });
        } else {
            copyWithFallback(); // Use fallback if clipboard API is unsupported
        }
    };

    const copyWithFallback = () => {
        if (inputRef.current) {
            inputRef.current.value = accountNumber;
            inputRef.current.select();
            document.execCommand('copy'); // Fallback for unsupported browsers
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.2 });

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
            setTimeout(() => setShowModal(false), 2000);
        }
    }, [copied]);

    return (
        <>
            <motion.div
                ref={ref}
                animate={controls}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className='h-[200px] w-full bg-gradient-to-t from-blue-300 to-blue-300 rounded-tr-[50px] rounded-br-[50px] mt-6 shadow-2xl relative'
            >
                <p className='absolute inset-0 flex items-start justify-end text-4xl pr-24 pt-2 text-white font-extrabold opacity-40'>
                    GIFT
                </p>

                <div className='flex flex-row items-center justify-between p-6'>
                    {/* Hidden Input for Fallback */}
                    <input
                        ref={inputRef}
                        value={accountNumber}
                        readOnly
                        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
                        aria-hidden="true"
                    />

                    {/* QR Code Section */}
                    <div className='w-2/5 h-[120px] flex items-center justify-center p-2 bg-gradient-to-r from-white to-gray-200 rounded-sm shadow-lg'>
                        <div className='w-full h-full bg-gray-300 rounded-sm flex items-center justify-center'>
                            <span className='text-gray-500 font-semibold'>QR Code</span>
                        </div>
                    </div>

                    <div className='w-3/5 space-y-2 text-left pl-3 mt-5'>
                        <p className='text-sm font-bold text-black'>
                            ธนาคาร
                            <span className='text-white text-sm pl-2 font-medium'>กสิกรไทย</span>
                        </p>
                        <p className='text-sm font-bold text-black'>
                            ชื่อบัญชี
                            <span className='text-white text-sm pl-2 font-medium'>น.ส. จารุวรรณ พันลำภักดิ์</span>
                        </p>
                        <p className='flex items-center text-sm font-bold text-black'>
                            เลขที่บัญชี
                            <span className='text-white text-sm pl-2 font-medium'>
                                {accountNumber}
                            </span>
                            <div>
                                <button
                                    className={`text-sm font-bold ml-2 underline transition-all duration-200 relative ${copied ? 'text-gray-900 hover:text-white' : 'text-gray-300 hover:text-gray-600'
                                        }`}
                                    onClick={handleCopy}
                                    aria-label="Copy account number"
                                >
                                    Copy
                                </button>
                            </div>
                        </p>
                    </div>


                </div>

                {/* Modal Display */}
                {showModal && (
                    <Modal
                        show={showModal}
                        message="Copied (คัดลอกเลขบัญชีแล้ว)"
                    // onClose={() => setShowModal(false)} // optional onClose handler
                    />
                )}
            </motion.div>


        </>
    );
};

export default Gift;
