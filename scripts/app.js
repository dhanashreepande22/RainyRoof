

import { createFoodItem } from './components/foodItem.js';
import { initNavigator } from './components/navigation.js';
import globalState from './globalState.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigator();
    handleReviews();
    handleFoodItems();
    handleCities();
    setupPhoneImageAnimation();
    setupCityClickHandlers();
});

function handleReviews() {
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewsData = globalState.reviews;
    if (reviewsContainer && reviewsData) {
        reviewsData.forEach(review => {
            const reviewElement = createReviewElement(review);
            reviewsContainer.appendChild(reviewElement);
        });
    }
}

function handleFoodItems() {
    const foodItemsData = [
        { id: 'item1', imgSrc: 'assets/RainyRoofSignatureMeal.png', title: 'Signature Meal', description: 'Rainy Roof Signature Meal', xPos: 50, yPos: 50 },
        { id: 'item2', imgSrc: 'assets/MalaiKebab.png', title: 'Malai Kebab', description: 'Delicious Malai Kebab', xPos: 460, yPos: 50 },
        { id: 'item3', imgSrc: 'assets/CashewNutSalad.png', title: 'Cashew Nut Salad', description: 'Yummy Cashew Nut Salad', xPos: 870, yPos: 50 },
        { id: 'item4', imgSrc: 'assets/ReyashLaham.png', title: 'Laham', description: 'Rainy Roof Laham', xPos: 1280, yPos: 50 },
        { id: 'item5', imgSrc: 'assets/Mixed Grill Platter.jpg', title: 'Mixed Grill', description: 'Rainy Roof Mixed Grill', xPos: 50, yPos: 370 },
        { id: 'item6', imgSrc: 'assets/GrilledLobster.png', title: 'Grilled Lobster', description: 'Perfectly Grilled Lobster', xPos: 460, yPos: 370 },
        { id: 'item7', imgSrc: 'assets/BeetSirloinSteak.png', title: 'Beef Sirloin Steak', description: 'Juicy Beef Sirloin Steak', xPos: 870, yPos: 370 },
        { id: 'item8', imgSrc: 'assets/FishFilletSteak.png', title: 'Fish Fillet Steak', description: 'Tasty Fish Fillet Steak', xPos: 1280, yPos: 370 }
    ];
    const foodContainer = document.querySelector('.food-items-container');
    if (foodContainer) {
        foodItemsData.forEach(itemData => {
            const item = createFoodItem(itemData.id, itemData.imgSrc, itemData.title, itemData.description, itemData.xPos, itemData.yPos);
            foodContainer.appendChild(item);
        });
    }
}

function setupPhoneImageAnimation() {
    const phoneImage = document.querySelector('.phone-image');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target); // Optionally stop observing after animation
            }
        });
    }, { threshold: 0.5 });
    observer.observe(phoneImage);
}

function handleCities() {
    if (globalState.currentPage === 'cities') {
        renderCities();
    }
}

function setupCityClickHandlers() {
    document.querySelectorAll('.city-handle').forEach(handle => {
        handle.addEventListener('click', handleCityClick);
    });
}

function createReviewElement(review) {
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';
    const textElement = document.createElement('p');
    textElement.className = 'review-text';
    textElement.textContent = review.text;
    const reviewerElement = document.createElement('div');
    reviewerElement.className = 'reviewer';
    const photoElement = document.createElement('img');
    photoElement.className = 'reviewer-photo';
    photoElement.src = review.photoSrc;
    photoElement.alt = review.reviewer;
    const nameElement = document.createElement('span');
    nameElement.className = 'reviewer-name';
    nameElement.textContent = review.reviewer;
    reviewerElement.appendChild(photoElement);
    reviewerElement.appendChild(nameElement);
    reviewElement.appendChild(textElement);
    reviewElement.appendChild(reviewerElement);
    return reviewElement;
}

function renderCities() {
    const container = document.querySelector('.cities-container');
    if (container) {
        globalState.cities.forEach(city => {
            const cityCard = document.getElementById(city.id);
            if (cityCard) {
                cityCard.querySelector('h3').textContent = city.name;
                cityCard.querySelector('p:nth-of-type(1)').textContent = `${city.happyEaters}+ happy eaters`;
                cityCard.querySelector('p:nth-of-type(2)').textContent = `${city.topChefs}+ top chefs`;
                cityCard.querySelector('p:nth-of-type(3)').textContent = city.socialHandle;
            }
        });
    }
}

function handleCityClick(event) {
    const handle = event.target;
    const citySocialHandle = handle.getAttribute('data-city');
    alert(`Redirecting to ${citySocialHandle}'s social page.`);
}
