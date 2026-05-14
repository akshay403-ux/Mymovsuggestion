document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const gridContainer = document.getElementById('movie-grid');
    const webseriesGridContainer = document.getElementById('webseries-grid');
    const homeView = document.getElementById('home-view');
    const loginView = document.getElementById('login-view');
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');

    // Edit the details for all 10 movies here. 
    // You can update the title, rating (1-10), description, poster, and imdbLink for each movie.
    const movies = [
        {
            id: 1,
            title: "Dhurandhar 1",
            rating: 8.3,
            description: "An underworld saga following a network of criminals, informants and operatives whose lives intersect, navigating covert operations, espionage and betrayals.",
            poster: "D1.png",
            imdbLink: "https://www.imdb.com/title/tt33014583/"
        },
        {
            id: 2,
            title: "Dhurandhar 2",
            rating: 8.5,
            description: "Jaskirat Singh Rangi descends deeper into his alias as Hamza Ali Mazari, rising through Karachi's criminal underworld",
            poster: "D2.png",
            imdbLink: "https://www.imdb.com/title/tt39139925/"
        },
        {
            id: 3,
            title: "Inception",
            rating: 8.8,
            description: "Cobb steals information from his targets by entering their dreams. He is wanted for his alleged role in his wife's murder and his only chance at redemption is to perform a nearly impossible task.",
            poster: "inception.png",
            imdbLink: "https://www.imdb.com/title/tt1375666/"
        },
        {
            id: 4,
            title: "julayi-Dengerous Kheladi",
            rating: 7.3,
            description: "Ravi happens to cross paths with Bittu, a gangster, and helps the police foil his plan to rob a bank. Eventually, Bittu resolves to destroy Ravi and his family.",
            poster: "dank.png",
            imdbLink: "https://www.imdb.com/title/tt2330927/"
        },
        {
            id: 5,
            title: "Impetigore",
            rating: 6.8,
            description: "A toll booth operator travels to her ancestral village in hopes of claiming an inheritance - until she discovers the unsettling truth about her past.",
            poster: "impetigore.png",
            imdbLink: "https://www.imdb.com/title/tt9000302/"
        },
        {
            id: 6,
            title: "GAME OF THRONES",
            rating: 9.2,
            description: "Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy resurfaces after being dormant for millennia.",
            poster: "got6.png",
            imdbLink: "https://www.imdb.com/title/tt0944947/"
        },
        {
            id: 7,
            title: "A knight of the seven kingdoms",
            rating: 8.7,
            description: "A knight of the seven kingdoms: House the dragon story",
            poster: "knight.png",
            imdbLink: "https://www.imdb.com/title/tt27497448/"
        },
        {
            id: 8,
            title: "HIMYM",
            rating: 8.3,
            description: "Ted Mosby recounts his life story to his children, detailing the events that led him to meet their mother.",
            poster: "HIMYM.png",
            imdbLink: "https://www.imdb.com/title/tt0460649/"
        },
        {
            id: 9,
            title: "Succession",
            rating: 8.8,
            description: "The Roy family is involved in a constant battle for control of the company.",
            poster: "succession.png",
            imdbLink: "https://www.imdb.com/title/tt7660850/"
        },
        {
            id: 10,
            title: "Asur",
            rating: 8.4,
            description: "Asur is a gripping crime thriller that delves into the dark corners of the human psyche. Forensic anthropologist Dhananjay Rajan teams up with CBI agent Nikhil Nair to hunt down a serial killer who leaves behind mythical clues, forcing them to confront their own inner demons.",
            poster: "asur.png",
            imdbLink: "https://www.imdb.com/title/tt11912196/"
        }
    ];

    // Initialize Collage Background
    function initCollage() {
        const collageContainer = document.createElement('div');
        collageContainer.id = 'background-collage';
        document.body.insertBefore(collageContainer, document.body.firstChild);

        // Duplicate the list significantly to ensure the screen is filled with a dense collage
        const collageItems = [];
        for (let j = 0; j < 6; j++) {
            collageItems.push(...movies); // 60 items total
        }
        
        collageItems.forEach((movie, i) => {
            const item = document.createElement('div');
            item.className = 'collage-item';
            item.style.backgroundImage = `url('${movie.poster}')`;
            
            // Randomly position across a wider screen area to ensure full coverage
            const top = -10 + Math.random() * 120; // -10% to 110%
            const left = -10 + Math.random() * 120; // -10% to 110%
            const size = 150 + Math.random() * 250; // Width from 150px to 400px (larger)
            const rot = -40 + Math.random() * 80; // Rotation between -40 and +40 deg
            
            item.style.top = `${top}%`;
            item.style.left = `${left}%`;
            item.style.width = `${size * 0.66}px`; // 2:3 aspect ratio
            item.style.height = `${size}px`;
            item.style.transform = `rotate(${rot}deg)`;
            
            // Add a title badge
            const title = document.createElement('div');
            title.className = 'collage-title';
            title.textContent = movie.title;
            item.appendChild(title);
            
            collageContainer.appendChild(item);
        });
    }

    // Initialize Grid
    function initGrid() {
        const moviesList = movies.slice(0, 5);
        const webseriesList = movies.slice(5, 10);

        moviesList.forEach((movie) => {
            createGridItem(movie, gridContainer);
        });

        webseriesList.forEach((series) => {
            createGridItem(series, webseriesGridContainer);
        });
    }

    function createGridItem(item, container) {
        if (!container) return;
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        
        // Generate stars
        let starsHtml = '';
        for(let i=1; i<=10; i++) {
            const filled = i <= Math.round(item.rating) ? 'filled' : '';
            starsHtml += `<span class="star ${filled}">★</span>`;
        }

        gridItem.innerHTML = `
            <img class="grid-image" src="${item.poster}" alt="${item.title}">
            <div class="grid-overlay">
                <h3 class="overlay-title">${item.title}</h3>
                <div class="overlay-rating">
                    <div class="stars">${starsHtml}</div>
                    <span class="rating-value-small">${item.rating}/10</span>
                </div>
                <p class="overlay-description">${item.description}</p>
                <a href="${item.imdbLink}" target="_blank" rel="noopener noreferrer" class="btn-imdb">View on IMDB</a>
            </div>
        `;

        container.appendChild(gridItem);
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value;
            alert(`Logged in with ${email}`);
            
            loginView.classList.remove('active');
            setTimeout(() => {
                loginView.classList.add('hidden');
                homeView.classList.remove('hidden');
                requestAnimationFrame(() => {
                    homeView.classList.add('active');
                });
            }, 500);
        });
    }

    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if (currentTheme === 'delft-blue') {
                document.documentElement.removeAttribute('data-theme');
            } else {
                document.documentElement.setAttribute('data-theme', 'delft-blue');
            }
        });
    }

    // Run Initialization
    initCollage();
    initGrid();
});
