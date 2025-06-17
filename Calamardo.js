import * as THREE from "./three.module.js"

export default function E02({x,y,z}) {

// 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄
    
    //casa calamardo
   
    //base
    var calamardo=new THREE.CylinderGeometry(35, 65, 180,40);
    var material1= new THREE.MeshLambertMaterial({color:0x0e2f5b, side:THREE.DoubleSide});
    var mesh1= new THREE.Mesh(calamardo,material1);
    //scene.add(mesh1);
    mesh1.position.set(-50,50,-70)
 
    //esquinas casa
 
    var esq1= new THREE.BoxGeometry(50,70,20);
    var material02= new THREE.MeshLambertMaterial({color:0x204964, side:THREE.DoubleSide});
    var mesh02=new THREE.Mesh(esq1,material02);
    //scene.add(mesh02);
    mesh02.position.set(-2,50,-75);
  
 
    var esq2= new THREE.BoxGeometry(50,70,20);
    var material03= new THREE.MeshLambertMaterial({color:0x204964, side:THREE.DoubleSide});
    var mesh03=new THREE.Mesh(esq2,material03);
    //scene.add(mesh03);
    mesh03.position.set(-99,50,-75);
 
 
    //parte frontal
 
    var fren=new THREE.BoxGeometry(80,20,20);
    var material04=new THREE.MeshLambertMaterial({color:0x618eba,side:THREE.DoubleSide});
    var mesh04= new THREE.Mesh(fren,material04);
    //scene.add(mesh04);
    mesh04.position.set(-50,100,-33)
 
    var na=new THREE.ConeGeometry(20,60,40,20);
    var material05=new THREE.MeshLambertMaterial({color:0x5278a1, side:THREE.DoubleSide});
    var mesh05=new THREE.Mesh(na,material05);
    //scene.add(mesh05);
    mesh05.position.set(-50,70,-25);
 
    //ventanas
 
    var vent1=new THREE.CylinderGeometry(15,15,10,40,20);
    var material06=new THREE.MeshLambertMaterial({color:0x76b6df,side:THREE.DoubleSide});
    var mesh06=new THREE.Mesh(vent1,material06);
    //scene.add(mesh06);
    mesh06.rotation.set(190,0,0);
    mesh06.position.set(-25,75,-30);
 
    var vi1=new THREE.CylinderGeometry(10,10,10,40,10);   
    var material07=new THREE.MeshLambertMaterial({color:0xcce1fd,side:THREE.DoubleSide});
    var mesh07=new THREE.Mesh(vi1,material07);
    //scene.add(mesh07);
    mesh07.rotation.set(190,0,0);
    mesh07.position.set(-25,75,-29);
 
    var tor1=new THREE.CylinderGeometry(1,1,2,40,1);
    var material08=new THREE.MeshLambertMaterial({color:0x338bff,side:THREE.DoubleSide});
    var mesh08=new THREE.Mesh(tor1,material08);
    //scene.add(mesh08);
    mesh08.rotation.set(190,0,0);
    mesh08.position.set(-25,87,-26);
 
    var tor2=new THREE.CylinderGeometry(1,1,2,40,1);
    var mesh09=new THREE.Mesh(tor2,material08);
    //scene.add(mesh09);
    mesh09.rotation.set(190,0,0);
    mesh09.position.set(-25,63,-24);
 
    var tor3=new THREE.CylinderGeometry(1,1,2,40,1);
    var mesh10=new THREE.Mesh(tor3,material08);
    //scene.add(mesh10);
    mesh10.rotation.set(190,0,0);
    mesh10.position.set(-37,75,-25);
 
    var tor4=new THREE.CylinderGeometry(1,1,2,40,1);
    var mesh11=new THREE.Mesh(tor4,material08);
    //scene.add(mesh11);
    mesh11.rotation.set(190,0,0);
    mesh11.position.set(-13,75,-25);
 
    var tor5=new THREE.CylinderGeometry(1,1,2,40,1);
    var mesh12=new THREE.Mesh(tor5,material08);
    //scene.add(mesh12);
    mesh12.rotation.set(190,0,0);
    mesh12.position.set(-35,83,-26);
 
    var tor6=new THREE.CylinderGeometry(1,1,2,40,1);
    var mesh13=new THREE.Mesh(tor6,material08);
    //scene.add(mesh13);
    mesh13.rotation.set(190,0,0);
    mesh13.position.set(-34,67,-25);
 
    var tor7=new THREE.CylinderGeometry(1,1,2,40,1);
    var mesh14=new THREE.Mesh(tor7,material08);
    //scene.add(mesh14);
    mesh14.rotation.set(190,0,0);
    mesh14.position.set(-15,67,-25);
 
    var tor8=new THREE.CylinderGeometry(1,1,2,40,1);
    var mesh15=new THREE.Mesh(tor8,material08);
    //scene.add(mesh15);
    mesh15.rotation.set(190,0,0);
    mesh15.position.set(-15,83,-26);
 
    var ventana1=new THREE.Group();
    ventana1.add(mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15);
    //scene.add(ventana1);
    ventana1.position.set(0,0,0)
    
    var ventana2=ventana1.clone();
    //scene.add(ventana2);
   ventana2.position.set(-50,0,0)
 
   //puerta
 
    var pue=new   THREE.BoxGeometry(31,47,3,50,100);
    var material16= new THREE.MeshLambertMaterial({color:0x60340e, side:THREE.DoubleSide});
    var mesh16= new THREE.Mesh(pue,material16);
    //scene.add(mesh16);
    mesh16.position.set(-48,-18,-6.7);
    
  
 
    //picaporte
 
    var pic=new THREE.SphereGeometry(1,19,20);
    var material18=new THREE.MeshLambertMaterial({color:0xddd64e, side:THREE.DoubleSide});
    var mesh18=new THREE.Mesh(pic,material18);
    //scene.add(mesh18);
    mesh18.position.set(-36,-18,-4);
 

const ESC02= new THREE.Group();
   ESC02.add(mesh1,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh18,ventana1,ventana2);
   ESC02.position.set(x,y,z);

   return ESC02;
}