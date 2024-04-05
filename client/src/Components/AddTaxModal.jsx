import React, { useState } from 'react';
import TaxModal from './TaxModal';

const AddTaxModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button
                onClick={toggleModal}
                className='flex mb-2 items-center justify-center border rounded-lg px-4 py-1 bg-blue-400 text-white hover:bg-blue-500 hover:text-white transition duration-300 mr-4'
            >
                <div className='mr-2 mb-1 text-2xl'>+</div>
                <div>Add Tax</div>
            </button>
            {isOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-80 max-w-lg mx-auto my-6">
                        <div className="bg-white rounded-lg">
                            <div className="flex items-center justify-between p-5 border-b border-gray-200">
                                <h3 className="text-lg font-medium text-gray-800">Modal Title</h3>
                                <button
                                    onClick={toggleModal}
                                    className="text-gray-400 hover:text-gray-800 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-3"><TaxModal onClick={toggleModal} /></div>
                        </div>
                    </div>
                </div>
            )}
          
        </>
    );
};

export default AddTaxModal;
