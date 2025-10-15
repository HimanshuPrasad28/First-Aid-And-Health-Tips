// First Aid and Health Tips Website - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        // Check for saved preference
        const darkModeStatus = localStorage.getItem('darkMode');
        
        // Set initial state - only enable if explicitly set to 'true'
        if (darkModeStatus === 'true') {
            document.body.classList.add('dark-mode');
            darkModeToggle.checked = true;
        } else {
            // Ensure dark mode is off by default
            document.body.classList.remove('dark-mode');
            darkModeToggle.checked = false;
            // Set default preference if not set
            if (darkModeStatus === null) {
                localStorage.setItem('darkMode', 'false');
            }
        }
        
        // Toggle dark mode
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('darkMode', 'true');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('darkMode', 'false');
            }
        });
    }
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .first-aid-procedure, .health-tip');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                if (!element.classList.contains('animate-fade-in') && 
                    !element.classList.contains('animate-slide-left') && 
                    !element.classList.contains('animate-slide-right')) {
                    element.classList.add('animate-fade-in');
                }
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    // Mobile Navigation Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Search Functionality
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const contentSections = document.querySelectorAll('.first-aid-procedure, .health-tip');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            contentSections.forEach(section => {
                const text = section.textContent.toLowerCase();
                section.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }
    
    // Accordion for First Aid Procedures
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });
    
    // Emergency Button
    const emergencyButton = document.querySelector('.emergency-button');
    
    if (emergencyButton) {
        emergencyButton.addEventListener('click', function() {
            alert('Emergency Contacts: Ambulance: 911, Poison Control: 1-800-222-1222');
        });
    }
});