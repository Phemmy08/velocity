  // Add smooth scrolling and interactive effects
        document.addEventListener('DOMContentLoaded', function() {
            // Hamburger menu functionality
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('navMenu');

            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });

            // Smooth scroll for navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        // Add smooth scroll behavior if target sections exist
                    }
                });
            });

            // Add parallax effect to floating elements
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelectorAll('.floating-element');
                const speed = 0.5;

                parallax.forEach(element => {
                    const yPos = -(scrolled * speed);
                    element.style.transform = `translateY(${yPos}px)`;
                });
            });

            // Add hover effects to main logo
            const vfxLogo = document.querySelector('.vfx-logo');
            vfxLogo.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
            });

            vfxLogo.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });


        // Aboutus Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Add click event listener to each accordion header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const content = document.getElementById(target);
            const icon = this.querySelector('.accordion-icon');
            
            // Check if this accordion is currently active
            const isActive = content.classList.contains('active');
            
            // Close all accordion items
            accordionHeaders.forEach(otherHeader => {
                const otherTarget = otherHeader.getAttribute('data-target');
                const otherContent = document.getElementById(otherTarget);
                const otherIcon = otherHeader.querySelector('.accordion-icon');
                
                otherContent.classList.remove('active');
                otherHeader.classList.remove('active');
                otherIcon.style.transform = 'rotate(0deg)';
            });
            
            // If this accordion wasn't active, open it
            if (!isActive) {
                content.classList.add('active');
                this.classList.add('active');
                icon.style.transform = 'rotate(45deg)';
            }
        });
    });
    
    // Optional: Auto-open first accordion item
    const firstAccordion = document.querySelector('.accordion-header');
    if (firstAccordion) {
        firstAccordion.click();
    }
});


// Testimonials Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animation for testimonial cards on scroll
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Initialize testimonial cards with fade-in animation
    testimonialCards.forEach((card, index) => {
        // Set initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        
        // Observe each card for intersection
        observer.observe(card);
    });
    
    // Optional: Add hover effects for enhanced interactivity
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });
    
    // Optional: Keyboard accessibility for testimonial cards
    testimonialCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.focus();
            }
        });
    });
});


