import React from "react";
import Hero from "../components/Hero";
import AboutSnippet from "../components/AboutSnippet";
import ServicesGrid from "../components/ServicesGrid";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";
import OurLocation from "../components/OurLocation";
import InternationalPackages from "../components/InternationalPackages";
import TrendingAttractionsClean from "../components/TrendingAttractions";
import ExploreIndia from "../components/ExploreIndia";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <ExploreIndia />
      <InternationalPackages />
      <TrendingAttractionsClean />
      <ServicesGrid />
      <AboutSnippet />
      <OurLocation />
      <Reviews />

      <Footer />
    </div>
  )
}
