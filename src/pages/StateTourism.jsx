import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TourismTemplate from '../components/TourismTemplate';
import { statesData } from '../constants/statesData';
import { tours as allIndiaTours } from '../constants/indiaData';

const StateTourism = () => {
    const { state } = useParams();
    const stateConfig = statesData[state];

    // Scroll to top on mount or state change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [state]);

    if (!stateConfig) {
        return <Navigate to="/not-found" replace />;
    }

    // Filter tours based on the IDs defined in stateConfig
    const stateTours = allIndiaTours.filter(tour =>
        stateConfig.tourIds.includes(tour.id)
    );

    return (
        <TourismTemplate
            heroImages={stateConfig.heroImages}
            heroContent={stateConfig.heroContent}
            tours={stateTours}
            featuredExperiences={stateConfig.featuredExperiences}
            sectionHeadings={stateConfig.sectionHeadings}
        />
    );
};

export default StateTourism;
