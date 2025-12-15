// Data Content
const systemsData = {
    overview: {
        title: "Overview",
        startColor: 0x0056b3, // Blue
        nodes: {
            history: {
                title: "History & Heritage",
                color: 0xff6b6b,
                content: `
                    <h3>Origins (1939-1945)</h3>
                    <p>Started as "Durdans" mansion. Served as primary British military hospital in Ceylon during WWII.</p>
                    <h3>Establishment (1945)</h3>
                    <p>Founded as Ceylon Hospitals Limited by a group of doctors.</p>
                    <h3>Key Milestones</h3>
                    <ul>
                        <li>1999: Established Durdans Heart Centre</li>
                        <li>2003: Listed on Colombo Stock Exchange</li>
                        <li>2014: First JCI Gold Seal Accreditation in Sri Lanka</li>
                        <li>2024: 3rd JCI Re-accreditation</li>
                    </ul>
                `
            },
            management: {
                title: "Management & Leadership",
                color: 0x4ecdc4,
                content: `
                    <h3>Board of Directors</h3>
                    <p>Led by Chairman <strong>Ajith Erandan Tudawe</strong>.</p>
                    <h3>Key Management</h3>
                    <ul>
                        <li>CEO: Dr. Lasantha Karunasekara</li>
                        <li>CFO: Thusitha Rubasinghe</li>
                        <li>COO: Mahanil Perera</li>
                    </ul>
                    <p>Operated by Ceylon Hospitals PLC.</p>
                `
            },
            facilities: {
                title: "Facilities & Services",
                color: 0x45b7d1,
                content: `
                    <h3>Key Centers</h3>
                    <ul>
                        <li>Durdans Heart Centre (Biplane Cath Lab)</li>
                        <li>Critical Care Units (60 beds)</li>
                        <li>Advanced Radiology & Imaging</li>
                        <li>8 Modern Operating Theaters</li>
                    </ul>
                    <h3>Specialties</h3>
                    <p>Cardiology, Neurology, Oncology, Nephrology (Transplants), Orthopaedics, Pediatrics, and more.</p>
                `
            },
            tech: {
                title: "Technology & Innovation",
                color: 0x96ceb4,
                content: `
                    <h3>Medical Tech</h3>
                    <ul>
                        <li><strong>ZEISS KINEVO 900:</strong> Robotic visualization for neurosurgery.</li>
                        <li><strong>WorkMate Claris 2D EP:</strong> Cardiac electrophysiology system.</li>
                        <li><strong>MRI/CT:</strong> Magnetom Avanto 1.5T MRI & Somatom Definition AS CT.</li>
                    </ul>
                    <h3>IT Initiatives</h3>
                    <ul>
                        <li>Microsoft Dynamics 365 CRM</li>
                        <li>Heartbeat Telemedicine App</li>
                        <li>SDWAN Connectivity</li>
                        <li>Online Lab Portal</li>
                    </ul>
                `
            },
            awards: {
                title: "Awards & Accreditations",
                color: 0xea82d0,
                content: `
                    <h3>International Quality</h3>
                    <p><strong>JCI Gold Seal of Approval:</strong> First in Sri Lanka (2014), re-accredited 2024.</p>
                    <p><strong>ISO 15189:2012:</strong> Laboratory accreditation.</p>
                    <h3>Brand Recognition</h3>
                    <p>Rated <strong>AA-</strong> by Brand Finance. Ranked <strong>2nd Most Loved Hospital Brand</strong> (LMD 2025).</p>
                `
            },
            csr: {
                title: "CSR & Community",
                color: 0xffcc5c,
                content: `
                    <h3>Community Initiatives</h3>
                    <ul>
                        <li>Support for the Visually Impaired (White canes, health checks).</li>
                        <li>Breast Cancer Screening Programs.</li>
                        <li>Free Medical Camps (e.g., Eravur).</li>
                    </ul>
                `
            },
            education: {
                title: "Education & Partnerships",
                color: 0xd4a5a5,
                content: `
                    <h3>Amrak Institute</h3>
                    <p>Subsidiary offering healthcare degrees. Partners with <strong>Birmingham City University (UK)</strong>.</p>
                    <h3>Nursing School</h3>
                    <p>State-approved 3-year Diploma in Nursing with guaranteed employment.</p>
                `
            }
        }
    },
    strategy: {
        title: "CEO Strategic Analysis",
        startColor: 0xff4757, // Red
        nodes: {
            vision: {
                title: "Vision & Goals (2025+)",
                color: 0xff6b81,
                content: `
                    <h3>Core Vision</h3>
                    <p>Most trusted healthcare provider delivering patient-centric care.</p>
                    <h3>Strategic Roadmap</h3>
                    <ul>
                        <li><strong>Sustainability:</strong> Financial, Social, Environmental.</li>
                        <li><strong>Medical Tourism:</strong> Regional hub for cardiac and surgical care.</li>
                        <li><strong>Centres of Excellence:</strong> Cardiology, Geriatrics, NCDs.</li>
                    </ul>
                `
            },
            clinical_future: {
                title: "Future: Clinical Growth",
                color: 0x7bed9f,
                content: `
                    <h3>Geriatric Centre of Excellence</h3>
                    <p>Addressing the ageing population (24% over 60 by 2050).</p>
                    <h3>NCD Management Clinics</h3>
                    <p>Subscription-based care for Diabetes, Hypertension, CKD.</p>
                `
            },
            business_future: {
                title: "Future: Business Model",
                color: 0xeccc68,
                content: `
                    <h3>Hub-and-Spoke Model</h3>
                    <p>Smaller centers in Kandy/Galle feeding the Colombo main hub.</p>
                    <h3>Value-Based Packages</h3>
                    <p>Transparent, fixed-price surgical packages for the middle market.</p>
                `
            },
            stop_alter_pricing: {
                title: "STOP: Opaque Pricing",
                color: 0xff6348,
                content: `
                    <h3>Issue: High Cost Experience</h3>
                    <p>Hidden costs erode trust.</p>
                    <h3>Action: Price Certainty</h3>
                    <p>Provide guaranteed estimates upfront for common procedures.</p>
                `
            }
        }
    },
    clinical_tech: {
        title: "Clinical Tech Upgrades",
        startColor: 0x20bf6b, // Green
        nodes: {
            immediate_focus: {
                title: "Immediate Focus",
                color: 0x26de81,
                content: `
                    <h3>Reinforcing Excellence</h3>
                    <p>Investing in cutting-edge equipment to enhance specialized care.</p>
                    <p><strong>Goal:</strong> "Advancing expertise to ensure improved patient outcomes."</p>
                `
            },
            cardiac_ep: {
                title: "WorkMate Claris 2D",
                color: 0xeb3b5a,
                content: `
                    <h3>Cardiac Electrophysiology</h3>
                    <p>Implementation of the <strong>WorkMate Claris 2D EP System</strong>.</p>
                    <p>A cutting-edge innovation for diagnosing and treating heart rhythm disorders.</p>
                `
            },
            vascular_clinic: {
                title: "Vascular Clinic",
                color: 0xf7b731,
                content: `
                    <h3>State-of-the-Art Facility</h3>
                    <p>Launch of a new Vascular Clinic with minimally invasive intervention capabilities.</p>
                    <p>Focus on bringing world-class specialized care locally.</p>
                `
            },
            neuro_theatres: {
                title: "Neuro-Modular Theatres",
                color: 0x4b7bec,
                content: `
                    <h3>Neurosurgery Upgrade</h3>
                    <p>Two brand new modular operating theaters specifically for neurosurgery.</p>
                    <p>Includes dedicated ICU and ward infrastructure.</p>
                `
            }
        }
    },
    digital_trans: {
        title: "Digital Transformation",
        startColor: 0x8854d0, // Purple
        nodes: {
            paperless: {
                title: "Paperless Vision",
                color: 0xa55eea,
                content: `
                    <h3>100% Digital</h3>
                    <p>ICT department goal: Transform IT platform to be completely digitalized and paperless.</p>
                    <p>Improving operational efficiency and reducing waste.</p>
                `
            },
            connectivity: {
                title: "SDWAN & Connectivity",
                color: 0x45aaf2,
                content: `
                    <h3>Island-wide Network</h3>
                    <p>Partnership with <strong>Dialog Enterprise</strong> for secure SDWAN.</p>
                    <p>Connects the entire laboratory network for seamless operations and centralized management.</p>
                `
            },
            doc990: {
                title: "Doc990 Partnership",
                color: 0xfd9644,
                content: `
                    <h3>Patient Access</h3>
                    <p>Partnering with <strong>Doc990</strong> Digital Health Platform.</p>
                    <p>Connects patients to over 1500 doctors for easy booking and access.</p>
                `
            },
            erp_ai: {
                title: "ERP & AI Future",
                color: 0xfeda75,
                content: `
                    <h3>Future Integration</h3>
                    <p><strong>ERP:</strong> Integrated solutions for healthcare management.</p>
                    <p><strong>AI:</strong> focus on data exchange and analytics for real-time insights (Intensivists).</p>
                `
            }
        }
    }
};

// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Orbit Controls (Global)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 5;
controls.maxDistance = 60;

// State
let currentSystem = null; // 'overview' or 'strategy'
let isSystemView = false; // true if zoomed into one system
let activeNodes = [];
let activeLabels = [];
let coreDoubleMeshes = {}; // Store the Universe cores

// Universe Group
const universeGroup = new THREE.Group();
scene.add(universeGroup);

// Solar System Group (for orbiting nodes)
const solarSystemGroup = new THREE.Group();
scene.add(solarSystemGroup);
solarSystemGroup.visible = false;

// Helpers
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const tempV = new THREE.Vector3();

// HTML Elements
const detailPanel = document.getElementById('detail-panel');
const panelTitle = document.getElementById('panel-title');
const panelContent = document.getElementById('panel-content');
const closeBtn = document.getElementById('close-btn');

// --- Initialization: Create Universe Cores ---
function initUniverse() {
    // Keys for the 4 systems
    const keys = ['overview', 'strategy', 'clinical_tech', 'digital_trans'];
    const radius = 12; // Radius of the circle

    keys.forEach((key, index) => {
        // Calculate angle for each system (0, 90, 180, 270 degrees)
        const angle = (index / keys.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        createUniverseCore(key, x, 0, z);
    });

    // Initial Camera Pos - Elevated to see the circle
    camera.position.set(0, 20, 35);
    controls.target.set(0, 0, 0);
}

function createUniverseCore(systemKey, x, y, z) {
    const data = systemsData[systemKey];
    const geometry = new THREE.IcosahedronGeometry(2.2, 2); // Slightly smaller to fit 4
    const material = new THREE.MeshPhongMaterial({
        color: data.startColor,
        emissive: 0x111111,
        shininess: 50,
        flatShading: true
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.userData = { type: 'universe_core', id: systemKey };

    universeGroup.add(mesh);
    coreDoubleMeshes[systemKey] = mesh;

    // Label
    const labelDiv = document.createElement('div');
    labelDiv.className = 'universe-label'; // CSS class added
    labelDiv.innerText = data.title;
    document.body.appendChild(labelDiv);

    activeLabels.push({ element: labelDiv, mesh: mesh, type: 'universe' });
}

// --- Action: Enter a Solar System ---
function enterSystem(systemKey) {
    if (isSystemView) return;
    isSystemView = true;
    currentSystem = systemKey;

    const targetCore = coreDoubleMeshes[systemKey];
    const data = systemsData[systemKey];

    // 1. Hide Universe Group
    gsap.to(universeGroup.scale, {
        duration: 0.5, x: 0, y: 0, z: 0, onComplete: () => {
            universeGroup.visible = false;
        }
    });

    // Hide Universe Labels
    activeLabels.forEach(l => {
        if (l.type === 'universe') l.element.style.display = 'none';
        else l.element.remove(); // Clean up old node labels
    });
    activeLabels = activeLabels.filter(l => l.type === 'universe'); // Keep universe labels in array but hidden

    // 2. Setup Solar System
    // Clear previous nodes
    while (solarSystemGroup.children.length > 0) {
        solarSystemGroup.remove(solarSystemGroup.children[0]);
    }
    activeNodes = [];

    // Create Central Sun for this system
    const sunGeo = new THREE.IcosahedronGeometry(2.5, 2);
    const sunMat = new THREE.MeshPhongMaterial({
        color: data.startColor,
        emissive: 0x222222,
        flatShading: true
    });
    const sunMesh = new THREE.Mesh(sunGeo, sunMat);
    solarSystemGroup.add(sunMesh);

    // Create Orbiting Nodes
    const nodeKeys = Object.keys(data.nodes);
    const orbitRadius = 10;

    nodeKeys.forEach((key, index) => {
        const nodeData = data.nodes[key];
        const angle = (index / nodeKeys.length) * Math.PI * 2;
        const nx = Math.cos(angle) * orbitRadius;
        const nz = Math.sin(angle) * orbitRadius;
        const ny = Math.sin(angle * 2) * 2;

        const geo = new THREE.SphereGeometry(0.8, 32, 32);
        const mat = new THREE.MeshPhongMaterial({ color: nodeData.color });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(nx, ny, nz);
        mesh.userData = { type: 'node', id: key, system: systemKey };

        solarSystemGroup.add(mesh);
        activeNodes.push(mesh);

        // Lines
        const pts = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(nx, ny, nz)];
        const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
        const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.1, transparent: true });
        solarSystemGroup.add(new THREE.Line(lineGeo, lineMat));

        // Labels
        const labelDiv = document.createElement('div');
        labelDiv.className = 'floating-label';
        labelDiv.innerText = nodeData.title;
        labelDiv.style.color = '#' + nodeData.color.toString(16);
        labelDiv.style.borderColor = '#' + nodeData.color.toString(16);
        document.body.appendChild(labelDiv);
        activeLabels.push({ element: labelDiv, mesh: mesh, type: 'node' });
    });

    solarSystemGroup.visible = true;
    solarSystemGroup.scale.set(0, 0, 0);

    // Animation In
    gsap.to(solarSystemGroup.scale, { duration: 1, x: 1, y: 1, z: 1 });

    // Camera Move
    gsap.to(camera.position, { duration: 1.5, x: 0, y: 10, z: 20 });
    controls.target.set(0, 0, 0);

    // Show Back Button via CSS ID
    const backBtn = document.getElementById('back-btn');
    if (!backBtn) {
        createBackButton();
    } else {
        backBtn.style.display = 'block';
    }
}

