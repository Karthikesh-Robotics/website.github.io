document.addEventListener("DOMContentLoaded", function () {
    var humbarger = document.querySelector('.humbarger');
    var menuList = document.querySelector('.menu-list');
    var menuListItems = document.querySelectorAll('.menu-list li a');

    humbarger.addEventListener('click', function (event) {
        if (menuList.style.display === 'none' || menuList.style.display === '') {
            menuList.style.display = 'block';
        } else {
            menuList.style.display = 'none';
        }
        event.preventDefault();
    });

    menuListItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            if (window.innerWidth < 768) {
                menuList.style.display = 'none';
                event.preventDefault();
            }
        });
    });
});

function animateNumbers() {
    var counters = document.querySelectorAll('.count');

    counters.forEach(function (counter) {
        var target = +counter.innerText;
        var current = 0;
        var increment = Math.ceil(target / 100);

        var interval = setInterval(function () {
            current += increment;
            counter.innerText = Math.min(current, target);

            if (current >= target) {
                clearInterval(interval);
            }
        }, 20);
    });
}

const targetElement = document.getElementById('stats');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.disconnect(); 
        }
    });
}, { threshold: 0.5});

observer.observe(targetElement);
