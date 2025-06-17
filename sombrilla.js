import * as THREE from "./three.module.js"

export default function E014({ x, y, z }, scene) {
    
    // Crear el grupo principal
    const ESC14 = new THREE.Group();
    
    //////////////////////////sombrilla////////////////////////
    
    // Palo de la sombrilla
    const paloGeometry = new THREE.CylinderGeometry(0.05, 0.05, 3, 8);
    const paloMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); 
    const palo = new THREE.Mesh(paloGeometry, paloMaterial);
    palo.position.y = 1.5;
    
    // Grupo para la sombrilla
    const sombrilla = new THREE.Group();
    const colorSombrilla = 0x00BFFF; 
    const materialSombrilla = new THREE.MeshLambertMaterial({ color: colorSombrilla });
    
    // Crear los segmentos de la sombrilla de forma más eficiente
    const numSegmentos = 8;
    for (let i = 0; i < numSegmentos; i++) {
        const segmento = new THREE.Mesh(
            new THREE.ConeGeometry(1, 1.2, 3), 
            materialSombrilla
        );
        segmento.position.y = 3;
        segmento.rotation.y = (i * Math.PI) / 4; // Rotación incremental
        sombrilla.add(segmento);
    }
    
    // Agregar el palo y la sombrilla al grupo principal
    ESC14.add(palo);
    ESC14.add(sombrilla);
    
    // Posicionar el grupo completo
    ESC14.position.set(x, y, z);
    
    // Agregar al scene si se proporciona
    if (scene) {
        scene.add(ESC14);
    }
    
    return ESC14;
}