function createBackButton() {
    const btn = document.createElement('button');
    btn.id = 'back-btn';
    btn.innerText = "← Back to Universe";
    // Styles moved to CSS
    btn.onclick = exitSystem;
    document.body.appendChild(btn);
    // Explicitly set display block just in case
    btn.style.display = 'block';
}

function exitSystem() {
    isSystemView = false;
    currentSystem = null;

    // Hide Detail Panel if open
    detailPanel.classList.add('hidden');

    // Hide Back Button
    const btn = document.getElementById('back-btn');
    if (btn) btn.style.display = 'none';

    // Hide Nodes
    gsap.to(solarSystemGroup.scale, {
        duration: 0.5, x: 0, y: 0, z: 0, onComplete: () => {
            solarSystemGroup.visible = false;
            // Clean up node labels
            activeLabels.forEach(l => {
                if (l.type === 'node') l.element.remove();
            });
            activeLabels = activeLabels.filter(l => l.type === 'universe');

            // Show Universe Labels
            activeLabels.forEach(l => l.element.style.display = 'block');
        }
    });

    // Show Universe
    universeGroup.visible = true;
    gsap.to(universeGroup.scale, { duration: 1, x: 1, y: 1, z: 1 });

    // Reset Camera
    gsap.to(camera.position, { duration: 1.5, x: 0, y: 5, z: 25 });
    controls.target.set(0, 0, 0);
}

