import * as THREE from "./three.module.js"

export default function E09({ x, y, z }, scene) {

    // MATERIALS
    const materialRosa = new THREE.MeshLambertMaterial({ color: 0xFF69B4, side: THREE.DoubleSide });
    const materialVerde = new THREE.MeshLambertMaterial({ color: 0x32CD32, side: THREE.DoubleSide });
    const materialMorado = new THREE.MeshLambertMaterial({ color: 0x4B0082, side: THREE.DoubleSide });
    const materialBlancoOjo = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    const materialNegro = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const materialBocaInterior = new THREE.MeshLambertMaterial({ color: 0xA52A2A, side: THREE.DoubleSide });

    // Panza
    const panza = new THREE.Mesh(new THREE.SphereGeometry(1.5, 40, 10), materialRosa);
    panza.scale.set(1.4, 1.5, 1);
    panza.position.set(0, 1.2, 0);

    // Pantalón
    const pantalon = new THREE.Mesh(new THREE.SphereGeometry(1.3, 30, 30), materialVerde);
    pantalon.scale.set(1.7, 1, 1);
    pantalon.position.set(0, -0.3, 0);

    // Flores short (reutilizamos geometrías)
    function crearFlor(pos, rot) {
        const geometria = new THREE.BoxGeometry(2, 2, 0.3);
        const p1 = new THREE.Mesh(geometria, materialMorado);
        const p2 = new THREE.Mesh(geometria, materialMorado);
        const p3 = new THREE.Mesh(geometria, materialMorado);

        p2.rotation.z = Math.PI / 4;
        p3.rotation.z = Math.PI / 2;

        const flor = new THREE.Group();
        flor.add(p1, p2, p3);
        flor.position.set(...pos);
        flor.rotation.set(...rot);
        flor.scale.set(0.3, 0.3, 0.2);
        return flor;
    }

    const flor1 = crearFlor([-0.9, -0.4, 1.2], [0.1, -0.4, Math.PI / 2]);
    const flor2 = crearFlor([0.7, -0.6, 1.2], [0.3, -3, Math.PI / 2]);
    const flor3 = crearFlor([-0.1, -1, 1.1], [0.5, -0.1, Math.PI / 2]);

    // Cabeza (cono + cilindro + esfera)
    const cabeza = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.99, 3.5, 45, 8, false), materialRosa);
    cabeza.position.set(0, 4.4, 0);
    cabeza.rotation.set(0, 0, 0);

    const esferaCabeza = new THREE.Mesh(new THREE.SphereGeometry(0.24, 40, 20), materialRosa);
    esferaCabeza.position.set(0, 6.1, 0);

    const cono = new THREE.Mesh(new THREE.ConeGeometry(1, 4.15), materialRosa);
    cono.position.set(6, 1600, 0.01); // ¿Revisar esta posición?

    // Ojos
    const ojoIzq = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), materialBlancoOjo);
    ojoIzq.position.set(-0.2, 4.7, 0.3);

    const ojoDer = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), materialBlancoOjo);
    ojoDer.position.set(0.2, 4.7, 0.3);

    const pupilaIzq = new THREE.Mesh(new THREE.SphereGeometry(0.12, 32, 32), materialNegro);
    pupilaIzq.position.set(-0.3, 4.7, 0.5);

    const pupilaDer = new THREE.Mesh(new THREE.SphereGeometry(0.12, 32, 32), materialNegro);
    pupilaDer.position.set(0.3, 4.7, 0.5);

    // Cejas
    const cejaIzq = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.08), materialNegro);
    cejaIzq.position.set(-0.45, 5.2, 0.7);
    cejaIzq.rotation.z = Math.PI / 8;

    const cejaDer = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.08), materialNegro);
    cejaDer.position.set(0.45, 5.2, 0.7);
    cejaDer.rotation.z = -Math.PI / 8;

    // Boca
    const bocaInterior = new THREE.Mesh(
        new THREE.SphereGeometry(0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2),
        materialBocaInterior
    );
    bocaInterior.position.set(0, 3.8, 0.31);
    bocaInterior.rotation.x = Math.PI / 8;

    // Brazos
    const brazoIzq = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.9, 4, 35, 8, false), materialRosa);
    brazoIzq.position.set(-2.3, 1.3, 0);
    brazoIzq.rotation.set(0, 0, Math.PI / 1.5);

    const esferaIzq = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), materialRosa);
    esferaIzq.position.set(-4, 0.5, 0);

    const brazoDer = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.9, 4, 35, 8, false), materialRosa);
    brazoDer.position.set(2.3, 1.3, 0);
    brazoDer.rotation.set(0, 0, -Math.PI / 1.5);

    const esferaDer = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), materialRosa);
    esferaDer.position.set(4, 0.5, 0);

    // Piernas y pies
    const pieIzq = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.6, 3, 32, 8, false), materialRosa);
    pieIzq.position.set(-0.7, -2, 0);
    pieIzq.rotation.set(0, 0, Math.PI / 1.03);

    const esferaPieIzqMesh = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), materialRosa);
    esferaPieIzqMesh.position.set(-0.85, -3.5, 0);

    const pieDer = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.6, 3, 32, 8, false), materialRosa);
    pieDer.position.set(0.7, -2, 0);
    pieDer.rotation.set(0, 0, -Math.PI / 1.03);

    const esferaPieDerMesh = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 32), materialRosa);
    esferaPieDerMesh.position.set(0.85, -3.5, 0);

    // Agrupar todo
    const grupoEscena = new THREE.Group();
    grupoEscena.add(
        pantalon, panza, cono, cabeza, esferaCabeza, ojoIzq, ojoDer,
        pupilaIzq, pupilaDer, cejaIzq, cejaDer, bocaInterior,
        brazoIzq, brazoDer, esferaIzq, esferaDer,
        pieIzq, pieDer, esferaPieIzqMesh, esferaPieDerMesh,
        flor1, flor2, flor3
    );
    grupoEscena.position.set(17, 0.2, 28);

    if (scene) scene.add(grupoEscena); // solo si la escena está definida

    // Contenedor final
    const ESC09 = new THREE.Group();
    ESC09.add(grupoEscena);
    ESC09.position.set(x, y, z);

    return ESC09;
}
