const scene = new THREE.Scene(); // initialise la scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.05, 1000); // crée une perspective
const renderer = new THREE.WebGLRenderer(); // crée le renderer 
renderer.setSize(window.innerWidth, window.innerHeight); // définit la taille du renderer
document.body.appendChild(renderer.domElement);



// console.log(renderer);

// création d'un cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 'orange',
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

let start = undefined;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();

document.addEventListener("mousemove", function() {
    if (start == true) {
        cube.rotation.x += 0.05;
        cube.rotation.y += 0.05;
    }

})

document.addEventListener("mousedown", function() {
    start = true;

})

document.addEventListener("mouseup", function() {
    start = undefined;
})

document.addEventListener("touchstart", function() {
    start = true;
})

document.addEventListener("touchmove", function() {
    if (start == true) {
        cube.rotation.x += 0.05;
        cube.rotation.y += 0.05;
    }
})