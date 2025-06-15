class GalaxyAnimation {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true 
        });
        this.stars = [];
        this.nebula = null;
        
        this.init();
    }

    init() {
        // Setup renderer
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.zIndex = '1';
        this.renderer.domElement.style.pointerEvents = 'none'; // Allow clicking through
        this.container.appendChild(this.renderer.domElement);

        // Setup camera
        this.camera.position.z = 30;

        // Create stars
        this.createStars();
        
        // Create nebula
        this.createNebula();

        // Handle resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Start animation
        this.animate();
    }

    createStars() {
        const starGeometry = new THREE.BufferGeometry();
        const starMaterial = new THREE.PointsMaterial({
            color: 0xFFFFFF,
            size: 0.1,
            transparent: true,
            opacity: 0.8
        });

        const starVertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starVertices.push(x, y, z);
        }

        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
        this.stars.push(stars);
    }

    createNebula() {
        const nebulaGeometry = new THREE.SphereGeometry(100, 32, 32);
        const nebulaMaterial = new THREE.MeshBasicMaterial({
            color: 0x4B0082,
            transparent: true,
            opacity: 0.1,
            side: THREE.BackSide
        });

        this.nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
        this.scene.add(this.nebula);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Rotate stars
        this.stars.forEach(star => {
            star.rotation.y += 0.0001;
            star.rotation.x += 0.0001;
        });

        // Rotate nebula
        if (this.nebula) {
            this.nebula.rotation.y += 0.0005;
            this.nebula.rotation.x += 0.0003;
        }

        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Initialize galaxy animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const heroContainer = document.querySelector('.hero');
    const footerContainer = document.querySelector('footer');
    
    if (heroContainer) {
        new GalaxyAnimation(heroContainer);
    }
    
    if (footerContainer) {
        new GalaxyAnimation(footerContainer);
    }
}); 