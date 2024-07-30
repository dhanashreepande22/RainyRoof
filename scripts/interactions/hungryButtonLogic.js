import { state } from '../utils/state.js';

export function hungryButtonListener() {
    try {
        state.currentPage = 'menu';
        window.location.href = "#menu";
        console.log("I'm hungry clicked, state:", state);
    } catch (error) {
        console.error("Error in hungry button click:", error);
    }
}
