// KiOS Documentation - Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
    // Add mobile menu button
    const header = document.querySelector('.site-header');
    if (header) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute('aria-label', 'Toggle menu');
        menuBtn.style.cssText = `
            display: none;
            background: transparent;
            border: none;
            color: var(--color-fg-default);
            font-size: 24px;
            cursor: pointer;
            padding: 8px 12px;
        `;
        header.querySelector('.header-content').appendChild(menuBtn);
        
        menuBtn.addEventListener('click', () => {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar) {
                sidebar.classList.toggle('open');
            }
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        const sidebar = document.querySelector('.sidebar');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        if (sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        const sidebar = document.querySelector('.sidebar');
        if (window.innerWidth > 768 && sidebar) {
            sidebar.classList.remove('open');
        }
    });
});

console.log('KiOS Docs loaded');
