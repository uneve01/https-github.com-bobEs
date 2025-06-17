import * as THREE from "./three.module.js"

export default function E012({x,y,z}) {

 //ESFERA//

var esfera1=new THREE.SphereGeometry(6,25,25,2);
var material06=new THREE.MeshLambertMaterial({color:0xFD42B3,side:THREE.DoubleSide});
var medu=new THREE.Mesh(esfera1,material06);
//scene.add(medu);
medu.position.set(0,15,0);
//cilindro
var cilindro1=new THREE.CylinderGeometry(5.7,7,7,50);
var material08=new THREE.MeshLambertMaterial({color:0xFD42B3,side:THREE.DoubleSide});
var ten=new THREE.Mesh(cilindro1,material08);
//scene.add(ten);
ten.position.set(0,13,0);

//tentaculo1
var cuadro2 = new THREE.BoxGeometry(1.2, 9, 1.2);
var material22 = new THREE.MeshLambertMaterial({color: 0xF5D42B3});
var tac = new THREE.Mesh(cuadro2, material22);
//scene.add(tac);
tac.position.set(3, 8,0);
//tentaculo2
var cuadro3 = new THREE.BoxGeometry(1.2, 9, 1.2);
var material33 = new THREE.MeshLambertMaterial({color: 0xF5D42B3});
var tac2 = new THREE.Mesh(cuadro3, material33);
//scene.add(tac2);
tac2.position.set(0, 9,3);
//tentaculo3
var cuadro4 = new THREE.BoxGeometry(1.2, 9, 1.2);
var material44 = new THREE.MeshLambertMaterial({color: 0xF5D42B3});
var tac4 = new THREE.Mesh(cuadro4, material44);
//scene.add(tac4);
tac4.position.set(-3, 8,0);
//tentaculo4
var cuadro5 = new THREE.BoxGeometry(1.2, 9, 1.2);
var material55 = new THREE.MeshLambertMaterial({color: 0xF5D42B3});
var tac5 = new THREE.Mesh(cuadro5, material55);
//scene.add(tac5);
tac5.position.set(0, 9,-3);
      
//manchas
var esfera2=new THREE.SphereGeometry(1,25,25,2);
var material066=new THREE.MeshLambertMaterial({color:0xF5D42B3,side:THREE.DoubleSide});
var man=new THREE.Mesh(esfera2,material066);
//scene.add(man);
man.position.set(0,20.3,0);

var esfera2=new THREE.SphereGeometry(1,25,25,2);
var material066=new THREE.MeshLambertMaterial({color:0xF5D42B3,side:THREE.DoubleSide});
var man=new THREE.Mesh(esfera2,material066);
//scene.add(man);
man.position.set(-3,19.5,0);

var esfera2=new THREE.SphereGeometry(1,25,25,2);
var material066=new THREE.MeshLambertMaterial({color:0xF5D42B3,side:THREE.DoubleSide});
var man=new THREE.Mesh(esfera2,material066);
//scene.add(man);
man.position.set(0,19.9,2);


    const ESC12= new THREE.Group();
           ESC12.add(medu,tac,tac2,tac4,tac5,man);
           ESC12.position.set(x,y,z);
        
           return ESC12;
        }
        