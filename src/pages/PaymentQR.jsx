import React, { useState } from "react";
import Footer from "../components/Footer";

export default function PaymentQR() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20231227/pngtree-aesthetic-backdrop-featuring-a-delicate-light-blue-watercolor-texture-image_13897547.png"
            alt="Travel Background"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16  rounded-full flex items-center justify-center ">
              <img
                src="src\assets\raj_tourism\rt-logo_final.png"
                alt="Raj Tourism Logo"
                className="w-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
            Secure Payment
          </h2>
          <p className="text-xl md:text-2xl text-center max-w-2xl text-gray-100">
            Scan the QR code below to complete your payment instantly
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-16">
        {/* QR Code Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* <div className="bg-gradient-to-r from-orange-50 to-red-50 px-8 py-8 border-b border-orange-100">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
              Payment QR Code
            </h3>
            <p className="text-center text-gray-600 text-lg">
              Scan with any UPI app to pay
            </p>
          </div> */}

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left Side - QR Code Only */}
            <div className="flex flex-col items-center justify-center">
              {/* QR Code Container */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border-4 border-blue-500">
                  <div className="w-100 h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <img
                      src="src\assets\raj_tourism\image.png"
                      alt="Payment QR Code"
                      className="w-full h-80 object-contain rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Company Info + Information Cards */}
            <div className="flex flex-col justify-center space-y-6">
              {/* Company Info */}
              <div className="text-center lg:text-left mb-4">
                <h4 className="text-3xl font-bold text-gray-900 mb-2">
                  RAJ TOURISM
                </h4>
                <p className="text-xl font-semibold text-blue-600 mb-1">
                  PVT. LTD.
                </p>
                <p className="text-lg text-gray-700 mb-3">
                  DOMESTIC & INTERNATIONAL TOURS
                </p>
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-5 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Verified Payment Gateway</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-2"></div>

              {/* Information Cards */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 mb-2">
                        100% Secure
                      </h4>
                      <p className="text-gray-700">
                        Protected by bank-grade encryption. Your payment
                        information is completely safe and secure.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 mb-2">
                        Instant Transfer
                      </h4>
                      <p className="text-gray-700">
                        Payment confirmed in seconds. Get instant confirmation
                        once the transaction is complete.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-7 h-7 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 mb-2">
                        24/7 Support
                      </h4>
                      <p className="text-gray-700">
                        Always here to help you. Contact our support team
                        anytime for assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
