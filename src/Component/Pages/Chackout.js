import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Chackout = () => {
    const {id} = useParams()
    const url = `https://warm-wave-77383.herokuapp.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
<div>
        <div class="px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
            <div class="flex flex-col justify-start items-start w-full space-y-9">
                <div class="flex justify-start flex-col items-start space-y-2">
                    
                    <p class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">Checkout</p>
                    
                </div>
    
                <div class="flex flex-col xl:flex-row justify-center xl:justify-between  xl:space-y-0 xl:space-x-6 w-full">
                    <div class="xl:w-3/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
                        <div class="flex flex-col justify-start items-start w-full space-y-4">
                            <p class="text-xl md:text-2xl leading-normal text-gray-800 dark:text-gray-50">Product Name: {order.productName}</p>
                            <p class="text-base font-semibold leading-none text-gray-600 dark:text-white">Order Quntity: {order.orderQuantity}</p>
                            <p class="text-base font-semibold leading-none text-gray-600 dark:text-white">Total Price: € {order.price}</p>
                        </div>
                        <div class="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                            <img src={order.img} alt="headphones" />
                        </div>
                    </div>
    
                    <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
    
                        <div class="">
                            <input class="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="Email" />
                        </div>
    
                        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Card details</label>
                        <div class="mt-2 flex-col">
                            <div>
                                <input class="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="0000 1234 6549 15151" />
                            </div>
                            <div class="flex-row flex">
                                <input class="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="MM/YY" />
                                <input class="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="CVC" />
                            </div>
                        </div>
    
                        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Name on card</label>
                        <div class="mt-2 flex-col">
                            <div>
                                <input class="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" name="" id="" placeholder="Name on card" />
                            </div>
                        </div>
    
                        <label class="mt-8 text-base leading-4 text-gray-800 dark:text-gray-50">Country or region</label>
                        <div class="mt-2 flex-col">
                            <div class="relative">
                                <button id="changetext" class="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white" type="email" name="">United States</button>
                                <svg onclick="showMenu(true)" id="closeIcon" class="cursor-pointer absolute top-4 right-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg onclick="showMenu(true)" id="openIcon" class="cursor-pointer hidden transform rotate-180 absolute top-4 right-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div id="dropdown" class="mt-1 hidden absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600">
                                    <div onclick="changeText('China')" class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2">China</div>
                                    <div onclick="changeText('Russia')" class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2">Russia</div>
                                    <div onclick="changeText('UK')" class="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2">UK</div>
                                </div>
                            </div>
                            <input class="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" name="" id="" placeholder="ZIP" />
                        </div>
    
                        <button class="mt-8 border border-transparent hover:border-gray-300 dark:bg-white dark:hover:bg-gray-900 dark:text-gray-900 dark:hover:text-white dark:border-transparent bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                            <div>
                                <p class="text-base leading-4">Pay </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Chackout;