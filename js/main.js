// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add active class to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPosition >= top && scrollPosition < top + height) {
                // Update main nav
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
                
                // Update TOC nav
                tocLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Throttle scroll event
    let scrollTimer;
    window.addEventListener('scroll', function() {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(updateActiveNav, 50);
    });
    
    // Initial call to set active state
    updateActiveNav();
    
    // TOC link click handling with offset for fixed header
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Calculate position to show element at top 1/4 of viewport
                const rect = targetElement.getBoundingClientRect();
                const absoluteTop = window.pageYOffset + rect.top;
                const viewportHeight = window.innerHeight;
                const desiredOffset = viewportHeight / 5; // Want element at 1/5 from top of viewport
                
                // Scroll to position where element will be at 1/4 from top
                const scrollToPosition = absoluteTop - desiredOffset;
                
                window.scrollTo({
                    top: Math.max(0, scrollToPosition),
                    behavior: 'smooth'
                });
            }
        });
    });

    // Code block copy functionality
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach(block => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);

        const copyButton = document.createElement('button');
        copyButton.textContent = '複製';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid #d2d2d7;
            border-radius: 6px;
            padding: 4px 12px;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.2s;
            color: #1d1d1f;
        `;

        copyButton.addEventListener('click', async function() {
            const code = block.querySelector('code').textContent;
            try {
                await navigator.clipboard.writeText(code);
                copyButton.textContent = '已複製！';
                copyButton.style.background = '#34C759';
                copyButton.style.color = 'white';
                copyButton.style.borderColor = '#34C759';
                
                setTimeout(() => {
                    copyButton.textContent = '複製';
                    copyButton.style.background = 'rgba(255, 255, 255, 0.9)';
                    copyButton.style.color = '#1d1d1f';
                    copyButton.style.borderColor = '#d2d2d7';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });

        wrapper.appendChild(copyButton);
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll('.module-card, .page-card, .deployment-card, .decision-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Lazy loading for images (if any)
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Add animation to timeline items on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s, transform 0.5s';
        timelineObserver.observe(item);
    });

    // Add animation to log entries
    const logEntries = document.querySelectorAll('.log-entry');
    const logObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    logEntries.forEach((entry, index) => {
        entry.style.opacity = '0';
        entry.style.transform = 'translateY(20px)';
        entry.style.transition = `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`;
        logObserver.observe(entry);
    });
});