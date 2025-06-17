import * as THREE from "./three.module.js"

export default function E08({x,y,z}) {

     //AGARRADERA
     var letr=new THREE.TorusGeometry(50,3, 20, 60,3.2); 
   var material01= new THREE.MeshLambertMaterial({color:0xffffff, side:THREE.DoubleSide});
   var mesh03= new THREE.Mesh(letr,material01);
   //scene.add(mesh03);
   mesh03.position.set(0,18,7)

   var pal=new THREE.CylinderGeometry(8,8,4,30);
    var material01= new THREE.MeshLambertMaterial({color:0x3779e4, side:THREE.DoubleSide});
   var mesh04= new THREE.Mesh(pal,material01);
  //scene.add(mesh04);
   mesh04.position.set(51,15,6);
   mesh04.rotation.set(-30,0,190);

   var pal2=new THREE.CylinderGeometry(6,6,2,30);
    var material01= new THREE.MeshLambertMaterial({color:0x111111, side:THREE.DoubleSide});
   var mesh05= new THREE.Mesh(pal2,material01);
 // scene.add(mesh05);
   mesh05.position.set(54,15,6);
   mesh05.rotation.set(-30,0,190);


   var pal3=new THREE.CylinderGeometry(8,8,4,30);
    var material01= new THREE.MeshLambertMaterial({color:0x3779e4, side:THREE.DoubleSide});
   var mesh06= new THREE.Mesh(pal3,material01);
  //scene.add(mesh06);
   mesh06.position.set(-51.3,15,6);
   mesh06.rotation.set(-30,0,190);

   var pal4=new THREE.CylinderGeometry(6,6,2,30);
    var material01= new THREE.MeshLambertMaterial({color:0x111111, side:THREE.DoubleSide});
   var mesh07= new THREE.Mesh(pal4,material01);
  //scene.add(mesh07);
   mesh07.position.set(-54,15,6);
   mesh07.rotation.set(-30,0,190);


//base

    var pal5=new THREE.CylinderGeometry(50,35,100,30);
    var material02= new THREE.MeshLambertMaterial({color:0x65b7f0, side:THREE.DoubleSide});
   var mesh08= new THREE.Mesh(pal5,material02);
   //scene.add(mesh08);
   mesh08.position.set(0,-28,4.4);

   
    var pal6=new THREE.CylinderGeometry(52,52,3,30);
    var material03= new THREE.MeshLambertMaterial({color:0x02307b, side:THREE.DoubleSide});
   var mesh09= new THREE.Mesh(pal6,material03);
   //scene.add(mesh09);
   mesh09.position.set(0,21,4.4);

   var pal7=new THREE.CylinderGeometry(38,38,2,30);
   var material04= new THREE.MeshLambertMaterial({color:0x02307b, side:THREE.DoubleSide});
   var mesh10= new THREE.Mesh(pal7,material04);
   //scene.add(mesh10);
   mesh10.position.set(0,-80,4.4);

   //puerta

var puerta = new THREE.BoxGeometry(30, 35, 4);
var materialPuerta = new THREE.MeshLambertMaterial({ color: 0x8b5a2b });
var meshPuerta = new THREE.Mesh(puerta, materialPuerta);
//scene.add(meshPuerta);
meshPuerta.position.set(0, -60, 45);
 meshPuerta.rotation.set(0.1,0,0);

var pal8=new THREE.CylinderGeometry(4,4,2,40);
   var material05= new THREE.MeshLambertMaterial({color:0x89d3fa, side:THREE.DoubleSide});
   var mesh11= new THREE.Mesh(pal8,material05);
   //scene.add(mesh11);
   mesh11.position.set(-7,-52,50);
     mesh11.rotation.set(0,190,190);

     var pal9=new THREE.CylinderGeometry(4,4,2,40);
   var material06= new THREE.MeshLambertMaterial({color:0x89d3fa, side:THREE.DoubleSide});
   var mesh12= new THREE.Mesh(pal9,material06);
   //scene.add(mesh12);
   mesh12.position.set(7,-52,50);
     mesh12.rotation.set(0,190,190);


//mano

var pal10=new THREE.CylinderGeometry(7,7,23,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh13= new THREE.Mesh(pal10,material07);
   //scene.add(mesh13);
   mesh13.position.set(-18,59,15);

   var pal11=new THREE.CylinderGeometry(7,7,23,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh14= new THREE.Mesh(pal11,material07);
  // scene.add(mesh14);
   mesh14.position.set(-3.8,59,15);
   
     var pal12=new THREE.CylinderGeometry(7,7,23,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh15= new THREE.Mesh(pal12,material07);
   //scene.add(mesh15);
   mesh15.position.set(10.7,59,15);

    var pal13=new THREE.CylinderGeometry(7,7,23,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh16= new THREE.Mesh(pal13,material07);
   //scene.add(mesh16);
   mesh16.position.set(25,59,15);

    var pal14=new THREE.CylinderGeometry(7,7,30,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh17= new THREE.Mesh(pal14,material07);
   //scene.add(mesh17);
   mesh17.position.set(-18,54.5,2);
   mesh17.rotation.set(-20.4,0,0);

   var pal15=new THREE.CylinderGeometry(7,7,30,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh18= new THREE.Mesh(pal15,material07);
   //scene.add(mesh18);
   mesh18.position.set(-3,54.5,2);
   mesh18.rotation.set(-20.4,0,0);
   
   var pal16=new THREE.CylinderGeometry(7,7,30,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh19= new THREE.Mesh(pal16,material07);
   //scene.add(mesh19);
   mesh19.position.set(10.7,54.5,2);
   mesh19.rotation.set(-20.4,0,0);

   var pal17=new THREE.CylinderGeometry(7,7,30,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh20= new THREE.Mesh(pal17,material07);
   //scene.add(mesh20);
   mesh20.position.set(25,54.5,2);
   mesh20.rotation.set(-20.4,0,0);

   var pal18=new THREE.CylinderGeometry(7,7,33,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh21= new THREE.Mesh(pal18,material07);
   //scene.add(mesh21);
   mesh21.position.set(16,76,27);
   mesh21.rotation.set(0,0,-20.4);
    
   var pal19=new THREE.SphereGeometry(7,33,33,60);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh22= new THREE.Mesh(pal19,material07);
   //scene.add(mesh22);
   mesh22.position.set(-18,72,15);
   mesh22.rotation.set(0,0,-20.4);

    var pal20=new THREE.SphereGeometry(7,33,33,60);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh23= new THREE.Mesh(pal20,material07);
   //scene.add(mesh23);
   mesh23.position.set(-4,72,15);
   mesh23.rotation.set(0,0,-20.4);

    var pal21=new THREE.SphereGeometry(7,33,33,60);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh24= new THREE.Mesh(pal21,material07);
   //scene.add(mesh24);
   mesh24.position.set(10.7,72,15);
   mesh24.rotation.set(0,0,-20.4);

   
    var pal22=new THREE.SphereGeometry(7,33,33,60);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh25= new THREE.Mesh(pal22,material07);
   //scene.add(mesh25);
   mesh25.position.set(25,72,15);

   
    var pal23=new THREE.SphereGeometry(6.8,33,33,60);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh26= new THREE.Mesh(pal23,material07);
   //scene.add(mesh26);
   mesh26.position.set(1,76,27);
   mesh26.rotation.set(0,-20.4,0);

    var pal24=new THREE.CylinderGeometry(7,7,33,30);
    var material07= new THREE.MeshLambertMaterial({color:0x0a31a9, side:THREE.DoubleSide});
   var mesh27= new THREE.Mesh(pal24,material07);
   //scene.add(mesh27);
   mesh27.position.set(27,77,11);
  mesh27.rotation.set(-20.4,0,0);

   var pal25 = new THREE.BoxGeometry(54.4, 50, 20);
var material07 = new THREE.MeshLambertMaterial({ color: 0x0a31a9 });
var mesh28 = new THREE.Mesh(pal25, material07);
//scene.add(mesh28);
mesh28.position.set(3, 72, -7);

 var pal26 = new THREE.BoxGeometry(57, 6,25, 20);
var material07 = new THREE.MeshLambertMaterial({ color: 0x0a31a9 });
var mesh29 = new THREE.Mesh(pal26, material07);
//scene.add(mesh29);
mesh29.position.set(3, 100, -7);
  
   

const ESC06= new THREE.Group();
   ESC06.add(mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29,meshPuerta);
   ESC06.position.set(x,y,z);

   return ESC06;
}
   


