import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";
import { log } from "three/examples/jsm/nodes/Nodes.js";

const colorCombinations = [
	// { front: 0xff77ff, back: 0x77ff77 }, // Light Magenta and Light Green
	{ front: 0x8a2be2, back: 0x7fff00 }, // Chartreuse and Blue Violet
	{ front: 0xfa5096, back: 0x4ffa58 },
	{ front: 0xfa5837, back: 0x38fab0 },
	{ front: 0x546cba, back: 0xfac432 },
];

/* SECTION - Scene Setup */

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

let visibleHeight = 0;
let visibleWidth = 0;

let windowResized = false;
/* window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height; // for Perspective camera
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

	// Update visible height and width
	visibleHeight = getVisibleHeightAtZDepth(0, camera);
	visibleWidth = getVisibleWidthAtZDepth(0, camera);
	console.log(visibleHeight, visibleWidth);

	windowResized = true;
}); */

/* window.addEventListener("dblclick", () => {
	if (!document.fullscreenElement) {
		console.log("go full");
		renderer.domElement.requestFullscreen();
	} else {
		console.log("leave full");
		document.exitFullscreen();
	}
}); */

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-5, 10, 5);
scene.add(directionalLight);

const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;
scene.add(camera);

/* const aspectRatio = sizes.width / sizes.height;
const fov = 6;
const camera = new THREE.OrthographicCamera(
	-fov * aspectRatio,
	fov * aspectRatio,
	fov,
	-fov,
	0.1,
	100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;
scene.add(camera); */

/* // Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; */

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/*!SECTION */

/* SECTION: Utility Functions */

const getVisibleHeightAtZDepth = (depth, camera) => {
	// compensate for cameras not positioned at z=0
	const cameraOffset = camera.position.z;
	if (depth < cameraOffset) depth -= cameraOffset;
	else depth += cameraOffset;

	// vertical fov in radians
	const vFOV = (camera.fov * Math.PI) / 180;

	// Math.abs to ensure the result is always positive
	return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
};

const getVisibleWidthAtZDepth = (depth, camera) => {
	const height = getVisibleHeightAtZDepth(depth, camera);
	return height * camera.aspect;
};
/*!SECTION */

/* SECTION - Objects */

visibleHeight = getVisibleHeightAtZDepth(0, camera);
visibleWidth = getVisibleWidthAtZDepth(0, camera);
console.log(visibleHeight, visibleWidth);

const radiusTop = 0.1; // Example value
const radiusBottom = 0.1; // Example value
const radialSegments = 32; // Example value
const initialHeight = 1; // Initial height, will be updated dynamically

const cylinderGeometry = new THREE.CylinderGeometry(
	radiusTop,
	radiusBottom,
	initialHeight,
	radialSegments
);

let cylindersRight = [];
let cylindersLeft = [];
let cylinderCount = 19 * 2;
// const cylinder = new THREE.Mesh(geometry, material);
for (let i = 0; i < cylinderCount; i++) {
	// Calculate hue (fixed for green), saturation (fixed), and lightness (varying)
	// let hue = 120 / 360; // Green hue in HSL (120 degrees)
	// let saturation = 1; // Full saturation
	// let lightness = 0.5 + i / (2 * cylinderCount); // Lightness varies from 0.5 to 1

	// let hue = (Math.random() * 100 + 60) / 360;
	let hue = Math.random();
	let saturation = 1;
	let lightness = 0.7;

	// Convert HSL to hex color
	let color = new THREE.Color().setHSL(hue, saturation, lightness);

	const material = new THREE.MeshBasicMaterial({
		color: color, // Slightly different shade
	});
	const cylinder = new THREE.Mesh(cylinderGeometry, material);
	cylinder.userData.random = Math.random();
	if (i < cylinderCount / 2) {
		cylindersRight.push(cylinder);
	} else {
		cylindersLeft.push(cylinder);
	}
	scene.add(cylinder);
}

