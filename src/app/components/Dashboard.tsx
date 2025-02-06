"use client"; // ✅ Ensure it's a Client Component

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { FiShoppingCart, FiBox, FiDollarSign, FiUsers, FiTrendingUp, FiPackage } from "react-icons/fi";

const data = [
  { name: "Jan", sales: 4000, revenue: 6000 },
  { name: "Feb", sales: 3000, revenue: 5000 },
  { name: "Mar", sales: 5000, revenue: 7000 },
  { name: "Apr", sales: 7000, revenue: 9000 },
  { name: "May", sales: 6000, revenue: 8000 },
];

const stats = [
  { label: "Orders", value: 124, icon: FiShoppingCart },
  { label: "Products", value: 320, icon: FiBox },
  { label: "Revenue", value: "$12,500", icon: FiDollarSign },
  { label: "Users", value: 1200, icon: FiUsers },
  { label: "Trending", value: 150, icon: FiTrendingUp },
  { label: "Packages", value: 89, icon: FiPackage },
];

const recentOrders = [
  { id: "#1234", customer: "John Doe", amount: "$200", status: "Shipped" },
  { id: "#1235", customer: "Jane Doe", amount: "$150", status: "Pending" },
  { id: "#1236", customer: "Mike Ross", amount: "$320", status: "Delivered" },
];

export default function Page() { // ✅ Must be `Page` for Next.js 14
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin</h1>
        <nav>
          <ul className="space-y-4">
            {["Dashboard", "Orders", "Products", "Sales", "Customers", "Reports"].map((item, index) => (
              <li key={index} className="text-gray-700 font-medium cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-6 space-y-6 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Admin</span>
          </div>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-6">
          {stats.map(({ label, value, icon: Icon }, index) => (
            <div key={index} className="p-4 bg-white shadow-lg rounded-lg flex items-center">
              <Icon className="text-gray-500 text-2xl mr-3" />
              <div>
                <p className="text-gray-600">{label}</p>
                <p className="text-xl font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <Bar dataKey="sales" fill="#8884d8" radius={5} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Order ID</th>
                <th className="p-2">Customer</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{order.id}</td>
                  <td className="p-2">{order.customer}</td>
                  <td className="p-2">{order.amount}</td>
                  <td className="p-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 py-4">© 2025 Admin Dashboard</footer>
      </div>
    </div>
  );
}
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
// import { FiShoppingCart, FiBox, FiDollarSign, FiUsers, FiTrendingUp, FiPackage } from 'react-icons/fi';

// const data = [
//   { name: 'Jan', sales: 4000, revenue: 6000 },
//   { name: 'Feb', sales: 3000, revenue: 5000 },
//   { name: 'Mar', sales: 5000, revenue: 7000 },
//   { name: 'Apr', sales: 7000, revenue: 9000 },
//   { name: 'May', sales: 6000, revenue: 8000 },
// ];

// export default function AdminDashboard() {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg p-4">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin</h1>
//         <nav>
//           <ul className="space-y-4">
//             <li className="text-gray-700 font-medium cursor-pointer">Dashboard</li>
//             <li className="text-gray-700 font-medium cursor-pointer">Orders</li>
//             <li className="text-gray-700 font-medium cursor-pointer">Products</li>
//             <li className="text-gray-700 font-medium cursor-pointer">Sales</li>
//             <li className="text-gray-700 font-medium cursor-pointer">Customers</li>
//             <li className="text-gray-700 font-medium cursor-pointer">Reports</li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col p-6 space-y-6 overflow-auto">
//         {/* Header */}
//         <header className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
//           <h2 className="text-xl font-semibold">Dashboard</h2>
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-600">Admin</span>
//           </div>
//         </header>

//         {/* Stats Overview */}
//         <div className="grid grid-cols-3 gap-6">
//           {[['Orders', 124, FiShoppingCart], ['Products', 320, FiBox], ['Revenue', '$12,500', FiDollarSign], ['Users', 1_200, FiUsers], ['Trending', 150, FiTrendingUp], ['Packages', 89, FiPackage]].map(([label, value, Icon], i) => (
//             <div key={i} className="p-4 bg-white shadow-lg rounded-lg flex items-center">
//               <Icon className="text-gray-500 text-2xl mr-3" />
//               <div>
//                 <p className="text-gray-600">{label}</p>
//                 <p className="text-xl font-semibold">{value}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Chart Sections */}
//         <div className="grid grid-cols-2 gap-6">
//           <div className="bg-white p-6 shadow-lg rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={data}>
//                 <XAxis dataKey="name" stroke="#8884d8" />
//                 <YAxis stroke="#8884d8" />
//                 <Tooltip />
//                 <Bar dataKey="sales" fill="#8884d8" barRadius={5} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//           <div className="bg-white p-6 shadow-lg rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={data}>
//                 <XAxis dataKey="name" stroke="#8884d8" />
//                 <YAxis stroke="#8884d8" />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="revenue" stroke="#82ca9d" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Recent Orders */}
//         <div className="bg-white p-6 shadow-lg rounded-lg">
//           <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
//           <table className="w-full text-left">
//             <thead>
//               <tr className="border-b">
//                 <th className="p-2">Order ID</th>
//                 <th className="p-2">Customer</th>
//                 <th className="p-2">Amount</th>
//                 <th className="p-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {[['#1234', 'John Doe', '$200', 'Shipped'], ['#1235', 'Jane Doe', '$150', 'Pending'], ['#1236', 'Mike Ross', '$320', 'Delivered']].map((order, i) => (
//                 <tr key={i} className="border-b">
//                   {order.map((item, index) => (
//                     <td key={index} className="p-2">{item}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Footer */}
//         <footer className="text-center text-gray-600 py-4">© 2025 Admin Dashboard</footer>
//       </div>
//     </div>
//   );
// }