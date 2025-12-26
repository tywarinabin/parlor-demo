// Main JavaScript File for Priyank Salon

// Data for services
const servicesData = [
    {
        id: 1,
        title: "Bridal Makeup & Styling",
        description: "Complete bridal transformation with premium products, trial sessions, and customized look design.",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: ["makeup", "bridal"],
        features: ["Trial Session", "Premium Products", "Custom Design"],
        price: "₹8,999"
    },
    {
        id: 2,
        title: "Hair Styling & Treatment",
        description: "Professional haircuts, coloring, keratin treatment, smoothening, and complete hair spa.",
        image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: ["hair"],
        features: ["Keratin", "Color Expert", "Hair Spa"],
        price: "₹1,499"
    },
    {
        id: 3,
        title: "Premium Facial Treatments",
        description: "Advanced facials, cleanups, bleaching, threading, waxing with international standard products.",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: ["skin"],
        features: ["Gold Facial", "Hydration", "Anti-Aging"],
        price: "₹999"
    },
    {
        id: 4,
        title: "Luxury Spa & Massage",
        description: "Relaxing body massage, aromatherapy, de-stress treatments, and full body spa for rejuvenation.",
        image: "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: ["spa"],
        features: ["Aromatherapy", "De-stress", "Rejuvenation"],
        price: "₹1,799"
    },
    {
        id: 5,
        title: "Party & Event Makeup",
        description: "Professional makeup for birthdays, engagements, corporate events and special occasions.",
        image: "https://images.unsplash.com/photo-1519415711931-702deacf5be8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: ["makeup"],
        features: ["HD Makeup", "Airbrush", "Waterproof"],
        price: "₹2,499"
    },
    {
        id: 6,
        title: "Nail Art & Care",
        description: "Manicure, pedicure, nail extensions, gel polish, and creative nail art designs.",
        image: "https://images.unsplash.com/photo-1607779097332-bb4c6d0c2c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: ["hair", "skin"],
        features: ["Gel Polish", "Nail Art", "Extensions"],
        price: "₹699"
    },
    {
        id: 7,
        title: "Mehndi & Henna Art",
        description: "Traditional and modern mehndi designs for weddings, festivals, and special occasions.",
        image: "https://images.unsplash.com/photo-1519415711931-702deacf5be8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: ["bridal"],
        features: ["Traditional", "Arabic", "Custom"],
        price: "₹499"
    },
    {
        id: 8,
        title: "Bridal Package (Full Day)",
        description: "Complete bridal package including makeup, hair, mehndi, and pre-bridal treatments.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        category: ["bridal", "makeup", "hair"],
        features: ["Full Day", "3 Artists", "Touch-ups"],
        price: "₹15,999"
    }
];

// Data for reviews
const reviewsData = [
    {
        id: 1,
        name: "Kanika Dewan",
        initials: "KD",
        date: "a month ago",
        rating: 5,
        content: "I am highly impressed by the staff and the services being provided. The attention to detail, hygiene standards, and professional approach make this the best choice in the area. Definitely recommending to all my friends!",
        category: "service"
    },
    {
        id: 2,
        name: "Shriya Mishra",
        initials: "SM",
        date: "9 months ago",
        rating: 5,
        content: "I highly recommend this parlour. All the services they provide are really good and comfortable. The staff is really very friendly, price is affordable and they give you full attention. Parlour is clean and calm. Very good experience. Only ladies staff.",
        category: "service"
    },
    {
        id: 3,
        name: "Alisha Soni",
        initials: "AS",
        date: "2 months ago",
        rating: 5,
        content: "Good experience with salon staff. Good knowledge about work. The bridal makeup they did for my sister was absolutely stunning. They understood exactly what we wanted and delivered beyond expectations.",
        category: "service"
    },
    {
        id: 4,
        name: "Priya Khanna",
        initials: "PK",
        date: "3 weeks ago",
        rating: 5,
        content: "The spa experience was rejuvenating! Professional staff, clean environment, and amazing service. Their attention to hygiene is commendable. Will definitely visit again for my regular beauty needs.",
        category: "service"
    },
    {
        id: 5,
        name: "Riya Sharma",
        initials: "RS",
        date: "1 month ago",
        rating: 5,
        content: "Best beauty parlour in Bhopal! The staff is professional, friendly and knowledgeable. They use high quality products and the pricing is very reasonable. Highly recommended for all beauty services.",
        category: "behaviour"
    },
    {
        id: 6,
        name: "Neha Patel",
        initials: "NP",
        date: "4 months ago",
        rating: 4,
        content: "Very good service and reasonable prices. The salon is always clean and well maintained. Staff is courteous and skilled. Special mention to their bridal makeup services which are outstanding.",
        category: "prices"
    }
];

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const serviceTabs = document.querySelectorAll('.service-tab');
const servicesSliderWrapper = document.querySelector('.services-slider .swiper-wrapper');
const reviewsSliderWrapper = document.querySelector('.reviews-slider .swiper-wrapper');
const bookingForm = document.getElementById('bookingForm');
const eventForm = document.getElementById('eventForm');
const backToTop = document.querySelector('.back-to-top');
const header = document.querySelector('.header');
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.gallery-main img');

