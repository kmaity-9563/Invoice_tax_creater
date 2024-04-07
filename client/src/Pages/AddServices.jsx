import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TaxRatesComponents from '../Components/TaxRates';
import {addServices} from '../Redux/serviceSlice'
// import { useDispatch } from 'react-redux';

const AddServices = () => {
    const [taxRate, setTaxRate] = useState(false);
    const [serviceType, setServiceType] = useState('');
    const [sellingPrice, setSellingPrice] = useState('');
    const [discountType, setDiscountType] = useState('percentage');
    const [discountValue, setDiscountValue] = useState('');
    const [quantity, setQuantity] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const taxes = useSelector(state => state.tax.taxes);

    const calculateFinalAmount = (rate, discount, tax) => {
        const mainValue = rate - discount;
        const taxAmount = mainValue * (tax / 100);
        return mainValue + taxAmount;
    };

    const calculateTax = (rate, discount, tax) => {
        const mainValue = rate - discount;
        return mainValue * (tax / 100);
    };

    const handleSave = (e) => {
        e.preventDefault();
        const selectedTax = taxes.find(tax => tax.status === true);
        if (!selectedTax) {
            alert('Please select a tax');
            return;
        }
        const taxAmount = calculateTax(parseFloat(sellingPrice), parseFloat(discountValue), selectedTax.taxpercentage);
        const totalAmount = calculateFinalAmount(parseFloat(sellingPrice), parseFloat(discountValue), selectedTax.taxpercentage);

        const serviceDetails = {
            servicetype: serviceType,
            sellingprice: parseFloat(sellingPrice),
            discounttype: discountType,
            discountvalue: parseFloat(discountValue),
            taxamount: taxAmount,
            totalamount: totalAmount ,
            quantity : quantity
        };
        console.log("Servicedetails" , serviceDetails);
        dispatch(addServices(serviceDetails));
         navigate('/');
    };

    return (
        <div className='h-screen relative bg-gray-100'>
            <div className='text-left pt-2'>
                <h1 className='font-bold pl-5 text-3xl'>Add Service Details</h1>
            </div>
            <div className='grid grid-cols-3 mt-3'>
                <div className='col-span-1'>
                    <div>Service Type</div>
                    <input
                        type='text'
                        placeholder='Hotel'
                        className='border p-2 w-80 bg-gray-200'
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                    />
                </div>
                <div className='col-span-1'>
                    <div>Selling Price</div>
                    <input
                        type='text'
                        required
                        placeholder='1200'
                        className='border p-2 w-80 mx-4 bg-gray-200'
                        value={sellingPrice}
                        onChange={(e) => setSellingPrice(e.target.value)}
                    />
                </div>
                <div className='col-span-1'>
                    <div>Discount Type</div>
                    <select
                        className='w-80 border p-2 ml-2 bg-gray-200 h-10 px-4'
                        value={discountType}
                        onChange={(e) => setDiscountType(e.target.value)}
                    >
                        <option value='percentage'>Percentage</option>
                        <option value='cash'>Cash</option>
                    </select>
                </div>
                <div className='col-span-1 mt-3'>
                    <div>Discount Value</div>
                    <input
                        type='text'
                        placeholder='10'
                        className='border p-2 w-80 mx-4 bg-gray-200'
                        value={discountValue}
                        onChange={(e) => setDiscountValue(e.target.value)}
                    />
                </div>
                <div className='col-span-1 mt-3'>
                    <div>Tax</div>
                    <select
                        className='w-80 border p-2 ml-2 bg-gray-200 h-10 px-4'
                    // onChange={() => setTaxRate(!taxRate)}
                    >
                        <option defaultValue>Select Tax</option>
                     {   console.log(taxes)}
                        {taxes.filter(tax => tax.status === true).map((tax, index) => (
                            <option key={index} value={tax.id}>{tax.taxname} - {tax.taxpercentage}%</option>
                        ))}
                    </select>
                </div>
                <div className='col-span-1 mt-3'>
                    <div>quantity</div>
                    <input
                        type='text'
                        placeholder='1'
                        className='border p-2 w-80 mx-4 bg-gray-200'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
            </div>
            <div className='flex absolute right-0 mr-4 mt-5'>
                <button onClick={() => navigate('/')} className='w-20 h-8 font-bold py-1 text-blue-400 border border-blue-400'>
                    Cancel
                </button>
                <button onClick={() => setTaxRate(!taxRate)} className='w-24 h-8 ml-4 font-bold py-1 text-white bg-blue-400 border border-blue-400'>
                    Add Item
                </button>
                <button onClick={(e) => { handleSave(e) }} className='w-20 h-8 font-bold py-1 ml-4 text-blue-400 border border-blue-400'>
                    save
                </button>

            </div>
            <div className='mt-28'>
                {taxRate ? <TaxRatesComponents /> : null}
            </div>
        </div>
    );
};

export default AddServices;
