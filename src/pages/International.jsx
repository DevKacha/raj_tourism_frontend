import React from "react";
import TourismTemplate from "../components/TourismTemplate";
import {
    heroImages,
    heroContent,
    tours,
    featuredExperiences,
    sectionHeadings,
} from "../constants/internationalData";

export default function International() {
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
