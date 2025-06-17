import * as THREE from "./three.module.js"

export default function E013({x, y, z}) {
    // EDIFICIO
    var edif = new THREE.CylinderGeometry(30, 22, 155, 32);
    var materialedif = new THREE.MeshLambertMaterial({ color: 0x5d7199 }); 
    var meshedif = new THREE.Mesh(edif, materialedif);
    meshedif.position.set(0, 65, 0);
    meshedif.receiveShadow = true;

    // Chimenea
    var edif2 = new THREE.CylinderGeometry(5, 12, 155, 32);
    var materialedif2 = new THREE.MeshLambertMaterial({ color: 0x5d7199 }); 
    var meshedif2 = new THREE.Mesh(edif2, materialedif2);
    meshedif2.position.set(0, 105, 0);
    meshedif2.receiveShadow = true;

    var edif3 = new THREE.CylinderGeometry(3, 4, 25, 32);
    var materialedif3 = new THREE.MeshLambertMaterial({ color: 0x5d7199 }); 
    var meshedif3 = new THREE.Mesh(edif3, materialedif3);
    meshedif3.position.set(0, 125, 65);
    meshedif3.receiveShadow = true;

    var edif4 = new THREE.CylinderGeometry(3, 7, 55, 32);
    var materialedif4 = new THREE.MeshLambertMaterial({ color: 0x5d7199 }); 
    var meshedif4 = new THREE.Mesh(edif4, materialedif4);
    meshedif4.position.set(0, 105, 40);
    meshedif4.rotation.x = 1.20;
    meshedif4.receiveShadow = true;

    // Geometría del torus (marco de la ventana)
    var torusVentana = new THREE.TorusGeometry(10, 2.5, 16, 100); 
    var materialTorus = new THREE.MeshLambertMaterial({ color: 0x878cca }); 
    var meshTorus = new THREE.Mesh(torusVentana, materialTorus);
    meshTorus.castShadow = true;
    meshTorus.receiveShadow = true;
    meshTorus.position.set(29, 110, 0); 
    meshTorus.rotation.y = 1.57;

    // Vidrio ventana
    var fondoVentana = new THREE.CylinderGeometry(10, 10, 0.5, 32); 
    var materialFondo = new THREE.MeshLambertMaterial({ color: 0x6699cc }); 
    var meshFondo = new THREE.Mesh(fondoVentana, materialFondo);
    meshFondo.castShadow = true;
    meshFondo.receiveShadow = true;
    meshFondo.position.set(29, 110, 0);
    meshFondo.rotation.z = 1.57;

    // Geometría del torus (marco de la ventana 2)
    var torusVentana2 = new THREE.TorusGeometry(10, 2.5, 86, 100); 
    var materialTorus2 = new THREE.MeshLambertMaterial({ color: 0x878cca}); 
    var meshTorus2 = new THREE.Mesh(torusVentana2, materialTorus2);
    meshTorus2.castShadow = true;
    meshTorus2.receiveShadow = true;
    meshTorus2.position.set(25.5, 55, 5);
    meshTorus2.rotation.y = 1.57;

    // Vidrio ventana 2
    var fondoVentana2 = new THREE.CylinderGeometry(10, 10, 0.5, 32); 
    var materialFondo2 = new THREE.MeshLambertMaterial({ color: 0x6699cc }); 
    var meshFondo2 = new THREE.Mesh(fondoVentana2, materialFondo2);
    meshFondo2.castShadow = true;
    meshFondo2.receiveShadow = true;
    meshFondo2.position.set(25.5, 55, 5);
    meshFondo2.rotation.z = 1.57;

    // Marco de la puerta
    var torusPuerta = new THREE.TorusGeometry(15, 1.5, 16, 100);
    var materialTorusPuerta = new THREE.MeshLambertMaterial({ color: 0xcccccc }); 
    var meshTorusPuerta = new THREE.Mesh(torusPuerta, materialTorusPuerta);
    meshTorusPuerta.castShadow = true;
    meshTorusPuerta.receiveShadow = true;
    meshTorusPuerta.position.set(24, 5, -1);
    meshTorusPuerta.rotation.y = 1.57;

    // Base de la puerta
    var cilindro19 = new THREE.CylinderGeometry(10, 10, 1, 32);
    var material19 = new THREE.MeshLambertMaterial({color: 0xa7a7a7});
    var mesh19 = new THREE.Mesh(cilindro19, material19);
    mesh19.position.set(23, -4, -1);
    mesh19.rotation.x = 1.57;
    mesh19.rotation.z = 1.57;

    // Crear el grupo principal del edificio
    const ESC13 = new THREE.Group();
    
    // Añadir todos los elementos al grupo
    ESC13.add(
        meshedif, 
        meshedif2, 
        meshedif3, 
        meshedif4, 
        meshTorus, 
        meshFondo, 
        meshTorus2, 
        meshFondo2, 
        meshTorusPuerta, 
        mesh19
    );
    
    // Establecer la posición del grupo completo
    ESC13.position.set(x, y, z);
    
    return ESC13;
}
    