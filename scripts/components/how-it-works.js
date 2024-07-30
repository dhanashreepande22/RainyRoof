import { state } from '../utils/state.js';

document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    steps.forEach(step => {
        step.addEventListener('click', handleStepClick);
    });
});

function handleStepClick(event) {
    const step = event.currentTarget;
    const stepNumber = step.getAttribute('data-step');
    state.currentStep = stepNumber;
    console.log(`Step ${stepNumber} clicked, state:`, state);
}
