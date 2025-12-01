import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TourismTemplate from '../components/TourismTemplate';
import { internationalCountriesData } from '../constants/internationalCountriesData';
import { tours as allInternationalTours } from '../constants/internationalData';

const InternationalCountry = () => {
    const { country } = useParams();
    const countryConfig = internationalCountriesData[country];

    // Scroll to top on mount or country change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [country]);

    if (!countryConfig) {
        return <Navigate to="/not-found" replace />;
    }

    // Filter tours based on the IDs defined in countryConfig
    const countryTours = allInternationalTours.filter(tour =>
        countryConfig.tourIds.includes(tour.id)
    );

    return (
        <TourismTemplate
            heroImages={countryConfig.heroImages}
            heroContent={countryConfig.heroContent}
            tours={countryTours}
            featuredExperiences={countryConfig.featuredExperiences}
            sectionHeadings={countryConfig.sectionHeadings}
        />
    );
};

export default InternationalCountry;
