"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  BarChart3, 
  Plus, 
  Search, 
  MoreVertical, 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Package,
  CheckCircle2,
  AlertCircle,
  FileText
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: "Total Revenue", value: "$45,231.89", trend: "+12.5%", positive: true, icon: DollarSign, color: "text-green-600", bg: "bg-green-50" },
    { label: "Total Orders", value: "1,205", trend: "+8.2%", positive: true, icon: ShoppingBag, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "New Customers", value: "342", trend: "-3.1%", positive: false, icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "Active Products", value: "84", trend: "0%", positive: true, icon: Package, color: "text-orange-600", bg: "bg-orange-50" }
  ];

  const recentOrders = [
    { id: "#7721", customer: "John Doe", product: "Vitamin C Complex", amount: "$45.00", status: "Completed", date: "2 mins ago" },
    { id: "#7720", customer: "Jane Smith", product: "Omega-3 Fish Oil", amount: "$124.50", status: "Pending", date: "15 mins ago" },
    { id: "#7719", customer: "Robert Brown", product: "Daily Multi-Vitamin", amount: "$32.00", status: "Completed", date: "1 hour ago" },
    { id: "#7718", customer: "Alice Wilson", product: "B12 Boost", amount: "$56.00", status: "Failed", date: "3 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-slate-200 flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
               <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <span className="text-primary text-xl font-heading font-extrabold tracking-tight">AdminPanel</span>
          </div>
        </div>

        <nav className="flex-grow p-6 space-y-2">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'products', label: 'Products', icon: ShoppingBag },
            { id: 'orders', label: 'Orders', icon: Package },
            { id: 'customers', label: 'Customers', icon: Users },
            { id: 'reports', label: 'Reports', icon: FileText },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                activeTab === item.id 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-primary"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="bg-primary/5 rounded-2xl p-4 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin" />
             </div>
             <div>
                <p className="text-xs font-black text-primary">Admin User</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Super Admin</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 lg:p-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-heading font-extrabold text-slate-900 mb-2">Dashboard Overview</h1>
            <p className="text-slate-500 font-medium">Welcome back, here's what's happening with Medifit today.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search admin..." 
                  className="bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all w-64"
                />
             </div>
             <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:shadow-lg shadow-primary/20 transition-all active:scale-95">
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
             </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm group hover:shadow-md transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className={`flex items-center gap-1 text-[10px] font-black px-2 py-1 rounded-full ${
                  stat.positive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
                }`}>
                  {stat.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {stat.trend}
                </div>
              </div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-2xl font-heading font-extrabold text-slate-900">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Charts & Tables Section */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Recent Orders Table */}
          <div className="xl:col-span-2 bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex items-center justify-between">
               <h3 className="text-xl font-heading font-extrabold text-slate-900">Recent Orders</h3>
               <button className="text-slate-400 hover:text-primary transition-colors">
                  <MoreVertical className="w-5 h-5" />
               </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-slate-50/50">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Order ID</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Customer</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Status</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-5 text-sm font-bold text-slate-900">{order.id}</td>
                      <td className="px-8 py-5">
                         <p className="text-sm font-bold text-slate-900">{order.customer}</p>
                         <p className="text-[10px] text-slate-400 font-medium">{order.date}</p>
                      </td>
                      <td className="px-8 py-5 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          order.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                          order.status === 'Pending' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-sm font-black text-slate-900 text-right">{order.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-slate-50/30 text-center border-t border-slate-50">
               <button className="text-xs font-black text-primary uppercase tracking-widest hover:underline">View All Transactions</button>
            </div>
          </div>

          {/* Activity Timeline */}
          <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
            <h3 className="text-xl font-heading font-extrabold text-slate-900 mb-8">System Activity</h3>
            <div className="space-y-8">
              {[
                { title: "Inventory Alert", time: "12 mins ago", desc: "Vitamin D3 is running low (12 units left)", icon: AlertCircle, color: "text-orange-600", bg: "bg-orange-50" },
                { title: "New Review", time: "45 mins ago", desc: "Sarah left a 5-star review on Protein Powder", icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
                { title: "Database Backup", time: "3 hours ago", desc: "Weekly cloud backup completed successfully", icon: Package, color: "text-blue-600", bg: "bg-blue-50" },
              ].map((activity, idx) => (
                <div key={idx} className="flex gap-4 relative">
                  {idx !== 2 && <div className="absolute left-6 top-10 bottom-[-32px] w-0.5 bg-slate-100" />}
                  <div className={`w-12 h-12 rounded-2xl ${activity.bg} ${activity.color} flex items-center justify-center shrink-0 relative z-10`}>
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                       <h4 className="font-bold text-slate-900 text-sm">{activity.title}</h4>
                       <span className="text-[10px] text-slate-400 font-bold">{activity.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm hover:shadow-xl transition-all active:scale-95">
               Download Logs
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
