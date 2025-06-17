import * as THREE from "./three.module.js"

export default function E010({x,y,z}) {

//crustaceo

// Estructura principal (60x40)
var baseGeometry = new THREE.BoxGeometry(50, 20, 30);
var materialbase = new THREE.MeshLambertMaterial({ color: 0x5f4f3a});
var base1 = new THREE.Mesh(baseGeometry, materialbase);
//scene.add(base1);
base1.position.set(0, 6, 0);
base1.castShadow = true;
base1.receiveShadow = true;

//basurero trasero
var basuraGeometry = new THREE.BoxGeometry(10,8,9);
var materialbasura = new THREE.MeshLambertMaterial({ color: 0x7f8c8d });
var basura1 = new THREE.Mesh(basuraGeometry, materialbasura);
//scene.add(basura1); base1,basura1
basura1.position.set(-7, -1, -20);

//barra1
var barra1Geometry = new THREE.BoxGeometry(20, 3, 3);
var materialbarra = new THREE.MeshLambertMaterial({ color: 0x52463b  });
var barra1 = new THREE.Mesh(barra1Geometry, materialbarra);
//scene.add(barra1); 
barra1.position.set(15, -3, 16.5);

//barra2
var barra2Geometry = new THREE.BoxGeometry(20, 3, 3);
var materialbarra2 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra2 = new THREE.Mesh(barra2Geometry, materialbarra2);
//scene.add(barra2); 
barra2.position.set(-15, -3, 16.5);

//barra3
var barra3Geometry = new THREE.BoxGeometry(3, 3, 35);
var materialbarra3 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra3 = new THREE.Mesh(barra3Geometry, materialbarra3);
//scene.add(barra3); 
barra3.position.set(-26, -3, 0.4);

//barra4
var barra4Geometry = new THREE.BoxGeometry(3, 3, 35);
var materialbarra4 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra4 = new THREE.Mesh(barra4Geometry, materialbarra4);
//scene.add(barra4); 
barra4.position.set(26, -3, 0.4);

//barra5
var barra5Geometry = new THREE.BoxGeometry(3, 25, 3);
var materialbarra5 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra5 = new THREE.Mesh(barra5Geometry, materialbarra5);
//scene.add(barra5);
barra5.position.set(26, 3,16.5);

//barra6
var barra6Geometry = new THREE.BoxGeometry(3, 25, 3);
var materialbarra6 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra6 = new THREE.Mesh(barra6Geometry, materialbarra6);
//scene.add(barra6);
barra6.position.set(-26, 3,16.5);

//barra7
var barra7Geometry = new THREE.BoxGeometry(3, 25, 3);
var materialbarra7 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra7 = new THREE.Mesh(barra7Geometry, materialbarra7);
//scene.add(barra7);
barra7.position.set(-26, 3,-16.5);

//barra8
var barra8Geometry = new THREE.BoxGeometry(3, 25, 3);
var materialbarra8 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra8 = new THREE.Mesh(barra8Geometry, materialbarra8);
//scene.add(barra8);
barra8.position.set(26, 3,-16.5);

//barra9
var barra9Geometry = new THREE.BoxGeometry(2, 11, 3);
var materialbarra9 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra9 = new THREE.Mesh(barra9Geometry, materialbarra9);
//scene.add(barra9);
barra9.position.set(4, 1,16.5);

//barra10
var barra10Geometry = new THREE.BoxGeometry(2, 11, 3);
var materialbarra10 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra10 = new THREE.Mesh(barra10Geometry, materialbarra10);
//scene.add(barra10);
barra10.position.set(-4, 1,16.5);

//barra11
var barra11Geometry = new THREE.BoxGeometry(10, 3, 3);
var materialbarra11 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var barra11 = new THREE.Mesh(barra11Geometry, materialbarra11);
//scene.add(barra11);
barra11.position.set(0, 6, 16.5);

//cilindro gris techo
var chimenea = new THREE.Mesh(
  new THREE.CylinderGeometry(5.5, 5.5, 10, 32, 1,),materialbasura );
chimenea.position.set(-9,30,0);
//scene.add(chimenea);

// Arcos laterales del techo
var materialtecho = new THREE.MeshLambertMaterial({ color: 0x52463b});
var techo = new THREE.Mesh(
  new THREE.CylinderGeometry(15.5, 15.5, 56, 32, 1, true, 0, Math.PI),materialtecho );
techo.rotation.z = Math.PI / 2;
techo.position.set(0, 15, 0);
techo.castShadow = true;
techo.receiveShadow = true;
//scene.add(techo); 

// Arcos laterales del techo izq
var materialtecho2 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var techo2 = new THREE.Mesh(
  new THREE.CylinderGeometry(17.5, 17.5,4, 70, 30, true, 0, Math.PI),materialtecho2 );
techo2.rotation.z = Math.PI / 2;
techo2.position.set(-26, 15, 0);
techo2.castShadow = true;
techo2.receiveShadow = true;
//scene.add(techo2); 

// Arcos laterales del techo derecha
var materialtecho3 = new THREE.MeshLambertMaterial({ color: 0x52463b});
var techo3 = new THREE.Mesh(
  new THREE.CylinderGeometry(17.5, 17.5,4, 70, 30, true, 0, Math.PI),materialtecho3 );
techo3.rotation.z = Math.PI / 2;
techo3.position.set(26, 15, 0);
techo3.castShadow = true;
techo3.receiveShadow = true;
//scene.add(techo3); 

// puerta1
var puertaGeometry=new THREE.BoxGeometry(9,11,1);
var materialpuerta = new THREE.MeshLambertMaterial({ color: 0x4b89af});
var puerta1 = new THREE.Mesh(puertaGeometry, materialpuerta);
//scene.add(puerta1); 
puerta1.position.set(0, 1, 15);

//manijas
var manijaGeometry=new THREE.BoxGeometry(1,0.5,1);
var materialmanija = new THREE.MeshLambertMaterial({ color: 0xffa405});
var manija1 = new THREE.Mesh(manijaGeometry, materialmanija);
//scene.add(manija1); 
manija1.position.set(1, 1, 16);

var manija2 = new THREE.Mesh(manijaGeometry, materialmanija);
//scene.add(manija2); 
manija2.position.set(-1, 1, 16);

var manija3 = new THREE.Mesh(manijaGeometry, materialmanija);
//scene.add(manija3);
manija3.position.set(8, 1, -16);

//puerta trasera
var puertatGeometry=new THREE.BoxGeometry(6,11,1);
var materialpuertat = new THREE.MeshLambertMaterial({ color: 0x7f8c8d});
var puerta2 = new THREE.Mesh(puertatGeometry, materialpuertat);
//scene.add(puerta2);
puerta2.position.set(10, 1, -15);

//ventanas parte frontal
//v1
var ventana1Geometry=new THREE.BoxGeometry(12 ,8,1);
var materialventana = new THREE.MeshLambertMaterial({ color: 0x4b89af});
var ventana1 = new THREE.Mesh(ventana1Geometry, materialventana);
//scene.add(ventana1);
ventana1.position.set(16, 3, 15);

//v2
var ventana2Geometry=new THREE.BoxGeometry(12 ,8,1);
var materialventana2 = new THREE.MeshLambertMaterial({ color: 0x4b89af});
var ventana2 = new THREE.Mesh(ventana2Geometry, materialventana2);
//scene.add(ventana2);
ventana2.position.set(-16, 3, 15);

//ventanas laterales
//v1
var ventana1lGeometry=new THREE.BoxGeometry(0.4,8,22);
var materialventanal1 = new THREE.MeshLambertMaterial({ color: 0x4b89af});
var ventanal1 = new THREE.Mesh(ventana1lGeometry, materialventanal1);
//scene.add(ventanal1);
ventanal1.position.set(25.2, 3, 0);

//v2
var ventanal2Geometry=new THREE.BoxGeometry(0.4,8,22);
var materialventanal2 = new THREE.MeshLambertMaterial({ color: 0x4b89af});
var ventanal2 = new THREE.Mesh(ventanal2Geometry, materialventanal2);
//scene.add(ventanal2);
ventanal2.position.set(-25.2, 3, 0);

//ALMEJA INTENTO JAJA
var materialanuncio = new THREE.MeshLambertMaterial({ color: 0x52463b});
var anuncio = new THREE.Mesh(
  new THREE.CylinderGeometry(0.5, 0.5, 29, 32, 1,),materialanuncio );
anuncio.position.set(-35,2,40);
//scene.add(anuncio);

 //TEXTURA_1
 var geometry10 = new THREE.BoxGeometry(8,8,8);
 var texture= new THREE.TextureLoader();
   
var materials=[];
materials.push( new THREE.MeshPhongMaterial({
color: 0x90abed,
map:texture.load("./assets/4.png"),
transparent:true,
opacity:1
 }));

materials.push( new THREE.MeshPhongMaterial({
color: 0x90abed,
map:texture.load("./assets/4.png"),
transparent:true,
opacity:1
}));
   
materials.push( new THREE.MeshPhongMaterial({
color: 0x90abed,
map:texture.load("./assets/4.png"),
transparent:true,
opacity:1
   }));
  
materials.push( new THREE.MeshPhongMaterial({
color: 0x90abed,
map:texture.load("./assets/4.png"),
transparent:true,
opacity:1
   }));

materials.push( new THREE.MeshPhongMaterial({
color: 0x90abed,
map:texture.load("./assets/4.png"),
transparent:true,
opacity:1
   }));

materials.push( new THREE.MeshPhongMaterial({
color: 0x90abed,
map:texture.load("./assets/4.png"),
transparent:true,
opacity:1
   }));

var mesh01= new THREE.Mesh(geometry10,materials);
mesh01.castShadow=true;
mesh01.position.set(-35,20,40);

const ESC10= new THREE.Group();
ESC10.add(base1,basura1, barra1, barra2, barra3,barra4, barra5,barra6,barra7,barra8,barra9,barra10,barra11,chimenea,techo,techo2, techo3, puerta1,manija1,manija2,manija3,puerta2,ventana1,ventanal1,ventana2,ventanal2,anuncio,mesh01);
ESC10.position.set(x,y,z);
            
return ESC10;
}