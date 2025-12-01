import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import India from "./pages/India";
import Gujarat from "./pages/Gujarat";
import StateTourism from "./pages/StateTourism";
import International from "./pages/International";
import InternationalCountry from "./pages/InternationalCountry";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PaymentQR from "./pages/PaymentQR";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import PackageDetails from "./pages/PackageDetails";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <main className="pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/india" element={<India />} />
          <Route path="/gujarat" element={<Gujarat />} />
          <Route path="/india/:state" element={<StateTourism />} />
          <Route path="/international" element={<International />} />
          <Route path="/international/:country" element={<InternationalCountry />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment-qr" element={<PaymentQR />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/package-details/:id" element={<PackageDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}