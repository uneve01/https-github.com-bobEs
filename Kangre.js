import * as THREE from "./three.module.js"

export default function E05({x,y,z}) {

    
    // 🪄🪄 SECCIÓN DE CÓDIGO 🪄🪄
     
    //pan

   var pan1=new THREE.SphereGeometry(6,30,30,2);
   var material01= new THREE.MeshLambertMaterial({color:0xd9ac57, side:THREE.DoubleSide});
   var mesh01= new THREE.Mesh(pan1,material01);
   //scene.add(mesh01);
   mesh01.position.set(0,5,0);
   
   var pan2=new THREE.CylinderGeometry(6,5,2,30);
   var mesh02= new THREE.Mesh(pan2,material01);
   //scene.add(mesh02);
   mesh02.position.set(0,0,0);

   var pan3=new THREE.CylinderGeometry(5,6,2,30);
   var mesh08= new THREE.Mesh(pan3,material01);
  // scene.add(mesh08);
   mesh08.position.set(0,6.4,0);

   var panes= new THREE.Group();
    panes.add(mesh01,mesh02,mesh08);
   // scene.add(panes);

   //carne

   var car=new THREE.CylinderGeometry(6.4,6.1,1.4,30);
   var material02= new THREE.MeshLambertMaterial({color:0x902d30, side:THREE.DoubleSide});
   var mesh03= new THREE.Mesh(car,material02);
   //scene.add(mesh03);
   mesh03.position.set(0,1.8,0);

    var car1=new THREE.CylinderGeometry(6.4,6.4,1.4,30);
   var material04= new THREE.MeshLambertMaterial({color:0x902d30, side:THREE.DoubleSide});
   var mesh05= new THREE.Mesh(car1,material04);
   //scene.add(mesh05);
   mesh05.position.set(0,3.6,0);

   var carnes= new THREE.Group();
    carnes.add(mesh03,mesh05);
   // scene.add(carnes);

   //queso
   var que=new THREE.BoxGeometry(12,.3,12);
   var material03= new THREE.MeshLambertMaterial({color:0xfff501, side:THREE.DoubleSide});
   var mesh04= new THREE.Mesh(que,material03);
  // scene.add(mesh04);
   mesh04.position.set(0,2.7,0);
   mesh04.rotation.set(0,1,0)

    var queso= new THREE.Group();
    queso.add(mesh04);
   // scene.add(queso);

  

    //jitomates
   var jit=new THREE.CylinderGeometry(4,4,.8,30);
   var material05= new THREE.MeshLambertMaterial({color:0xb52b02, side:THREE.DoubleSide});
   var mesh45= new THREE.Mesh(jit,material05);
   //scene.add(mesh45);
   mesh45.position.set(2.4,4.7,2.8);

   var jit2=new THREE.CylinderGeometry(4,4,.8,30);
   var mesh46= new THREE.Mesh(jit2,material05);
   //scene.add(mesh46);
   mesh46.position.set(-2.5,4.7,2.8);

   var jit2=new THREE.CylinderGeometry(4.2,4.2,.8,30);
   var mesh47= new THREE.Mesh(jit2,material05);
   //scene.add(mesh47);
   mesh47.position.set(-2.4,4.7,-2.2);

   var jit2=new THREE.CylinderGeometry(4.2,4.2,.8,30);
   var mesh48= new THREE.Mesh(jit2,material05);
   //scene.add(mesh48);
   mesh48.position.set(2.8,4.7,-2.2);

   var jitomates= new THREE.Group();
    jitomates.add(mesh45,mesh46,mesh47,mesh48);
   // scene.add(jitomates);

   //lechuga

   var que=new THREE.BoxGeometry(12.5,.3,12.5);
   var material06= new THREE.MeshLambertMaterial({color:0x86f24b, side:THREE.DoubleSide});
   var mesh07= new THREE.Mesh(que,material06);
   // scene.add(mesh07);
   mesh07.position.set(-0.4,5.3,0);
   mesh07.rotation.set(0,.4,0)

    var le1=new THREE.CylinderGeometry(3,3,.3,30);
   var mesh10= new THREE.Mesh(le1,material06);
   //scene.add(mesh10);
   mesh10.position.set(-3.2,5.3,5);

   var le2=new THREE.CylinderGeometry(3,3,.3,30);
   var mesh11= new THREE.Mesh(le2,material06);
   //scene.add(mesh11);
   mesh11.position.set(1,5.3,4.4);

   var le3=new THREE.CylinderGeometry(3,3,.3,30);
   var mesh12= new THREE.Mesh(le3,material06);
   //scene.add(mesh12);
   mesh12.position.set(4,5.3,3.6);

   var le4=new THREE.CylinderGeometry(3,3,.3,30);
   var mesh13= new THREE.Mesh(le4,material06);
   //scene.add(mesh13);
   mesh13.position.set(5.4,5.3,-1);

   var le5=new THREE.CylinderGeometry(3,3,.3,30);
   var mesh14= new THREE.Mesh(le5,material06);
   //scene.add(mesh14);
   mesh14.position.set(4,5.3,-4);

   var le6=new THREE.CylinderGeometry(3,3,.3,30);
   var mesh15= new THREE.Mesh(le6,material06);
   //scene.add(mesh15);
   mesh15.position.set(-1,5.3,-5);

   var le7=new THREE.CylinderGeometry(3,3,.3,30);
   var mesh17= new THREE.Mesh(le6,material06);
   //scene.add(mesh17);
   mesh17.position.set(-5,5.3,-3);

   var le8=new THREE.CylinderGeometry(3,3,.3,30);
   var mesh18= new THREE.Mesh(le8,material06);
   //scene.add(mesh18);
   mesh18.position.set(-5.5,5.3,1);

   var lechuga= new THREE.Group();
    lechuga.add(mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,mesh17,mesh18);
   // scene.add(lechuga);

//semilla

 var sem1=new THREE.SphereGeometry(.2,30,30,2);
   var material10= new THREE.MeshLambertMaterial({color:0xddd8a8, side:THREE.DoubleSide});
   var mesh20= new THREE.Mesh(sem1,material10);
   //scene.add(mesh20);
   mesh20.position.set(0,10.99,0);

 var sem2=new THREE.SphereGeometry(.2,30,30,2);
   var mesh21= new THREE.Mesh(sem2,material10);
   //scene.add(mesh21);
   mesh21.position.set(3,10.19,0);

   var sem3=new THREE.SphereGeometry(.2,30,30,2);
   var mesh22= new THREE.Mesh(sem3,material10);
   //scene.add(mesh22);
   mesh22.position.set(-3,10.19,0);

   var sem4=new THREE.SphereGeometry(.2,30,30,2);
   var mesh23= new THREE.Mesh(sem4,material10);
   //scene.add(mesh23);
   mesh23.position.set(-1.5,10.4,-2);

   var sem5=new THREE.SphereGeometry(.2,30,30,2);
   var mesh24= new THREE.Mesh(sem5,material10);
   //scene.add(mesh24);
   mesh24.position.set(1.5,10.4,-2);

   var sem6=new THREE.SphereGeometry(.2,30,30,2);
   var mesh25= new THREE.Mesh(sem6,material10);
   //scene.add(mesh25);
   mesh25.position.set(-1.5,10.4,2);

   var sem7=new THREE.SphereGeometry(.2,30,30,2);
   var mesh26= new THREE.Mesh(sem7,material10);
   //scene.add(mesh26);
   mesh26.position.set(1.5,10.39,2);

   var sem8=new THREE.SphereGeometry(.2,30,30,2);
   var mesh27= new THREE.Mesh(sem8,material10);
   //scene.add(mesh27);
   mesh27.position.set(0,9.4,4);

   var sem9=new THREE.SphereGeometry(.2,30,30,2);
   var mesh28= new THREE.Mesh(sem9,material10);
   //scene.add(mesh28);
   mesh28.position.set(-3.6,9.4,1.8);

   var sem10=new THREE.SphereGeometry(.2,30,30,2);
   var mesh29= new THREE.Mesh(sem10,material10);
   //scene.add(mesh29);
   mesh29.position.set(3.6,9.4,1.8);

   var sem11=new THREE.SphereGeometry(.2,30,30,2);
   var mesh30= new THREE.Mesh(sem9,material10);
   //scene.add(mesh30);
   mesh30.position.set(-3.6,9.4,-1.8);

   var sem12=new THREE.SphereGeometry(.2,30,30,2);
   var mesh31= new THREE.Mesh(sem10,material10);
   //scene.add(mesh31);
   mesh31.position.set(3.6,9.4,-1.8);

   var sem13=new THREE.SphereGeometry(.2,30,30,2);
   var mesh32= new THREE.Mesh(sem13,material10);
   //scene.add(mesh32);
   mesh32.position.set(0,9.4,-4);

    var sem14=new THREE.SphereGeometry(.2,30,30,2);
   var mesh33= new THREE.Mesh(sem14,material10);
   //scene.add(mesh33);
   mesh33.position.set(-3,8.3,4);

   var sem15=new THREE.SphereGeometry(.2,30,30,2);
   var mesh34= new THREE.Mesh(sem15,material10);
   //scene.add(mesh34);
   mesh34.position.set(3,8.3,4);

     var sem16=new THREE.SphereGeometry(.2,30,30,2);
   var mesh35= new THREE.Mesh(sem16,material10);
   //scene.add(mesh35);
   mesh35.position.set(-5,8.3,0);

   var sem17=new THREE.SphereGeometry(.2,30,30,2);
   var mesh36= new THREE.Mesh(sem17,material10);
   //scene.add(mesh36);
   mesh36.position.set(5,8.3,0);

    var sem18=new THREE.SphereGeometry(.2,30,30,2);
   var mesh37= new THREE.Mesh(sem18,material10);
   //scene.add(mesh37);
   mesh37.position.set(-2.8,8.3,-4);

   var sem19=new THREE.SphereGeometry(.2,30,30,2);
   var mesh38= new THREE.Mesh(sem19,material10);
   //scene.add(mesh38);
   mesh38.position.set(3,8.3,-4);

   var sem20=new THREE.SphereGeometry(.2,30,30,2);
   var mesh44= new THREE.Mesh(sem20,material10);
   //scene.add(mesh44);
   mesh44.position.set(0,7,5.7);

   var sem21=new THREE.SphereGeometry(.2,30,30,2);
   var mesh39= new THREE.Mesh(sem21,material10);
   //scene.add(mesh39);
   mesh39.position.set(-5,7,2.5);

   var sem22=new THREE.SphereGeometry(.2,30,30,2);
   var mesh40= new THREE.Mesh(sem22,material10);
   //scene.add(mesh40);
   mesh40.position.set(5,7,2.5);

   var sem23=new THREE.SphereGeometry(.2,30,30,2);
   var mesh41= new THREE.Mesh(sem23,material10);
   //scene.add(mesh41);
   mesh41.position.set(-5,7,-2.5);

   var sem24=new THREE.SphereGeometry(.2,30,30,2);
   var mesh42= new THREE.Mesh(sem24,material10);
   //scene.add(mesh42);
   mesh42.position.set(5,7,-2.5);

   var sem25=new THREE.SphereGeometry(.2,30,30,2);
   var mesh43= new THREE.Mesh(sem25,material10);
   //scene.add(mesh43);
   mesh43.position.set(0,7,-5.7);

   var semillas= new THREE.Group();
    semillas.add(mesh20,mesh21,mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29,mesh30,mesh31,mesh32,mesh33,mesh34,mesh35,mesh36,mesh37,mesh38,mesh39,mesh40,mesh41,mesh42,mesh43);
    //scene.add(semillas);

    var semillas1= new THREE.Group();
    semillas1.add(mesh30,mesh31,mesh32,mesh33,mesh34,mesh35,mesh36,mesh37,mesh38,mesh39,mesh40,mesh41,mesh42,mesh43,semillas,mesh44);
   // scene.add(semillas1);


    const ESC05= new THREE.Group();
           ESC05.add(carnes, panes,lechuga, queso, semillas1,jitomates);
           ESC05.position.set(x,y,z);
        
           return ESC05;
        }
        