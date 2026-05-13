document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const gridContainer = document.getElementById('movie-grid');
    const webseriesGridContainer = document.getElementById('webseries-grid');
    const homeView = document.getElementById('home-view');
    const detailView = document.getElementById('detail-view');
    const loginView = document.getElementById('login-view');
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const backBtn = document.getElementById('back-btn');

    // Detail View Elements
    const detailTitle = document.getElementById('detail-title');
    const detailRating = document.getElementById('detail-rating');
    const detailDescription = document.getElementById('detail-description');
    const detailPoster = document.getElementById('detail-poster');
    const detailImdbLink = document.getElementById('detail-imdb-link');

    // Edit the details for all 10 movies here. 
    // You can update the title, rating (1-10), description, poster, and imdbLink for each movie.
    const movies = [
        {
            id: 1,
            title: "Dhurandhar 1",
            rating: 8.3,
            rate: 8.3 / 10,
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
            poster: "Succession.png",
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

    // Initialize Grid
    function initGrid() {
        const moviesList = movies.slice(0, 5);
        const webseriesList = movies.slice(5, 10);

        moviesList.forEach((movie, index) => {
            createGridItem(movie, index + 1, gridContainer);
        });

        webseriesList.forEach((series, index) => {
            createGridItem(series, index + 1, webseriesGridContainer);
        });
    }

    function createGridItem(item, displayId, container) {
        if (!container) return;
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `
            <span class="grid-number">${displayId}</span>
            <img class="grid-image" src="${item.poster}" alt="${item.title}">
        `;

        // Event listener for click
        gridItem.addEventListener('click', () => {
            showDetailView(item);
        });

        container.appendChild(gridItem);
    }

    // Show Detail View
    function showDetailView(movie) {
        // Populate Data
        detailTitle.textContent = movie.title;
        detailDescription.textContent = movie.description;
        detailPoster.src = movie.poster;
        detailImdbLink.href = movie.imdbLink;

        // Render Rating Stars (10-star system)
        detailRating.innerHTML = '';
        for (let i = 1; i <= 10; i++) {
            const star = document.createElement('span');
            star.className = `star ${i <= movie.rating ? 'filled' : ''}`;
            star.innerHTML = '★';
            detailRating.appendChild(star);
        }

        // Show numerical rating
        const ratingValue = document.getElementById('detail-rating-value');
        if (ratingValue) {
            ratingValue.textContent = `${movie.rating}/10`;
        }

        // Transition Views
        homeView.classList.remove('active');
        setTimeout(() => {
            homeView.classList.add('hidden');
            detailView.classList.remove('hidden');
            // Small delay to allow display:block to apply before animating opacity
            requestAnimationFrame(() => {
                detailView.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }, 500); // Wait for fade out
    }

    // Show Home View (Back button logic)
    function showHomeView() {
        detailView.classList.remove('active');
        setTimeout(() => {
            detailView.classList.add('hidden');
            homeView.classList.remove('hidden');
            requestAnimationFrame(() => {
                homeView.classList.add('active');
            });
        }, 500);
    }

    // Attach Event Listeners
    backBtn.addEventListener('click', showHomeView);

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

    // Run Initialization
    initGrid();
});
