function createFoodCourtCard(foodCourt) {
    return `

        <div class="w-full min-w-[450px] bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <!-- Image Section -->
            <div class="relative h-[150px] overflow-hidden">
                <img src="${foodCourt.image}" alt="${foodCourt.name}"
                    class="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110">
                <div class="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    ${foodCourt.status}
                </div>
            </div>

            <div class="p-5">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h2 class="text-lg font-bold text-gray-800 mb-2">${foodCourt.name}</h2>
                        <div class="flex items-center text-gray-600 text-sm">
                            <i class="ri-map-pin-line mr-2"></i>
                            <span>${foodCourt.location}</span>
                        </div>
                    </div>
                    <div class="flex items-center bg-yellow-400 px-3 py-1 rounded-full">
                        <i class="ri-star-fill text-white text-sm mr-1"></i>
                        <span class="text-white text-sm font-semibold">${foodCourt.rating}</span>
                    </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-3">
                    ${foodCourt.tags.map(tag => `
                        <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">${tag}</span>
                    `).join('')}
                </div>

                <!-- Description -->
                <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                    ${foodCourt.description}
                </p>

                <div class="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div class="flex items-center text-gray-600 text-sm">
                        <i class="ri-time-line mr-2"></i>
                        <span>${foodCourt.timing}</span>
                    </div>
                    <button class="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center text-sm">
                        <i class="ri-map-pin-line mr-2"></i>
                        Directions
                    </button>
                </div>
            </div>
        </div>
    `;
}

function loadFoodCourts() {
    fetch('foodCourts.json')
        .then(response => response.json())
        .then(data => {
            const cardsContainer = document.querySelector('.grid');
            cardsContainer.innerHTML = data.foodCourts.map((foodCourt) => createFoodCourtCard(foodCourt)).join('');
        })
        .catch(error => {
            console.error('Error loading food courts:', error);
        });
}

// document.addEventListener('DOMContentLoaded', loadFoodCourts);
console.log(loadFoodCourts())