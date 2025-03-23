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

function toggleProfile(){
    const profile = document.querySelector('.profile-view');
    profile.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    
    const structure = `
        <div class="nav">
            <div class="logo"></div>
            <div class="spaces"></div>
            <div class="profile" onclick="toggleProfile()">
                <img src="/frontend/images/explore/boy.png" alt="">
            </div>
        </div>
        <div class="container">
            <div>
                <div class="top-navigation">
                    <div class="navigation">
                        <div class="nav-section">
                            <div class="section">
                                <h2>Navigation</h2>
                                <div class="info">
                                    <div class="nav-item">
                                        <i class="ri-building-2-fill"></i>
                                        <p>Blocks & Areas</p>
                                    </div>
                                    <div class="nav-item">
                                        <i class="ri-store-2-line"></i>
                                        <p>Food Courts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nav-section">
                            <div class="section">
                                <h2>Quick Filters</h2>
                                <div class="info">
                                    <div class="nav-item">
                                        <i class="ri-fire-fill"></i>
                                        <p>Popular Now</p>
                                    </div>
                                    <div class="nav-item">
                                        <i class="ri-star-s-fill"></i>
                                        <p>Top Rated</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="nav-section">
                            <div class="section">
                                <h2>Food Type</h2>
                                <div class="info">
                                    <div class="nav-item">
                                        <i class="ri-time-fill"></i>
                                        <p>North Indian</p>
                                    </div>
                                    <div class="nav-item">
                                        <i class="ri-time-fill"></i>
                                        <p>South Indian</p>
                                    </div>
                                    <div class="nav-item">
                                        <i class="ri-time-fill"></i>
                                        <p>Chinese</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto max-w-7xl">
                <div id="blocks-section">
                </div>
            </div>
        </div>
    `;
    
    root.innerHTML = structure;

    fetch('blocks.json')
        .then(response => response.json())
        .then(data => {
            const blocksSection = document.getElementById('blocks-section');
            blocksSection.innerHTML = `
                <h2 class="blocks-title">Blocks & Areas</h2>
                <div class="blocks-grid">
                    ${data.universityBlocks.map(block => createBlockCard(block)).join('')}
                </div>
            `;
        })
        .catch(error => {
            console.error('Error loading blocks:', error);
            const blocksSection = document.getElementById('blocks-section');
            blocksSection.innerHTML = `
                <div class="error-message">
                    Failed to load blocks data. Please try again later.
                </div>
            `;
        });
}); 

document.addEventListener('DOMContentLoaded', () => {
    const profileView = document.querySelector('.profile-view');

    profileView.innerHTML = `
        <div class="username">
            <h3>Username</h3>
            <p>student@lpu.in</p>
        </div>
        <div class="detail">
            <div class="data">
                <i class="ri-user-settings-line"></i>
                <p>My Profile</p>
            </div>
            <div class="data">
                <i class="ri-chat-1-fill"></i>
                <p>Your Experience</p>
            </div>
            <div class="data">
                <i class="ri-key-2-fill"></i>
                <p>Change Password</p>
            </div>
            <div class="data logout">
                <i class="ri-logout-box-r-line"></i>
                <p>Logout</p>
            </div>
        </div>
    `;
})