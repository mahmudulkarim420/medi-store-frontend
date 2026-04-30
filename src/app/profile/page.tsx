"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Settings,
  Package,
  Heart,
  CreditCard,
  LogOut,
  ChevronRight,
  Edit2,
  ShieldCheck,
  Clock,
  Bell,
  Star,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    memberSince: "March 2024",
    totalOrders: 12,
    wishlistCount: 8,
    wellnessPoints: 450,
  };

  const orders = [
    { id: "#ORD-7721", date: "Oct 12, 2024", status: "Delivered", total: "$45.00", items: 2 },
    { id: "#ORD-6612", date: "Sep 28, 2024", status: "Processing", total: "$124.50", items: 4 },
    { id: "#ORD-5501", date: "Sep 15, 2024", status: "Delivered", total: "$32.00", items: 1 },
  ];

  const menuItems = [
    { id: "overview", label: "Overview", icon: User },
    { id: "orders", label: "Orders", icon: Package },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "payment", label: "Payments", icon: CreditCard },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-80 space-y-8"
          >
            {/* User Profile Summary */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-outline-variant shadow-sm text-center overflow-hidden relative group">
              <div className="absolute top-0 left-0 w-full h-24 bg-primary/5 -z-10 group-hover:bg-primary/10 transition-colors"></div>
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl mx-auto overflow-hidden">
                  <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <button className="absolute bottom-0 right-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg text-primary hover:scale-110 transition-transform border border-outline-variant">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              <h2 className="text-2xl font-heading font-extrabold text-primary mb-1">
                {user.name}
              </h2>
              <p className="text-on-surface-variant text-sm mb-6">{user.email}</p>
              <button className="w-full py-3 bg-surface-container-low text-primary text-sm font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all group">
                <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Sign Out</span>
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="bg-white rounded-[2.5rem] p-4 border border-outline-variant shadow-sm overflow-hidden">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${
                    activeTab === item.id
                      ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <item.icon
                      className={`w-5 h-5 ${activeTab === item.id ? "text-on-primary" : "text-primary opacity-60"}`}
                    />
                    <span className="text-sm font-bold">{item.label}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${activeTab === item.id ? "translate-x-1" : "opacity-0 group-hover:opacity-100"}`}
                  />
                </button>
              ))}
            </nav>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-grow space-y-8"
          >
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      {
                        label: "Active Orders",
                        value: user.totalOrders,
                        icon: Clock,
                        color: "text-blue-600",
                        bg: "bg-blue-50",
                      },
                      {
                        label: "Wishlist Items",
                        value: user.wishlistCount,
                        icon: Heart,
                        color: "text-red-600",
                        bg: "bg-red-50",
                      },
                      {
                        label: "Wellness Points",
                        value: user.wellnessPoints,
                        icon: Star,
                        color: "text-yellow-600",
                        bg: "bg-yellow-50",
                      },
                    ].map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-8 rounded-[2rem] border border-outline-variant shadow-sm flex flex-col items-center text-center group hover:border-primary/30 transition-colors"
                      >
                        <div
                          className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                        >
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <span className="text-3xl font-heading font-extrabold text-primary mb-1">
                          {stat.value}
                        </span>
                        <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity */}
                  <div className="bg-white rounded-[2.5rem] border border-outline-variant shadow-sm p-8 md:p-12">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-heading font-extrabold text-primary">
                        Recent Orders
                      </h3>
                      <button
                        onClick={() => setActiveTab("orders")}
                        className="text-sm font-bold text-secondary hover:underline flex items-center gap-1"
                      >
                        View all <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left border-b border-outline-variant">
                            <th className="pb-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                              Order ID
                            </th>
                            <th className="pb-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                              Date
                            </th>
                            <th className="pb-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                              Status
                            </th>
                            <th className="pb-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                              Items
                            </th>
                            <th className="pb-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/30">
                          {orders.map((order) => (
                            <tr
                              key={order.id}
                              className="group hover:bg-surface-container-low/30 transition-colors"
                            >
                              <td className="py-6 font-bold text-primary">{order.id}</td>
                              <td className="py-6 text-sm text-on-surface-variant">{order.date}</td>
                              <td className="py-6">
                                <span
                                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                    order.status === "Delivered"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-blue-100 text-blue-700"
                                  }`}
                                >
                                  {order.status}
                                </span>
                              </td>
                              <td className="py-6 text-sm text-on-surface-variant">
                                {order.items} items
                              </td>
                              <td className="py-6 font-bold text-primary text-right">
                                {order.total}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Security Notification */}
                  <div className="bg-primary/5 rounded-[2rem] p-8 flex flex-col md:flex-row items-center gap-6 border border-primary/10">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <h4 className="font-bold text-primary mb-1">Your account is secured</h4>
                      <p className="text-sm text-on-surface-variant">
                        We've implemented multi-factor authentication and high-end encryption to
                        keep your medical data private and secure.
                      </p>
                    </div>
                    <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold text-sm shadow-sm hover:shadow-md transition-all whitespace-nowrap active:scale-95">
                      Security Settings
                    </button>
                  </div>
                </motion.div>
              )}

              {activeTab === "orders" && (
                <motion.div
                  key="orders"
                  className="bg-white rounded-[2.5rem] border border-outline-variant p-8 text-center py-24"
                >
                  <Package className="w-16 h-16 text-on-surface-variant opacity-20 mx-auto mb-6" />
                  <h3 className="text-2xl font-heading font-extrabold text-primary mb-2">
                    Order History
                  </h3>
                  <p className="text-on-surface-variant mb-8">
                    Detailed view of all your wellness shipments.
                  </p>
                  <Link
                    href="/shop"
                    className="inline-flex py-4 px-10 bg-primary text-on-primary rounded-2xl font-bold hover:shadow-xl transition-all"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              )}

              {/* Other tabs can be added here */}
            </AnimatePresence>
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
