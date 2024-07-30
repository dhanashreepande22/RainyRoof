import { state } from '../utils/state.js';

export function initNavigator() {
    document.querySelectorAll(".nav-container .nav-item").forEach((navItem) => {
        navItem.addEventListener('click', (event) => {
            try {
                const target = event.target.getAttribute('data-target');
                state.currentPage = target;
                window.location.href = `#${target}`;
                console.log("Navigation to", target, "state:", state);
            } catch (error) {
                console.error("Navigation error", error);
            }
        });
    });
}
