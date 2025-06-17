import * as THREE from "./three.module.js"

export default function E08({x,y,z}) {



//cuerpo
    var obj1=new THREE.BoxGeometry(50,60,20,40);
    var material01= new THREE.MeshLambertMaterial({color:0xffff4d, side:THREE.DoubleSide});
    var mesh01= new THREE.Mesh(obj1,material01);
    //scene.add(mesh01);
    mesh01.position.set(0,15,9);


    var obj2=new THREE.BoxGeometry(53,10,20.2,10,10);
    var material02= new THREE.MeshLambertMaterial({color:0xfffff9, side:THREE.DoubleSide});
    var mesh02= new THREE.Mesh(obj2,material02);
    //scene.add(mesh02);
    mesh02.position.set(0,-15,9);

    var obj3=new THREE.BoxGeometry(53,10,20.21,10,10);
    var material03= new THREE.MeshLambertMaterial({color:0xb26500, side:THREE.DoubleSide});
    var mesh03= new THREE.Mesh(obj3,material03);
    //scene.add(mesh03);
    mesh03.position.set(0,-24.32,9);

    var cuerpo= new THREE.Group();
    cuerpo.add(mesh01,mesh02,mesh03);
    //scene.add(cuerpo);


    //pantalones
    var obj4=new THREE.CylinderGeometry(8,8,10,30,30);
    var material03= new THREE.MeshLambertMaterial({color:0xb26500, side:THREE.DoubleSide});
    var mesh04= new THREE.Mesh(obj4,material03);
    //scene.add(mesh04);
    mesh04.position.set(-15,-33,9);

        var obj5=new THREE.CylinderGeometry(8,8,10,30,30);
    var material03= new THREE.MeshLambertMaterial({color:0xb26500, side:THREE.DoubleSide});
    var mesh05= new THREE.Mesh(obj5,material03);
    //scene.add(mesh05);
    mesh05.position.set(15,-33,9);

      var pantalones= new THREE.Group();
    pantalones.add(mesh04,mesh05);
    //scene.add(pantalones);

    //piernas
        var obj6=new THREE.CylinderGeometry(4.5,4.55,40,30,30);
    var material04= new THREE.MeshLambertMaterial({color:0xffff4d, side:THREE.DoubleSide});
    var mesh06= new THREE.Mesh(obj6,material04);
    //scene.add(mesh06);
    mesh06.position.set(-15,-45,9);
    
        var obj7=new THREE.CylinderGeometry(4.5,4.55,40,30,30);
    var material04= new THREE.MeshLambertMaterial({color:0xffff4d, side:THREE.DoubleSide});
    var mesh07= new THREE.Mesh(obj7,material04);
    //scene.add(mesh07);
    mesh07.position.set(15,-45,9);

     var piernas= new THREE.Group();
   piernas.add(mesh06,mesh07);
    //scene.add(piernas);


    //calcetas
    var obj8=new THREE.CylinderGeometry(4.6,4.6,20,30,30);
    var material05= new THREE.MeshLambertMaterial({color:0xebebeb, side:THREE.DoubleSide});
    var mesh08= new THREE.Mesh(obj8,material05);
    //scene.add(mesh08);
    mesh08.position.set(15,-60,9);
    
    var obj9=new THREE.CylinderGeometry(4.63,4.63,2,30,30);
    var material06= new THREE.MeshLambertMaterial({color:0x5993f6, side:THREE.DoubleSide});
    var mesh09= new THREE.Mesh(obj9,material06);
    //scene.add(mesh09);
    mesh09.position.set(15,-55,9);

    var obj10=new THREE.CylinderGeometry(4.63,4.63,2,30,30);
    var material07= new THREE.MeshLambertMaterial({color:0xed0301, side:THREE.DoubleSide});
    var mesh10= new THREE.Mesh(obj10,material07);
    //scene.add(mesh10);
    mesh10.position.set(15,-59,9);

      var obj11=new THREE.CylinderGeometry(4.6,4.6,20,30,30);
    var material08= new THREE.MeshLambertMaterial({color:0xebebeb, side:THREE.DoubleSide});
    var mesh11= new THREE.Mesh(obj11,material08);
   //scene.add(mesh11);
    mesh11.position.set(-15,-60,9);

    var obj12=new THREE.CylinderGeometry(4.63,4.63,2,30,30);
    var material09= new THREE.MeshLambertMaterial({color:0x5993f6, side:THREE.DoubleSide});
    var mesh12= new THREE.Mesh(obj12,material09);
    //scene.add(mesh12);
    mesh12.position.set(-15,-55,9);

    var obj13=new THREE.CylinderGeometry(4.63,4.63,2,30,30);
    var material10= new THREE.MeshLambertMaterial({color:0xed0301, side:THREE.DoubleSide});
    var mesh13= new THREE.Mesh(obj13,material10);
    //scene.add(mesh13);
    mesh13.position.set(-15,-59,9);

     var calcetas= new THREE.Group();
    calcetas.add(mesh08,mesh09,mesh10,mesh11,mesh12,mesh13);
    //scene.add(calcetas);

    //CUADROS NEGROS

    var obj14=new THREE.BoxGeometry(7,2,2.21,5,5);
    var material11= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh14= new THREE.Mesh(obj14,material11);
    //scene.add(mesh14);
    mesh14.position.set(-20,-22,19);

    var obj15=new THREE.BoxGeometry(7,2,2.21,5,5);
    var material12= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh15= new THREE.Mesh(obj15,material12);
    //scene.add(mesh15);
    mesh15.position.set(-10,-22,19);

    var obj16=new THREE.BoxGeometry(7,2,2.21,5,5);
    var mesh16= new THREE.Mesh(obj16,material12);
    //scene.add(mesh16);
    mesh16.position.set(0,-22,19);

    var obj17=new THREE.BoxGeometry(7,2,2.21,5,5);
    var mesh17= new THREE.Mesh(obj17,material12);
    //scene.add(mesh17);
    mesh17.position.set(10,-22,19);

    var obj18=new THREE.BoxGeometry(7,2,2.21,5,5);
    var mesh18= new THREE.Mesh(obj18,material12);
    //scene.add(mesh18);
    mesh18.position.set(20,-22,19);

     var cuadros= new THREE.Group();
    cuadros.add(mesh14,mesh15,mesh16,mesh17,mesh18);
    //scene.add(cuadros);

    //corbata

    var obj19=new THREE.BoxGeometry(4,4,2.21,5,5);
    var material13= new THREE.MeshLambertMaterial({color:0xed0301, side:THREE.DoubleSide});
    var mesh19= new THREE.Mesh(obj19,material13);
    //scene.add(mesh19);
    mesh19.position.set(0,-12,19.3);
    mesh19.rotation.set(0,0,4);

    var obj20=new THREE.BoxGeometry(6,6,2.21,5,5);
    var material14= new THREE.MeshLambertMaterial({color:0xed0301, side:THREE.DoubleSide});
    var mesh20= new THREE.Mesh(obj20,material14);
    //scene.add(mesh20);
    mesh20.position.set(0,-20,19.2);
    mesh20.rotation.set(0,0,4);

    var obj21=new THREE.BoxGeometry(5,7,2.21,5,5);
    var material15= new THREE.MeshLambertMaterial({color:0xed0301, side:THREE.DoubleSide});
    var mesh21= new THREE.Mesh(obj21,material15);
    //scene.add(mesh21);
    mesh21.position.set(0,-16,19.2);

     var corbata= new THREE.Group();
    corbata.add(mesh19,mesh20,mesh21);
    //scene.add(corbata);
  
    //sombrero

      var obj22=new THREE.BoxGeometry(11,2,20,5,5);
    var material15= new THREE.MeshLambertMaterial({color:0x254d62, side:THREE.DoubleSide});
    var mesh22= new THREE.Mesh(obj22,material15);
    //scene.add(mesh22);
    mesh22.position.set(0,46,15);

    var obj23=new THREE.CylinderGeometry(5.3,5.3,2,30,30);
    var material16= new THREE.MeshLambertMaterial({color:0x254d62, side:THREE.DoubleSide});
    var mesh23= new THREE.Mesh(obj23,material16);
    //scene.add(mesh23);
    mesh23.position.set(0,46,25);

        var obj24=new THREE.CylinderGeometry(4.63,4.63,18,30,30);
    var material17= new THREE.MeshLambertMaterial({color:0xffffff, side:THREE.DoubleSide});
    var mesh24= new THREE.Mesh(obj24,material17);
    //scene.add(mesh24);
    mesh24.position.set(0,55,10);
    
     var obj25=new THREE.SphereGeometry(4.63,30,30,2,10);
    var material18= new THREE.MeshLambertMaterial({color:0xffffff, side:THREE.DoubleSide});
    var mesh25= new THREE.Mesh(obj25,material18);
    //scene.add(mesh25);
    mesh25.position.set(0,64,10);

    var obj26=new THREE.SphereGeometry(1,30,30,2,10);
    var material19= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh26= new THREE.Mesh(obj26,material19);
    //scene.add(mesh26);
    mesh26.position.set(0,69,10);

    var obj27=new THREE.TorusGeometry(12,0.6, 30, 30,3); 
   var material20= new THREE.MeshLambertMaterial({color:0x254d62, side:THREE.DoubleSide});
   var mesh27= new THREE.Mesh(obj27,material20);
  // scene.add(mesh27);
   mesh27.position.set(0,53,14.6);
      mesh27.rotation.set(0,0,-15.6);
         mesh27.scale.set(0.3,0.3,0.3);

    var obj28=new THREE.BoxGeometry(1,12,1,5,5);
    var material21= new THREE.MeshLambertMaterial({color:0x254d62, side:THREE.DoubleSide});
    var mesh28= new THREE.Mesh(obj28,material21);
    //scene.add(mesh28);
    mesh28.position.set(0,55.2,14.16);

    var obj29=new THREE.BoxGeometry(5,1,1,5,5);
    var material22= new THREE.MeshLambertMaterial({color:0x254d62, side:THREE.DoubleSide});
    var mesh29= new THREE.Mesh(obj29,material22);
   // scene.add(mesh29);
    mesh29.position.set(0,57,14.16);

      var sombrero= new THREE.Group();
    sombrero.add(mesh22,mesh23,mesh24,mesh25,mesh26,mesh27,mesh28,mesh29);
    //scene.add(sombrero);

    //zapatos

    var obj30=new THREE.SphereGeometry(6,30,30,2,10);
    var material23= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh30= new THREE.Mesh(obj30,material23);
    //scene.add(mesh30);
    mesh30.position.set(-15,-70,9);
    
    var obj31=new THREE.SphereGeometry(7,30,30,2,10);
    var material24= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh31= new THREE.Mesh(obj31,material24);
    //scene.add(mesh31);
    mesh31.position.set(-15,-70,19);

    var obj32=new THREE.SphereGeometry(6,30,30,2,10);
    var material25= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh32= new THREE.Mesh(obj32,material25);
    //scene.add(mesh32);
    mesh32.position.set(15,-70,9);
    
    var obj33=new THREE.SphereGeometry(7,30,30,2,10);
    var material26= new THREE.MeshLambertMaterial({color:0x111111, side:THREE.DoubleSide});
    var mesh33= new THREE.Mesh(obj33,material26);
   // scene.add(mesh33);
    mesh33.position.set(15,-70,19);

      var zapatos= new THREE.Group();
    zapatos.add(mesh30,mesh31,mesh32,mesh33);
    //scene.add(zapatos);

    //ojos

    var obj34=new THREE.SphereGeometry(9.5,30,30,2,10);
    var material27= new THREE.MeshLambertMaterial({color:0xFFFFFF, side:THREE.DoubleSide});
    var mesh34= new THREE.Mesh(obj34,material27);
    //scene.add(mesh34);
    mesh34.position.set(8.2,23,15);

    var obj35=new THREE.SphereGeometry(5,30,30,2,10);
    var material28= new THREE.MeshLambertMaterial({color:0x60fdfe, side:THREE.DoubleSide});
    var mesh35= new THREE.Mesh(obj35,material28);
    //scene.add(mesh35);
    mesh35.position.set(8,23,21);
    
    var obj36=new THREE.SphereGeometry(3,30,30,2,10);
    var material29= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh36= new THREE.Mesh(obj36,material29);
    //scene.add(mesh36);
    mesh36.position.set(8,23,24);

    var obj37=new THREE.SphereGeometry(9.5,30,30,2,10);
    var material30= new THREE.MeshLambertMaterial({color:0xFFFFFF, side:THREE.DoubleSide});
    var mesh37= new THREE.Mesh(obj37,material30);
    //scene.add(mesh37);
    mesh37.position.set(-8.2,23,15);

    var obj38=new THREE.SphereGeometry(5,30,30,2,10);
    var material31= new THREE.MeshLambertMaterial({color:0x60fdfe, side:THREE.DoubleSide});
    var mesh38= new THREE.Mesh(obj38,material31);
    //scene.add(mesh38);
    mesh38.position.set(-8,23,21);

    var obj39=new THREE.SphereGeometry(3,30,30,2,10);
    var material32= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh39= new THREE.Mesh(obj39,material32);
    //scene.add(mesh39);
    mesh39.position.set(-8,23,24);

     var ojos= new THREE.Group();
    ojos.add(mesh34,mesh35,mesh36,mesh37,mesh38,mesh39);
   // scene.add(ojos);

    //pestañas
    var obj40=new THREE.BoxGeometry(2,5,2.21,5,5);
    var material33= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh40= new THREE.Mesh(obj40,material33);
    //scene.add(mesh40);
    mesh40.position.set(5,32,18);
    mesh40.rotation.set(0,0,19);

      var obj41=new THREE.BoxGeometry(2,5,2.21,5,5);
    var material34= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh41= new THREE.Mesh(obj41,material34);
    //scene.add(mesh41);
    mesh41.position.set(9,33,18);
    mesh41.rotation.set(0,0,0);

     var obj42=new THREE.BoxGeometry(2,5,2.21,5,5);
    var material35= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh42= new THREE.Mesh(obj42,material35);
    //scene.add(mesh42);
    mesh42.position.set(13,32,18);
    mesh42.rotation.set(0,0,9.2);

    var obj43=new THREE.BoxGeometry(2,5,2.21,5,5);
    var material36= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh43= new THREE.Mesh(obj43,material36);
    //scene.add(mesh43);
    mesh43.position.set(-12,32,18);
    mesh43.rotation.set(0,0,19);

      var obj44=new THREE.BoxGeometry(2,5,2.21,5,5);
    var material37= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh44= new THREE.Mesh(obj44,material37);
    //scene.add(mesh44);
    mesh44.position.set(-8,33,18);
    mesh44.rotation.set(0,0,0);

     var obj45=new THREE.BoxGeometry(2,5,2.21,5,5);
    var material37= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
    var mesh45= new THREE.Mesh(obj45,material37);
    //scene.add(mesh45);
    mesh45.position.set(-4,32,18);
    mesh45.rotation.set(0,0,9.2);

    var pestañas= new THREE.Group();
    pestañas.add(mesh40,mesh41,mesh42,mesh43,mesh44,mesh45);
    //scene.add(pestañas);

    //manchas
    var obj45=new THREE.CylinderGeometry(4,2,0.5,30,30);
    var material38= new THREE.MeshLambertMaterial({color:0xADCF00, side:THREE.DoubleSide});
    var mesh45= new THREE.Mesh(obj45,material38);
    //scene.add(mesh45);
    mesh45.position.set(-13,-4,19);
    mesh45.rotation.set(-29.9,0,0);
    
    var obj46=new THREE.CylinderGeometry(2,2,0.5,30,30);
    var material39= new THREE.MeshLambertMaterial({color:0xADCF00, side:THREE.DoubleSide});
    var mesh46= new THREE.Mesh(obj46,material39);
    //scene.add(mesh46);
    mesh46.position.set(-20,4,19);
    mesh46.rotation.set(-29.9,0,0);

     var obj47=new THREE.CylinderGeometry(4,2,0.5,30,30);
    var material40= new THREE.MeshLambertMaterial({color:0xADCF00, side:THREE.DoubleSide});
    var mesh47= new THREE.Mesh(obj47,material40);
    //scene.add(mesh47);
    mesh47.position.set(20,4,19);
    mesh47.rotation.set(-29.9,0,0);

    var obj48=new THREE.CylinderGeometry(2,2,0.5,30,30);
    var material41= new THREE.MeshLambertMaterial({color:0xADCF00, side:THREE.DoubleSide});
    var mesh48= new THREE.Mesh(obj48,material41);
    //scene.add(mesh48);
    mesh48.position.set(15,-5,19);
    mesh48.rotation.set(-29.9,0,0);

    var obj49=new THREE.CylinderGeometry(4,2,0.5,30,30);
    var material42= new THREE.MeshLambertMaterial({color:0xADCF00, side:THREE.DoubleSide});
    var mesh49= new THREE.Mesh(obj49,material42);
    //scene.add(mesh49);
    mesh49.position.set(-17,37,19);
    mesh49.rotation.set(-29.9,0,0);

     var obj50=new THREE.CylinderGeometry(2,2,0.5,30,30);
    var material43= new THREE.MeshLambertMaterial({color:0xADCF00, side:THREE.DoubleSide});
    var mesh50= new THREE.Mesh(obj50,material43);
    //scene.add(mesh50);
    mesh50.position.set(-20,30,19);
    mesh50.rotation.set(-29.9,0,0);

     var obj51=new THREE.CylinderGeometry(2,2,0.5,30,30);
    var material44= new THREE.MeshLambertMaterial({color:0xADCF00, side:THREE.DoubleSide});
    var mesh51= new THREE.Mesh(obj51,material44);
    //scene.add(mesh51);
    mesh51.position.set(20,30,19);
    mesh51.rotation.set(-29.9,0,0);

     var manchas= new THREE.Group();
    manchas.add(mesh45,mesh46,mesh47,mesh48,mesh49,mesh50,mesh51);
    //scene.add(manchas);

    //brazos

    var obj52=new THREE.SphereGeometry(7,30,30,2,10);
    var material45= new THREE.MeshLambertMaterial({color:0xffffff, side:THREE.DoubleSide});
    var mesh52= new THREE.Mesh(obj52,material45);
    //scene.add(mesh52);
    mesh52.position.set(29,-3,10);

    var obj53=new THREE.SphereGeometry(7,30,30,2,10);
    var material46= new THREE.MeshLambertMaterial({color:0xffffff, side:THREE.DoubleSide});
    var mesh53= new THREE.Mesh(obj53,material46);
    //scene.add(mesh53);
    mesh53.position.set(-29,-3,10);

    var obj54=new THREE.CylinderGeometry(2,2,16,30,30);
    var material47= new THREE.MeshLambertMaterial({color:0xffff4d, side:THREE.DoubleSide});
    var mesh54= new THREE.Mesh(obj54,material47);
    //scene.add(mesh54);
    mesh54.position.set(-30,-15,10);
    mesh54.rotation.set(0,0,6);

    var obj55=new THREE.CylinderGeometry(2,2,25,30,30);
    var material48= new THREE.MeshLambertMaterial({color:0xffff4d, side:THREE.DoubleSide});
    var mesh55= new THREE.Mesh(obj55,material48);
    //scene.add(mesh55);
    mesh55.position.set(30,-15,10);
   
    var obj56=new THREE.SphereGeometry(3,30,30,2,10);
    var material49= new THREE.MeshLambertMaterial({color:0xffff4d, side:THREE.DoubleSide});
    var mesh56= new THREE.Mesh(obj56,material49);
  // scene.add(mesh56);
    mesh56.position.set(-44,-3,10);
  
    var obj57=new THREE.SphereGeometry(3,30,30,2,10);
    var material50= new THREE.MeshLambertMaterial({color:0xffff4d, side:THREE.DoubleSide});
    var mesh57= new THREE.Mesh(obj57,material50);
  // scene.add(mesh57);
    mesh57.position.set(30,-30,10);

      var obj58=new THREE.CylinderGeometry(2,2,20,30,30);
    var material51= new THREE.MeshLambertMaterial({color:0xffff4d, side:THREE.DoubleSide});
    var mesh58= new THREE.Mesh(obj58,material51);
    //scene.add(mesh58);
    mesh58.position.set(-38,-13,10);
     mesh58.rotation.set(0,0,10);

      var obj59=new THREE.CylinderGeometry(18,18,2,30,30);
    var material52= new THREE.MeshLambertMaterial({color:0x4a5252, side:THREE.DoubleSide});
    var mesh59= new THREE.Mesh(obj59,material52);
    //scene.add(mesh59);
    mesh59.position.set(-55,0,10);

     var manos= new THREE.Group();
    manos.add(mesh52,mesh53,mesh54,mesh55,mesh56,mesh57,mesh58,mesh59);
    //scene.add(manos);
    
//nariz

    var obj60=new THREE.CylinderGeometry(2,2,10,30,30);
    var material53= new THREE.MeshLambertMaterial({color:0xb4b43c, side:THREE.DoubleSide});
    var mesh60= new THREE.Mesh(obj60,material53);
    //scene.add(mesh60);
    mesh60.position.set(0,17,20);
     mesh60.rotation.set(29.9,0,0);

      var obj61=new THREE.SphereGeometry(2,30,30,2,10);
    var material54= new THREE.MeshLambertMaterial({color:0xb4b43c, side:THREE.DoubleSide});
    var mesh61= new THREE.Mesh(obj61,material54);
   //scene.add(mesh61);
    mesh61.position.set(0,16.7,25.);

     var nariz= new THREE.Group();
    nariz.add(mesh60,mesh61);
    //scene.add(nariz);

    //boca
      var obj62=new THREE.TorusGeometry(18,0.5, 20, 60,2); 
   var material55= new THREE.MeshLambertMaterial({color:0x000000, side:THREE.DoubleSide});
   var mesh62= new THREE.Mesh(obj62,material55);
   //scene.add(mesh62);
   mesh62.position.set(0,22,19);
      mesh62.rotation.set(0,0,-15.2);

        var obj63=new THREE.BoxGeometry(4.5,5,2.21,5,5);
    var material56= new THREE.MeshLambertMaterial({color:0xffffff, side:THREE.DoubleSide});
    var mesh63= new THREE.Mesh(obj63,material56);
    //scene.add(mesh63);
    mesh63.position.set(-4,2,18);
    mesh63.rotation.set(0,0,-19);

      var obj64=new THREE.BoxGeometry(4.5,5,2.21,5,5);
    var material57= new THREE.MeshLambertMaterial({color:0xffffff, side:THREE.DoubleSide});
    var mesh64= new THREE.Mesh(obj64,material57);
    //scene.add(mesh64);
    mesh64.position.set(4,2,18);
    mesh64.rotation.set(0,0,19);

     var boca= new THREE.Group();
    boca.add(mesh62,mesh63,mesh64);
    //scene.add(boca);
    
       const ESC08= new THREE.Group();
       ESC08.add(cuerpo,pantalones,piernas,calcetas,cuadros,corbata,sombrero,zapatos,ojos,pestañas,manchas,manos,nariz,boca);
       ESC08.position.set(x,y,z);
    
       return ESC08;
    }
    
