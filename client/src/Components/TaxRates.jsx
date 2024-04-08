import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import StatusActive from './StatusActive';
import StatusDisable from './StatusDisable';
import AddTaxModal from './AddTaxModal';
import {removeTax} from '../Redux/taxSlice'

const TaxRatesComponents = () => {
    const dispatch = useDispatch()
   const taxes =  useSelector(state => state.tax.taxes);

    return (
        <div className="relative overflow-x-auto rounded-lg">
            <div className='text-left pt-2 flex justify-between'>
                <text className='font-bold pl-5  text-3xl'>Tax Rates</text>
                <AddTaxModal />
            </div>
            <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-xs border-2  uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">#</th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Tax Rate</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {taxes.map((tax, index) => (
                        <tr key={tax.id} className="bg-white border-2">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</td>
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{tax.taxname}</td>
                            <td className="px-6 py-4">{tax.taxpercentage}%</td>
                            <td className="px-6 py-4">
                                {tax.status === true ? ( <StatusActive />) : (<StatusDisable />) }
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => {dispatch(removeTax(tax.id))}}  className='w-20 h-10 bg-red-400'> delete</button>
                               
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaxRatesComponents;