// --- Interaction Logic ---
let isDragging = false;
let startX = 0;
let startY = 0;

function onPointerDown(event) {
    isDragging = false;
    startX = event.clientX;
    startY = event.clientY;
}

function onPointerUp(event) {
    // Calculate distance moved
    const moveX = Math.abs(event.clientX - startX);
    const moveY = Math.abs(event.clientY - startY);

    // If moved less than 5 pixels, treat as click
    if (moveX < 5 && moveY < 5) {
        handleInteraction(event.clientX, event.clientY);
    }
}

function handleInteraction(clientX, clientY) {
    if (detailPanel && !detailPanel.classList.contains('hidden') && event.target.closest('#detail-panel')) return; // Ignore panel clicks

    // Robust Coordinate Calculation
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    if (!isSystemView) {
        // Check Universe Cores
        const intersects = raycaster.intersectObjects(universeGroup.children);
        if (intersects.length > 0) {
            const obj = intersects[0].object;
            if (obj.userData.type === 'universe_core') {
                enterSystem(obj.userData.id);
            }
        }
    } else {
        // Check Nodes
        const intersects = raycaster.intersectObjects(activeNodes);
        if (intersects.length > 0) {
            const obj = intersects[0].object;
            showNodeDetail(obj);
        }
    }
}

