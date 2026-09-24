/**
 * WORKGUARD - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDirection();
    initMobileMenu();
    initModals();
    initFormValidation();
    initBackToTop();
});

/* --- 1. Theme Management --- */
function initTheme() {
    const themeToggles = document.querySelectorAll('.js-theme-toggle');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Check localStorage or system preference
    const currentTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcons(currentTheme);

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcons(newTheme);
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

        });
    });
}

function updateThemeIcons(theme) {
    const themeToggles = document.querySelectorAll('.js-theme-toggle');
    themeToggles.forEach(toggle => {
        if(theme === 'dark') {
            toggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'; // Sun icon for switching back to light
            toggle.setAttribute('aria-label', 'Switch to light mode');
        } else {
            toggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'; // Moon icon
            toggle.setAttribute('aria-label', 'Switch to dark mode');
        }
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

    });
}

/* --- 2. RTL Management --- */
function initDirection() {
    const dirToggles = document.querySelectorAll('.js-dir-toggle');
    const currentDir = localStorage.getItem('dir') || 'ltr';
    
    document.documentElement.setAttribute('dir', currentDir);
    updateDirText(currentDir);

    dirToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            let dir = document.documentElement.getAttribute('dir');
            let newDir = dir === 'ltr' ? 'rtl' : 'ltr';
            
            document.documentElement.setAttribute('dir', newDir);
            localStorage.setItem('dir', newDir);
            updateDirText(newDir);
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

        });
    });
}

function updateDirText(dir) {
    const dirToggles = document.querySelectorAll('.js-dir-toggle');
    dirToggles.forEach(toggle => {
        toggle.setAttribute('aria-label', `Switch to ${dir === 'ltr' ? 'Right-to-Left' : 'Left-to-Right'} layout`);
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

    });
}

/* --- 3. Mobile Menu --- */
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if(!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        mobileMenu.classList.toggle('open');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if(!isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            document.body.style.overflow = 'hidden'; // Prevent scroll
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        }
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

    });
}

/* --- 4. Modal System --- */
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal-overlay');
    const closeBtns = document.querySelectorAll('.modal-close');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = trigger.getAttribute('data-modal');
            const targetModal = document.getElementById(targetId);
            if(targetModal) {
                openModal(targetModal);
            }
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeAllModals();
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

        });
    });

    // Click outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                closeAllModals();
            }
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

        });
    });

    // Escape key
    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            closeAllModals();
        }
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

    });
}

function openModal(modal) {
    closeAllModals(); // Close any existing
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
    });
    document.body.style.overflow = ''; // Restore scroll
}

/* --- 5. Form Validation --- */
function initFormValidation() {
    const forms = document.querySelectorAll('.js-validate-form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            
            inputs.forEach(input => {
                if(!input.value.trim()) {
                    setInvalid(input, 'This field is required');
                    isValid = false;
                } else if(input.type === 'email' && !validateEmail(input.value)) {
                    setInvalid(input, 'Please enter a valid email');
                    isValid = false;
                } else {
                    setValid(input);
                }
            });
            
            if(isValid) {
                // Mock submission
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                btn.textContent = 'Submitting...';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.textContent = 'Submitted Successfully';
                    btn.style.backgroundColor = '#22C55E';
                    form.reset();
                    
                    setTimeout(() => {
                        closeAllModals();
                        btn.textContent = originalText;
                        btn.style.backgroundColor = '';
                        btn.disabled = false;
                    }, 2000);
                }, 1500);
            }
    const menuCloseBtn = document.querySelector('.js-menu-close');
    if (menuCloseBtn) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
            document.body.style.overflow = '';
        });
    }

        });
    });
}

function setInvalid(input, message) {
    input.classList.add('invalid');
    let errorMsg = input.nextElementSibling;
    if(errorMsg && errorMsg.classList.contains('form-error')) {
        errorMsg.textContent = message;
    }
}

function setValid(input) {
    input.classList.remove('invalid');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/* --- 6. Back to Top Button --- */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
