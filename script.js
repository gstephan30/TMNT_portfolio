// TMNT Portfolio - JavaScript for Tab Functionality and Interactions

document.addEventListener('DOMContentLoaded', function() {
    console.log('🐢 TMNT Portfolio loaded! Cowabunga!');
    
    // Initialize the application
    initializeTabs();
    initializeAnimations();
    initializeKeyboardNavigation();
    
    // Play startup sound effect (simulated)
    simulateStartupSound();
});

// Tab Navigation System
function initializeTabs() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.turtle-section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTurtle = this.getAttribute('data-turtle');
            switchToTurtle(targetTurtle, navButtons, sections);
        });
    });
    
    // Add hover effects for nav buttons
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            playHoverSound();
        });
    });
}

function switchToTurtle(targetTurtle, navButtons, sections) {
    // Remove active class from all buttons and sections
    navButtons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    
    // Add active class to selected button and section
    const activeButton = document.querySelector(`[data-turtle="${targetTurtle}"]`);
    const activeSection = document.getElementById(targetTurtle);
    
    if (activeButton && activeSection) {
        activeButton.classList.add('active');
        activeSection.classList.add('active');
        
        // Play selection sound
        playSelectSound();
        
        // Trigger entrance animation
        triggerSectionAnimation(activeSection);
        
        // Update page title
        updatePageTitle(targetTurtle);
        
        console.log(`🐢 Switched to ${targetTurtle.toUpperCase()}`);
    }
}

// Animation Effects
function initializeAnimations() {
    // Animate stat bars when turtle profiles are shown
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatBars(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    // Observe all turtle profiles
    document.querySelectorAll('.turtle-profile').forEach(profile => {
        observer.observe(profile);
    });
    
    // Add floating animation to turtle sprites
    animateTurtleSprites();
    
    // Add glitch effect occasionally
    setInterval(addGlitchEffect, 10000);
}

function animateStatBars(profile) {
    const statBars = profile.querySelectorAll('.fill');
    statBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.style.transition = 'width 1.5s ease-out';
            // The width is already set in HTML, this just triggers the animation
        }, index * 200);
    });
}

function animateTurtleSprites() {
    const sprites = document.querySelectorAll('.turtle-sprite');
    sprites.forEach((sprite, index) => {
        sprite.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
    });
    
    // Add CSS animation if not already defined
    if (!document.querySelector('#float-animation')) {
        const style = document.createElement('style');
        style.id = 'float-animation';
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
}

function triggerSectionAnimation(section) {
    section.style.animation = 'none';
    section.offsetHeight; // Trigger reflow
    section.style.animation = 'fadeIn 0.5s ease-in';
}

// Keyboard Navigation (classic game style)
function initializeKeyboardNavigation() {
    const turtles = ['landing', 'leonardo', 'donatello', 'raphael', 'michelangelo'];
    let currentIndex = 0;
    
    document.addEventListener('keydown', function(e) {
        switch(e.key) {
            case 'ArrowLeft':
            case 'a':
            case 'A':
                e.preventDefault();
                currentIndex = Math.max(0, currentIndex - 1);
                navigateToTurtle(turtles[currentIndex]);
                break;
                
            case 'ArrowRight':
            case 'd':
            case 'D':
                e.preventDefault();
                currentIndex = Math.min(turtles.length - 1, currentIndex + 1);
                navigateToTurtle(turtles[currentIndex]);
                break;
                
            case 'Enter':
            case ' ':
                e.preventDefault();
                // Add special interaction for current turtle
                addSpecialInteraction();
                break;
                
            case 'Escape':
                // Return to landing page
                currentIndex = 0;
                navigateToTurtle('landing');
                break;
        }
    });
}

function navigateToTurtle(turtleName) {
    const button = document.querySelector(`[data-turtle="${turtleName}"]`);
    if (button) {
        button.click();
    }
}

// Sound Effects (simulated with console and visual feedback)
function simulateStartupSound() {
    console.log('🎵 *KONAMI STARTUP SOUND*');
    flashScreen('#00ff00', 200);
}

function playHoverSound() {
    console.log('🎵 *beep*');
}

function playSelectSound() {
    console.log('🎵 *SELECT SOUND*');
    flashScreen('#ffff00', 100);
}

function flashScreen(color, duration) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = color;
    overlay.style.opacity = '0.1';
    overlay.style.pointerEvents = 'none';
    overlay.style.zIndex = '9999';
    overlay.style.transition = `opacity ${duration}ms`;
    
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), duration);
    }, 50);
}

