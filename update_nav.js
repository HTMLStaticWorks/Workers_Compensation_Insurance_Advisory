const fs = require('fs');
const path = require('path');

const files = ["index.html", "about.html", "services.html", "coverage.html", "claims-risk.html", "resources.html", "contact.html", "home-2.html"];

const links = [
    { href: "index.html", text: "Home" },
    { href: "home-2.html", text: "Home 2" },
    { href: "about.html", text: "About" },
    { href: "services.html", text: "Services" },
    { href: "coverage.html", text: "Coverage" },
    { href: "claims-risk.html", text: "Claims & Risk" },
    { href: "resources.html", text: "Resources" },
    { href: "contact.html", text: "Contact" },
    { href: "dashboard.html", text: "Dashboard" }
];

function generateNav(activePage) {
    let desktopLinks = [];
    let mobileLinks = [];
    
    for (const link of links) {
        const isActive = (link.href === activePage);
        const activeClass = isActive ? " active" : "";
        desktopLinks.push(`                <a href="${link.href}" class="nav-link${activeClass}">${link.text}</a>`);
        
        const mActiveClass = isActive ? " text-orange" : "";
        mobileLinks.push(`            <a href="${link.href}" class="mobile-nav-link${mActiveClass}">${link.text}</a>`);
    }
    
    return {
        desktop: desktopLinks.join('\n'),
        mobile: mobileLinks.join('\n')
    };
}

for (const filename of files) {
    if (!fs.existsSync(filename)) continue;
    
    let content = fs.readFileSync(filename, 'utf-8');
    
    const { desktop, mobile } = generateNav(filename);
    
    const newHeader = `<header class="navbar">
        <div class="container navbar-container">
            <a href="index.html" class="logo" aria-label="WorkGuard Home">
                <img src="assets/logo/logo.svg" alt="WorkGuard Logo" width="240" height="60">
            </a>
            <nav class="nav-links">
${desktop}
            </nav>
            <div class="nav-controls">
                <button class="icon-btn js-theme-toggle" aria-label="Toggle Theme"></button>
                <button class="icon-btn js-dir-toggle" aria-label="Toggle RTL" style="display: flex;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 9H7M21 9L17 5M21 9L17 13M3 15h14M3 15l4-4M3 15l4 4"/>
                    </svg>
                </button>
                <a href="login.html" class="btn btn-primary" style="padding: 0.5rem 1.25rem;">Login</a>
                <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
            </div>
        </div>
    </header>`;

    const newMobile = `<div class="mobile-menu">
        <div class="mobile-controls">
            <button class="icon-btn js-theme-toggle" aria-label="Toggle Theme"></button>
            <button class="icon-btn js-dir-toggle" aria-label="Toggle RTL">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 9H7M21 9L17 5M21 9L17 13M3 15h14M3 15l4-4M3 15l4 4"/>
                </svg>
            </button>
        </div>
        <nav class="mobile-nav-links">
${mobile}
        </nav>
        <a href="login.html" class="btn btn-primary" style="text-align: center;">Login</a>
    </div>`;

    content = content.replace(/<header class="navbar">[\s\S]*?<\/header>/, newHeader);
    content = content.replace(/<div class="mobile-menu">[\s\S]*?<\/div>/, newMobile);
    
    fs.writeFileSync(filename, content, 'utf-8');
    console.log(`Updated ${filename}`);
}
