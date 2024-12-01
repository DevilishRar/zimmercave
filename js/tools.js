
const modal = document.getElementById('tool-modal');
const modalContent = modal.querySelector('.modal-body');
const closeModal = document.querySelector('.close-modal');

function openToolDemo(toolId) {
    modal.style.display = 'flex';
    
    
    switch(toolId) {
        case 'premium-cracker':
            modalContent.innerHTML = `
                <div class="tool-demo">
                    <h3>HvH Premium Cracker Demo</h3>
                    <div class="demo-interface">
                        <div class="demo-controls">
                            <input type="text" placeholder="Target Hash" disabled>
                            <select disabled>
                                <option>MD5</option>
                                <option>SHA-256</option>
                                <option>BCrypt</option>
                            </select>
                            <button class="demo-btn" disabled>Start Demo</button>
                        </div>
                        <div class="demo-output">
                            <pre class="demo-console">
Demo version - Limited functionality
Join our Discord for full access
https:
                            </pre>
                        </div>
                    </div>
                </div>
            `;
            break;
        
    }
}

function openDocs(toolId) {
    modal.style.display = 'flex';
    
    
    switch(toolId) {
        case 'premium-cracker':
            modalContent.innerHTML = `
                <div class="tool-docs">
                    <h3>HvH Premium Cracker Documentation</h3>
                    <div class="docs-content">
                        <h4>Features</h4>
                        <ul>
                            <li>Multi-threaded processing for maximum performance</li>
                            <li>Advanced wordlist generation with AI assistance</li>
                            <li>Real-time progress tracking and statistics</li>
                            <li>Proxy support with automatic rotation</li>
                        </ul>
                        <h4>Requirements</h4>
                        <ul>
                            <li>Premium membership</li>
                            <li>Windows 10/11 64-bit</li>
                            <li>8GB RAM minimum</li>
                        </ul>
                        <a href="https://discord.gg/hackvshack" class="btn-primary" target="_blank">Get Full Access</a>
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


function generateWordlist() {
    const baseWords = document.getElementById('base-words').value;
    const complexity = document.getElementById('complexity').value;
    
    if (!baseWords) {
        alert('Please enter base words');
        return;
    }
    
    
    const button = document.querySelector('.tool-form button');
    button.innerHTML = 'Generating...';
    button.disabled = true;
    
    
    setTimeout(() => {
        button.innerHTML = 'Generate';
        button.disabled = false;
        
        
        alert('Demo version - Join our Discord for full access: https://discord.gg/hackvshack');
    }, 2000);
}


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


document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hover');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('hover');
    });
});
