

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Log when page loads for analytics
    console.log('Sustainable Tech Shoppers Guide loaded');

    // Add click tracking to device cards (optional)
    const deviceCards = document.querySelectorAll('.device-card');
    deviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const deviceName = this.querySelector('.device-name').textContent;
            console.log(`Viewed: ${deviceName}`);
        });
    });

    // Dark mode toggle (optional enhancement)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌙 Dark Mode';
    darkModeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 8px 16px;
        background: var(--primary);
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.9em;
        z-index: 1000;
        transition: background 0.3s ease;
    `;

    darkModeToggle.addEventListener('mouseover', function() {
        this.style.background = 'var(--secondary)';
    });

    darkModeToggle.addEventListener('mouseout', function() {
        this.style.background = 'var(--primary)';
    });

    darkModeToggle.addEventListener('click', function() {
        document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'none' : 'invert(1)';
        this.textContent = document.body.style.filter === 'invert(1)' ? '☀️ Light Mode' : '🌙 Dark Mode';
    });

    // Uncomment to enable dark mode toggle:
    // document.body.appendChild(darkModeToggle);
});