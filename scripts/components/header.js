// JavaScript file (scripts/app.js)
export function initHeader() {
    const header = document.getElementById('header');
    header.innerHTML = 
        <div class="header">
            <div class="nav-container">
                <a class="nav-item" href="#" data-target="home">Home</a>
                <a class="nav-item" href="#good-delivery" data-target="good-delivery">Good Delivery</a>
                <a class="nav-item" href="#how-it-works" data-target="how-it-works">How It Works</a>
                <a class="nav-item" href="#our-cities" data-target="our-cities">Our Cities</a>
                <a class="nav-item" href="#sign-up" data-target="sign-up">Sign Up</a>
            </div>
        </div>
    ;
}

document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('show-more-btn');
    const getFoodSection = document.getElementById('get-food-section');

    if (showMoreBtn && getFoodSection) {
        showMoreBtn.addEventListener('click', function() {
            getFoodSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});
