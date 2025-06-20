"use client"

import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [stockCount, setStockCount] = useState(0);

    useEffect(() => {
        // Simulate fetching data
        setUserCount(3); // Admin + 2 users
        setOrderCount(12); // Example order count
        setStockCount(45); // Example stock items
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-xl font-semibold text-gray-700">Users</h2>
                <p className="text-3xl font-bold text-blue-600">{userCount}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-xl font-semibold text-gray-700">Orders</h2>
                <p className="text-3xl font-bold text-green-600">{orderCount}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
                <h2 className="text-xl font-semibold text-gray-700">Stock Items</h2>
                <p className="text-3xl font-bold text-orange-600">{stockCount}</p>
            </div>
        </div>
    );
}
export default Dashboard