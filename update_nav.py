import os
import re

files = ["index.html", "about.html", "services.html", "coverage.html", "claims-risk.html", "resources.html", "contact.html", "home-2.html"]

def generate_nav(active_page):
    links = [
        ("index.html", "Home"),
        ("home-2.html", "Home 2"),
        ("about.html", "About"),
        ("services.html", "Services"),
        ("coverage.html", "Coverage"),
        ("claims-risk.html", "Claims & Risk"),
        ("resources.html", "Resources"),
        ("contact.html", "Contact"),
        ("dashboard.html", "Dashboard")
    ]
    
    desktop_links = []
    mobile_links = []
    
    for href, text in links:
        is_active = (href == active_page)
        active_class = " active" if is_active else ""
        desktop_links.append(f'                <a href="{href}" class="nav-link{active_class}">{text}</a>')
        
        m_active_class = " text-orange" if is_active else ""
        mobile_links.append(f'            <a href="{href}" class="mobile-nav-link{m_active_class}">{text}</a>')
        
    return "\n".join(desktop_links), "\n".join(mobile_links)

for filename in files:
    if not os.path.exists(filename):
        continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
        
    desktop_links_html, mobile_links_html = generate_nav(filename)
    
    new_header = f"""<header class="navbar">
        <div class="container navbar-container">
            <a href="index.html" class="logo" aria-label="WorkGuard Home">
                <img src="assets/logo/logo.svg" alt="WorkGuard Logo" width="240" height="60">
            </a>
            <nav class="nav-links">
{desktop_links_html}
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
    </header>"""

    new_mobile = f"""<div class="mobile-menu">
        <div class="mobile-controls">
            <button class="icon-btn js-theme-toggle" aria-label="Toggle Theme"></button>
            <button class="icon-btn js-dir-toggle" aria-label="Toggle RTL">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 9H7M21 9L17 5M21 9L17 13M3 15h14M3 15l4-4M3 15l4 4"/>
                </svg>
            </button>
        </div>
        <nav class="mobile-nav-links">
{mobile_links_html}
        </nav>
        <a href="login.html" class="btn btn-primary" style="text-align: center;">Login</a>
    </div>"""

    content = re.sub(r'<header class="navbar">.*?</header>', new_header, content, flags=re.DOTALL)
    content = re.sub(r'<div class="mobile-menu">.*?</div>', new_mobile, content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
        print(f"Updated {filename}")
