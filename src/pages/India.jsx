import React from "react";
import TourismTemplate from "../components/TourismTemplate";
import {
  heroImages,
  heroContent,
  tours,
  featuredExperiences,
  sectionHeadings,
} from "../constants/indiaData";

export default function India() {
  return (
    <TourismTemplate
      heroImages={heroImages}
      heroContent={heroContent}
      tours={tours}
      featuredExperiences={featuredExperiences}
      sectionHeadings={sectionHeadings}
    />
  );
}

