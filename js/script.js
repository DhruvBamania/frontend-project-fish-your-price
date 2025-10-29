document.addEventListener('DOMContentLoaded', () => {
    // Navigation menu toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Sample product data (8 products)
    const products = [
        { name: 'Fresh Salmon', price: 799, image: 'images/salmon.jpg' },
        { name: 'Tuna Steak', price: 1499, image: 'images/tuna.jpg' },
        { name: 'Cod Fillet', price: 949, image: 'images/cod.jpg' },
        { name: 'Shrimp', price: 699, image: 'images/shrimp.jpg' },
        { name: 'Sea Bass', price: 1799, image: 'images/seabass.jpg' },
        { name: 'Halibut', price: 2499, image: 'images/halibut.jpg' },
        { name: 'Mahi Mahi', price: 1499, image: 'images/mahi.jpg' },
        { name: 'Red Snapper', price: 1199, image: 'images/redsnapper.jpg' }
    ];

    // Populate product grid
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>Fresh from the ocean</p>
                <p class="product-price">₹${product.price.toFixed(2)}/lb</p>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Form submission
    const form = document.getElementById('fish-order-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});



//login-register java script

const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click',()=> {
    wrapper.classList.add('active');
})

loginlink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
})


// Redirecting 

function index(){
    window.location.assign("../index.html")
}

function login(){
    window.location.assign("html/login.html")
}

function main(){
    window.location.assign("../html/main.html")
}
