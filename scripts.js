

// Adding an event to detect when the page is scrolled
window.onscroll = function() {
    var topBar = document.querySelector('.top-bar');
    if (window.scrollY > 0) {
        topBar.classList.add('scrolled');  // Adds the .scrolled class when scrolling
    } else {
        topBar.classList.remove('scrolled'); // Removes the class when at the top of the page
    }
};

function toggleMenu() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('menu-overlay');

    // Toggle the menu and overlay
    const isVisible = menu.classList.toggle('show');
    overlay.style.display = isVisible ? 'block' : 'none';
}

// Close the menu when clicking on the overlay
document.getElementById('menu-overlay').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('menu-overlay');

    menu.classList.remove('show');
    overlay.style.display = 'none';
});

// Optional: Close the menu when clicking on a menu link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('menu');
        const overlay = document.getElementById('menu-overlay');

        menu.classList.remove('show');
        overlay.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    function loadSection(sectionId, filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(data => document.getElementById(sectionId).innerHTML = data)
            .catch(error => console.log('Erreur de chargement:', error));
    }

    loadSection('introduction', 'sections/introduction.html');
});

