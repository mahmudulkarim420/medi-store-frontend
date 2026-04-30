"use client";

import Link from "next/link";
import { 
  Trash2, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  ChevronLeft, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  Gift, 
  ArrowRight,
  Info
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  const FREE_SHIPPING_THRESHOLD = 100;
  const shipping = cart.length > 0 ? (subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 9.99) : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;
  
  const freeShippingProgress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remainingForFreeShipping = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -50 }
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-[80vh] items-center justify-center text-center px-4 bg-background">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 bg-secondary-container/30 rounded-full flex items-center justify-center relative z-10">
            <ShoppingBag className="w-14 h-14 text-primary opacity-40" />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
            <Gift className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-heading font-bold text-primary mb-4"
        >
          Your cart is quiet
        </motion.h1>
        
        <motion.p 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-on-surface-variant max-w-md mb-10 leading-relaxed"
        >
          Your basket is waiting for some wellness essentials. Explore our curated collections and start your journey to better health today.
        </motion.p>
        
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/shop" className="group relative overflow-hidden bg-primary text-on-primary px-10 py-4 rounded-full font-medium flex items-center gap-3 hover:shadow-xl transition-all duration-300">
            <span className="relative z-10">Start Shopping</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-primary-container translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24 pt-8">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs / Back button */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/shop" className="text-secondary hover:text-primary flex items-center gap-1 text-sm font-medium transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column: Cart Items */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-grow lg:w-2/3"
          >
            <div className="flex items-end justify-between mb-8">
              <div>
                <h1 className="text-4xl font-heading font-bold text-primary mb-2">My Cart</h1>
                <p className="text-on-surface-variant flex items-center gap-2">
                  <span className="font-semibold">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span> items in your selection
                </p>
              </div>
            </div>

            {/* Free Shipping Progress */}
            <motion.div 
              variants={itemVariants}
              className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 mb-8 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3 text-primary">
                  <div className={`p-2 rounded-full ${subtotal >= FREE_SHIPPING_THRESHOLD ? 'bg-green-100 text-green-700' : 'bg-primary-container/20'}`}>
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="font-bold">
                    {subtotal >= FREE_SHIPPING_THRESHOLD 
                      ? "You've unlocked Free Shipping!" 
                      : `Add $${remainingForFreeShipping.toFixed(2)} more for Free Shipping`}
                  </span>
                </div>
                <span className="text-sm font-medium text-on-surface-variant">
                  {subtotal.toFixed(2)} / ${FREE_SHIPPING_THRESHOLD}
                </span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${freeShippingProgress}%` }}
                  transition={{ duration: 1, ease: "circOut" }}
                  className={`h-full rounded-full ${subtotal >= FREE_SHIPPING_THRESHOLD ? 'bg-green-500' : 'bg-primary'}`}
                />
              </div>
            </motion.div>

            {/* Items List */}
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {cart.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-white border border-outline-variant rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
                  >
                    <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                      {/* Product Image */}
                      <div className="w-full sm:w-32 h-48 sm:h-32 bg-surface-container-low rounded-xl overflow-hidden shrink-0 border border-outline-variant/30">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>

                      <div className="flex-grow flex flex-col justify-between">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase mb-1 block">
                              {item.category}
                            </span>
                            <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                              {item.name}
                            </h3>
                            <div className="flex items-center gap-2 text-on-surface-variant text-sm mt-1">
                              <span className="bg-surface-container px-2 py-0.5 rounded text-[11px] font-medium border border-outline-variant/50">
                                SKU: MED-{String(item.id).padStart(4, '0')}
                              </span>
                              <span className="flex items-center gap-1 text-green-600 font-medium text-[11px]">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                In Stock
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-primary">
                              ${(parseFloat(typeof item.price === 'string' ? item.price.replace('$', '') : item.price.toString()) * item.quantity).toFixed(2)}
                            </p>
                            <p className="text-xs text-on-surface-variant font-medium">
                              {typeof item.price === 'string' ? item.price : `$${item.price}`} / unit
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-outline-variant/30">
                          <div className="flex items-center bg-surface-container-low rounded-full border border-outline-variant/50 p-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-primary transition-all active:scale-90"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-10 text-center text-sm font-bold text-primary">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white text-primary transition-all active:scale-90"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center gap-2 text-red-500/70 hover:text-red-500 text-sm font-medium transition-colors p-2 hover:bg-red-50 rounded-xl"
                          >
                            <Trash2 className="w-4 h-4" />
                            <span className="hidden sm:inline">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Decorative background element */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Column: Order Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-3xl p-8 sticky top-28 border border-outline-variant shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-primary mb-8">Order Summary</h2>
              
              <div className="space-y-5 mb-8">
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="text-sm font-medium">Subtotal</span>
                  <span className="font-bold text-primary">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between items-center text-on-surface-variant">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-medium">Shipping</span>
                    <div className="group relative cursor-help">
                      <Info className="w-3.5 h-3.5 opacity-40" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-on-surface text-surface text-[10px] rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        Standard tracked shipping. Free for orders over $100.
                      </div>
                    </div>
                  </div>
                  <span className={`font-bold ${shipping === 0 ? 'text-green-600' : 'text-primary'}`}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span className="text-sm font-medium">Estimated Tax</span>
                  <span className="font-bold text-primary">${tax.toFixed(2)}</span>
                </div>

                {/* Promo Code Input */}
                <div className="pt-2">
                  <div className="relative group">
                    <input 
                      type="text" 
                      placeholder="Promo Code" 
                      className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    />
                    <button className="absolute right-2 top-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-outline-variant/30 pt-6 mb-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-on-surface-variant font-medium">Total Amount</p>
                    <p className="text-xs text-secondary mt-0.5">Including VAT & taxes</p>
                  </div>
                  <p className="text-3xl font-heading font-extrabold text-primary">${total.toFixed(2)}</p>
                </div>
              </div>

              <button className="w-full group relative overflow-hidden py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex justify-center items-center gap-3 active:scale-[0.98]">
                <Lock className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span>Complete Purchase</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              
              <div className="mt-8 pt-8 border-t border-outline-variant/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-3 rounded-2xl bg-surface-container-low/50 text-center">
                    <ShieldCheck className="w-6 h-6 text-primary mb-2 opacity-70" />
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider leading-tight">Secure Payments</span>
                  </div>
                  <div className="flex flex-col items-center p-3 rounded-2xl bg-surface-container-low/50 text-center">
                    <CreditCard className="w-6 h-6 text-primary mb-2 opacity-70" />
                    <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider leading-tight">All Cards Accepted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Help / Support Card */}
            <div className="mt-6 bg-primary-container/10 border border-primary/10 rounded-2xl p-5 flex gap-4 items-start">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Info className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary mb-1">Need assistance?</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Our wellness experts are available Mon-Fri, 9am - 6pm. Call us at 1-800-MEDI-STORE.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
