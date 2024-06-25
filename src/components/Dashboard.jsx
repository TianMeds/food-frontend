'use client';
import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const Dashboard = () => {
  // Sample data
  const mostPurchasedItems = [
    { name: 'Item A', count: 120 },
    { name: 'Item B', count: 90 },
    { name: 'Item C', count: 70 },
    { name: 'Item D', count: 50 },
    { name: 'Item E', count: 30 },
  ];

  const incomeData = [
    { month: 'January', income: 5000 },
    { month: 'February', income: 7000 },
    { month: 'March', income: 4000 },
    { month: 'April', income: 6000 },
    { month: 'May', income: 8000 },
  ];

  const frequentBuyers = [
    { name: 'User 1', purchases: 25 },
    { name: 'User 2', purchases: 20 },
    { name: 'User 3', purchases: 18 },
    { name: 'User 4', purchases: 15 },
    { name: 'User 5', purchases: 12 },
  ];

  const recentCheckouts = [
    { orderId: '12345', itemName: 'Item A', date: '2024-06-20' },
    { orderId: '12346', itemName: 'Item B', date: '2024-06-19' },
    { orderId: '12347', itemName: 'Item C', date: '2024-06-18' },
  ];

  const mostPurchasedItemsData = {
    labels: mostPurchasedItems.map(item => item.name),
    datasets: [
      {
        label: 'Most Purchased Items',
        data: mostPurchasedItems.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const incomeDataChart = {
    labels: incomeData.map(data => data.month),
    datasets: [
      {
        label: 'Monthly Income',
        data: incomeData.map(data => data.income),
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const frequentBuyersData = {
    labels: frequentBuyers.map(buyer => buyer.name),
    datasets: [
      {
        label: 'Frequent Buyers',
        data: frequentBuyers.map(buyer => buyer.purchases),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard px-4 py-4 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Dashboard</h2>
      
      <div className="chart-container mb-12">
        <h3 className="text-2xl font-semibold mb-4">Most Purchased Items</h3>
        <div className="w-full bg-white p-4 rounded-lg shadow-md">
          <Bar data={mostPurchasedItemsData} options={{ maintainAspectRatio: false }} height={200} />
        </div>
      </div>
      
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Monthly Income</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Line data={incomeDataChart} options={{ maintainAspectRatio: false }} height={200} />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-2 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Frequent Buyers</h3>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Doughnut data={frequentBuyersData} options={{ maintainAspectRatio: false }} height={200} />
          </div>
        </div>
      </div>

      <div className="chart-container mb-12">
        <h3 className="text-2xl font-semibold mb-4">Recently Checked Out Orders</h3>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <ul className="list-disc list-inside text-gray-800">
            {recentCheckouts.map((checkout) => (
              <li key={checkout.orderId} className="mb-2">
                {checkout.date} - {checkout.itemName} (Order ID: {checkout.orderId})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
