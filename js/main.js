// KiOS Documentation - JavaScript
// GitHub Docs Style

document.addEventListener('DOMContentLoaded', () => {
    // Add smooth animations
    const article = document.querySelector('.article');
    if (article) {
        article.style.opacity = '0';
        article.style.transform = 'translateY(10px)';
        article.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
            article.style.opacity = '1';
            article.style.transform = 'translateY(0)';
        }, 50);
    }
    
    // Mobile menu toggle
    const createMobileMenu = () => {
        const sidebar = document.querySelector('.sidebar');
        
        if (window.innerWidth <= 768 && !document.querySelector('.mobile-toggle')) {
            const toggle = document.createElement('button');
            toggle.className = 'mobile-toggle';
            toggle.innerHTML = '☰ Menu';
            toggle.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 12px 20px;
                background: var(--color-accent-bg);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                z-index: 1000;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            `;
            
            toggle.addEventListener('click', () => {
                sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
            });
            
            document.body.appendChild(toggle);
        } else if (window.innerWidth > 768) {
            const toggle = document.querySelector('.mobile-toggle');
            if (toggle) toggle.remove();
            if (sidebar) sidebar.style.display = 'block';
        }
    };
    
    createMobileMenu();
    window.addEventListener('resize', createMobileMenu);
});

console.log('⚙️ KiOS Documentation loaded');
