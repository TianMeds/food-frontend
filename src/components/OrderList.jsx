'use client'

import React, { useState } from 'react';

const OrderList = () => {
  const [searchInput, setSearchInput] = useState('');

  const orders = [
    { orderId: '12345', customerName: 'John Doe', orderDate: '2024-06-25', orderTotal: '₱450.00' },
    { orderId: '12346', customerName: 'Jane Smith', orderDate: '2024-06-24', orderTotal: '₱250.00' },
    { orderId: '12347', customerName: 'Sam Johnson', orderDate: '2024-06-23', orderTotal: '₱320.00' },
    { orderId: '12348', customerName: 'Anna Lee', orderDate: '2024-06-22', orderTotal: '₱150.00' },
    { orderId: '12349', customerName: 'Chris Brown', orderDate: '2024-06-21', orderTotal: '₱400.00' },
  ];

  const filteredOrders = orders.filter(order =>
    order.customerName.toLowerCase().includes(searchInput.toLowerCase()) ||
    order.orderId.includes(searchInput)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Order List</h1>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-8 relative">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 flex-grow"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredOrders.map((order, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Order ID: {order.orderId}</h3>
                <p className="text-sm text-gray-600">Customer: {order.customerName}</p>
                <p className="text-sm text-gray-600">Date: {order.orderDate}</p>
              </div>
              <div className="text-xl font-bold">{order.orderTotal}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
