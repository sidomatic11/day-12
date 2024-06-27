import * as THREE from "three";
import gsap from "gsap";
const baseUrl = new URL(import.meta.env.BASE_URL, import.meta.url);

/* SECTION - Scene Setup */

/* Canvas */
const canvas = document.querySelector("canvas.webgl");

/* Scene */
const scene = new THREE.Scene();

/* Change background color to be 80% opacity */
// scene.background = new THREE.Color("rgba(0, 0, 0, 0.5)");

/* Sizes */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

let visibleHeight = 0;
let visibleWidth = 0;

/* ANCHOR Lights */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(-5, 10, 10);
scene.add(directionalLight);

/* ANCHOR Camera */
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

/* ANCHOR Renderer */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new THREE.Color(0x000000), 1); // Black with 50% opacity

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

const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

visibleHeight = getVisibleHeightAtZDepth(0, camera);
visibleWidth = getVisibleWidthAtZDepth(0, camera);
console.log(visibleHeight, visibleWidth);

const unconnectedSegments = [
	{
		part: "index",
		pair: [5, 6],
	},

	{
		part: "index",
		pair: [6, 7],
	},
	{
		part: "index",
		pair: [7, 8],
	},
	{
		part: "middle",
		pair: [9, 10],
	},
	{
		part: "middle",
		pair: [10, 11],
	},
	{
		part: "middle",
		pair: [11, 12],
	},
	{
		part: "ring",
		pair: [13, 14],
	},
	{
		part: "ring",
		pair: [14, 15],
	},
	{
		part: "ring",
		pair: [15, 16],
	},
	{
		part: "pinky",
		pair: [17, 18],
	},
	{
		part: "pinky",
		pair: [18, 19],
	},
	{
		part: "pinky",
		pair: [19, 20],
	},

	{
		part: "thumb",
		pair: [1, 2],
	},
	{
		part: "thumb",
		pair: [2, 3],
	},
	{
		part: "thumb",
		pair: [3, 4],
	},
];

const connectedSegments = [
	{
		part: "thumb",
		pair: [0, 1],
	},
	{
		part: "palm",
		pair: [1, 5],
	},
	{
		part: "palm",
		pair: [5, 17],
	},
	{
		part: "palm",
		pair: [17, 0],
	},
];

const radiusTop = 0.1;
const radiusBottom = 0.1;
const radialSegments = 32;
const initialHeight = 1;

const cylinderGeometry = new THREE.CylinderGeometry(
	radiusTop,
	radiusBottom,
	initialHeight,
	radialSegments
);

let cylindersRight = [];
let cylindersLeft = [];
let cylinderCount = 19;
let cylinders = [];

unconnectedSegments.forEach((segment) => {
	let cylinder = createCylinder(segment.part, segment.pair);
	segment.cylinder = cylinder;
	cylinders.push(cylinder);
});

connectedSegments.forEach((segment) => {
	let cylinder = createCylinder(segment.part, segment.pair);
	segment.cylinder = cylinder;
	cylinders.push(cylinder);
});

function createCylinder(part, pair) {
	let hue = Math.random();
	let saturation = 1;
	let lightness = 0.7;
	let color = new THREE.Color().setHSL(hue, saturation, lightness);

	const material = new THREE.MeshPhongMaterial({
		color: color,
	});

	const cylinder = new THREE.Mesh(cylinderGeometry, material);
	const randomX = (Math.random() - 0.5) * (visibleWidth - 4.5) - 2;
	const randomY = (Math.random() - 0.5) * (visibleHeight - 1.5);
	const randomZ = 0; // Fixed z value

	const randomZRotation = Math.random() * Math.PI * 2; // Random rotation between 0 and 2*PI
	cylinder.rotation.z = randomZRotation;

	cylinder.position.set(randomX, randomY, randomZ);

	cylinder.userData.part = part;
	cylinder.userData.pair = pair;
	cylinder.userData.originalColor = color;
	cylinder.userData.random = Math.random();

	scene.add(cylinder);

	return cylinder;
}

let cheerleaders = [];
const cheerleaderCount = 10;
const cheerleaderPlaneHeight = 2;
for (let i = 0; i < cheerleaderCount; i++) {
	let hue = Math.random();
	let saturation = 1;
	let lightness = 0.5;
	let color = new THREE.Color().setHSL(hue, saturation, lightness);

	const textureLoader = new THREE.TextureLoader();
	let texture = await textureLoader.loadAsync(
		`${baseUrl.href}images/img-${i + 1}.png`
	);
	// const texture = textureLoader.load("static/images/img-" + (i % 10) + ".png");
	const material = new THREE.MeshBasicMaterial({
		map: texture,
		// color: color,
		transparent: true,
	});

	const planeGeometry = new THREE.PlaneGeometry(1, 1);
	const plane = new THREE.Mesh(planeGeometry, material);
	const randomX = (Math.random() - 0.5) * (visibleWidth - 1);
	const randomY = -visibleHeight / 2 - cheerleaderPlaneHeight; // Just below the visible screen
	plane.position.set(randomX, randomY, 0);
	plane.userData.random = Math.random();

	cheerleaders.push(plane);
	scene.add(plane);
}