// Add Pointer Listeners (Works for Mouse & Touch)
window.addEventListener('pointerdown', onPointerDown);
window.addEventListener('pointerup', onPointerUp);


function showNodeDetail(node) {
    const sysData = systemsData[currentSystem];
    const nodeData = sysData.nodes[node.userData.id];

    // Focus Camera
    const targetPos = node.position.clone().multiplyScalar(1.5);
    gsap.to(camera.position, { duration: 1, x: targetPos.x, y: targetPos.y + 1, z: targetPos.z });
    gsap.to(controls.target, { duration: 1, x: node.position.x, y: node.position.y, z: node.position.z });

    // Show Panel
    panelTitle.innerText = nodeData.title;
    panelTitle.style.borderColor = '#' + nodeData.color.toString(16);
    panelContent.innerHTML = nodeData.content;
    detailPanel.classList.remove('hidden');

    // Hide labels temporarily
    activeLabels.forEach(l => { if (l.type === 'node') l.element.style.opacity = '0'; });
}

closeBtn.addEventListener('click', () => {
    detailPanel.classList.add('hidden');
    // Identify active method to reset view? Simpler just to zoom out a bit or re-center
    // Re-center on sun
    gsap.to(camera.position, { duration: 1, x: 0, y: 10, z: 20 });
    gsap.to(controls.target, { duration: 1, x: 0, y: 0, z: 0 });

    activeLabels.forEach(l => { if (l.type === 'node') l.element.style.opacity = '1'; });
});

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Particles
const pGeo = new THREE.BufferGeometry();
const pCount = 800;
const pArr = new Float32Array(pCount * 3);
for (let i = 0; i < pCount * 3; i++) pArr[i] = (Math.random() - 0.5) * 100;
pGeo.setAttribute('position', new THREE.BufferAttribute(pArr, 3));
const pMat = new THREE.PointsMaterial({ size: 0.05, color: 0xffffff, transparent: true, opacity: 0.4 });
scene.add(new THREE.Points(pGeo, pMat));

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Universe Rotation
    if (!isSystemView) {
        universeGroup.rotation.y += 0.001;
        // Pulse Cores
        const scale = 1 + Math.sin(Date.now() * 0.002) * 0.05;
        for (let key in coreDoubleMeshes) coreDoubleMeshes[key].scale.set(scale, scale, scale);
    }
    // Solar System Rotation
    else {
        solarSystemGroup.rotation.y += 0.002;
    }

    controls.update();
    renderer.render(scene, camera);

    // Update Labels
    const isDetailOpen = !detailPanel.classList.contains('hidden');
    activeLabels.forEach(item => {
        if (item.element.style.display === 'none') return;
        if (isDetailOpen && item.type === 'node') return; // Handled by opacity, but just safe check

        item.mesh.updateWorldMatrix(true, false);
        item.mesh.getWorldPosition(tempV);
        tempV.project(camera);

        if (Math.abs(tempV.z) > 1) {
            item.element.style.opacity = '0';
            return;
        } else {
            if (!isDetailOpen) item.element.style.opacity = '1';
        }

        const x = (tempV.x * 0.5 + 0.5) * window.innerWidth;
        const y = (-(tempV.y) * 0.5 + 0.5) * window.innerHeight;

        // REDUCED OFFSET: from 50 (universe) / 35 (nodes) to 0 or negative
        // For universe globes (scale ~3), we need them centered or slightly above.
        // For nodes (scale ~0.8), slightly above.
        // Adjusting Y offset logic:
        // Position Universe labels slightly BELOW the globe (positive offset goes down)
        const yOffset = item.type === 'universe' ? 40 : -20;

        item.element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y + yOffset}px)`;

        // Only apply dynamic z-index to nodes. Universe labels fixed by CSS.
        if (item.type !== 'universe') {
            item.element.style.zIndex = Math.round((1 - tempV.z) * 100);
        }
    });
}

initUniverse();
animate();