// const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
// const cubeMaterial = new THREE.MeshBasicMaterial({
// 	color: 0x00ff00,
// });
// const palmCube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(palmCube);

/*!SECTION */

/* SECTION - Render */

let listener;

function firstRender() {
	// listener = new THREE.AudioListener();
	// camera.add(listener);
	// render();
	animate();
}

/* document.getElementById("startButton").addEventListener("click", (event) => {
	document.getElementById("startScreen").remove();
	// create an AudioListener and add it to the camera
	

	// create a global audio source
	// sound = new THREE.Audio(listener);

	// load a sound and set it as the Audio object's buffer
	// const audioLoader = new THREE.AudioLoader();
	// audioLoader.load("sounds/page-flip.mp3", function (buffer) {
	// 	circles.forEach((circle) => {
	// 		const sound = new THREE.Audio(listener);
	// 		sound.setBuffer(buffer);
	// 		sound.setVolume(0.5);
	// 		circle.add(sound);
	// 	});
	// });
}); */

let circles = [];
let colors =
	colorCombinations[Math.floor(Math.random() * colorCombinations.length)];

function render() {
	circles.forEach((circle) => {
		scene.remove(circle);
		circle.geometry.dispose();
		circle.material.dispose();
		log;
	});
	circles = [];

	const circleRadius = 0.19;
	const circleDiameter = circleRadius * 2;
	const numCirclesWide = Math.floor(visibleWidth / circleDiameter);
	const numCirclesHigh = Math.floor(visibleHeight / circleDiameter);

	// Calculate excess space and spacing between circles
	const totalCircleWidth = numCirclesWide * circleDiameter;
	const excessWidth = visibleWidth - totalCircleWidth;
	const spacingX = excessWidth / (numCirclesWide + 1);

	const totalCircleHeight = numCirclesHigh * circleDiameter;
	const excessHeight = visibleHeight - totalCircleHeight;
	const spacingY = excessHeight / (numCirclesHigh + 1);

	const audioLoader = new THREE.AudioLoader();
	audioLoader.load("sounds/page-flip.mp3", function (buffer) {
		for (let i = 0; i < numCirclesWide; i++) {
			for (let j = 0; j < numCirclesHigh; j++) {
				const geometry = new THREE.CircleGeometry(circleRadius, 32);
				const color = colors.front;
				const material = new THREE.MeshBasicMaterial({
					color: color,
					side: THREE.DoubleSide,
				});
				// const materials = [
				// 	new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Red material
				// 	new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Green material
				// ];

				const circle = new THREE.Mesh(geometry, material);
				circle.position.x =
					i * (circleDiameter + spacingX) +
					spacingX +
					circleRadius -
					visibleWidth / 2;
				circle.position.y =
					j * (circleDiameter + spacingY) +
					spacingY +
					circleRadius -
					visibleHeight / 2;
				const sound = new THREE.Audio(listener);
				sound.setBuffer(buffer);
				sound.setVolume(0.5);
				circle.add(sound);
				scene.add(circle);
				circles.push(circle);
			}
		}
	});
	renderer.render(scene, camera);
	animate();
}

// let sound;

/*!SECTION */

/* SECTION - Animation */

const canVibrate = window.navigator.vibrate;

function flip() {
	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera(pointer, camera);

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects(circles);
	// console.log(intersects);

	for (let i = 0; i < intersects.length; i++) {
		if (!intersects[i].object.userData.flipped) {
			intersects[i].object.material.color.set(colors.back);
			intersects[i].object.userData.flipped = true;

			gsap.to(intersects[i].object.rotation, {
				y: Math.PI,
				duration: 0.1,
				overwrite: true,
			});
			const sound = intersects[i].object.children[0];
			if (sound) {
				sound.play();
				if (canVibrate) window.navigator.vibrate(100);
			}
		} /* else {
			intersects[i].object.material.color.set(colors.front);
			intersects[i].object.userData.flipped = false;
			gsap.to(intersects[i].object.rotation, {
				y: 0,
				duration: 0.1,
				overwrite: true,
			});
		} */
	}
}