// Our Team Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animation for team section elements on scroll
    const teamImage = document.querySelector('.team-image-container');
    const teamDescription = document.querySelector('.team-description');
    const highlightItems = document.querySelectorAll('.highlight-item');
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Initialize team image animation
    if (teamImage) {
        teamImage.style.opacity = '0';
        teamImage.style.transform = 'translateX(-50px)';
        teamImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(teamImage);
    }
    
    // Initialize team description animation
    if (teamDescription) {
        teamDescription.style.opacity = '0';
        teamDescription.style.transform = 'translateX(50px)';
        teamDescription.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
        observer.observe(teamDescription);
    }
    
    // Initialize highlight items animation
    highlightItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${0.4 + (index * 0.1)}s, transform 0.6s ease ${0.4 + (index * 0.1)}s`;
        observer.observe(item);
    });
    
    // Add CSS for animated state
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translate(0, 0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Enhanced hover effects for highlight items
    highlightItems.forEach(item => {
        const icon = item.querySelector('.highlight-icon');
        
        item.addEventListener('mouseenter', function() {
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // Image parallax effect on scroll (optional)
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.team-image');
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.2;
            element.style.transform = `translateY(${rate}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    // Uncomment the line below to enable parallax effect
    // window.addEventListener('scroll', requestTick);
    
    // Keyboard accessibility for highlight items
    highlightItems.forEach(item => {
        item.setAttribute('tabindex', '0');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        item.addEventListener('focus', function() {
            this.style.outline = '2px solid #5bc0de';
            this.style.outlineOffset = '2px';
        });
        
        item.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Final Sections JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== CURRENT OPENINGS SECTION =====
    
    // Animation for job cards on scroll
    const jobCards = document.querySelectorAll('.job-card');
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Initialize job cards animation
    jobCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
    
    // CTA Buttons click handlers
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            if (buttonText === 'Apply Now') {
                // Handle apply now action
                console.log('Redirecting to application form...');
                // window.location.href = '/apply';
            } else if (buttonText === 'Explore More Openings') {
                // Handle explore more action
                console.log('Redirecting to job listings...');
                // window.location.href = '/jobs';
            }
        });
    });
    
    // ===== TRUST ELEMENTS SECTION =====
    
    // Animation for trust badges
    const trustBadges = document.querySelectorAll('.badge-item');
    const securityItems = document.querySelectorAll('.security-item');
    const affiliationItems = document.querySelectorAll('.affiliation-item');
    
    // Animate trust badges
    trustBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(30px)';
        badge.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(badge);
    });
    
    // Animate security items
    securityItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${0.6 + (index * 0.1)}s, transform 0.5s ease ${0.6 + (index * 0.1)}s`;
        observer.observe(item);
    });
    
    // Animate affiliation items
    affiliationItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${0.8 + (index * 0.1)}s, transform 0.5s ease ${0.8 + (index * 0.1)}s`;
        observer.observe(item);
    });
    
    // ===== CALL-TO-ACTION SECTION =====
    
    // Animation for CTA section
    const ctaContent = document.querySelector('.cta-content');
    const contactInfo = document.querySelector('.contact-info');
    const ctaButtonsCTA = document.querySelectorAll('.btn-primary-cta, .btn-secondary-cta');
    
    if (ctaContent) {
        ctaContent.style.opacity = '0';
        ctaContent.style.transform = 'translateY(50px)';
        ctaContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(ctaContent);
    }
    
    if (contactInfo) {
        contactInfo.style.opacity = '0';
        contactInfo.style.transform = 'translateY(30px)';
        contactInfo.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
        observer.observe(contactInfo);
    }
    
    // CTA Buttons click handlers
    ctaButtonsCTA.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            if (buttonText === 'Apply Now') {
                console.log('Redirecting to application form...');
                // window.location.href = '/apply';
            } else if (buttonText === 'Explore Current Openings') {
                console.log('Redirecting to job listings...');
                // window.location.href = '/jobs';
            }
        });
    });
    
    // Contact links functionality
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        if (link.href.startsWith('mailto:')) {
            link.addEventListener('click', function(e) {
                // Email link - let default behavior handle it
                console.log('Opening email client...');
            });
        } else if (link.href.startsWith('tel:')) {
            link.addEventListener('click', function(e) {
                // Phone link - let default behavior handle it
                console.log('Initiating phone call...');
            });
        }
    });
    
    // ===== GENERAL ANIMATIONS =====
    
    // Add CSS for animated state
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .job-card:hover .job-title {
            color: #5bc0de;
            transition: color 0.3s ease;
        }
        
        .badge-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        .security-item:hover,
        .affiliation-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.12);
        }
    `;
    document.head.appendChild(style);
    
    // ===== ACCESSIBILITY ENHANCEMENTS =====
    
    // Add keyboard navigation for job cards
    jobCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Could trigger a modal or redirect to job details
                console.log('Job card selected:', this.querySelector('.job-title').textContent);
            }
        });
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('.job-card, .badge-item, .security-item, .affiliation-item');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #5bc0de';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // ===== PERFORMANCE OPTIMIZATION =====
    
    // Debounce scroll events if needed
    let ticking = false;
    
    function updateAnimations() {
        // Any scroll-based animations can be optimized here
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    // Uncomment if you need scroll-based animations
    // window.addEventListener('scroll', requestTick);
    
    // ===== FORM VALIDATION (if needed) =====
    
    // If you add contact forms later, this handles basic validation
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function validatePhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
    
    // ===== TRACKING & ANALYTICS =====
    
    // Track button clicks for analytics
    function trackEvent(eventName, elementType, elementText) {
        console.log(`Event: ${eventName}, Type: ${elementType}, Text: ${elementText}`);
        // Integration with Google Analytics, Facebook Pixel, etc.
        // gtag('event', eventName, {
        //     'event_category': elementType,
        //     'event_label': elementText
        // });
    }
    
    // Track CTA button clicks
    document.querySelectorAll('.btn-primary, .btn-secondary, .btn-primary-cta, .btn-secondary-cta').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('button_click', 'cta_button', this.textContent.trim());
        });
    });
    
    // Track job card interactions
    jobCards.forEach(card => {
        card.addEventListener('click', function() {
            const jobTitle = this.querySelector('.job-title').textContent;
            trackEvent('job_card_click', 'job_listing', jobTitle);
        });
    });
    
    // ===== DYNAMIC CONTENT LOADING =====
    
    // Function to load more job openings dynamically
    function loadMoreJobs() {
        // This would typically fetch from an API
        const additionalJobs = [
            {
                title: "UX/UI Designer",
                location: "Montreal, Canada",
                description: "Create intuitive and engaging user experiences for our digital platforms while collaborating with cross-functional teams.",
                tags: ["Remote", "Full-time", "Design"]
            },
            {
                title: "Data Analyst",
                location: "Chicago, USA",
                description: "Transform data into actionable insights that drive business decisions and improve operational efficiency.",
                tags: ["Remote", "Full-time", "Analytics"]
            }
        ];
        
        const openingsGrid = document.querySelector('.openings-grid');
        if (openingsGrid) {
            additionalJobs.forEach(job => {
                const jobCard = createJobCard(job);
                openingsGrid.appendChild(jobCard);
            });
        }
    }
    
    // Helper function to create job card elements
    function createJobCard(job) {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <div class="job-header">
                <h3 class="job-title">${job.title}</h3>
                <div class="job-location">
                    <span class="location-icon">📍</span>
                    <span class="location-text">${job.location}</span>
                </div>
            </div>
            <p class="job-description">${job.description}</p>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
        `;
        
        // Add animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Trigger animation after a brief delay
        setTimeout(() => {
            card.classList.add('animate-in');
        }, 100);
        
        return card;
    }
    
    // ===== RESPONSIVE BEHAVIOR =====
    
    // Handle responsive changes
    function handleResize() {
        const width = window.innerWidth;
        
        // Adjust grid layouts based on screen size
        if (width < 768) {
            // Mobile optimizations
            document.body.classList.add('mobile-view');
        } else {
            document.body.classList.remove('mobile-view');
        }
    }
    
    // Listen for window resize
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Initial call
    handleResize();
    
    // Debounce function for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ===== LOADING STATES =====
    
    // Show loading states for async operations
    function showLoading(element) {
        const originalContent = element.innerHTML;
        element.innerHTML = `
            <div class="loading-spinner">
                <div class="spinner"></div>
                <span>Loading...</span>
            </div>
        `;
        element.setAttribute('data-original-content', originalContent);
        element.classList.add('loading');
    }
    
    function hideLoading(element) {
        const originalContent = element.getAttribute('data-original-content');
        if (originalContent) {
            element.innerHTML = originalContent;
            element.removeAttribute('data-original-content');
        }
        element.classList.remove('loading');
    }
    
    // Add loading spinner styles
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        .loading-spinner {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 20px;
        }
        
        .spinner {
            width: 20px;
            height: 20px;
            border: 2px solid #f3f3f3;
            border-top: 2px solid #5bc0de;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .loading {
            pointer-events: none;
            opacity: 0.7;
        }
    `;
    document.head.appendChild(loadingStyle);
    
    console.log('All sections initialized successfully!');
});


// Footer Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== SOCIAL MEDIA FUNCTIONALITY =====
    
    // Track social media clicks
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.classList[1]; // Gets the platform class (facebook, twitter, etc.)
            
            // Analytics tracking
            trackSocialClick(platform, this.href);
            
            // Add visual feedback
            this.style.transform = 'translateY(-3px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Enhanced hover effects
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // ===== NEWSLETTER FUNCTIONALITY =====
    
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-btn');
    
    if (newsletterForm && newsletterInput && newsletterBtn) {
        // Handle newsletter form submission
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
        newsletterBtn.addEventListener('click', handleNewsletterSubmit);
        
        // Real-time email validation
        newsletterInput.addEventListener('input', function() {
            const email = this.value.trim();
            const isValid = validateEmail(email);
            
            if (email.length > 0) {
                if (isValid) {
                    this.style.borderColor = '#27ae60';
                    this.style.background = 'rgba(39, 174, 96, 0.1)';
                    newsletterBtn.disabled = false;
                    newsletterBtn.style.opacity = '1';
                } else {
                    this.style.borderColor = '#e74c3c';
                    this.style.background = 'rgba(231, 76, 60, 0.1)';
                    newsletterBtn.disabled = true;
                    newsletterBtn.style.opacity = '0.6';
                }
            } else {
                // Reset to default state when empty
                this.style.borderColor = '';
                this.style.background = '';
                newsletterBtn.disabled = false;
                newsletterBtn.style.opacity = '1';
            }
        });
        
        // Enhanced focus effects
        newsletterInput.addEventListener('focus', function() {
            this.parentElement.style.boxShadow = '0 0 0 3px rgba(91, 192, 222, 0.2)';
        });
        
        newsletterInput.addEventListener('blur', function() {
            this.parentElement.style.boxShadow = '';
        });
    }
    
    // ===== SMOOTH SCROLLING FOR FOOTER LINKS =====
    
    const footerLinks = document.querySelectorAll('.footer-link[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without triggering scroll
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
    
    // ===== UTILITY FUNCTIONS =====
    
    // Email validation function
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Newsletter form submission handler
    function handleNewsletterSubmit(e) {
        e.preventDefault();
        
        const email = newsletterInput.value.trim();
        
        if (!validateEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const originalText = newsletterBtn.textContent;
        newsletterBtn.textContent = 'Subscribing...';
        newsletterBtn.disabled = true;
        
        // Simulate API call (replace with actual implementation)
        setTimeout(() => {
            // Success simulation
            showNotification('Successfully subscribed to newsletter!', 'success');
            newsletterInput.value = '';
            newsletterInput.style.borderColor = '';
            newsletterInput.style.background = '';
            
            // Reset button
            newsletterBtn.textContent = originalText;
            newsletterBtn.disabled = false;
        }, 1500);
    }
    
    // Social media click tracking
    function trackSocialClick(platform, url) {
        // Analytics tracking implementation
        if (typeof gtag !== 'undefined') {
            gtag('event', 'social_click', {
                'platform': platform,
                'url': url
            });
        }
        
        // Console log for debugging
        console.log(`Social media click tracked: ${platform} - ${url}`);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.footer-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `footer-notification ${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 20px',
            borderRadius: '6px',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease-in-out',
            backgroundColor: type === 'success' ? '#27ae60' : 
                           type === 'error' ? '#e74c3c' : '#3498db'
        });
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }
    
    // ===== FOOTER ANIMATIONS =====
    
    // Animate footer elements on scroll
    const footer = document.querySelector('footer');
    if (footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('footer-visible');
                }
            });
        }, {
            threshold: 0.1
        });
        
        observer.observe(footer);
    }
    
    // Add footer fade-in animation class
    if (!document.querySelector('#footer-animations')) {
        const style = document.createElement('style');
        style.id = 'footer-animations';
        style.textContent = `
            footer {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            footer.footer-visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .social-link {
                transition: transform 0.2s ease;
            }
            
            .newsletter-form {
                transition: box-shadow 0.2s ease;
            }
        `;
        document.head.appendChild(style);
    }
});


