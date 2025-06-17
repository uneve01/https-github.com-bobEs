import * as THREE from "./three.module.js"

export default function E04({x,y,z}) {
    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

 
   //dona
     var letr=new THREE.TorusGeometry( 20,3.5, 20, 60,10); 
   var material01= new THREE.MeshLambertMaterial({color:0xffffff, side:THREE.DoubleSide});
   var mesh01= new THREE.Mesh(letr,material01);
   //scene.add(mesh01);
   mesh01.position.set(0,9,5)

   var letr1=new THREE.TorusGeometry( 20.5,3.8, 20, 60,0.5); 
   var material02= new THREE.MeshLambertMaterial({color:0xbd0606, side:THREE.DoubleSide});
   var mesh02= new THREE.Mesh(letr1,material02);
   //scene.add(mesh02);
   mesh02.position.set(-0.4,9,5);

   var letr2=new THREE.TorusGeometry( 20.5,3.8, 20, 60,0.5); 
   var mesh03= new THREE.Mesh(letr2,material02);
   //scene.add(mesh03);
   mesh03.position.set(0,8.5,5);
   mesh03.rotation.set(0,0,366);

   var letr3=new THREE.TorusGeometry( 20.5,3.8, 20, 60,0.5); 
   var mesh06= new THREE.Mesh(letr3,material02);
   //scene.add(mesh06);
   mesh06.position.set(0,9.5,5);
   mesh06.rotation.set(0,0,-366);

   var letr4=new THREE.TorusGeometry( 20.5,3.8, 20, 60,0.5); 
   var mesh07= new THREE.Mesh(letr3,material02);
   //scene.add(mesh07);
   mesh07.position.set(0.5,9.5,5);
   mesh07.rotation.set(0,0,-110);

   //letero
 
   var caja=new THREE.BoxGeometry(50,8.5,1,10,10);
   var material03= new THREE.MeshLambertMaterial({color:0x533700, side:THREE.DoubleSide});
   var mesh04= new THREE.Mesh(caja,material03);
    //scene.add(mesh04);
    mesh04.position.set(0,15,9);
    mesh04.rotation.set(0,0,-0.05);

    var caja2=new THREE.BoxGeometry(50,8.5,1,10,10);
    var mesh05= new THREE.Mesh(caja2,material03);
    //scene.add(mesh05);
    mesh05.position.set(0,3.8,9);
    mesh05.rotation.set(0,0,0.05);

    //base

   var pal=new THREE.CylinderGeometry(3,3,40,30);
   var mesh08= new THREE.Mesh(pal,material01);
   //scene.add(mesh08);
   mesh08.position.set(0,-30,4.4);
   mesh08.rotation.set(0,0,-0.06);

   
    
       const ESC04= new THREE.Group();
       ESC04.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08);
       ESC04.position.set(x,y,z);
    
       return ESC04;
    }
    
    