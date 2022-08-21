import React, { useEffect, useState } from 'react';

const AllOrder = () => {
    const [allorders, setAllOrders] = useState([]);
    console.log(allorders);
    useEffect(() => {
      const url = `https://warm-wave-77383.herokuapp.com/order`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setAllOrders(data);
        });
    }, []);
    return (
        <table class="min-w-full border-collapse block md:table">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Img</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Product Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">User Name</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Email Address</th>
				<th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Mobile</th>
			</tr>
		</thead>
        <tbody class="block md:table-row-group">
		{
            allorders.map((order) =>(
			
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                <td class="p-0 w-52 md:border md:border-grey-500 text-left block md:table-cell"><img src={order.img} alt='' class=""/></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Name</span>{order.productName}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">User Name</span>{order.customarName}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Email Address</span>{order.customarmail}</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span class="inline-block w-1/3 md:hidden font-bold">Mobile</span>{order.phone}</td>
			</tr>)
            )
        }
        </tbody>
	</table>
    );
};

export default AllOrder;