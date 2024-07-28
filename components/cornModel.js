import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function CornModel() {
  const section = document.createElement('section');
  section.innerHTML = `
  <canvas id="three-canvas"></canvas>
  <div class="content">
  <div class="loading">Loading</div>
  <div class="trigger"></div>
  <div class="section">
  <h1>Corn Model</h1>
  <h3>The journey of a corn.</h3>
  <p>Experience the animation.</p>
  <div class="scroll-cta">Scroll</div>
      </div>
      <div class="section right">
      <h2>Watch it grow...</h2>
      </div>
      <div class="ground-container">
      <div class="parallax ground"></div>
      <div class="section right">
      <h2>..except they leave the ground.</h2>
      <p>Saaay what!?.</p>
        </div>
        <div class="section">
          <h2>They grow through the field.</h2>
          <p>For realsies!</p>
        </div>
        <div class="section right">
          <h2>Defying all known farming techniques.</h2>
          <p>It's actual magic!</p>
          <ul class="credits">
          <li>Corn model by <a href="https://poly.google.com/view/8ciDd9k8wha" target="_blank">Google</a></li>
          <li>Animated using <a href="https://greensock.com/scrolltrigger/" target="_blank">GSAP ScrollTrigger</a></li>
          </ul>
          </div>
          <div class="parallax clouds"></div>
      </div>
    </div>
  `;

  initThreeJS();

  return section;
}

function initThreeJS() {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Adding ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
  scene.add(ambientLight);

  // Adding directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Bright white light
  directionalLight.position.set(5, 10, 7.5); // Position the light
  directionalLight.castShadow = true; // Enable shadow casting
  scene.add(directionalLight);

  // GLTFLoader for loading the model
  const loader = new GLTFLoader();
  let model;

  // Function to hide the loading screen
  function hideLoadingScreen() {
    const loadingScreen = document.querySelector('.loading');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
  }

  // Load the model
  loader.load('https://cdn.glitch.global/00f2d644-93e9-43db-b8e5-cac6ced4b897/corn.glb?v=1722166495354', function(gltf) {
    model = gltf.scene;
    model.scale.set(4, 4, 4); // Scale the model
    model.position.set(0, -1.5, 0); // Position the model
    scene.add(model);
    console.log("Model loaded", model); // Debug log to confirm model loading

    // Hide the loading screen
    hideLoadingScreen();

    // GSAP ScrollTrigger animation for model position and rotation
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        scrub: true,
        start: "top top",
        end: "bottom bottom",
        
      }
    });
  
      // Animations for position
      tl.to(model.position, { x: -16, y: -1.5, z: 0, duration: 1, ease: 'power1.inOut' })
        .to(model.position, { x: 2, y: -1.5, z: -2, duration: 1, ease: 'power1.inOut' })
        .to(model.position, { x: -1, y: -1.5, z: -4, duration: 1, ease: 'power1.inOut' })
        .to(model.position, { x: 16, y: -1.5, z: -2, duration: 1, ease: 'power1.inOut' })
        .to(model.position, { x: 0, y: -1.5, z: -12, duration: 1, ease: 'power1.inOut' });
  
      // Animations for rotation
      tl.to(model.rotation, { z: Math.PI * 0.25, duration: 1, ease: 'power1.inOut' }, 0)
        .to(model.rotation, { z: Math.PI * 0.5, duration: 1, ease: 'power1.inOut' }, 1)
        .to(model.rotation, { z: Math.PI * 0.75, duration: 1, ease: 'power1.inOut' }, 2)
        .to(model.rotation, { z: Math.PI, duration: 1, ease: 'power1.inOut' }, 3)
        .to(model.rotation, { z: Math.PI * 1.25, duration: 1, ease: 'power1.inOut' }, 4);
  
      // Micro animations for small rotations and bounces
      gsap.to(model.rotation, {
          x: 0.01,
          y: 0.01,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
      });
  
      gsap.to(model.position, {
          y: "-=0.1",
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
      });
    });
  
    // Initial camera position
    camera.position.set(0, 0, 10);
  
    // Resize handling
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
  
    // Render loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  
    // GSAP ScrollTrigger animation for camera position
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(camera.position, {
      z: 5,
      scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
    });
  }