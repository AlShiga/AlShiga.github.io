let mousePosX = 0;
let mousePosY = 0;
let scrollCanvas = window.scrollY;
var model;
var scene = new THREE.Scene();

var frontSpot = new THREE.SpotLight(0x666666);
frontSpot.position.set(300, 500, 500);
scene.add(frontSpot);

var frontSpot1 = new THREE.SpotLight(0x444444);
frontSpot1.position.set(200, 200, 100);
scene.add(frontSpot1);

// var frontSpot2 = new THREE.SpotLight(0xFFD300);
// frontSpot2.position.set(-300, 300, -100);
// scene.add(frontSpot2);

// var frontSpot3 = new THREE.SpotLight(0x00aa00);
// frontSpot1.position.set(200, -200, 50);
// scene.add(frontSpot3);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({
    alpha: true
});


renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);
document.querySelector(".first__canvasWrap") .appendChild(renderer.domElement);

// var geometry = new THREE.TorusGeometry(10, 3, 20, 100);
// var material = new THREE.MeshPhongMaterial({
//     color: 0x00ff00,
//     specular: 0xff0000,
// });
// var mesh = new THREE.Mesh(geometry, material);
// instantiate a loader

const loader = new THREE.OBJLoader();

function initEventListeners() {
    // window.addEventListener('resize', onWindowResize);
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('mousemove', onWindowMouseMove);
};
initEventListeners();

function onWindowMouseMove(event) {
    // console.log(event)
    mousePosX = event.clientX;
    mousePosY = event.clientY;
}

function onWindowScroll(event) {
    scrollCanvas = window.scrollY;
    // console.log(scrollCanvas)
    ternCamera(scrollCanvas)
}

function ternCamera(scrollC) {
    let posX = (scrollC) / 8;
    camera.position.y = 1 - posX * 2;
    camera.rotation.x = posX / 200;
    // console.log(camera.position.y)

}

camera.position.z = 270;
camera.position.x = 0;
// load a resource
loader.load(
    // resource URL
    'model.obj',
    // called when resource is loaded
    function(object) {
        object.scale.x = 1;
        object.scale.y = 1;
        object.scale.z = 1;
        object.rotation.x = Math.PI + Math.PI / 2.5;
        object.rotation.z = Math.PI + Math.PI / 3;
        object.position.y = Math.PI + 0;
        var materialObj = new THREE.MeshPhongMaterial({
            color: 0xa3a3a3,
            specular: 0xFFD300,
            wireframe: true
        });
        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = materialObj;
            }
        });
        model = object
        scene.add(model);

    },
    // called when loading is in progresses
    function(xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // called when loading has errors
    function(error) {
        console.log('An error happened');
    }
);

// function initWorld() {
//     const sphere = new THREE.SphereGeometry(500, 64, 64);
//     sphere.scale(-1, 1, 1);

//     const texture = new THREE.Texture();

//     const material = new THREE.MeshBasicMaterial({
//         map: texture,
//         // clearcoat: 1,
//         // clearcoatRoughness: 0.35,
//     });

//     var bgImg = new THREE.ImageLoader(new THREE.LoadingManager()).load('./pattern.jpg', (image) => {
//         texture.image = image;
//         texture.needsUpdate = true;
//     });

//     scene.add(new THREE.Mesh(sphere, material));
// }
// initWorld()
// var mesh1 = new THREE.Mesh(loader, material);
// scene.add(mesh1);


let num = 0;
render();
function render(event) {
    requestAnimationFrame(render)
    // console.log(mousePosX)
    // if (mousePosX && mousePosY) {
        ternModel(model, mousePosX, mousePosY);
    // }
    
    // model.rotation.y += 0.005;
    // model.rotation.z += 0.005;
    renderer.render(scene, camera);
}

function ternModel(el, x, y) {
    // console.log(Math.sin(num))
    // console.log(num)
    const ternX = (x - window.innerWidth / 2) / window.innerWidth;
    const ternY = (y - window.innerHeight / 2) / window.innerHeight;
    // console.log(ternX)
    if(x && y){
        el.rotation.x = Math.PI + Math.PI / 2.5 - Math.PI / 180 * ternY + Math.PI / 20 * Math.sin(num) - scrollCanvas / 300;
        el.rotation.z = Math.PI + Math.PI / 3 - Math.PI / 180 * ternX + Math.PI / 20 * Math.cos(num);
        el.rotation.y = -Math.PI / 180 * ternX * 15;
    } else{
        el.rotation.x = Math.PI + Math.PI / 2.5 + Math.PI / 20 * Math.sin(num) - scrollCanvas / 300;
        el.rotation.z = Math.PI + Math.PI / 3   + Math.PI / 20 * Math.cos(num);
        // el.rotation.y = -Math.PI / 180 * ternX * 15;
    }
    num += 0.004
        // el.rotation.y = Math.PI + 0;
}
