import React, { useEffect } from "react";
import Footer from "../components/Footer";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] bg-indigo-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop"
            alt="Terms of Service Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/10"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-indigo-100 max-w-2xl">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="lead text-xl text-gray-800 font-medium mb-8">
              Welcome to Raj Tourism. By accessing or using our website and
              services, you agree to be bound by these Terms of Service and our
              Privacy Policy.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Booking & Payments
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                All bookings are subject to availability and confirmation by Raj
                Tourism.
              </li>
              <li>
                A deposit is required at the time of booking to secure your
                reservation.
              </li>
              <li>
                Full payment must be made before the travel date as specified in
                your booking confirmation.
              </li>
              <li>
                Prices are subject to change without prior notice until the
                booking is confirmed.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Cancellation & Refunds
            </h3>
            <p>
              Cancellation policies vary depending on the tour package and
              timing of cancellation. Generally:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Cancellations made 30 days or more before departure may be
                eligible for a partial refund.
              </li>
              <li>
                Cancellations made within 15 days of departure may incur higher
                cancellation charges.
              </li>
              <li>
                No refunds are typically provided for cancellations within 7
                days of departure or for no-shows.
              </li>
              <li>
                Refunds, if applicable, will be processed within 15-20 working
                days.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Travel Documents
            </h3>
            <p>
              It is the traveler's responsibility to ensure they have valid
              passports, visas, and other necessary travel documents. Raj
              Tourism is not liable for any issues arising from invalid or
              missing documentation.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Liability
            </h3>
            <p>
              Raj Tourism acts only as an agent for the various independent
              suppliers that provide hotel accommodations, transportation,
              sightseeing, activities, or other services connected with this
              tour. Such services are subject to the terms and conditions of
              those suppliers. Raj Tourism and its respective employees, agents,
              representatives, and assigns accept no liability whatsoever for
              any injury, damage, loss, accident, delay, or any other
              irregularity which may be caused due to the defect in any vehicle,
              or the negligence or default of any company or person engaged in
              carrying out or performing any of the services involved.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Changes to Itinerary
            </h3>
            <p>
              Raj Tourism reserves the right to alter, amend, change or modify
              the tour package and itineraries before or during the tour. We
              will make reasonable efforts to notify you of any such changes.
            </p>
            <p>
              All information given in this brochure / itinerary is based on the
              information available at the time of publication as brochures are
              printed several months in advance. We reserve the right to change
              any brochure / itinerary information before or after your booking
              of the tour due to any events beyond our control. The Client
              acknowledges that the details provided in the brochure/ itinerary,
              are for indicative purposes only. The Client understands that
              actual tour experiences may vary from the descriptions provided in
              promotional materials.
            </p>
            <br />
            <p>
              Raj tourism have right to change or modify the tour itinerary due
              to unforeseen circumstances or force majeure events beyond its
              control. Force majeure events include but are not limited to
              natural disasters, adverse weather conditions, political
              instability, civil unrest, acts of terrorism, and any other events
              deemed beyond the reasonable control of the Raj tourism
            </p>
            <br />
            <p>
              <b>
                Raj tourism have right to cancel, modify and reschedule the
                entire tour
              </b>
            </p>
            <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <p className="text-sm text-indigo-800 mb-0">
                <strong>Contact Us:</strong> If you have any questions about
                these Terms, please contact us at rajtourisam@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
