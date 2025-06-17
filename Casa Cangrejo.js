import * as THREE from "./three.module.js"

export default function E07({x,y,z}) {

// TORUS principal 
        var torusGeometry = new THREE.TorusGeometry(4, 0.8, 16, 100, 3.14159);
        var materialTorus = new THREE.MeshLambertMaterial({ color: 0x2c3e50 });
        var torusMesh = new THREE.Mesh(torusGeometry, materialTorus);
        torusMesh.rotation.x = 3.14159;
        torusMesh.position.y = 2;
        torusMesh.castShadow = true;
        //scene.add(torusMesh);

        // Cilindro vertical 
        var mastGeometry = new THREE.CylinderGeometry(0.6, 0.6, 6, 16);
        var materialMastil = new THREE.MeshLambertMaterial({ color: 0x2c3e50 });
        var mastilMesh = new THREE.Mesh(mastGeometry, materialMastil);
        mastilMesh.position.y = 3;
        mastilMesh.castShadow = true;
        //scene.add(mastilMesh);

        // Cilindro horizontal superior (travesaño)
        var crossBeamGeometry = new THREE.CylinderGeometry(0.4, 0.4, 6, 16);
        var materialTravesano = new THREE.MeshLambertMaterial({ color: 0x2c3e50 });
        var travesanoMesh = new THREE.Mesh(crossBeamGeometry, materialTravesano);
        travesanoMesh.rotation.z = 1.5708;
        travesanoMesh.position.y = 5.5;
        travesanoMesh.castShadow = true;
        //scene.add(travesanoMesh);

        // TORUS completo en la parte superior
        var torusTopGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
        var materialTorusSuperior = new THREE.MeshLambertMaterial({ color: 0x2c3e50 });
        var torusSuperiorMesh = new THREE.Mesh(torusTopGeometry, materialTorusSuperior);
        torusSuperiorMesh.position.y = 7;
        torusSuperiorMesh.castShadow = true;
        //scene.add(torusSuperiorMesh);

        // Esfera izquierda del torus superior
        var sphereLeftGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        var materialEsfera = new THREE.MeshLambertMaterial({ color: 0x2c3e50 });
        var esferaIzquierdaMesh = new THREE.Mesh(sphereLeftGeometry, materialEsfera);
        esferaIzquierdaMesh.position.set(-3, 5.5, 0);
        esferaIzquierdaMesh.castShadow = true;
        //scene.add(esferaIzquierdaMesh);

        // Esfera derecha del torus superior
        var sphereRightGeometry = new THREE.SphereGeometry(0.5, 16, 16);
        var esferaDerechaMesh = new THREE.Mesh(sphereRightGeometry, materialEsfera);
        esferaDerechaMesh.position.set(3, 5.5, 0);
        esferaDerechaMesh.castShadow = true;
        //scene.add(esferaDerechaMesh);

        // Casa izquierda - base
        var houseBaseLeftGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        var materialBaseCasa = new THREE.MeshLambertMaterial({ color: 0x2c3e50 });
        var casaIzquierdaMesh = new THREE.Mesh(houseBaseLeftGeometry, materialBaseCasa);
        casaIzquierdaMesh.position.set(-4, 2, 0);
        casaIzquierdaMesh.castShadow = true;
        //scene.add(casaIzquierdaMesh);

        // Techo izquierdo
        var roofLeftGeometry = new THREE.ConeGeometry(1.2, 1, 4);
        var materialTecho = new THREE.MeshLambertMaterial({ color: 0xe74c3c });
        var techoIzquierdoMesh = new THREE.Mesh(roofLeftGeometry, materialTecho);
        techoIzquierdoMesh.position.set(-4, 3.2, 0);
        techoIzquierdoMesh.rotation.y = 0.7854;
        techoIzquierdoMesh.castShadow = true;
        //scene.add(techoIzquierdoMesh);

        // Ventana izquierda
        var windowLeftGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
        var materialVentana = new THREE.MeshLambertMaterial({ color: 0xf39c12 });
        var ventanaIzquierdaMesh = new THREE.Mesh(windowLeftGeometry, materialVentana);
        ventanaIzquierdaMesh.position.set(-4, 2.2, 0.76);
        //scene.add(ventanaIzquierdaMesh);

        // Casa derecha - base
        var houseBaseRightGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        var casaDerechaMesh = new THREE.Mesh(houseBaseRightGeometry, materialBaseCasa);
        casaDerechaMesh.position.set(4, 2, 0);
        casaDerechaMesh.castShadow = true;
        //scene.add(casaDerechaMesh); 

        // Techo derecho
        var roofRightGeometry = new THREE.ConeGeometry(1.2, 1, 4);
        var techoDerechoMesh = new THREE.Mesh(roofRightGeometry, materialTecho);
        techoDerechoMesh.position.set(4, 3.2, 0);
        techoDerechoMesh.rotation.y = 0.7854;
        techoDerechoMesh.castShadow = true;
        //scene.add(techoDerechoMesh); 

        // Ventana derecha
        var windowRightGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
        var ventanaDerechaMesh = new THREE.Mesh(windowRightGeometry, materialVentana);
        ventanaDerechaMesh.position.set(4, 2.2, 0.76);
        //scene.add(ventanaDerechaMesh); 

        // Casa central - base
        var centralHouseGeometry = new THREE.BoxGeometry(2, 2, 2);
        var casaCentralMesh = new THREE.Mesh(centralHouseGeometry, materialBaseCasa);
        casaCentralMesh.position.set(0, -1, 0);
        casaCentralMesh.castShadow = true;
        //scene.add(casaCentralMesh);

        // Puerta central
        var doorGeometry = new THREE.BoxGeometry(0.6, 1.2, 0.1);
        var materialPuerta = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
        var puertaMesh = new THREE.Mesh(doorGeometry, materialPuerta);
        puertaMesh.position.set(0, -1.4, 1.01);
        //scene.add(puertaMesh); 

        // Ventana central frontal izquierda
        var windowFrontLeftGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
        var ventanaFrontalIzquierdaMesh = new THREE.Mesh(windowFrontLeftGeometry, materialVentana);
        ventanaFrontalIzquierdaMesh.position.set(-0.5, -0.7, 1.01);
        //scene.add(ventanaFrontalIzquierdaMesh); 

        // Ventana central frontal derecha
        var windowFrontRightGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
        var ventanaFrontalDerechaMesh = new THREE.Mesh(windowFrontRightGeometry, materialVentana);
        ventanaFrontalDerechaMesh.position.set(0.5, -0.7, 1.01);
        //scene.add(ventanaFrontalDerechaMesh);

        // Barandillas en el travesaño
        var materialBarandilla = new THREE.MeshLambertMaterial({ color: 0xf39c12 });
        
        var rail1Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla1Mesh = new THREE.Mesh(rail1Geometry, materialBarandilla);
        barandilla1Mesh.position.set(-2, 6, 0);
        //scene.add(barandilla1Mesh); 

        var rail2Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla2Mesh = new THREE.Mesh(rail2Geometry, materialBarandilla);
        barandilla2Mesh.position.set(-1.5, 6, 0);
       // scene.add(barandilla2Mesh);

        var rail3Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla3Mesh = new THREE.Mesh(rail3Geometry, materialBarandilla);
        barandilla3Mesh.position.set(-1, 6, 0);
        //scene.add(barandilla3Mesh);

        var rail4Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla4Mesh = new THREE.Mesh(rail4Geometry, materialBarandilla);
        barandilla4Mesh.position.set(-0.5, 6, 0);
        //scene.add(barandilla4Mesh);

        var rail5Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla5Mesh = new THREE.Mesh(rail5Geometry, materialBarandilla);
        barandilla5Mesh.position.set(0, 6, 0);
        //scene.add(barandilla5Mesh);  

        var rail6Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla6Mesh = new THREE.Mesh(rail6Geometry, materialBarandilla);
        barandilla6Mesh.position.set(0.5, 6, 0);
        //scene.add(barandilla6Mesh);

        var rail7Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla7Mesh = new THREE.Mesh(rail7Geometry, materialBarandilla);
        barandilla7Mesh.position.set(1, 6, 0);
        //scene.add(barandilla7Mesh); 

        var rail8Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla8Mesh = new THREE.Mesh(rail8Geometry, materialBarandilla);
        barandilla8Mesh.position.set(1.5, 6, 0);
        //scene.add(barandilla8Mesh); 

        var rail9Geometry = new THREE.BoxGeometry(0.05, 0.8, 0.05);
        var barandilla9Mesh = new THREE.Mesh(rail9Geometry, materialBarandilla);
        barandilla9Mesh.position.set(2, 6, 0);
        //scene.add(barandilla9Mesh); 

        
               const ESC07= new THREE.Group();
               ESC07.add(torusMesh,mastilMesh,travesanoMesh,torusSuperiorMesh,esferaIzquierdaMesh,esferaDerechaMesh,casaIzquierdaMesh,techoIzquierdoMesh,ventanaIzquierdaMesh,casaDerechaMesh,techoDerechoMesh,ventanaDerechaMesh, casaCentralMesh, puertaMesh, ventanaFrontalIzquierdaMesh,barandilla5Mesh, barandilla4Mesh, barandilla3Mesh,ventanaFrontalDerechaMesh,barandilla1Mesh,barandilla2Mesh, barandilla9Mesh, barandilla6Mesh,barandilla7Mesh, barandilla8Mesh);
               ESC07.position.set(x,y,z);
            
               return ESC07;
            }
            
            