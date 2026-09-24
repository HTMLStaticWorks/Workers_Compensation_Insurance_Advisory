/**
 * WORKGUARD - Dashboard Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    initDashboardTabs();
    initSimulatedCharts();
});

function initDashboardTabs() {
    const navLinks = document.querySelectorAll('.dash-nav-link');
    const tabPanes = document.querySelectorAll('.dash-pane');
    
    // Check hash for initial tab
    const hash = window.location.hash;
    if(hash) {
        const targetLink = document.querySelector(`.dash-nav-link[href="${hash}"]`);
        if(targetLink) {
            activateTab(targetLink, tabPanes, navLinks);
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if(href.startsWith('#')) {
                e.preventDefault();
                activateTab(link, tabPanes, navLinks);
                // Update URL without jump
                history.pushState(null, null, href);
            }
        });
    });
}

function activateTab(link, panes, links) {
    links.forEach(l => l.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));
    
    link.classList.add('active');
    const targetId = link.getAttribute('href').substring(1);
    const targetPane = document.getElementById(targetId);
    if(targetPane) {
        targetPane.classList.add('active');
    }
    
    // Close mobile menu if open
    const sidebar = document.querySelector('.dash-sidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');
    if(sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
    if(sidebarBackdrop && sidebarBackdrop.classList.contains('active')) {
        sidebarBackdrop.classList.remove('active');
    }
}

function initSimulatedCharts() {
    // Animate bars in Risk Overview
    const bars = document.querySelectorAll('.dash-chart-bar');
    bars.forEach(bar => {
        const targetHeight = bar.getAttribute('data-height');
        setTimeout(() => {
            bar.style.height = targetHeight + '%';
        }, 500);
    });
}
