import React, { useState } from 'react';
import { FaClipboard } from 'react-icons/fa'; // Importing the clipboard icon

type Props = {}

const Gift = (props: Props) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('123-4-56789-0');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset "Copied!" message after 2 seconds
    };

    return (
        <>
            <div className='h-[280px] w-full bg-gradient-to-r from-blue-700 via-purple-500 to-gray-100 rounded-b-3xl mt-6 shadow-2xl relative'>
                {/* Background message */}
                <p className='absolute inset-0 flex items-end justify-start p-6 text-7xl text-white font-extrabold opacity-10'>
                    GIFT
                </p>

                {/* Content */}
                <div className='relative z-10'>
                    <div className='flex flex-row items-center justify-center p-6 space-x-16'>
                        {/* QR Code Section */}
                        <div className='w-[160px] h-[160px] flex items-center justify-center p-2 bg-gradient-to-r from-white to-gray-200 rounded-sm shadow-lg'>
                            <div className='w-full h-full bg-gray-300 rounded-sm flex items-center justify-center'>
                                {/* Placeholder for QR code */}
                                <span className='text-gray-500 font-semibold'>QR Code</span>
                            </div>
                        </div>

                        {/* Message Section */}
                        <div className='flex flex-col space-y-2 text-left'>
                            <p className='text-xl font-bold text-blue-900'>
                                ธนาคาร
                                <span className='text-gray-600 text-sm pl-2 font-medium'>กสิกรไทย</span>
                            </p>
                            <p className='text-xl font-bold text-blue-900'>
                                ชื่อบัญชี
                                <span className='text-gray-600 text-sm pl-2 font-medium'>นาย นาย นาย</span>
                            </p>
                            <p className='text-xl font-bold text-blue-900 flex items-center'>
                                เลขที่บัญชี
                                <span className='text-gray-600 text-sm pl-2 font-medium'>
                                    123-4-56789-0
                                </span>
                                {/* Copy icon */}
                                <FaClipboard
                                    className='ml-3 text-xl text-yellow-500 cursor-pointer hover:text-green-400 transition-all duration-200'
                                    title="Copy to clipboard"
                                    onClick={handleCopy}
                                />

                            </p>

                        </div>

                    </div>
                    {copied && (
                        <span className='text-red-600 text-lg pl-3 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeInOut'>
                            Copied!
                        </span>
                    )}
                </div>
            </div>

            {/* Animation for Copied Message */}
            <style jsx>{`
                @keyframes fadeInOut {
                    0%, 100% {
                        opacity: 0;
                    }
                    50% {
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
