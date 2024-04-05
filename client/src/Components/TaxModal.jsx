import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addTax} from '../Redux/taxSlice'

const TaxModal = ({ onClick }) => {
    // State variables to store input values
    const [taxName, setTaxName] = useState();
    const [taxRate, setTaxRate] = useState();
    const [taxType, setTaxType] = useState('percentage');
    const [status, setStatus] = useState(false);
    const dispatch = useDispatch()


    const handleSave = (e) => {
        e.preventDefault();
        // console.log(taxName , taxRate , taxType , status)
        dispatch(addTax({
            taxname: taxName,
            taxpercentage: taxRate,
            taxtype: taxType,
            status: status
          }));
          

      
    };

    return (
        <div className='static'>
            <div className='text-left'>
                <text className='font-bold pl-2  text-xl'>Add Tax</text>
            </div>
            <div className=''>
                <div>Tax Name</div>
                <input
                    type='text'
                    placeholder='GST'
                    value={taxName}
                    onChange={(e) => setTaxName(e.target.value)}
                    className='border p-2  w-72 bg-gray-200'
                />
            </div>
            <div className=''>
                <div>Tax Rates</div>
                <input
                    type='text'
                    required
                    placeholder='18'
                    value={taxRate}
                    onChange={(e) => setTaxRate(e.target.value)}
                    className='border p-2 w-72  bg-gray-200'
                />
            </div>
            <div>
                <div>Type</div>
                <select
                    id="countries"
                    value={taxType}
                    onChange={(e) => setTaxType(e.target.value)}
                    className='w-72 border p-2   bg-gray-200 '
                >
                    <option value="percentage">percentage</option>
                    <option value="cash">number</option>
                </select>
            </div>
            <div className='flex justify-between mt-2 mb-10'>
                <div>Status</div>
                <div className='mr-3'>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={status}
                            onChange={(e) => setStatus(e.target.checked)}
                            className="sr-only peer"
                        />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
            <div className='flex absolute bottom-3 right-2  mr-4 '>
                <button onClick={() => onClick()} className='w-20 h-8 font-bold py-1 text-blue-400 border border-blue-400'>
                    Cancel
                </button>
                <button
                    className='w-20 h-8 ml-4 font-bold py-1 text-white bg-blue-400 border border-blue-400'
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
}

export default TaxModal;
