import { state } from '../utils/state.js';

export function showMoreButtonListener() {
    try {
        state.currentPage = 'more-info';
        window.location.href = "#more-info";
        console.log("Show me more clicked, state:", state);
    } catch (error) {
        console.error("Error in show more button click:", error);
    }
}
