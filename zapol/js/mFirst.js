// MAIN //
var container, scene, camera, renderer;
var cube;
let img1
let img2
let img3
let img4
let img5
let img6
let img7
let img8
let img9
let img10
let img11
// const el = document.querySelector("div");
let scrW = 0;
let scrH = 0;
let halfX= 0;
let halfY= 0;
let mfX=0;
let mfY=0;
let mousePosX=0; 
let mousePosY=0;

window.addEventListener('mousemove', onWindowMouseMove);

function onWindowMouseMove(event) {
 mousePosX = event.clientX - halfX;
 mousePosY = event.clientY - halfY;
}

// initialization
init();

// animation loop / game loop
animate();

// FUNCTIONS //
function init() 
{
	container = document.querySelector( '.firstScr' );

	// SCENE //
	scene = new THREE.Scene();
	
	// CAMERA //
	var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;	
	var elW = container.offsetWidth, elH = container.offsetHeight;	
	var VIEW_ANGLE = 45, ASPECT = elW / elH, NEAR = 0.1, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,0,2800);
	camera.lookAt(scene.position);	
	

	// RENDERER //
	renderer = new THREE.WebGLRenderer( {antialias:true} );

	
	renderer.setSize(elW, elH);
	
	// attach renderer to the container div
	container.appendChild( renderer.domElement );
	
	// EVENTS //
	// THREEx.WindowResize(renderer, camera);

	scrW =  document.querySelector(".firstScr").offsetWidth;
	scrH =  document.querySelector(".firstScr").offsetHeight;

	halfX=scrW/2;
	halfY=scrH/2;


	
	///////////
	// LIGHT //
	///////////
	
	// create a light
	var light = new THREE.PointLight(0xffffff);
	light.position.set(0,250,0);
	scene.add(light);
	var ambientLight = new THREE.AmbientLight(0x111111);
	// scene.add(ambientLight);
	

	///////////
	// images //
	///////////

	(function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/1.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(480, 560, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = -0.5;
		img.position.y = 800;
		// floor.position.y = 1;
		// floor.rotation.x = Math.PI / 2;
		img1=img
		scene.add(img1);
	 }());

	 
	 (function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/2.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(320, 250, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = 600;
		img.position.x = -500;
		img.position.z = 1000;
		
		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img2=img
		scene.add(img2);
	 }());
	 (function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/3.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(320, 280, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = 500;
		img.position.x = 500;
		img.position.z = 751;
		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img3=img
		scene.add(img3);
	 }());

	 (function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/4.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(400, 560, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = 300;
		// img.position.x = 800;
		img.position.x = -900;
		img.position.z = 400;

		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img4=img
		scene.add(img4);
		 }());

		(function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/5.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(404, 480, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = 200;
		// img.position.x = 800;
		img.position.x = -200;
		img.position.z = 700;

		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img5=img
		scene.add(img5);
		 }());
		 		 
		(function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/6.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(400, 550, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = 0;
		// img.position.x = 800;
		img.position.x = 200;
		img.position.z = 700;
		img.scale.x=img.scale.y=img.scale.z=0.7;

		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img6=img
		scene.add(img6);
		 }());

		(function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/7.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(320, 480, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = 0;
		// img.position.x = 800;
		img.position.x = 600;
		img.position.z = 700;
		img.scale.x=img.scale.y=img.scale.z=1.2;

		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img7=img
		scene.add(img7);
		 }());
		 
		(function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/8.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(310, 380, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = -300;
		// img.position.x = 800;
		img.position.x = -600;
		img.position.z =200;
		img.scale.x=img.scale.y=img.scale.z=1.5;

		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img8=img
		scene.add(img8);
		 }());

		(function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/9.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(310, 380, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = -600;
		// img.position.x = 800;
		img.position.x = -300;
		img.position.z = 100;
		img.scale.x=img.scale.y=img.scale.z=1.5;

		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img9=img
		scene.add(img9);
		 }());
		 (function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/10.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(240, 290, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = -600;
		// img.position.x = 800;
		img.position.x = 00;
		img.position.z = 500;
		img.scale.x=img.scale.y=img.scale.z=1.5;

		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img10=img
		scene.add(img10);
		 }());
		 
		 (function () {
		let imgTexture = new THREE.ImageUtils.loadTexture( 'img/first/11.jpg' );
		imgTexture.wrapS = imgTexture.wrapT = THREE.RepeatWrapping; 
		imgTexture.repeat.set( 1, 1 );
		// DoubleSide: render texture on both sides of mesh
		let imgMaterial = new THREE.MeshBasicMaterial( { map: imgTexture, side: THREE.DoubleSide } );
		let imgGeometry = new THREE.PlaneGeometry(500, 650, 1, 1);
		let img = new THREE.Mesh(imgGeometry, imgMaterial);
		img.position.y = -800;
		// img.position.x = 800;
		img.position.x = 500;
		img.position.z = 500;8
		img.scale.x=img.scale.y=img.scale.z=1;

		// img.position.y = 1;
		// img.rotation.x = Math.PI / 2;
		img11=img
		scene.add(img11);
 		}());

	// SKY //
	var skyBoxGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0xf2f2f2, side: THREE.BackSide } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	scene.add(skyBox);
}

function animate() 
{
  requestAnimationFrame( animate );
	render();		
	mouseMove()
	img1.rotation.x = -mfX/4;
	img1.rotation.y = -mfY/4;
	img2.rotation.x = -mfX/4;
	img2.rotation.y = -mfY/4;
	img3.rotation.x = -mfX/4;
	img3.rotation.y = -mfY/4;
	img4.rotation.x = -mfX/4;
	img4.rotation.y = -mfY/4;
	img5.rotation.x = -mfX/4;
	img5.rotation.y = -mfY/4;
	img6.rotation.x = -mfX/4;
	img6.rotation.y = -mfY/4;
	img7.rotation.x = -mfX/4;
	img7.rotation.y = -mfY/4;
	img8.rotation.x = -mfX/4;
	img8.rotation.y = -mfY/4;
	img9.rotation.x = -mfX/4;
	img9.rotation.y = -mfY/4;
	img10.rotation.x = -mfX/4;
	img10.rotation.y = -mfY/4;
	img11.rotation.x = -mfX/4;
	img11.rotation.y = -mfY/4;
	camera.rotation.y = -mfX/10;
	camera.rotation.x = -mfY/10;
}

function render() 
{	
	renderer.render( scene, camera );
}
function mouseMove() {
    mfX +=0.05*(mousePosX/halfX-mfX);
    mfY +=0.05*(mousePosY/halfY-mfY);
}
