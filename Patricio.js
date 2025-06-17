import * as THREE from "./three.module.js"

export default function E01({x,y,z}) {

    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄
    
    //casa patricio

var pat=new THREE.SphereGeometry(60, 60, 101,40);
var material01= new THREE.MeshLambertMaterial({color:0x90586d, side:THREE.DoubleSide});
var mesh01= new THREE.Mesh(pat,material01);
//scene.add(mesh01);
mesh01.position.set(-70,0,0);

//antena

var a1=new THREE.CylinderGeometry(2,2,20,20,10);
var material02= new THREE.MeshLambertMaterial({color:0xc3ba48, side:THREE.Dubleside});
var mesh02= new THREE.Mesh(a1,material02);
//scene.add(mesh02);
mesh02.position.set(-70,65,0);

var a2=new THREE.CylinderGeometry(2,2,60,20,10);
var mesh03= new THREE.Mesh(a2,material02);
//cene.add(mesh03);
mesh03.position.set(-70,75,0);
mesh03.rotation.set(190,270,0);

var a3=new THREE.CylinderGeometry(2,2,20,20,10);
var mesh04= new THREE.Mesh(a3,material02);
//scene.add(mesh04);
mesh04.position.set(-70,75,-10);
mesh04.rotation.set(190,-160,93);

var a4=new THREE.CylinderGeometry(2,2,20,20,10);
var mesh05= new THREE.Mesh(a4,material02);
//scene.add(mesh05);
mesh05.position.set(-70,75,-20);
mesh05.rotation.set(190,-160,90);

var a5=new THREE.CylinderGeometry(2,2,20,20,10);
var mesh06= new THREE.Mesh(a5,material02);
//scene.add(mesh06);
mesh06.position.set(-79,74,22);
mesh06.rotation.set(190,-160,-65);

var a6=new THREE.CylinderGeometry(2,2,20,20,10);
var mesh07= new THREE.Mesh(a6,material02);
//scene.add(mesh07);
mesh07.position.set(-63,74,22);
mesh07.rotation.set(-190,-160,-65);
      
   const ESC01= new THREE.Group();
   ESC01.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07);
   ESC01.position.set(x,y,z);

   return ESC01;
}