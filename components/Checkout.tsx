import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CreditCard, Truck, ShieldCheck, ShoppingBag } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cart: items, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setStep('confirmation');
    clearCart();
  };

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="text-neutral-400" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900">Your cart is empty</h2>
          <p className="text-neutral-500">Add some items to your cart to proceed to checkout.</p>
          <button 
            onClick={() => navigate('/store')}
            className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition-colors"
          >
            Return to Store
          </button>
        </div>
      </div>
    );
  }

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <ShieldCheck className="text-green-600" size={40} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">Order Confirmed!</h2>
            <p className="text-neutral-500">Thank you for your purchase. Your order #NX-{Math.floor(Math.random() * 10000)} has been received.</p>
          </div>
          <div className="border-t border-neutral-100 pt-6 space-y-3">
            <button 
              onClick={() => navigate('/account')}
              className="w-full py-3 border border-neutral-200 rounded-xl font-bold hover:bg-neutral-50 transition-colors"
            >
              View Order Status
            </button>
            <button 
              onClick={() => navigate('/store')}
              className="w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-neutral-800 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/store')} className="p-2 hover:bg-neutral-100 rounded-full transition-colors">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold tracking-tight">Checkout</h1>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-500">
            <ShieldCheck size={16} className="text-green-600" />
            <span>Secure Checkout</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Shipping Section */}
          <div className={`bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden ${step === 'payment' ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="p-6 border-b border-neutral-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <h2 className="text-lg font-bold">Shipping Information</h2>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">First Name</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-black transition-colors" placeholder="Jane" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Last Name</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Address</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-black transition-colors" placeholder="123 Nexus Blvd" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">City</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-black transition-colors" placeholder="New York" />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Postal Code</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-black transition-colors" placeholder="10001" />
              </div>
              {step === 'shipping' && (
                <div className="col-span-2 mt-4">
                  <button 
                    onClick={() => setStep('payment')}
                    className="w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
                  >
                    Continue to Payment <Truck size={18} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Payment Section */}
          <div className={`bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden ${step === 'shipping' ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="p-6 border-b border-neutral-100 flex items-center gap-3">
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <h2 className="text-lg font-bold">Payment Method</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex-1 border-2 border-black bg-neutral-50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer">
                  <CreditCard size={24} />
                  <span className="text-sm font-bold">Credit Card</span>
                </div>
                <div className="flex-1 border border-neutral-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-neutral-300">
                  <span className="text-xl font-black italic">Pay<span className="text-blue-500">Pal</span></span>
                  <span className="text-sm font-medium text-neutral-500">PayPal</span>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Card Number</label>
                  <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-black transition-colors" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">Expiry Date</label>
                    <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-black transition-colors" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-neutral-500 mb-1">CVC</label>
                    <input type="text" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 focus:outline-none focus:border-black transition-colors" placeholder="123" />
                  </div>
                </div>
              </div>

              {step === 'payment' && (
                <div className="pt-4 flex gap-4">
                  <button 
                    onClick={() => setStep('shipping')}
                    className="px-6 py-3 border border-neutral-200 rounded-xl font-bold hover:bg-neutral-50 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handlePlaceOrder}
                    disabled={isProcessing}
                    className="flex-1 py-3 bg-black text-white rounded-xl font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Processing...' : `Pay $${cartTotal.toFixed(2)}`}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-16 h-16 bg-neutral-100 rounded-lg overflow-hidden shrink-0">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-neutral-300">
                        <ShoppingBag size={20} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-neutral-500">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-sm font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3 border-t border-neutral-100 pt-6">
              <div className="flex justify-between text-sm text-neutral-600">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-neutral-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm text-neutral-600">
                <span>Taxes</span>
                <span>${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-3 border-t border-neutral-100">
                <span>Total</span>
                <span>${(cartTotal * 1.08).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
