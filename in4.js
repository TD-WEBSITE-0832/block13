import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.128.0/examples/jsm/controls/OrbitControls.js';

// --- Sozlamalar ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050510); // To'q ko'k

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 3, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 8K hissi uchun yuqori piksel ratio
renderer.toneMapping = THREE.ReinhardToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

// Kamera boshqaruvi (ixtiyoriy)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 1.5;
controls.enableZoom = true;
controls.enablePan = false;

// --- Yorug'liklar ---
// Ambient yorug'lik
const ambientLight = new THREE.AmbientLight(0x404060);
scene.add(ambientLight);

// Asosiy yorug'lik (nuqtali)
const pointLight1 = new THREE.PointLight(0xffaa88, 1, 20);
pointLight1.position.set(2, 3, 4);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0x88aaff, 1, 20);
pointLight2.position.set(-3, -1, 2);
scene.add(pointLight2);

// Yorqin nur
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(1, 2, 1);
scene.add(dirLight);

// --- Dodecahedron yaratish (12 qirrali shakl) ---
const geometry = new THREE.DodecahedronGeometry(1.8, 0); // 0 - detallar soni (silliq)

// Asosiy material (ichki porlash uchun)
const material = new THREE.MeshStandardMaterial({
    color: 0x33aaff,
    emissive: 0x114488,
    roughness: 0.2,
    metalness: 0.6,
    transparent: true,
    opacity: 0.85,
    wireframe: false,
    emissiveIntensity: 1.2
});

const dodecahedron = new THREE.Mesh(geometry, material);
scene.add(dodecahedron);

// --- Wireframe qatlami (energiya panjarasi) ---
const wireframeGeo = new THREE.DodecahedronGeometry(1.81, 0); // Bir oz kattaroq
const wireframeMat = new THREE.MeshStandardMaterial({
    color: 0x88ccff,
    emissive: 0x2266aa,
    wireframe: true,
    transparent: true,
    opacity: 0.3
});
const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
scene.add(wireframeMesh);

// --- Tashqi nurli qobiq (glow effekti) ---
const glowGeo = new THREE.DodecahedronGeometry(1.95, 0);
const glowMat = new THREE.MeshBasicMaterial({
    color: 0x2288ff,
    transparent: true,
    opacity: 0.15,
    side: THREE.BackSide // Ichki qismini ko'rsatish
});
const glowMesh = new THREE.Mesh(glowGeo, glowMat);
scene.add(glowMesh);

// --- Kichik zarralar (charge/energiya effekti) ---
const particleCount = 1500;
const particlesGeo = new THREE.BufferGeometry();
const particlesPos = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i++) {
    // Sfera bo'ylab tasodifiy pozitsiyalar
    const radius = 2.2 + Math.random() * 1.5; // Dodecaedrdan tashqarida
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    particlesPos[i*3] = x;
    particlesPos[i*3+1] = y;
    particlesPos[i*3+2] = z;
    
    // Ranglar (ko'kdan oqgacha)
    const color = new THREE.Color().setHSL(0.6 + Math.random()*0.2, 1, 0.5 + Math.random()*0.5);
    colors[i*3] = color.r;
    colors[i*3+1] = color.g;
    colors[i*3+2] = color.b;
}

particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlesPos, 3));
particlesGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const particlesMat = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});

const particles = new THREE.Points(particlesGeo, particlesMat);
scene.add(particles);

// --- Yulduzlar fon uchun ---
const starsGeo = new THREE.BufferGeometry();
const starsCount = 2000;
const starsPos = new Float32Array(starsCount * 3);

for (let i = 0; i < starsCount; i++) {
    starsPos[i*3] = (Math.random() - 0.5) * 200;
    starsPos[i*3+1] = (Math.random() - 0.5) * 200;
    starsPos[i*3+2] = (Math.random() - 0.5) * 200;
}

starsGeo.setAttribute('position', new THREE.BufferAttribute(starsPos, 3));
const starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.15, transparent: true });
const stars = new THREE.Points(starsGeo, starsMat);
scene.add(stars);

// --- Animatsiya o'zgaruvchilari ---
let clock = new THREE.Clock();

// --- Animatsiya sikli ---
function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    const elapsedTime = performance.now() / 1000; // sekundlarda
    
    // Dodecahedron animatsiyasi
    dodecahedron.rotation.x += 0.001;
    dodecahedron.rotation.y += 0.002;
    
    wireframeMesh.rotation.x = dodecahedron.rotation.x;
    wireframeMesh.rotation.y = dodecahedron.rotation.y;
    
    glowMesh.rotation.x = dodecahedron.rotation.x * 0.8;
    glowMesh.rotation.y = dodecahedron.rotation.y * 0.8;
    
    // Zarralar animatsiyasi (pulsatsiya)
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0003;
    
    // Zarralar o'lchamini vaqt bo'yicha o'zgartirish (charge effekti)
    particlesMat.size = 0.08 + Math.sin(elapsedTime * 5) * 0.02;
    
    // Rang intensivligini o'zgartirish
    const pulseIntensity = 0.8 + Math.sin(elapsedTime * 3) * 0.2;
    material.emissiveIntensity = 1.0 + pulseIntensity * 0.5;
    wireframeMat.emissiveIntensity = 0.5 + pulseIntensity * 0.3;
    
    // Yulduzlarni sekin aylantirish
    stars.rotation.y += 0.0001;
    
    // Kontrollarni yangilash (autoRotate uchun)
    controls.update();
    
    renderer.render(scene, camera);
}

animate();

// --- Oyna o'lchami o'zgarganda moslashish ---
window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}