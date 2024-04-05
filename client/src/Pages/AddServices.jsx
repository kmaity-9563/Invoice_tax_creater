import React, { useState } from 'react'
import TaxRatesComponents from '../Components/TaxRates'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const AddServices = () => {
    const [TaxRate, setTaxRates] = useState(false);
    const navigate = useNavigate();
    const taxes = useSelector(state => state.taxes);
    return (
        <div>
            <div className='h-screen relative  bg-gray-100'>
                <div className='text-left pt-2'>
                    <text className='font-bold pl-5  text-3xl'>Add Service Details</text>
                </div>
                <div className='grid grid-cols-3 mt-3'>
                    <div className='col-span-1'>
                        <div>Service Type</div>
                        <input type='text' placeholder='Hotel'
                            className=' border p-2 w-80  bg-gray-200' />
                    </div>
                    <div className='col-span-1'>
                        <div>Selling Price</div>
                        <input type='text' required placeholder='1200'
                            className='border p-2 w-80 mx-4  bg-gray-200' />
                    </div>
                    <div className='col-span-1'>
                        <div>Discount Type</div>
                        <select   className='w-80 border p-2 ml-2 bg-gray-200 h-10 px-4'  >
                                <option defaultValue> Percentage</option>
                                    <option >cash</option>
                            </select>
                    </div>
                    <div className='col-span-1'>
                        <div>Discount Value</div>
                        <input type='text'  placeholder='10'
                            className='border p-2 w-80 mx-4  bg-gray-200' />
                    </div>
                    <div className='col-span-1 mt-3'>
                        <div>Tax</div>
                        <div>
                            <select
                                className='w-80 border p-2 ml-2 bg-gray-200 h-10 px-4'
                            // onChange={() => setTaxRates(!TaxRate)}
                            >
                                <option defaultValue>Select Tax</option>

                                {taxes.filter(tax => tax.status === true).map((tax, index) => (
                                    <option key={index} value={tax.id}>{tax.taxname} - {tax.taxpercentage}%</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='flex absolute  right-0 mr-4 mt-5'>
                    <button onClick={() => navigate('/')} className='w-20 h-8 font-bold py-1 text-blue-400 border
                     border-blue-400'>
                        Cancel
                    </button>
                    <button onClick={() => setTaxRates(!TaxRate)} className='w-24 h-8 ml-4 font-bold py-1 text-white
                     bg-blue-400 border border-blue-400'>
                        Add Item
                    </button>
                    <button onClick={() => navigate('/')} className='w-20 h-8 font-bold py-1 ml-4 text-blue-400 border
                     border-blue-400'>
                        Save
                    </button>
                </div>
                <div className='mt-28'>
                    {TaxRate ? (<TaxRatesComponents />) : null}
                </div>
            </div>
        </div>
    )
}

export default AddServices
