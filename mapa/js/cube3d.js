let mousePosXCube = 0;
let mousePosYCube = 0;
var modelCube;
var sceneCube = new THREE.Scene();
let modelCubePosY = 0;
let modelCubeLoaded = false;

var camera = new THREE.PerspectiveCamera(75, document.querySelector(".main3d").offsetWidth / document.querySelector(".main3d").offsetHeight, 1, 100000);

var rendererCube = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

rendererCube.setSize(document.querySelector(".main3d").offsetWidth, document.querySelector(".main3d").offsetHeight);
document.querySelector(".main3d").appendChild(rendererCube.domElement);

const loaderCube = new THREE.OBJLoader();

function initEventListeners() {
    window.addEventListener('mousemove', onWindowMouseMove);
};
initEventListeners();

function onWindowMouseMove(event) {
    mousePosXCube = event.clientX;
    mousePosYCube = event.clientY;
}

camera.position.z = 30;
// load a resource

this.refractSphereCamera = new THREE.CubeCamera( 0.1, 5000, 512 );
sceneCube.add( refractSphereCamera );
loaderCube.load(
    // resource URL
    window.location.href+'/img/cube.obj',
    // called when resource is loaded
    function(object) {
        object.scale.x = 25;
        object.scale.y = 25;
        object.scale.z = 25;
        object.position.x = 0;
        object.position.y = 0;
        object.position.z = 0;
        object.rotation.x = Math.PI/15;
        object.rotation.z =  Math.PI/30;
        object.position.y =  modelCubePosY;
        var fShader = THREE.FresnelShader;
        var fresnelUniforms = 
        {
          "mRefractionRatio": { type: "f", value: 1.02 },
          "mFresnelBias": 	{ type: "f", value: 0.1 },
          "mFresnelPower": 	{ type: "f", value: 2.0 },
          "mFresnelScale": 	{ type: "f", value: 1.0 },
          "tCube": 			{ type: "t", value: refractSphereCamera.renderTarget } //  textureCube }
        };
        var customMaterial = new THREE.ShaderMaterial({
            uniforms: 		fresnelUniforms,
            vertexShader:   fShader.vertexShader,
            fragmentShader: fShader.fragmentShader
        });
        object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                child.material = customMaterial;
            }
        });
        modelCube = object
        sceneCube.add(modelCube);
        refractSphereCamera.position = modelCube.position;
    },
    // called when loading is in progresses
    function(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        if(xhr.loaded / xhr.total>=1){
          modelCubeLoaded = true;
        }
    },
    // called when loading has errors
    function(error) {
        console.log('An error happened');
    }
  );

  // FLOOR
  //
  let scrW =  document.querySelector(".main3d").offsetWidth;
  let scrH =  document.querySelector(".main3d").offsetHeight;
  let imgW 
  let imgH 
  if (scrW/scrH > 1.78){
    imgW = scrW;
    imgH = scrW * 1080 / 1920;
  } else{
    imgW = scrH * 1920 / 1080;
    imgH = scrH;
  }
  var floorTexture = new THREE.TextureLoader().load( window.location.href+'/img/bgBM.jpg' );
  floorTexture.minFilter = THREE.LinearFilter;
  // floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
  floorTexture.repeat.set( 1, 1 );
  var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
  var floorGeometry = new THREE.PlaneGeometry(imgW, imgH, 1, 1);
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.position.x = -00;
  floor.position.y = -00;
  floor.position.z = -540;
  sceneCube.add(floor);

    // FLOOR Back
 
  var floorMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
  var floorGeometry = new THREE.PlaneGeometry(19200, 10800, 1, 1);
  var floor = new THREE.Mesh(floorGeometry, floorMaterial);
  // floor.position.x = -10000;
  // floor.position.y = -5000;
  floor.position.z = 531;
  sceneCube.add(floor);
  
  
  // Left.Right FLOOR
  const geometry = new THREE.PlaneGeometry( scrW, scrW );
  const material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
  const floor1 = new THREE.Mesh( geometry, material );
  floor1.position.x = -0;
  floor1.position.x = -scrW;
  floor1.position.z = -299;
  floor1.rotation.y = Math.PI/2;
  sceneCube.add( floor1 );
  const floor2 = new THREE.Mesh( geometry, material );
  floor2.position.x = -0;
  floor2.position.x = scrW;
  floor2.position.z = -scrW;
  floor2.rotation.y = Math.PI/2;
  sceneCube.add( floor2 );
  floor2.position.x = -0;
  floor2.position.x = scrW;
  floor2.position.z = -scrW;
  floor2.rotation.y = Math.PI/2;
  sceneCube.add( floor2 );

  function ternModelCube(el, x, y) {
    let mouseRotX = x/1920/3*Math.PI;
    let mouseRotY = y/1080/3*Math.PI;
    el.rotation.y = modelCubePosY + mouseRotX;
    el.rotation.z = modelCubePosY*2 + mouseRotY;
    modelCubePosY=modelCubePosY+Math.PI / 720;
  }

render();
function render(event) {
    requestAnimationFrame(render);
    if(window.scrollY < scrH*1.2){
        refractSphereCamera.updateCubeMap( rendererCube, sceneCube );
        if(modelCubeLoaded){
            ternModelCube(modelCube, mousePosXCube, mousePosYCube);
        }
        rendererCube.render(sceneCube, camera);
    }
}


