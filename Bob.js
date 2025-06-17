import * as THREE from "./three.module.js"

export default function E03({x,y,z}) {

          // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄

    //casa bob
   var bob=new THREE.SphereGeometry(80, 80, 75,190);
   var material01= new THREE.MeshLambertMaterial({color:0xe1a32f, side:THREE.DoubleSide});
   var mesh01= new THREE.Mesh(bob,material01);
   //scene.add(mesh01);
   mesh01.position.set(155,40,-65)

   var bob1= new THREE.CylinderGeometry(55,75,60,20);
   var mesh02= new THREE.Mesh(bob1,material01);
   //scene.add(mesh02);
   mesh02.position.set(155,100,-65)

   var bob2= new THREE.CylinderGeometry(75,55,60,20);
   var mesh03= new THREE.Mesh(bob2,material01);
   //scene.add(mesh03);
   mesh03.position.set(155,-20,-65)

   //plantas

   var p1=new THREE.ConeGeometry(20,60,20,10)
   var material02=new THREE.MeshLambertMaterial({color:0x5c9121, side:THREE.DoubleSide});
   var mesh04= new THREE.Mesh(p1,material02);
   //scene.add(mesh04);
   mesh04.position.set(160,160,-70);

   var p2=new THREE.ConeGeometry(20,60,20,10)
   var material03=new THREE.MeshLambertMaterial({color:0x366723, side:THREE.DoubleSide});
   var mesh05= new THREE.Mesh(p2,material03);
   //scene.add(mesh05);
   mesh05.position.set(140,160,-70);

   var p3=new THREE.ConeGeometry(20,60,20,10)
   var material04=new THREE.MeshLambertMaterial({color:0x1b4212, side:THREE.DoubleSide});
   var mesh06= new THREE.Mesh(p3,material04);
   //scene.add(mesh06);
   mesh06.position.set(180,160,-70);

   var p4=new THREE.ConeGeometry(20,60,20,10)
   var mesh07= new THREE.Mesh(p4,material02);
   //scene.add(mesh07);
   mesh07.position.set(195,160,-70);
   mesh07.rotation.set(0,205,0);

   var p5=new THREE.ConeGeometry(20,60,20,10)
   var mesh08= new THREE.Mesh(p5,material02);
  // scene.add(mesh08);
   mesh08.position.set(120,160,-70);

   var p6=new THREE.ConeGeometry(20,60,20,10)
   var mesh09= new THREE.Mesh(p6,material04);
   //scene.add(mesh09);
   mesh09.position.set(180,160,-70);

   var p7=new THREE.ConeGeometry(20,60,20,10)
   var mesh10= new THREE.Mesh(p7,material04);
  // scene.add(mesh10);
   mesh10.position.set(130,160,-40);

   var p8=new THREE.ConeGeometry(20,60,20,10)
   var mesh11= new THREE.Mesh(p8,material02);
   //scene.add(mesh11);
   mesh11.position.set(150,160,-40);

   
  var p9=new THREE.ConeGeometry(20,60,20,10)
   var mesh12= new THREE.Mesh(p9,material03);
   //scene.add(mesh12);
   mesh12.position.set(160,160,-20);

   var p10=new THREE.ConeGeometry(20,60,20,10)
   var mesh13= new THREE.Mesh(p10,material04);
   //scene.add(mesh13);
   mesh13.position.set(150,160,-100);

   var p11=new THREE.ConeGeometry(20,60,20,10)
   var mesh14= new THREE.Mesh(p11,material03);
   //scene.add(mesh14);
   mesh14.position.set(180,160,-100);

   var p12=new THREE.ConeGeometry(20,60,20,10)
   var mesh15= new THREE.Mesh(p12,material02);
   //scene.add(mesh15);
   mesh15.position.set(185,160,-40);


   var p13=new THREE.ConeGeometry(20,60,20,10)
   var mesh16= new THREE.Mesh(p13,material02);
   //scene.add(mesh16);
   mesh16.position.set(130,160,-100);


   //ventanas

   var vent1=new THREE.CylinderGeometry(15,15,10,40,20);
   var material06=new THREE.MeshLambertMaterial({color:0x76b6df,side:THREE.DoubleSide});
   var mesh17=new THREE.Mesh(vent1,material06);
   //scene.add(mesh17);
   mesh17.rotation.set(190,0,0);
   mesh17.position.set(-25,75,-30);

   var vi1=new THREE.CylinderGeometry(10,10,10,40,10);   
   var material07=new THREE.MeshLambertMaterial({color:0xcce1fd,side:THREE.DoubleSide});
   var mesh18=new THREE.Mesh(vi1,material07);
   //scene.add(mesh18);
   mesh18.rotation.set(190,0,0);
   mesh18.position.set(-25,75,-29);

   var tor1=new THREE.CylinderGeometry(1,1,2,40,1);
   var material08=new THREE.MeshLambertMaterial({color:0x338bff,side:THREE.DoubleSide});
   var mesh19=new THREE.Mesh(tor1,material08);
   //scene.add(mesh19);
   mesh19.rotation.set(190,0,0);
   mesh19.position.set(-25,87,-26);

   var tor2=new THREE.CylinderGeometry(1,1,2,40,1);
   var mesh20=new THREE.Mesh(tor2,material08);
   //scene.add(mesh20);
   mesh20.rotation.set(190,0,0);
   mesh20.position.set(-25,63,-24);

   var tor3=new THREE.CylinderGeometry(1,1,2,40,1);
   var mesh21=new THREE.Mesh(tor3,material08);
   //scene.add(mesh21);
   mesh21.rotation.set(190,0,0);
   mesh21.position.set(-37,75,-25);

   var tor4=new THREE.CylinderGeometry(1,1,2,40,1);
   var mesh22=new THREE.Mesh(tor4,material08);
   //scene.add(mesh22);
   mesh22.rotation.set(190,0,0);
   mesh22.position.set(-13,75,-25);

   var tor5=new THREE.CylinderGeometry(1,1,2,40,1);
   var mesh23=new THREE.Mesh(tor5,material08);
   //scene.add(mesh23);
   mesh23.rotation.set(190,0,0);
   mesh23.position.set(-35,83,-26);

   var tor6=new THREE.CylinderGeometry(1,1,2,40,1);
   var mesh24=new THREE.Mesh(tor6,material08);
   //scene.add(mesh24);
   mesh24.rotation.set(190,0,0);
   mesh24.position.set(-34,67,-25);

   var tor7=new THREE.CylinderGeometry(1,1,2,40,1);
   var mesh25=new THREE.Mesh(tor7,material08);
   //scene.add(mesh25);
   mesh25.rotation.set(190,0,0);
   mesh25.position.set(-15,67,-25);

   var tor8=new THREE.CylinderGeometry(1,1,2,40,1);
   var mesh26=new THREE.Mesh(tor8,material08);
   //scene.add(mesh26);
   mesh26.rotation.set(190,0,0);
   mesh26.position.set(-15,83,-26);

   var ventana3=new THREE.Group();
   ventana3.add(mesh17,mesh18,mesh19,mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26);
   //scene.add(ventana1);
   ventana3.position.set(140,20,35);

   var ventana4=ventana3.clone();
   //scene.add(ventana2);
  ventana4.position.set(220,-5,40)

   //puerta

   var pue=new THREE.BoxGeometry(31,47,3,50,100);
   var material16= new THREE.MeshLambertMaterial({color:0x546aa7, side:THREE.DoubleSide});
   var mesh27= new THREE.Mesh(pue,material16);
   //scene.add(mesh27);
   mesh27.position.set(160,10,15);

   //picaporte

   var pic=new THREE.SphereGeometry(2,19,20);
   var material28=new THREE.MeshLambertMaterial({color:0xddd64e, side:THREE.DoubleSide});
   var mesh28=new THREE.Mesh(pic,material28);
   //scene.add(mesh28);
   mesh28.position.set(150,-18,8);


   const ESC03= new THREE.Group();
   ESC03.add(ventana4,ventana3,mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh16,mesh27,mesh28);
   ESC03.position.set(x,y,z);

   return ESC03;
}



  

      