const universityBlocks = [
    {
        name: "Block 34",
        description: "Main Academic Area",
        foodCourts: 4,
        capacity: "High Capacity",
        gradientClass: "gradient-purple-blue",
        icon: "ri-building-2-line"
    },
    {
        name: "Block 32",
        description: "Engineering Complex",
        foodCourts: 3,
        capacity: "Medium Capacity",
        gradientClass: "gradient-blue-cyan",
        icon: "ri-building-4-line"
    },
    {
        name: "Uni Mall",
        description: "Shopping Complex",
        foodCourts: 6,
        capacity: "Very High Capacity",
        gradientClass: "gradient-indigo-purple",
        icon: "ri-store-2-line"
    },
    {
        name: "Block 38",
        description: "Design Block",
        foodCourts: 2,
        capacity: "Medium Capacity",
        gradientClass: "gradient-pink-rose",
        icon: "ri-paint-brush-line"
    },
    {
        name: "CSE Block",
        description: "Computer Science",
        foodCourts: 3,
        capacity: "High Capacity",
        gradientClass: "gradient-cyan-blue",
        icon: "ri-computer-line"
    },
    {
        name: "Block 1",
        description: "Management Block",
        foodCourts: 4,
        capacity: "High Capacity",
        gradientClass: "gradient-amber-orange",
        icon: "ri-bank-line"
    }
];

function createBlockCard(block) {
    return `
        <div class="block-card ${block.gradientClass}">
            <div class="block-content">
                <div class="block-header">
                    <i class="${block.icon} block-icon"></i>
                    <h3 class="block-title">${block.name}</h3>
                </div>
                <p class="block-description">${block.description}</p>
                <div class="block-info">
                    <div class="info-item">
                        <i class="ri-store-2-line"></i>
                        <span>${block.foodCourts} Food Courts</span>
                    </div>
                    <div class="info-item">
                        <i class="ri-user-line"></i>
                        <span>${block.capacity}</span>
                    </div>
                </div>
                <button class="view-button">
                    View Food Courts
                    <i class="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    const blocksSection = document.getElementById('blocks-section');
    blocksSection.innerHTML = `
        <h2 class="blocks-title">Blocks & Areas</h2>
        <div class="blocks-grid">
            ${universityBlocks.map(block => createBlockCard(block)).join('')}
        </div>
    `;
}); 