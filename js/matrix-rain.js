
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrix-rain');
        this.ctx = this.canvas.getContext('2d');
        this.characters = '01';
        this.fontSize = 14;
        this.drops = [];
        this.lastTime = 0;
        
        
        this.canvas.style.display = 'block';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.opacity = '0.15';
        this.canvas.style.pointerEvents = 'none';
        
        
        this.init();
        
        
        this.animate = this.animate.bind(this);
        requestAnimationFrame(this.animate);
    }
    
    init() {
        
        this.resize();
        
        
        const columns = Math.floor(this.canvas.width / this.fontSize);
        this.drops = [];
        
        for (let i = 0; i < columns; i++) {
            this.drops.push({
                x: i * this.fontSize,
                y: Math.random() * -100,
                speed: Math.random() * 2 + 1,
                length: Math.floor(Math.random() * 20) + 5
            });
        }
        
        
        window.addEventListener('resize', () => {
            this.resize();
            
            this.init();
        });
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        this.ctx.font = this.fontSize + 'px monospace';
    }
    
    animate(currentTime) {
        
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        
        this.ctx.fillStyle = '#0f0';
        this.ctx.font = this.fontSize + 'px monospace';
        
        
        this.drops.forEach(drop => {
            
            for (let i = 0; i < drop.length; i++) {
                const char = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
                const y = drop.y - (i * this.fontSize);
                
                
                const opacity = 1 - (i / drop.length);
                this.ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
                
                if (y > 0) {
                    this.ctx.fillText(char, drop.x, y);
                }
            }
            
            
            drop.y += drop.speed * (deltaTime / 16); 
            
            
            if (drop.y - (drop.length * this.fontSize) > this.canvas.height) {
                drop.y = Math.random() * -100;
                drop.speed = Math.random() * 2 + 1;
                drop.length = Math.floor(Math.random() * 20) + 5;
            }
        });
        
        
        requestAnimationFrame(this.animate);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const rain = new MatrixRain();
});


const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.removedNodes) {
            mutation.removedNodes.forEach((node) => {
                if (node.id === 'matrix-rain') {
                    const canvas = document.createElement('canvas');
                    canvas.id = 'matrix-rain';
                    document.body.appendChild(canvas);
                    new MatrixRain();
                }
            });
        }
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