// Initialize Google Map
        function initMap() {
            // Coordinates for 5718 Westheimer Rd, Ste 1000, Houston, TX 77057, United States
            const officeLocation = { lat: 29.7370, lng: -95.4628 };
            
            // Create map
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: officeLocation,
                styles: [
                    {
                        featureType: 'all',
                        elementType: 'geometry.fill',
                        stylers: [{ color: '#f4f4f4' }]
                    },
                    {
                        featureType: 'water',
                        elementType: 'all',
                        stylers: [{ color: '#4A90E2' }]
                    },
                    {
                        featureType: 'road',
                        elementType: 'all',
                        stylers: [{ color: '#ffffff' }]
                    }
                ]
            });
            
            // Create marker
            const marker = new google.maps.Marker({
                position: officeLocation,
                map: map,
                title: 'Velocity Flex - 5718 Westheimer Rd, Ste 1000, Houston, TX 77057',
                icon: {
                    url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="18" fill="#E74C3C" stroke="#fff" stroke-width="2"/>
                            <circle cx="20" cy="20" r="8" fill="#fff"/>
                        </svg>
                    `),
                    scaledSize: new google.maps.Size(40, 40),
                    anchor: new google.maps.Point(20, 20)
                }
            });
            
            // Create info window
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding: 10px; font-family: Arial, sans-serif;">
                        <h3 style="margin: 0 0 8px 0; color: #4A90E2;">Velocity Flex</h3>
                        <p style="margin: 0; font-size: 14px; color: #666;">
                            5718 Westheimer Rd, Ste 1000<br>
                            Houston, TX 77057<br>
                            United States
                        </p>
                    </div>
                `
            });
            
            // Add click listener to marker
            marker.addListener('click', function() {
                infoWindow.open(map, marker);
            });
        }

        // Fallback map using OpenStreetMap if Google Maps fails
        function initFallbackMap() {
            const mapDiv = document.getElementById('map');
            mapDiv.innerHTML = `
                <iframe 
                    width="100%" 
                    height="500" 
                    frameborder="0" 
                    style="border:0; border-radius: 8px;" 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-95.4678%2C29.7320%2C-95.4578%2C29.7420&amp;layer=mapnik&amp;marker=29.7370%2C-95.4628" 
                    allowfullscreen>
                </iframe>
                <div style="position: absolute; top: 10px; left: 10px; background: rgba(255,255,255,0.9); padding: 8px; border-radius: 4px; font-size: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <strong>Velocity Flex</strong><br>
                    5718 Westheimer Rd, Ste 1000<br>
                    Houston, TX 77057
                </div>
            `;
        }

        // Try to load Google Maps, fallback to OpenStreetMap
        function loadMap() {
            if (typeof google !== 'undefined' && google.maps) {
                initMap();
            } else {
                initFallbackMap();
            }
        }

        // Form handling
        document.addEventListener('DOMContentLoaded', function() {
            // Load map when page loads
            loadMap();
            
            const contactForm = document.getElementById('contactForm');
            const attachBtn = document.querySelector('.attach-btn');
            
            // Handle form submission
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                const data = {
                    firstName: formData.get('firstName'),
                    lastName: formData.get('lastName'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: formData.get('message')
                };
                
                // Basic validation
                if (!data.firstName || !data.lastName || !data.email || !data.phone) {
                    alert('Please fill in all required fields.');
                    return;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(data.email)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                
                // Here you would typically send the data to your server
                console.log('Form submitted:', data);
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            });
            
            // Handle resume attachment
            attachBtn.addEventListener('click', function() {
                // Create file input
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = '.pdf,.doc,.docx';
                fileInput.style.display = 'none';
                
                fileInput.addEventListener('change', function(e) {
                    const file = e.target.files[0];
                    if (file) {
                        // Here you would typically upload the file
                        console.log('File selected:', file.name);
                        attachBtn.textContent = `ATTACHED: ${file.name}`;
                        attachBtn.style.background = '#27AE60';
                    }
                });
                
                document.body.appendChild(fileInput);
                fileInput.click();
                document.body.removeChild(fileInput);
            });
        });

        // File upload handling
document.getElementById('resume').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const fileSelected = document.getElementById('fileSelected');
    const uploadLabel = document.querySelector('.file-upload-label');
    
    if (file) {
        // Check file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
            alert('File size must be less than 10MB');
            this.value = '';
            return;
        }
        
        // Show selected file
        fileSelected.querySelector('.file-name').textContent = file.name;
        fileSelected.style.display = 'flex';
        uploadLabel.style.display = 'none';
    }
});

function removeFile() {
    document.getElementById('resume').value = '';
    document.getElementById('fileSelected').style.display = 'none';
    document.querySelector('.file-upload-label').style.display = 'flex';
}