function flip2() {
	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera(pointer, camera);

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects(circles);
	// console.log(intersects);

	for (let i = 0; i < intersects.length; i++) {
		intersects[i].object.userData.intersecting = true;
	}

	circles.forEach((circle) => {
		if (circle.userData.intersecting) {
			circle.material.color.set(colors.back);
			gsap.to(circle.rotation, {
				y: Math.PI,
				duration: 0.1,
				overwrite: true,
			});
			const sound = circle.children[0];
			if (sound) {
				sound.play();
				// if (canVibrate) window.navigator.vibrate(100);
			}
		} else if (circle.rotation.y !== 0) {
			circle.material.color.set(colors.front);
			gsap.to(circle.rotation, {
				y: 0,
				duration: 0.1,
				overwrite: true,
			});
			const sound = circle.children[0];
			if (sound) {
				sound.play();
				// if (canVibrate) window.navigator.vibrate(100);
			}
		}
		circle.userData.intersecting = false;
	});
}

function flip3() {
	circles.forEach((circle) => {
		let isIntersectingCylinder = false;

		// Check if the circle is intersecting with any of the cylinders
		cylindersRight.concat(cylindersLeft).forEach((cylinder) => {
			const circleBoundingBox = new THREE.Box3().setFromObject(circle);
			const cylinderBoundingBox = new THREE.Box3().setFromObject(cylinder);

			if (circleBoundingBox.intersectsBox(cylinderBoundingBox)) {
				isIntersectingCylinder = true;
			}
		});

		if (isIntersectingCylinder) {
			circle.material.color.set(colors.back);
			gsap.to(circle.rotation, {
				y: Math.PI,
				duration: 0.1,
				overwrite: true,
			});
			const sound = circle.children[0];
			if (sound) {
				sound.play();
				// if (canVibrate) window.navigator.vibrate(100);
			}
		} else if (circle.rotation.y !== 0) {
			circle.material.color.set(colors.front);
			gsap.to(circle.rotation, {
				y: 0,
				duration: 0.1,
				overwrite: true,
			});
			const sound = circle.children[0];
			if (sound) {
				sound.play();
				// if (canVibrate) window.navigator.vibrate(100);
			}
		}
	});
}

function reset() {
	colors =
		colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
	circles.forEach((circle) => {
		gsap.to(circle.rotation, {
			y: 0,
			duration: 1.2,
			overwrite: true,
		});

		circle.material.color.set(colors.front);
		circle.userData.flipped = false;
	});
}

window.addEventListener("dblclick", () => {
	reset();
});

/* Based on this http://jsfiddle.net/brettwp/J4djY/*/
function detectDoubleTapClosure() {
	let lastTap = 0;
	let timeout;
	return function detectDoubleTap(event) {
		const curTime = new Date().getTime();
		const tapLen = curTime - lastTap;
		if (tapLen < 400 && tapLen > 0) {
			console.log("Double tapped!");
			reset();
			event.preventDefault();
		} else {
			timeout = setTimeout(() => {
				clearTimeout(timeout);
			}, 400);
		}
		lastTap = curTime;
	};
}

/* Regex test to determine if user is on mobile */
if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	document.body.addEventListener("touchend", detectDoubleTapClosure(), {
		passive: false,
	});
}

