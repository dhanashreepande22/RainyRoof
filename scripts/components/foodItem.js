export function createFoodItem(id, imgSrc, title) {
    // Create the main container for the food item
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-item');
    foodItem.id = id;

    // Create the image element
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = title; // using title for the alt text of the image
    img.classList.add('food-item-img');

    // Append the image to the food item container
    foodItem.appendChild(img);

    // Return the complete food item element
    return foodItem;
}