// Initialize Swiper instances
let servicesSwiper, reviewsSwiper;

// Functions
function initMobileMenu() {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

function initServicesSlider() {
    renderServices('all');
    
    // Initialize Swiper
    servicesSwiper = new Swiper('.services-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

function renderServices(category) {
    servicesSliderWrapper.innerHTML = '';
    
    const filteredServices = category === 'all' 
        ? servicesData 
        : servicesData.filter(service => service.category.includes(category));
    
    filteredServices.forEach(service => {
        const serviceCard = `
            <div class="swiper-slide">
                <div class="service-card">
                    <div class="service-image">
                        <img src="${service.image}" alt="${service.title}">
                    </div>
                    <div class="service-content">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                        <div class="service-features">
                            ${service.features.map(feature => 
                                `<span class="feature-tag">${feature}</span>`
                            ).join('')}
                        </div>
                        <div class="service-price">
                            <div class="price">Starting at ${service.price}</div>
                            <a href="#booking" class="btn btn-primary">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        servicesSliderWrapper.innerHTML += serviceCard;
    });
    
    if (servicesSwiper) {
        servicesSwiper.update();
    }
}

function initReviewsSlider() {
    renderReviews();
    
    reviewsSwiper = new Swiper('.reviews-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: { slidesPerView: 2 }
        }
    });
}

function renderReviews() {
    reviewsSliderWrapper.innerHTML = '';
    
    reviewsData.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const reviewCard = `
            <div class="swiper-slide">
                <div class="review-card">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="reviewer-avatar">${review.initials}</div>
                            <div class="reviewer-details">
                                <h4>${review.name}</h4>
                                <div class="review-date">${review.date}</div>
                            </div>
                        </div>
                        <div class="review-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star${review.rating === 5 ? '' : '-half-alt'}"></i>
                        </div>
                    </div>
                    <div class="review-content">
                        <p>${review.content}</p>
                    </div>
                </div>
            </div>
        `;
        reviewsSliderWrapper.innerHTML += reviewCard;
    });
}

function initServiceFilter() {
    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            serviceTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            // Get category
            const category = tab.dataset.category;
            // Render services for this category
            renderServices(category);
        });
    });
}

function initForms() {
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').min = today;
    
    // Booking form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(bookingForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            showNotification('Booking request submitted successfully! We will call you shortly to confirm.', 'success');
            
            // Reset form
            bookingForm.reset();
            document.getElementById('date').min = today;
            
            // Log data (in real app, send to server)
            console.log('Booking Data:', data);
        });
    }
    
    // Event form submission
    if (eventForm) {
        eventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(eventForm);
            const data = Object.fromEntries(formData);
            
            // Show success message
            showNotification('Event service request submitted! Our team will contact you within 24 hours.', 'success');
            
            // Reset form
            eventForm.reset();
            
            // Log data (in real app, send to server)
            console.log('Event Data:', data);
        });
    }
}

function initScrollEffects() {
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            backToTop.classList.add('visible');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('visible');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Back to top
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function initImageGallery() {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            // Update main image
            const newSrc = thumbnail.querySelector('img').src;
            mainImage.src = newSrc;
        });
    });
}

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        gap: 1rem;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0;
            margin-left: 1rem;
        }
    `;
    document.head.appendChild(style);
    
    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initServicesSlider();
    initReviewsSlider();
    initServiceFilter();
    initForms();
    initScrollEffects();
    initImageGallery();
    
    // Add active class to current nav link on page load
    updateActiveNavLink();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize date input with today's date
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.min = tomorrow.toISOString().split('T')[0];
    }
});

// Add notification styles to CSS
const notificationStyles = `
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;