function onPointerMove(event) {
	/* calculate pointer position in normalized device coordinates
	(-1 to +1) for both components */

	let x, y;

	if (event.type === "mousemove") {
		x = (event.clientX / window.innerWidth) * 2 - 1;
		y = -(event.clientY / window.innerHeight) * 2 + 1;
	} else if (event.type === "touchmove") {
		const touch = event.touches[0];
		x = (touch.clientX / window.innerWidth) * 2 - 1;
		y = -(touch.clientY / window.innerHeight) * 2 + 1;
	}

	pointer.x = x;
	pointer.y = y;

	flip();

	/* // Create a new vector representing the pointer's position in normalized device coordinates
	const pointerVector = new THREE.Vector3(x, y, 0.5);
	// Transform the pointer coordinates from screen space to 3D space
	pointerVector.unproject(camera);

	// Calculate the direction from the camera to the pointer position
	const directionToPointer = pointerVector.sub(camera.position).normalize();

	// Calculate the distance from the camera to the xy-plane (z=0)
	const distanceToXYPlane = -camera.position.z / directionToPointer.z;

	// Calculate the exact position on the xy-plane where the pointer intersects
	const intersectionPoint = camera.position
		.clone()
		.add(directionToPointer.multiplyScalar(distanceToXYPlane));

	// Set the cube's position to the intersection point
	cube.position.copy(intersectionPoint); */

	// // Use raycasting to determine intersections and flip the intersecting circles
	// const raycaster = new THREE.Raycaster();
	// raycaster.set(cube.position, new THREE.Vector3(0, 0, 1)); // Assuming we need to check intersections in the z-direction
	// circles.forEach((circle) => {
	// 	const intersects = raycaster.intersectObject(circle);
	// 	if (intersects.length > 0) {
	// 		circle.scale.y *= -1; // Flip the circle vertically
	// 	}
	// });
}

const pointPairs = [
	// thumb
	[0, 1],
	[1, 2],
	[2, 3],
	[3, 4],
	// index
	[5, 6],
	[6, 7],
	[7, 8],
	// middle
	[9, 10],
	[10, 11],
	[11, 12],
	// ring
	[13, 14],
	[14, 15],
	[15, 16],
	// pinky
	[17, 18],
	[18, 19],
	[19, 20],
	// palm
	[1, 5],
	[5, 17],
	[17, 0],
];

function onHandMove(handLandmarks) {
	// console.log(handLandmarks);

	if (handLandmarks.length > 0) {
		const handOne = handLandmarks[0];
		const handTwo = handLandmarks[1];

		pointPairs.forEach((pair, index) => {
			let pointA = getWorldPoint(handOne[pair[0]]);
			let pointB = getWorldPoint(handOne[pair[1]]);
			updateCylinder(cylindersLeft[index], pointA, pointB);
		});

		if (handTwo) {
			pointPairs.forEach((pair, index) => {
				let pointA = getWorldPoint(handTwo[pair[0]]);
				let pointB = getWorldPoint(handTwo[pair[1]]);
				updateCylinder(cylindersRight[index], pointA, pointB);
			});
		}
		// updatePalmCube(
		// 	palmCube,
		// 	getWorldPoint(handOne[0]),
		// 	getWorldPoint(handOne[1]),
		// 	getWorldPoint(handOne[5]),
		// 	getWorldPoint(handOne[17])
		// );
		// flip3();
	}
}

function getWorldPoint(point) {
	// let liveView = document.getElementById("liveVideoView");
	let adjustedX = -point.x * 2 + 1;
	let adjustedY = -point.y * 2 + 1;

	// Create a new vector representing the pointer's position in normalized device coordinates
	const pointerVector = new THREE.Vector3(adjustedX, adjustedY, 0.5);

	// Transform the pointer coordinates from screen space to 3D space
	pointerVector.unproject(camera);

	// Calculate the direction from the camera to the pointer position
	const directionToPointer = pointerVector.sub(camera.position).normalize();

	// Calculate the distance from the camera to the xy-plane (z=0)
	const distanceToXYPlane = -camera.position.z / directionToPointer.z;

	// Calculate the exact position on the xy-plane where the pointer intersects
	const intersectionPoint = camera.position
		.clone()
		.add(directionToPointer.multiplyScalar(distanceToXYPlane));

	return intersectionPoint;
}

