import React , {useState} from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import Actions from '../Components/Actions';
import Delete from '../Components/Delete';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const MainPage = () => {
    // const [Mainalue , setMainvalue] = useState();
    // const [Taxamount , setTaxamount] = useState();
    // const [TotalAmount , setTotalamount] = useState();
    const services = useSelector(state => state.service.services);

    // const taxes = useSelector(state => state.taxes)
    console.log("service", services)
    // console.log("taxes", taxes)

    const navigate = useNavigate();
    return (
        <div className='h-screen relative  bg-gray-100'>
            <div className='text-left pt-2'>
                <text className='font-bold pl-5  text-3xl'>Add invoice</text>
            </div>
            <div className='grid grid-cols-3 mt-3'>
                <div className='col-span-1'>
                    <div>Invoice Number</div>
                    <input type='text' placeholder='Invoice Number'
                        className=' border p-2 w-80  bg-gray-200' />
                </div>
                <div className='col-span-1'>
                    <div>Customer Name</div>
                    <input type='text' required placeholder='Customer Name'
                        className='border p-2 w-80 mx-4  bg-gray-200' />
                </div>
                <div className='col-span-1'>
                    <div>Invoice Date</div>
                    <input type='date' required className='w-80 h-10 px-4 ' />
                </div>
                <div className='col-span-1 mt-3'>
                    <div>Due Date</div>
                    <input type='date' className=' w-80 h-10 px-4' />
                </div>
                <div className='col-span-1 mt-3'>
                    <div>Referrence Number</div>
                    <input type='text' placeholder='Referrence Number'
                        className='border p-2 w-80 mx-4  bg-gray-200' />
                </div>
                <div className='col-span-1 mt-3'>
                    <div>Payment Method</div>
                    <select id="countries" className='w-80 border p-2  ml-2  bg-gray-200 h-10 px-4'>
                        <option selected >Cash</option>
                        <option value="cash">Cash</option>
                        <option value="online">Online</option>
                    </select>

                </div>
            </div>
            <div>
                <div>Services</div>
                <div className='flex flex-row items-center'>
                    <input type='text' className='w-full mx-2 h-10 px-4 py-2 border rounded-lg focus:outline-none
                         focus:border-green-500' placeholder='Select services' />
                    <div className='mr-2 ml-1'
                        onClick={() => navigate('./addservices')}
                    >
                        <FaCirclePlus className='text-2xl' />
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className="relative overflow-x-auto rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right ">
                        <thead className="text-xs border-2  uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product/Service
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    quantity
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rate
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    discount
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tax
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Amount
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={index} className="bg-white border-2">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {service.servicetype}
                                    </th>
                                    <td className="px-6 py-4">
                                        1
                                    </td>
                                    <td className="px-6 py-4">
                                        {service.sellingprice}
                                    </td>
                                    <td className="px-6 py-4">
                                        {service.discountvalue}
                                    </td>
                                    <td className="px-6 py-4">
                                      {service.taxamount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {service.totalamount}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Actions />
                                        <Delete />
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>


            </div>
            {/* card */}
            <div className='mt-10 ml-5'>
                <div className='border border-gray-200 w-96'>
                    <div className='flex justify-between p-2'>
                        <div className='text-gray-500'>Amount</div>
                        <div>₹ 1200.00</div>
                    </div>
                    <div className='flex justify-between p-2'>
                        <div className='text-gray-500'>Discount</div>
                        <div> ₹120.00</div>
                    </div>
                    <div className='flex justify-between p-2'>
                        <div className='text-gray-500'>Tax</div>
                        <div> ₹194.40</div>
                    </div>
                    <div className='flex justify-between p-2'>
                        <div className='text-gray-500'>Round off</div>
                        <div>₹ 00</div>
                    </div>
                    <div className='flex justify-between p-2'>
                        <div className='text-gray-500'>Total Amount</div>
                        <div> ₹1274.40</div>
                    </div>
                </div>
            </div>

            <div className='flex absolute  right-0 '>
                <button className='w-20 h-8 font-bold py-1 text-blue-400 border
                     border-blue-400'>
                    Cancel
                </button>
                <button className='w-16 h-8 ml-4 font-bold py-1 text-white
                     bg-blue-400 border border-blue-400'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default MainPage
