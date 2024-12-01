
const modal = document.getElementById('service-modal');
const modalContent = modal.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');

function openServiceModal(serviceId) {
    modal.style.display = 'flex';
    
    
    switch(serviceId) {
        case 'custom':
            modalContent.innerHTML = `
                <div class="service-details">
                    <h3>Custom Development Services</h3>
                    <div class="service-info">
                        <h4>What We Offer</h4>
                        <ul>
                            <li>Custom tool development</li>
                            <li>Specific feature implementation</li>
                            <li>Performance optimization</li>
                            <li>Regular maintenance and updates</li>
                        </ul>
                        <h4>Process</h4>
                        <ol>
                            <li>Initial consultation</li>
                            <li>Requirements gathering</li>
                            <li>Development proposal</li>
                            <li>Implementation</li>
                            <li>Testing and delivery</li>
                        </ol>
                        <div class="service-contact">
                            <p>Contact us on Discord for custom development inquiries:</p>
                            <a href="https://discord.gg/hackvshack" class="btn-primary" target="_blank">Join Discord</a>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'support':
            modalContent.innerHTML = `
                <div class="service-details">
                    <h3>24/7 Support Services</h3>
                    <div class="service-info">
                        <h4>Support Channels</h4>
                        <ul>
                            <li>Discord private channels</li>
                            <li>Priority ticket system</li>
                            <li>Direct messaging support</li>
                            <li>Video call assistance</li>
                        </ul>
                        <h4>Response Times</h4>
                        <div class="response-times">
                            <div class="time-item">
                                <span class="priority">Premium</span>
                                <span class="time">< 1 hour</span>
                            </div>
                            <div class="time-item">
                                <span class="priority">Standard</span>
                                <span class="time">< 24 hours</span>
                            </div>
                        </div>
                        <div class="service-contact">
                            <p>Join our Discord for immediate support:</p>
                            <a href="https://discord.gg/hackvshack" class="btn-primary" target="_blank">Access Support</a>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
}


closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => {
    if (e.target == modal) modal.style.display = 'none';
}


document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
        card.querySelector('.service-icon').classList.add('pulse');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
        card.querySelector('.service-icon').classList.remove('pulse');
    });
});


const menuToggle = document.querySelector('.menu-toggle');
const menuOverlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});


menuOverlay.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    menuOverlay.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
});