// Function to update the cylinder based on new points
function updateCylinder(cylinder, pointA, pointB) {
	// Calculate the midpoint
	const midpoint = new THREE.Vector3()
		.addVectors(pointA, pointB)
		.multiplyScalar(0.5);

	// Calculate the height of the cylinder
	const height = pointA.distanceTo(pointB);

	// Update the cylinder geometry
	cylinder.geometry.dispose(); // Dispose of the old geometry
	cylinder.geometry = new THREE.CylinderGeometry(
		radiusTop,
		radiusBottom,
		height,
		radialSegments
	);

	// Position the cylinder at the midpoint
	cylinder.position.copy(midpoint);

	// Align the cylinder to the direction vector
	const direction = new THREE.Vector3().subVectors(pointB, pointA).normalize();
	const axis = new THREE.Vector3(0, 1, 0); // y-axis is the default axis of the cylinder
	const quaternion = new THREE.Quaternion().setFromUnitVectors(axis, direction);
	cylinder.setRotationFromQuaternion(quaternion);
}

function updatePalmCube(palmCube, pointA, pointB, pointC, pointD) {
	const vertices = [pointA, pointB, pointC, pointD];
	const center = new THREE.Vector3();
	vertices.forEach((vertex) => center.add(vertex));
	center.multiplyScalar(1 / vertices.length);
	palmCube.position.copy(center);

	const width = pointA.distanceTo(pointB);
	const height = pointA.distanceTo(pointD);
	const depth = palmCube.geometry.parameters.depth; // Assuming depth remains the same

	palmCube.scale.set(width, height, depth);

	const directionX = new THREE.Vector3().subVectors(pointB, pointA).normalize();
	const directionY = new THREE.Vector3().subVectors(pointD, pointA).normalize();
	const directionZ = new THREE.Vector3()
		.crossVectors(directionX, directionY)
		.normalize();

	const matrix = new THREE.Matrix4().makeBasis(
		directionX,
		directionY,
		directionZ
	);
	palmCube.setRotationFromMatrix(matrix);
}

function updateObjectPositionFromHandPosition(handLandmarks, object) {
	const indexMCP = handLandmarks[5];
	// console.log(indexMCP);

	// let liveView = document.getElementById("liveVideoView");
	let adjustedX = indexMCP.x * 2 - 1;
	let adjustedY = -indexMCP.y * 2 + 1;
	// console.log(adjustedX, adjustedY);
	pointer.x = adjustedX;
	pointer.y = adjustedY;

	// Create a new vector representing the pointer's position in normalized device coordinates
	const pointerVector = new THREE.Vector3(pointer.x, pointer.y, 0);

	// Transform the pointer coordinates from screen space to 3D space
	pointerVector.unproject(camera);

	// Calculate the direction from the camera to the pointer position
	const directionToPointer = pointerVector.sub(camera.position).normalize();

	// Calculate the distance from the camera to the xy-plane (z=0)
	const distanceToXYPlane = -camera.position.z / directionToPointer.z;

	// Calculate the exact position on the xy-plane where the pointer intersects
	const intersectionPoint = camera.position
		.clone()
		.add(directionToPointer.multiplyScalar(distanceToXYPlane));

	// Set the cube's position to the intersection point
	object.position.copy(intersectionPoint);
}

const clock = new THREE.Clock();

/* ANCHOR Animate */
function animate() {
	const animationId = requestAnimationFrame(animate);

	const elapsedTime = clock.getElapsedTime();

	// cube.scale.y = Math.sin(elapsedTime);
	cylindersLeft.forEach((cylinder) => {
		cylinder.scale.x = cylinder.scale.z = Math.sin(
			elapsedTime * 2 * cylinder.userData.random
		);
	});
	cylindersRight.forEach((cylinder) => {
		cylinder.scale.x = cylinder.scale.z = Math.sin(
			elapsedTime * 2 * cylinder.userData.random
		);
	});

	// Update controls
	// controls.update();

	// Render the scene
	renderer.render(scene, camera);

	// if (windowResized) {
	// 	windowResized = false;
	// 	cancelAnimationFrame(animationId);
	// 	render();
	// }
}

// Start the animation loop
// animate();

export { firstRender, onHandMove };