/*!SECTION */

/* SECTION - Render */

let listener;

function firstRender() {
	// listener = new THREE.AudioListener();
	// camera.add(listener);
	// render();
	animate();
}

/*!SECTION */

/* SECTION - Processing */

let nextSegment = unconnectedSegments[0];
const blinkColor = new THREE.Color(0xff0000); // Red color
const blinkDuration = 0.75; // Duration of one blink cycle in seconds

const blink = () => {
	console.log("blink", nextSegment); //TODO: why is it still getting this?
	if (nextSegment) {
		gsap.to(nextSegment.cylinder.material.color, {
			r: blinkColor.r,
			g: blinkColor.g,
			b: blinkColor.b,
			duration: blinkDuration,
			yoyo: true,
			repeat: 1,
			onComplete: blink,
		});
	}
};

/* const stopBlink = () => {
	gsap.killTweensOf(nextSegment.cylinder.material.color);
}; */

function onHandMove(handLandmarks) {
	// console.log(handLandmarks);

	if (handLandmarks.length > 0) {
		const handOne = handLandmarks[0];
		const handTwo = handLandmarks[1];

		connectedSegments.forEach((segment) => {
			let pointA = getWorldPoint(handOne[segment.pair[0]]);
			let pointB = getWorldPoint(handOne[segment.pair[1]]);
			updateCylinder(segment.cylinder, pointA, pointB);
		});

		if (nextSegment) {
			let nextPoint = handOne[nextSegment.pair[0]];
			let nextPointWorldCoordinates = getWorldPoint(
				handOne[nextSegment.pair[0]]
			);
			// let nextPointB = getWorldPoint(handOne[nextSegment.pair[1]]);
			let nextCylinder = nextSegment.cylinder;
			let adjustedNextPoint = {
				x: -nextPoint.x * 2 + 1,
				y: -nextPoint.y * 2 + 1,
			};
			// let adjustedX = -nextPoint.x * 2 + 1;
			// let adjustedY = -nextPoint.y * 2 + 1;

			sphere.position.copy(nextPointWorldCoordinates);

			// Create a raycaster to check for intersections
			const raycaster = new THREE.Raycaster();

			// Set the raycaster's origin to nextPointA and direction to point down the z-axis
			raycaster.setFromCamera(adjustedNextPoint, camera);

			// Check for intersections with nextCylinder
			const intersects = raycaster.intersectObject(nextCylinder);

			// If there are intersections, log that an intersection was detected
			if (intersects.length > 0) {
				// Remove nextSegment from unconnectedSegments
				const index = unconnectedSegments.indexOf(nextSegment);
				if (index > -1) {
					unconnectedSegments.splice(index, 1);
				}

				// Add nextSegment to connectedSegments
				connectedSegments.push(nextSegment);
				nextSegment = unconnectedSegments[0];
				cheer();
			}
		} else {
			sphere.visible = false;
			if (!window.applauseCalled) {
				applause();
				window.applauseCalled = true;
			}
			// stopBlink();
		}
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

function cheer() {
	const cheerleader =
		cheerleaders[Math.floor(Math.random() * cheerleaders.length)];
	const initialY = cheerleader.position.y;
	const cheerleaderUpY = initialY + cheerleaderPlaneHeight * 2; // Position to bring the cheerleader up to

	// Animate the cheerleader up and then back down
	gsap.to(cheerleader.position, {
		y: cheerleaderUpY,
		duration: 1,
		onComplete: () => {
			gsap.to(cheerleader.position, {
				y: initialY,
				duration: 1,
			});
		},
	});
}

function applause() {
	cheerleaders.forEach((cheerleader) => {
		const initialY = cheerleader.position.y;
		const randomDisplacement =
			Math.random() * cheerleaderPlaneHeight * 2 + cheerleaderPlaneHeight; // Random displacement up to twice the cheerleaderPlaneHeight
		const cheerleaderUpY = initialY + randomDisplacement;

		// Animate the cheerleader up and then back down indefinitely
		gsap.to(cheerleader.position, {
			y: cheerleaderUpY,
			duration: 1 + Math.random(), // Random duration between 1 and 2 seconds
			yoyo: true,
			repeat: -1,
			ease: "power1.inOut",
		});
	});
}

/* !SECTION */

/* SECTION Animate */

const clock = new THREE.Clock();

blink();

function animate() {
	requestAnimationFrame(animate);

	// console.log("nextSegment", nextSegment);
	// console.log("unconnectedSegments", unconnectedSegments);

	/* if (unconnectedSegments.length == 0) {
		const elapsedTime = clock.getElapsedTime();

		connectedSegments.forEach((segment) => {
			segment.cylinder.scale.x = segment.cylinder.scale.z =
				Math.sin(elapsedTime * 2 * segment.cylinder.userData.random) / 4 + 1;
		});
	} */

	/* Render the scene */
	renderer.render(scene, camera);
}

// Start the animation loop
// animate();

export { firstRender, onHandMove };
