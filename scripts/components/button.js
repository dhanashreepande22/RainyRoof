// scripts/components/button.js
import { hungryButtonListener } from '../interactions/hungryButtonLogic.js';
import { showMoreButtonListener } from '../interactions/showMoreButtonLogic.js';

export function initButtons() {
    document.getElementById("hungry-btn").addEventListener("click", hungryButtonListener);
    document.getElementById("show-more-btn").addEventListener("click", showMoreButtonListener);
}
