import React, { useEffect } from 'react';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[300px] bg-blue-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1920&auto=format&fit=crop"
                        alt="Privacy Policy Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/10"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p className="text-lg text-blue-100 max-w-2xl">
                        Your privacy is important to us. We are committed to protecting your personal information.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-16 -mt-20 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                    <div className="prose prose-lg max-w-none text-gray-600">
                        <p className="lead text-xl text-gray-800 font-medium mb-8">
                            At Raj Tourism, we value the trust you place in us. That's why we insist upon the highest standards for secure transactions and customer information privacy. Please read the following statement to learn about our information gathering and dissemination practices.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Collection of Personally Identifiable Information</h3>
                        <p>
                            We collect personally identifiable information (email address, name, phone number, etc.) from you when you set up a free account with us. While you can browse some sections of our site without being a registered member, certain activities (such as booking a tour) do require registration. We do use your contact information to send you offers based on your previous orders and your interests.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use of Demographic / Profile Data</h3>
                        <p>
                            We use personal information to provide the services you request. To the extent we use your personal information to market to you, we will provide you the ability to opt-out of such uses. We use your personal information to resolve disputes; troubleshoot problems; help promote a safe service; collect fees owed; measure consumer interest in our products and services, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cookies</h3>
                        <p>
                            A "cookie" is a small piece of information stored by a Web server on a Web browser so it can be later read back from that browser. Cookies are useful for enabling the browser to remember information specific to a given user. Raj Tourism places both permanent and temporary cookies in your computer's hard drive. Raj Tourism's cookies do not contain any of your personally identifiable information.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Security Precautions</h3>
                        <p>
                            Our site has stringent security measures in place to protect the loss, misuse, and alteration of the information under our control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in our possession we adhere to strict security guidelines, protecting it against unauthorized access.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Consent</h3>
                        <p>
                            By using the Website and/ or by providing your information, you consent to the collection and use of the information you disclose on the Website in accordance with this Privacy Policy, including but not limited to your consent for sharing your information as per this privacy policy.
                        </p>

                        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <p className="text-sm text-blue-800 mb-0">
                                <strong>Note:</strong> Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
