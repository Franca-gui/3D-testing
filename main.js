const scene = new THREE.SceneCamera(window.innerWidth,window.innerHeight)
const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry(1, 3, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    camera.position.z = 5;
    
    
    // enables button pressing
    window.onkeydown = function(e){
        keydown[e.key]
    }
    window.onkeyup = function(e){
        keydown[e.key] = false
    }
    //enables button pressing

    //animation
    function animate() {
    requestAnimationFrame(animate);

    cube.rotation.y += 70.01;
    renderer.render(scene, camera);
    }
    
    animate();
    //animation

    function movement(){

        if(keydown["ArrowUp"]) camera.position.z -= 0.1;
        if(keydown["ArrowDown"]) camera.position.z += 0.1;
        if(keydown["ArrowRight"]) camera.position.x += 0.1;
        if(keydown["ArrowLeft"]) camera.position.z -= 0.1;
    }

    movement