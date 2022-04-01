import React from 'react'

export const initialState = {
    priceRange: 5000,
    category: { artwork: false, photography: false, mixedMediArt: false, auditoryArt: false },
    rating: 0,
    lowToHigh: false,
    highToLow: false,
};

export const HIGH_TO_LOW = "HIGH_TO_LOW";
export const LOW_TO_HIGH = "LOW_TO_HIGH";
export const CATEGORY_FILTER = "CATEGORY_FILTER";
export const RATING_FILTER = "RATING_FILTER";
export const RANGE_FILTER = "RANGE_FILTER";
export const RESET_FILTER = "RESET_FILTER";


export const filterReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case HIGH_TO_LOW:
            return { ...state, highToLow: true };

        case LOW_TO_HIGH:
            return { ...state, lowToHigh: true };

        case CATEGORY_FILTER:
            return {
                ...state, category: { ...state.category, [payload]: !state.category[payload] }
            }

        case RATING_FILTER:
            return { ...state, rating: payload };

        case RANGE_FILTER:
            return { ...state, priceRange: payload.value };

        case RESET_FILTER:
            return initialState;

        default:
            return state;
    }
};
