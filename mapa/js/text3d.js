var modelText;
var sceneText = new THREE.Scene();
let text3dWrap = document.querySelector(".text3dWrap ") 
var frontSpotText = new THREE.SpotLight(0x2F80ED);
frontSpotText.position.set(-300, -1000, 500);
sceneText.add(frontSpotText);

var frontSpotText1 = new THREE.SpotLight(0x2F80ED);
frontSpotText1.position.set(200, 200, 100);
sceneText.add(frontSpotText1);

var cameraText = new THREE.PerspectiveCamera(75, text3dWrap.offsetWidth / text3dWrap.offsetHeight, 0.1, 1000);
cameraText.position.z = 25;
if(innerWidth<1100){
    cameraText.position.z = 35;
} 
if(innerWidth<550){
    cameraText.position.z = 47;
}

var rendererText = new THREE.WebGLRenderer({alpha: true});

rendererText.setSize(text3dWrap.offsetWidth, text3dWrap.offsetHeight);
text3dWrap.appendChild(rendererText.domElement);

const loaderText = new THREE.OBJLoader();
// load a resource
let modelTextPosY = 0;
let modelTextLoaded = false;
loaderText.load(
    // resource URL
    window.location.href+'/img/txtModel.obj',
    // called when resource is loaded
    function(object) {
        object.scale.x = 1;
        object.scale.y = 1;
        object.scale.z = 1;
        object.rotation.x = Math.PI/15;
        object.rotation.z =  Math.PI/30;
        object.position.y =  modelTextPosY;
        var materialObj = new THREE.MeshPhongMaterial({
            color: 0x2F80ED,
            specular: 0x2F80ED,
            wireframe: false
        });
        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = materialObj;
            }
        });
        modelText = object
        sceneText.add(modelText);
    },
    // called when loading is in progresses
    function(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        if(xhr.loaded / xhr.total>=1){
            modelTextLoaded = true;
        }
    },
    // called when loading has errors
    function(error) {
        console.log('An error happened');
    }
);

render3dText();
function render3dText(event) {
    requestAnimationFrame(render3dText);
    if (text3dWrap.getBoundingClientRect().y<innerHeight*1.2 && text3dWrap.getBoundingClientRect().y>-innerHeight*1.2 ){
        if(modelTextLoaded){
            ternModelText(modelText);
        }
        rendererText.render(sceneText, cameraText);
    }
}

function ternModelText(el) {
        el.rotation.y = modelTextPosY;
        modelTextPosY=modelTextPosY+Math.PI / 720;
}