// Special Interactions
function addSpecialInteraction() {
    const activeSection = document.querySelector('.turtle-section.active');
    if (!activeSection) return;
    
    const turtleName = activeSection.id;
    
    switch(turtleName) {
        case 'leonardo':
            showTurtleQuote("Leadership is not about being in charge. It's about taking care of those in your charge.");
            break;
        case 'donatello':
            showTurtleQuote("The best way to predict the future is to invent it!");
            break;
        case 'raphael':
            showTurtleQuote("I never back down from a fight, especially when my family is involved!");
            break;
        case 'michelangelo':
            showTurtleQuote("Cowabunga! Life's too short not to have fun!");
            break;
        default:
            showTurtleQuote("Turtle Power! Heroes in a half shell!");
    }
}

function showTurtleQuote(quote) {
    // Remove existing quote if present
    const existingQuote = document.querySelector('.turtle-quote');
    if (existingQuote) {
        existingQuote.remove();
    }
    
    const quoteElement = document.createElement('div');
    quoteElement.className = 'turtle-quote';
    quoteElement.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #000, #333);
        color: #00ff00;
        padding: 20px 30px;
        border: 3px solid #00ff00;
        border-radius: 10px;
        font-family: 'Orbitron', monospace;
        font-weight: 700;
        font-size: 1.2rem;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 0 30px rgba(0, 255, 0, 0.5);
        animation: quoteAppear 0.5s ease-out;
        max-width: 80%;
    `;
    
    quoteElement.textContent = `"${quote}"`;
    document.body.appendChild(quoteElement);
    
    // Add animation CSS if not present
    if (!document.querySelector('#quote-animation')) {
        const style = document.createElement('style');
        style.id = 'quote-animation';
        style.textContent = `
            @keyframes quoteAppear {
                0% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) scale(0.5);
                }
                100% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove quote after 3 seconds
    setTimeout(() => {
        quoteElement.style.animation = 'quoteAppear 0.5s ease-out reverse';
        setTimeout(() => quoteElement.remove(), 500);
    }, 3000);
    
    console.log(`🐢 ${quote}`);
}

// Easter Eggs and Special Effects
function addGlitchEffect() {
    const title = document.querySelector('.pixel-title');
    if (!title) return;
    
    const originalText = title.textContent;
    const glitchChars = '!@#$%^&*(){}[]|\\:";\'<>?,./~`';
    
    // Create glitched version
    let glitchedText = '';
    for (let i = 0; i < originalText.length; i++) {
        if (Math.random() < 0.1 && originalText[i] !== ' ') {
            glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
            glitchedText += originalText[i];
        }
    }
    
    // Apply glitch effect
    title.textContent = glitchedText;
    title.style.color = '#ff0000';
    
    // Restore after short delay
    setTimeout(() => {
        title.textContent = originalText;
        title.style.color = '#ffff00';
    }, 200);
    
    console.log('👾 GLITCH EFFECT ACTIVATED');
}

// Utility Functions
function updatePageTitle(turtleName) {
    const titles = {
        'landing': 'TMNT Portfolio - Teenage Mutant Ninja Turtles',
        'leonardo': 'TMNT Portfolio - Leonardo',
        'donatello': 'TMNT Portfolio - Donatello',
        'raphael': 'TMNT Portfolio - Raphael',
        'michelangelo': 'TMNT Portfolio - Michelangelo'
    };
    
    document.title = titles[turtleName] || titles['landing'];
}

// Performance Monitoring
function logPerformance() {
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`🐢 Page loaded in ${loadTime}ms - Cowabunga!`);
    }
}

// Initialize performance logging
window.addEventListener('load', logPerformance);

// Export functions for potential future use
window.TMNTPortfolio = {
    switchToTurtle: (turtle) => {
        const navButtons = document.querySelectorAll('.nav-btn');
        const sections = document.querySelectorAll('.turtle-section');
        switchToTurtle(turtle, navButtons, sections);
    },
    playQuote: showTurtleQuote,
    triggerGlitch: addGlitchEffect
};