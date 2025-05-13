

document.addEventListener("DOMContentLoaded", () => {
    
    const scene = new THREE.Scene();

    // Camera
    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(100, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 3, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Initialize controls BEFORE animation starts
    let controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 100;
    controls.rollSpeed = Math.PI / 24;
    controls.autoForward = false;
    controls.dragToLook = true;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        controls.update(0.01); // Ensure FlyControls updates each frame

        renderer.render(scene, camera);
    }
                   
    animate(); // Now correctly placed AFTER controls initialization
});