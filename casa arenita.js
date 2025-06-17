import * as THREE from "./three.module.js"

export default function E011({x,y,z}) {
    var geometry = new THREE.SphereGeometry(150, 32, 32);
    var material = new THREE.MeshLambertMaterial({color: 0x0000ff,
      transparent: true,
      opacity: 0.3
    });
    var sphere = new THREE.Mesh(geometry, material);

    // Nota: RoundedBoxGeometry no es parte de THREE.js core
    // Usando BoxGeometry en su lugar
    var box = new THREE.BoxGeometry(10, 10, 10);
    var material01 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh01 = new THREE.Mesh(box, material01);
    mesh01.position.set(13,15,1);

    var box01 = new THREE.BoxGeometry(10, 10, 10);
    var material02 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh02 = new THREE.Mesh(box01, material02);
    mesh02.position.set(13,17,7);

    var box03 = new THREE.BoxGeometry(10, 10, 10);
    var material03 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh03 = new THREE.Mesh(box03, material03);
    mesh03.position.set(7,17,10);

    var box04 = new THREE.BoxGeometry(10, 10, 10);
    var material04 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh04 = new THREE.Mesh(box04, material04);
    mesh04.position.set(15, 13, 10);

    var box05 = new THREE.BoxGeometry(10, 10, 10);
    var material05 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh05 = new THREE.Mesh(box05, material05);
    mesh05.position.set(-1, 23, 10);

    var box06 = new THREE.BoxGeometry(10, 10, 10);
    var material06 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh06 = new THREE.Mesh(box06, material06);
    mesh06.position.set(1, 14, 10);

    var box07 = new THREE.BoxGeometry(10, 10, 10);
    var material07 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh07 = new THREE.Mesh(box07, material07);
    mesh07.position.set(-4, 12, 4);

    var box08 = new THREE.BoxGeometry(10, 10, 10);
    var material08 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh08 = new THREE.Mesh(box08, material08);
    mesh08.position.set(-4, 18, -5);

    var box09 = new THREE.BoxGeometry(10, 10, 10);
    var material09 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh09 = new THREE.Mesh(box09, material09);
    mesh09.position.set(-3, 10, -5);

    // Corregido: variable duplicada renombrada
    var box09b = new THREE.BoxGeometry(10, 10, 10);
    var material09b = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh09b = new THREE.Mesh(box09b, material09b);
    mesh09b.position.set(3, 25, -8);

    var box10 = new THREE.BoxGeometry(10, 10, 10);
    var material10 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh10 = new THREE.Mesh(box10, material10);
    mesh10.position.set(6, 17, -8);

    var box11 = new THREE.BoxGeometry(10, 10, 10);
    var material11 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh11 = new THREE.Mesh(box11, material11);
    mesh11.position.set(3, 30, -8);

    var box12 = new THREE.BoxGeometry(10, 10, 10);
    var material12 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh12 = new THREE.Mesh(box12, material12);
    mesh12.position.set(13,23,1);

    var box13 = new THREE.BoxGeometry(10, 10, 10);
    var material13 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh13 = new THREE.Mesh(box13, material13);
    mesh13.position.set(10, 27, 10);

    var box14 = new THREE.BoxGeometry(10, 10, 10);
    var material14 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh14 = new THREE.Mesh(box14, material14);
    mesh14.position.set(-6, 20, 1);

    var box15 = new THREE.BoxGeometry(10, 10, 10);
    var material15 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh15 = new THREE.Mesh(box15, material15);
    mesh15.position.set(-6, 29, -1);

    var box16 = new THREE.BoxGeometry(10, 10, 10);
    var material16 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh16 = new THREE.Mesh(box16, material16);
    mesh16.position.set(-6, 29, 5);

    var box17 = new THREE.BoxGeometry(10, 10, 10);
    var material17 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh17 = new THREE.Mesh(box17, material17);
    mesh17.position.set(4, 30, 10);

    var box18 = new THREE.BoxGeometry(10, 10, 10);
    var material18 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh18 = new THREE.Mesh(box18, material18);
    mesh18.position.set(-3, 29, -1);

    var box19 = new THREE.BoxGeometry(10, 10, 10);
    var material19 = new THREE.MeshLambertMaterial({color: 0x87ff00});
    var mesh19 = new THREE.Mesh(box19, material19);
    mesh19.position.set(-3, 39, -1);

    var box20 = new THREE.BoxGeometry(10, 10, 10);
    var material20 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh20 = new THREE.Mesh(box20, material20);
    mesh20.position.set(5, 39, -1);

    var box21 = new THREE.BoxGeometry(10, 10, 10);
    var material21 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh21 = new THREE.Mesh(box21, material21);
    mesh21.position.set(15, 31, -1);

    var box22 = new THREE.BoxGeometry(10, 10, 10);
    var material22 = new THREE.MeshLambertMaterial({color: 0x06d300});
    var mesh22 = new THREE.Mesh(box22, material22);
    mesh22.position.set(7, 39, 7);

    var box23 = new THREE.BoxGeometry(10, 50, 10);
    var material23 = new THREE.MeshLambertMaterial({color: 0x6c2200});
    var mesh23 = new THREE.Mesh(box23, material23);
    mesh23.position.set(5, 10, 1);

    //ACCESO
    var cilindro18 = new THREE.CylinderGeometry(30, 30, 70, 32);
    var materialCilindro18 = new THREE.MeshLambertMaterial({color: 0x0000ff,
      transparent: true,
      opacity: 0.3
    });
    var meshCilindro18 = new THREE.Mesh(cilindro18, materialCilindro18);
    meshCilindro18.position.set(175, -4, -1);
    meshCilindro18.rotation.x = 1.57;
    meshCilindro18.rotation.z = 1.57;

    //PUERTAS
    var cilindro19 = new THREE.CylinderGeometry(30, 30, 3, 32);
    var materialCilindro19 = new THREE.MeshLambertMaterial({color: 0xa7a7a7});
    var meshCilindro19 = new THREE.Mesh(cilindro19, materialCilindro19);
    meshCilindro19.position.set(212, -4, -1);
    meshCilindro19.rotation.x = 1.57;
    meshCilindro19.rotation.z = 1.57;

    var cilindro20 = new THREE.CylinderGeometry(30, 30, 3, 32);
    var materialCilindro20 = new THREE.MeshLambertMaterial({color: 0xa7a7a7});
    var meshCilindro20 = new THREE.Mesh(cilindro20, materialCilindro20);
    meshCilindro20.position.set(149, -4, -1);
    meshCilindro20.rotation.x = 1.57;
    meshCilindro20.rotation.z = 1.57;

    //PALAS
    var box82 = new THREE.BoxGeometry(25, 0.5, 5);
    var material82 = new THREE.MeshLambertMaterial({color: 0xaa3f02});
    var mesh82 = new THREE.Mesh(box82, material82);
    mesh82.position.set(42.5,-5,16);
    mesh82.rotation.y = 1.57;

    var box83 = new THREE.BoxGeometry(25, 0.5, 5);
    var material83 = new THREE.MeshLambertMaterial({color: 0xaa3f02});
    var mesh83 = new THREE.Mesh(box83, material83);
    mesh83.position.set(28, -5, 16); 
    mesh83.rotation.y = 1.57;

    var box84 = new THREE.BoxGeometry(25, 0.5, 5);
    var material84 = new THREE.MeshLambertMaterial({color: 0xaa3f02});
    var mesh84 = new THREE.Mesh(box84, material84);
    mesh84.position.set(35, -6, 16); 
    mesh84.rotation.y = 1.57;
    mesh84.rotation.x = -60;

    var box85 = new THREE.BoxGeometry(25, 0.5, 5);
    var material85 = new THREE.MeshLambertMaterial({color: 0xaa3f02});
    var mesh85 = new THREE.Mesh(box85, material85);
    mesh85.position.set(35, -6, 16); 
    mesh85.rotation.y = 1.57;
    mesh85.rotation.x = 60;

    //RUEDA DEL HAMSTER
    var torus = new THREE.TorusGeometry(20,1,16,20);
    var materialTorus = new THREE.MeshLambertMaterial({color:0x9dadb7});
    var meshTorus = new THREE.Mesh(torus, materialTorus);
    meshTorus.position.set(50,13,-20);

    var torus2 = new THREE.TorusGeometry(20,1,16,20);
    var materialTorus2 = new THREE.MeshLambertMaterial({color:0x9dadb7});
    var meshTorus2 = new THREE.Mesh(torus2, materialTorus2);
    meshTorus2.position.set(50,13,-40);

    var cilindro = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro = new THREE.MeshLambertMaterial({color:0x9dadb7});
    var meshCilindro = new THREE.Mesh(cilindro, materialCilindro);
    meshCilindro.position.set(32, 3, -31);
    meshCilindro.rotation.x = 1.57;

    var cilindro02 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro02 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro02 = new THREE.Mesh(cilindro02, materialCilindro02);
    meshCilindro02.position.set(29, 10, -31);
    meshCilindro02.rotation.x = 1.57;

    var cilindro03 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro03 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro03 = new THREE.Mesh(cilindro03, materialCilindro03);
    meshCilindro03.position.set(29, 17, -31);
    meshCilindro03.rotation.x = 1.57;

    var cilindro04 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro04 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro04 = new THREE.Mesh(cilindro04, materialCilindro04);
    meshCilindro04.position.set(32, 24, -31);
    meshCilindro04.rotation.x = 1.57;

    var cilindro05 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro05 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro05 = new THREE.Mesh(cilindro05, materialCilindro05);
    meshCilindro05.position.set(39, 30, -31);
    meshCilindro05.rotation.x = 1.57;

    var cilindro07 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro07 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro07 = new THREE.Mesh(cilindro07, materialCilindro07);
    meshCilindro07.position.set(48, 33, -31);
    meshCilindro07.rotation.x = 1.57;

    var cilindro08 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro08 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro08 = new THREE.Mesh(cilindro08, materialCilindro08);
    meshCilindro08.position.set(57, 32, -31);
    meshCilindro08.rotation.x = 1.57;

    var cilindro09 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro09 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro09 = new THREE.Mesh(cilindro09, materialCilindro09);
    meshCilindro09.position.set(65, 27, -31);
    meshCilindro09.rotation.x = 1.57;

    var cilindro10 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro10 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro10 = new THREE.Mesh(cilindro10, materialCilindro10);
    meshCilindro10.position.set(70, 20, -31);
    meshCilindro10.rotation.x = 1.57;

    var cilindro11 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro11 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro11 = new THREE.Mesh(cilindro11, materialCilindro11);
    meshCilindro11.position.set(71, 11, -31);
    meshCilindro11.rotation.x = 1.57;

    var cilindro12 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro12 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro12 = new THREE.Mesh(cilindro12, materialCilindro12);
    meshCilindro12.position.set(67, 2, -31);
    meshCilindro12.rotation.x = 1.57;

    var cilindro13 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro13 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro13 = new THREE.Mesh(cilindro13, materialCilindro13);
    meshCilindro13.position.set(60, -4, -31);
    meshCilindro13.rotation.x = 1.57;

    var cilindro14 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro14 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro14 = new THREE.Mesh(cilindro14, materialCilindro14);
    meshCilindro14.position.set(49, -7, -31);
    meshCilindro14.rotation.x = 1.57;

    var cilindro15 = new THREE.CylinderGeometry(0.5, 0.5, 23, 32);
    var materialCilindro15 = new THREE.MeshLambertMaterial({color: 0x9dadb7});
    var meshCilindro15 = new THREE.Mesh(cilindro15, materialCilindro15);
    meshCilindro15.position.set(39, -4, -31);
    meshCilindro15.rotation.x = 1.57;

    const ESC11 = new THREE.Group();
    ESC11.add(
        sphere, mesh01, mesh02, mesh03, mesh04, mesh05, mesh06, mesh07, mesh08, 
        mesh09, mesh09b, mesh10, mesh11, mesh12, mesh13, mesh14, mesh15, mesh16, 
        mesh17, mesh18, mesh19, mesh20, mesh21, mesh22, mesh23, 
        meshCilindro18, meshCilindro19, meshCilindro20,
        mesh82, mesh83, mesh84, mesh85, 
        meshTorus, meshTorus2, meshCilindro, meshCilindro02, meshCilindro03, 
        meshCilindro04, meshCilindro05, meshCilindro07, meshCilindro08, 
        meshCilindro09, meshCilindro10, meshCilindro11, meshCilindro12, 
        meshCilindro13, meshCilindro14, meshCilindro15
    );
    ESC11.position.set(x, y, z);
            
    return ESC11;
}