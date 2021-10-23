import { createNoSubstitutionTemplateLiteral } from "typescript";
import Armario from "./Armario";
import Person from "./Person";

class Game {
   constructor(actividad) {
      this.actividad = actividad;
      this.screen1 = null;
      this.screen2 = null;
      this.screen3 = null;
      this.screen4 = null;
      this.currentScreen = 0;
      this.npc = null;
      this.persons = [];
      this.armarios = [];
      this.inicial1 = null;
      this.finalScore=0;
      //persons
      this.personIndex = 0;
      this.person1Initial = null;
      this.person1Nude = null;
      this.clickTop=false;
      this.topX=0;
      this.topY=0;
      this.clickPant=false;
      this.pantX=0;
      this.pantY=0;
      this.clickShoes=false;
      this.shoesX=0;
      this.shoesY=0;
   }

   setup(app) {
      app.createCanvas(1280, 720);
      app.textSize(20);
      this.currentText =
         "Bienvenido/a d'Moda Boutique, ¡gracias por ser nuestro/a nuevo/a asesor/a!. Día a día llegan muchos clientes, ayúdalos a elegir su outfit ideal, debes prestar atención a sus requerimientos y peticiones. Para elegir la ropa ideal  solo debes dar clic sobre ella...";
      this.btnPosY = 514;

      //loadImages
      this.screen1 = app.loadImage("./images/exterior.png");
      this.screen2 = app.loadImage("./images/tienda.png");
      this.screen3 = app.loadImage("./images/start.png");
      this.screen4 = app.loadImage("./images/vestier.png");
      this.npc = app.loadImage("./images/NPC.png");
      this.nextButton = app.loadImage("./images/button.png");
      this.clotheButton = app.loadImage("./images/botonPrenda.png");

      this.inicial1 = app.loadImage("./1inicial.png");

      //person1
      this.person1Text = "¡Hola!, he visto que tienen muy buena ropa y necesito ayuda. Voy a salir con mis amigos en Cali y quiero algo casual y muy fresco, pero sin parecer desaliñado. ¡Gracias por ayudarme!"
      this.person1hints = "Casual y muy fresco"
      this.person1Initial = app.loadImage("./images/sit1/1inicial.png");
      this.person1Nude = app.loadImage("./images/sit1/sit1Nude.png");
      //
      this.person1Top1 = app.loadImage("./images/sit1/1camisa1.png");
      this.person1Top2 = app.loadImage("./images/sit1/1camisa2.png");
      this.person1Top3 = app.loadImage("./images/sit1/1camisa3.png");
      this.person1tops = [this.person1Top1,this.person1Top2,this.person1Top3];
      this.person1tops = this.shuffleArray(this.person1tops);
      //
      this.person1pant1 = app.loadImage("./images/sit1/1pant1.png");
      this.person1pant2 = app.loadImage("./images/sit1/1pant2.png");
      this.person1pant3 = app.loadImage("./images/sit1/1pant3.png");
      this.person1pants = [this.person1pant1,this.person1pant2,this.person1pant3];
      this.person1pants = this.shuffleArray(this.person1pants);
      //
      this.person1shoes1 = app.loadImage("./images/sit1/1shoes1.png");
      this.person1shoes2 = app.loadImage("./images/sit1/1shoes2.png");
      this.person1shoes3 = app.loadImage("./images/sit1/1shoes3.png");
      this.person1shoes = [this.person1shoes1,this.person1shoes2,this.person1shoes3];
      this.person1shoes = this.shuffleArray(this.person1shoes);

      //person2
      this.person2Text = "¡Hola! qué bonita tienda. La próxima semana viajaré a Bogotá y me han dicho que es muy frio. Quiero algo abrigado pero que no me haga ver gorda. ¡Te lo agradezco!"
      this.person2hints = "Clima frio y que no la haga ver gorda"
      this.person2Initial = app.loadImage("./images/sit2/2normal.png");
      this.person2Nude = app.loadImage("./images/sit2/sit2Nude.png");
      //
      this.person2Top1 = app.loadImage("./images/sit2/2blusaCorr.png");
      this.person2Top2 = app.loadImage("./images/sit2/2blusa2.png");
      this.person2Top3 = app.loadImage("./images/sit2/2blusa3.png");
      this.person2tops = [this.person2Top1,this.person2Top2,this.person2Top3];
      this.person2tops = this.shuffleArray(this.person2tops);
      //
      this.person2pant1 = app.loadImage("./images/sit2/2pantCorr.png");
      this.person2pant2 = app.loadImage("./images/sit2/2pant2.png");
      this.person2pant3 = app.loadImage("./images/sit2/2falda3.png");
      this.person2pants = [this.person2pant1,this.person2pant2,this.person2pant3];
      this.person2pants = this.shuffleArray(this.person2pants);
      //
      this.person2shoes1 = app.loadImage("./images/sit2/2shoesCorr.png");
      this.person2shoes2 = app.loadImage("./images/sit2/2shoes2.png");
      this.person2shoes3 = app.loadImage("./images/sit2/2shoes3.png");
      this.person2shoes = [this.person2shoes1,this.person2shoes2,this.person2shoes3];
      this.person2shoes = this.shuffleArray(this.person2shoes);

      //person3
      this.person3Text = "Este parece ser un buen lugar, tengo una cita esta noche con alguien de Tinder. Quiero verme alto y confiado, para que así, mi cita sienta que la puedo proteger. ¡Ah! y hará un poco de frío. ¡Gracias!"
      this.person3hints = "Clima frio y que lo haga lucir alto"
      this.person3Initial = app.loadImage("./images/sit3/3inicial.png");
      this.person3Nude = app.loadImage("./images/sit3/3naked.png");
      //
      this.person3Top1 = app.loadImage("./images/sit3/3correctCamica.png");
      this.person3Top2 = app.loadImage("./images/sit3/3camisa2.png");
      this.person3Top3 = app.loadImage("./images/sit3/3camisa3.png");
      this.person3tops = [this.person3Top1,this.person3Top2,this.person3Top3];
      this.person3tops = this.shuffleArray(this.person3tops);
      //
      this.person3pant1 = app.loadImage("./images/sit3/3correctpants.png");
      this.person3pant2 = app.loadImage("./images/sit3/3pants2.png");
      this.person3pant3 = app.loadImage("./images/sit3/3pant3.png");
      this.person3pants = [this.person3pant1,this.person3pant2,this.person3pant3];
      this.person3pants = this.shuffleArray(this.person3pants);
      //
      this.person3shoes1 = app.loadImage("./images/sit3/3correctShoes.png");
      this.person3shoes2 = app.loadImage("./images/sit3/3shoes2.png");
      this.person3shoes3 = app.loadImage("./images/sit3/3shoes3.png");
      this.person3shoes = [this.person3shoes1,this.person3shoes2,this.person3shoes3];
      this.person3shoes = this.shuffleArray(this.person3shoes);

      //person4
      this.person4Text = "Hola, tengo un viaje muy  largo y apenas me da el tiempo. Quiero algo cómodo pero chic, para presumir mi nuevo empleo con mi familia. Por cierto, necesito que resalte mis caderas, ¡Por favor!"
      this.person4hints = "Cómodo pero chic y además que resalte sus caderas"
      this.person4Initial = app.loadImage("./images/sit4/4inicial.png");
      this.person4Nude = app.loadImage("./images/sit4/4NUDE.png");
      //
      this.person4Top1 = app.loadImage("./images/sit4/4blusaCorrecto.png");
      this.person4Top2 = app.loadImage("./images/sit4/4blusa2.png");
      this.person4Top3 = app.loadImage("./images/sit4/4blusa3.png");
      this.person4tops = [this.person4Top1,this.person4Top2,this.person4Top3];
      this.person4tops = this.shuffleArray(this.person4tops);
      //
      this.person4pant1 = app.loadImage("./images/sit4/4pantsCorrect.png");
      this.person4pant2 = app.loadImage("./images/sit4/4pant2.png");
      this.person4pant3 = app.loadImage("./images/sit4/4pants3.png");
      this.person4pants = [this.person4pant1,this.person4pant2,this.person4pant3];
      this.person4pants = this.shuffleArray(this.person4pants);
      //
      this.person4shoes1 = app.loadImage("./images/sit4/4correctoshoes.png");
      this.person4shoes2 = app.loadImage("./images/sit4/4shoes2.png");
      this.person4shoes3 = app.loadImage("./images/sit4/4shoes3.png");
      this.person4shoes = [this.person4shoes1,this.person4shoes2,this.person4shoes3];
      this.person4shoes = this.shuffleArray(this.person4shoes);

      //person5
      this.person5Text = "¡Esta tienda tiene de todo!, necesito algo formal pero tengo el problema de que iré a un lugar muy caluroso. ¿Podrías recomendarme algo fresco pero que funcione en una reunión? "
      this.person5hints = "Formal y fresco"
      this.person5Initial = app.loadImage("./images/sit5/5inicial.png");
      this.person5Nude = app.loadImage("./images/sit5/naked5.png");
      //
      this.person5Top1 = app.loadImage("./images/sit5/5correctBLOUSE.png");
      this.person5Top2 = app.loadImage("./images/sit5/5blusa1.png");
      this.person5Top3 = app.loadImage("./images/sit5/5blusa2.png");
      this.person5tops = [this.person5Top1,this.person5Top2,this.person5Top3];
      this.person5tops = this.shuffleArray(this.person5tops);
      //
      this.person5pant1 = app.loadImage("./images/sit5/5correctFalda.png");
      this.person5pant2 = app.loadImage("./images/sit5/5falda2.png");
      this.person5pant3 = app.loadImage("./images/sit5/5pant.png");
      this.person5pants = [this.person5pant1,this.person5pant2,this.person5pant3];
      this.person5pants = this.shuffleArray(this.person5pants);
      //
      this.person5shoes1 = app.loadImage("./images/sit5/5correctShoes.png");
      this.person5shoes2 = app.loadImage("./images/sit5/5zapatos1.png");
      this.person5shoes3 = app.loadImage("./images/sit5/5zapatos2.png");
      this.person5shoes = [this.person5shoes1,this.person5shoes2,this.person5shoes3];
      this.person5shoes = this.shuffleArray(this.person5shoes);

      //queria poner todas las imagenes de cada personaje en un arreglo cada una y asi para cuando se mostrara su situacion
      //solo se accediera a la ropa e imagenes de ese personaje en especifico
      //Objetos
      this.persons.push(new Person(true, this.person1Nude, this.person1Initial, this.person1Text, this.person1hints));
      this.persons.push(new Person(true, this.person2Nude, this.person2Initial, this.person2Text, this.person2hints));
      this.persons.push(new Person(true, this.person3Nude, this.person3Initial, this.person3Text, this.person3hints));
      this.persons.push(new Person(true, this.person4Nude, this.person4Initial, this.person4Text, this.person4hints));
      this.persons.push(new Person(true, this.person5Nude, this.person5Initial, this.person5Text, this.person5hints));

      this.armarios.push(new Armario( this.person1tops, this.person1pants, this.person1shoes,0));
      this.armarios.push(new Armario( this.person2tops, this.person2pants, this.person2shoes,1));
      this.armarios.push(new Armario( this.person3tops, this.person3pants, this.person3shoes,2));
      this.armarios.push(new Armario( this.person4tops, this.person4pants, this.person4shoes,3));
      this.armarios.push(new Armario( this.person5tops, this.person5pants, this.person5shoes,4));

   }

   draw(app) {
      app.background(150);
      app.noStroke();

      //cambio de pantallas
      switch (this.currentScreen) {
         case 0:
            app.image(this.screen3, 0, 0);
            break;

         case 1:
            app.image(this.screen1, 0, 0);
            app.image(this.npc, 892, 64);
            app.fill(255, 217, 217);
            app.rect(100, 80, 600, 360, 40);
            app.fill(243, 5, 105);
            app.textLeading(27);
            app.text(this.currentText, 140, 140, 520, 240);
            app.image(this.nextButton, 300, 500, this.nextButton.width / 2, this.nextButton.height / 2);
            break;

         case 2:
            app.textSize(20);
            app.image(this.screen2, 0, 0);
            this.persons[this.personIndex].paint(app);
            app.fill(255, 217, 217);
            app.rect(500, 80, 600, 360, 40);
            app.fill(243, 5, 105);
            app.text(this.persons[this.personIndex].text, 540, 140, 520, 240);
            app.image(this.nextButton, 700, 500, this.nextButton.width / 2, this.nextButton.height / 2);
            
            break;

         case 3:
            app.image(this.screen4, 0, 0);
            //app.fill(255, 217, 217);
            app.fill(228, 131, 182,90);
            
            
            if(this.personIndex===1){
               app.rect(450, 150, 700, 450, 40);

               app.textSize(16);
               
               app.fill(255);
               app.text(this.persons[this.personIndex].hints,490, 580);
            }else{
               app.fill(228, 131, 182,90);
               app.rect(500, 150, 600, 450, 40);
               /*app.fill(172,25,166);
               app.rect(500, 550, 600, 50, 20)
               app.textSize(16);
               app.fill(255);
               app.text(this.persons[this.personIndex].hints,540, 580);*/
            }

            ///AQUI ESTAN LOS BOTONES DE LA ROPA
            app.image(this.clotheButton, 518, 75, 170, 60);
            app.image(this.clotheButton, 718, 75, 170, 60);
            app.image(this.clotheButton, 918, 75, 170, 60);
           
            app.fill(172,25,166);
            app.rect(500, 550, 600, 50, 20)
            app.textSize(16);
            app.fill(255);
            app.text(this.persons[this.personIndex].hints,540, 580); 

            this.persons[this.personIndex].paint(app);
            this.armarios[this.personIndex].paint(app);


            if(this.clickShoes){
               app.image(this.persons[this.personIndex].armario[2], this.shoesX, this.shoesY, this.persons[this.personIndex].armario[2].width/4.5, this.persons[this.personIndex].armario[2].height/4.5);
            }

            if(this.personIndex==0){
               if(this.clickTop){
                  app.image(this.persons[this.personIndex].armario[0], this.topX, this.topY,this.persons[this.personIndex].armario[0].width/4.5, this.persons[this.personIndex].armario[0].height/4.5);
               }

               if(this.clickPant){
                  app.image(this.persons[this.personIndex].armario[1], this.pantX, this.pantY, this.persons[this.personIndex].armario[1].width/4.5, this.persons[this.personIndex].armario[1].height/4.5);
               }
            }else{
               if(this.clickPant){
                  app.image(this.persons[this.personIndex].armario[1], this.pantX, this.pantY, this.persons[this.personIndex].armario[1].width/4.5, this.persons[this.personIndex].armario[1].height/4.5);
               }

               if(this.clickTop){
                  app.image(this.persons[this.personIndex].armario[0], this.topX, this.topY,this.persons[this.personIndex].armario[0].width/4.5, this.persons[this.personIndex].armario[0].height/4.5);
               }
            }
            app.textSize(16);
            app.fill(255);
            app.text("Prenda superior",543, 105);
            app.text("Prenda inferior",750, 105);
            app.text("Zapatos",970, 105);

            app.image(this.nextButton, 700, 630, this.nextButton.width / 2, this.nextButton.height / 2);

            break;

         case 4:
            app.image(this.screen1, 0, 0);

            app.textSize(20);
            app.fill(255, 217, 217);
            app.rect(380, 210, 520, 300, 40);

            app.fill(243, 5, 105);
            app.text(`Tu puntaje es: ${Math.floor(this.finalScore)}`,550, 355);
            break;

      }
   
   }

   mousePressed(app) {
      switch (this.currentScreen) {
         case 0:
            if (app.mouseX > 469 && app.mouseX < 810 && app.mouseY > 520 && app.mouseY < 610) {
               this.currentScreen = 1;
            }
            break;

         case 1:
            this.newText =
               "Primero te daré algunos consejos: \nRecuerda que los colores oscuros van bien en la noche. Acentuar las caderas se logra enfatizando la cintura. Ten muy en cuenta el clima para las prendas. Y las líneas dependiendo de su dirección pueden hacer que alguien se vea más delgado o con más peso!. Eso es todo por ahora, veamos como lo haces... \n\n¡Buena suerte! ";

            if (this.currentText == this.newText && 
               app.mouseX > 300 && app.mouseX < 300+this.nextButton.width / 2 &&
               app.mouseY > 500 && app.mouseY < 500+this.nextButton.height / 2) {
              
               this.currentScreen = 2;
               
            }else if (app.mouseX > 300 && app.mouseX < 300+this.nextButton.width / 2 &&
                        app.mouseY > 500 && app.mouseY < 500+this.nextButton.height / 2) {
               this.currentText = this.newText;
               this.btnPosY = 550;
            }
            break;

         case 2:
            if (app.mouseX > 700 && app.mouseX < 700+this.nextButton.width / 2 &&
                  app.mouseY > 500 && app.mouseY < 500+this.nextButton.height / 2) {

                  this.persons[this.personIndex].currentState = false;
                  this.currentScreen = 3;

            }
            break;

         case 3:
            if (app.mouseX > 525 && app.mouseX < 525+150 &&
                  app.mouseY > 80 && app.mouseY < 80+40) {

                  this.armarios[this.personIndex].show = 0;

            }

            if (app.mouseX > 725 && app.mouseX < 725+150 &&
                  app.mouseY > 80 && app.mouseY < 80+40) {

                  this.armarios[this.personIndex].show = 1;

            }

            if (app.mouseX > 925 && app.mouseX < 925+150 &&
                  app.mouseY > 80 && app.mouseY < 80+40) {

                  this.armarios[this.personIndex].show = 2;

            }

            if (app.mouseX > 700 && app.mouseX < 700+this.nextButton.width / 2 &&
                  app.mouseY > 630 && app.mouseY < 630+this.nextButton.height / 2) {
                     console.log(this.personIndex);
                     this.clickTop=false;
                     this.clickPant=false;
                     this.clickShoes=false;

                     if(this.personIndex < 4){
                        this.currentScreen = 2;
                        this.personIndex++;
                     }else {
                        this.currentScreen = 4;
                        this.calculate();
                     }

            }

            //elegir ropa
            if (this.personIndex == 1) {
               if(app.mouseX > 450 && app.mouseX < 683 &&
                  app.mouseY > 150 && app.mouseY < 150+450){
                     switch(this.armarios[this.personIndex].show){
                        case 0:
                           this.clickTop=true;
                           this.persons[this.personIndex].armario[0] = this.armarios[this.personIndex].tops[0];
                           break;

                        case 1:
                           this.clickPant=true;
                           this.persons[this.personIndex].armario[1] = this.armarios[this.personIndex].bots[0];
                           break;

                        case 2:
                           this.clickShoes=true;
                           this.persons[this.personIndex].armario[2] = this.armarios[this.personIndex].shoes[0];
                           break;

                     }
                     this.setPositions(this.personIndex);
               }

               if(app.mouseX > 683 && app.mouseX < 916 &&
                  app.mouseY > 150 && app.mouseY < 150+450){
                     switch(this.armarios[this.personIndex].show){
                        case 0:
                           this.clickTop=true;
                           this.persons[this.personIndex].armario[0] = this.armarios[this.personIndex].tops[1];
                           break;

                        case 1:
                           this.clickPant=true;
                           this.persons[this.personIndex].armario[1] = this.armarios[this.personIndex].bots[1];
                           break;

                        case 2:
                           this.clickShoes=true;
                           this.persons[this.personIndex].armario[2] = this.armarios[this.personIndex].shoes[1];
                           break;

                     }
                     this.setPositions(this.personIndex);

               }

               if(app.mouseX > 916 && app.mouseX < 1150 &&
                  app.mouseY > 150 && app.mouseY < 150+450){
                     switch(this.armarios[this.personIndex].show){
                        case 0:
                           this.clickTop=true;
                           this.persons[this.personIndex].armario[0] = this.armarios[this.personIndex].tops[2];
                           break;

                        case 1:
                           this.clickPant=true;
                           this.persons[this.personIndex].armario[1] = this.armarios[this.personIndex].bots[2];
                           break;

                        case 2:
                           this.clickShoes=true;
                           this.persons[this.personIndex].armario[2] = this.armarios[this.personIndex].shoes[2];
                           break;

                     }
                     this.setPositions(this.personIndex);
               }

                 
            }else {
               if(app.mouseX > 500 && app.mouseX < 700 &&
                  app.mouseY > 150 && app.mouseY < 150+450){
                     switch(this.armarios[this.personIndex].show){
                        case 0:
                           this.clickTop=true;
                           this.persons[this.personIndex].armario[0] = this.armarios[this.personIndex].tops[0];
                           break;

                        case 1:
                           this.clickPant=true;
                           this.persons[this.personIndex].armario[1] = this.armarios[this.personIndex].bots[0];
                           break;

                        case 2:
                           this.clickShoes=true;
                           this.persons[this.personIndex].armario[2] = this.armarios[this.personIndex].shoes[0];
                           break;

                     }
                     this.setPositions(this.personIndex);
               }

               if(app.mouseX > 700 && app.mouseX < 900 &&
                  app.mouseY > 150 && app.mouseY < 150+450){
                      switch(this.armarios[this.personIndex].show){
                        case 0:
                           this.clickTop=true;
                           this.persons[this.personIndex].armario[0] = this.armarios[this.personIndex].tops[1];
                           break;

                        case 1:
                           this.clickPant=true;
                           this.persons[this.personIndex].armario[1] = this.armarios[this.personIndex].bots[1];
                           break;

                        case 2:
                           this.clickShoes=true;
                           this.persons[this.personIndex].armario[2] = this.armarios[this.personIndex].shoes[1];
                           break;

                     }
                     this.setPositions(this.personIndex);
               }

               if(app.mouseX > 900 && app.mouseX < 1100 &&
                  app.mouseY > 150 && app.mouseY < 150+450){
                      switch(this.armarios[this.personIndex].show){
                        case 0:
                           this.clickTop=true;
                           this.persons[this.personIndex].armario[0] = this.armarios[this.personIndex].tops[2];
                           break;

                        case 1:
                           this.clickPant=true;
                           this.persons[this.personIndex].armario[1] = this.armarios[this.personIndex].bots[2];
                           break;

                        case 2:
                           this.clickShoes=true;
                           this.persons[this.personIndex].armario[2] = this.armarios[this.personIndex].shoes[2];
                           break;

                     }
                     this.setPositions(this.personIndex);
               }
            }

            break;
      }
   }

   setPositions(person){
      //person 1
      if(person == 0 && this.persons[person].armario[0]==this.person1Top1){
         this.topX=203;
         this.topY=202;
         this.persons[person].scoreTop=10;
      }

      if(person == 0 && this.persons[person].armario[0]==this.person1Top2){
         this.topX=163;
         this.topY=184;
         this.persons[person].scoreTop=25;
      }

      if(person == 0 && this.persons[person].armario[0]==this.person1Top3){
         this.topX=160;
         this.topY=180;
         this.persons[person].scoreTop=33.3;
      }

      if(person == 0 && this.persons[person].armario[1]==this.person1pant1){
         this.pantX=201;
         this.pantY=353;
         this.persons[person].scorePants=30;
      }

      if(person == 0 && this.persons[person].armario[1]==this.person1pant2){
         this.pantX=197;
         this.pantY=353;
         this.persons[person].scorePants=33.3;
      }

      if(person == 0 && this.persons[person].armario[1]==this.person1pant3){
         this.pantX=192;
         this.pantY=353;
         this.persons[person].scorePants=25;
      }

      if(person == 0 && this.persons[person].armario[2]==this.person1shoes1){
         this.shoesX=211;
         this.shoesY=654;
         this.persons[person].scoreShoes=33.3;
      }

      if(person == 0 && this.persons[person].armario[2]==this.person1shoes2){
         this.shoesX=213;
         this.shoesY=645;
         this.persons[person].scoreShoes=25;
      }

      if(person == 0 && this.persons[person].armario[2]==this.person1shoes3){
         this.shoesX=211;
         this.shoesY=640;
         this.persons[person].scoreShoes=15;
      }
      //person 2

      if(person == 1 && this.persons[person].armario[0]==this.person2Top1){
         this.topX=161;
         this.topY=170;
         this.persons[person].scoreTop=33.3;
      }

      if(person == 1 && this.persons[person].armario[0]==this.person2Top2){
         this.topX=157;
         this.topY=179;
         this.persons[person].scoreTop=25;
      }

      if(person == 1 && this.persons[person].armario[0]==this.person2Top3){
         this.topX=160;
         this.topY=179;
         this.persons[person].scoreTop=20;
      }

      if(person == 1 && this.persons[person].armario[1]==this.person2pant1){
         this.pantX=202;
         this.pantY=290;
         this.persons[person].scorePants=33.3;
      }

      if(person == 1 && this.persons[person].armario[1]==this.person2pant2){
         this.pantX=201;
         this.pantY=290;
         this.persons[person].scorePants=15;
      }

      if(person == 1 && this.persons[person].armario[1]==this.person2pant3){
         this.pantX=162;
         this.pantY=296;
         this.persons[person].scorePants=5;
      }

      if(person == 1 && this.persons[person].armario[2]==this.person2shoes1){
         this.shoesX=190;
         this.shoesY=560;
         this.persons[person].scoreShoes=33.3;
      }

      if(person == 1 && this.persons[person].armario[2]==this.person2shoes2){
         this.shoesX=188;
         this.shoesY=482;
         this.persons[person].scoreShoes=15;
      }

      if(person == 1 && this.persons[person].armario[2]==this.person2shoes3){
         this.shoesX=188;
         this.shoesY=539;
         this.persons[person].scoreShoes=20;
      }

      //person 3
      if(person == 2 && this.persons[person].armario[0]==this.person3Top1){
         this.topX=170;
         this.topY=176;
         this.persons[person].scoreTop=33.3;
      }

      if(person == 2 && this.persons[person].armario[0]==this.person3Top2){
         this.topX=170;
         this.topY=182;
         this.persons[person].scoreTop=5;
      }

      if(person == 2 && this.persons[person].armario[0]==this.person3Top3){
         this.topX=168;
         this.topY=189;
         this.persons[person].scoreTop=15;
      }

      if(person == 2 && this.persons[person].armario[1] == this.person3pant1){
         this.pantX=159;
         this.pantY=315;
         this.persons[person].scorePants=33.3;
      }

      if(person == 2 && this.persons[person].armario[1] == this.person3pant2){
         this.pantX=156;
         this.pantY=322;
         this.persons[person].scorePants=10;
      }

      if(person == 2 && this.persons[person].armario[1] == this.person3pant3){
         this.pantX=158;
         this.pantY=328;
         this.persons[person].scorePants=20;
      }

      if(person == 2 && this.persons[person].armario[2] == this.person3shoes1){
         this.shoesX=195;
         this.shoesY=555;
         this.persons[person].scoreShoes=33.3;
      }

       if(person == 2 && this.persons[person].armario[2] == this.person3shoes2){
         this.shoesX=195;
         this.shoesY=565;
         this.persons[person].scoreShoes=10;
      }

      if(person == 2 && this.persons[person].armario[2] == this.person3shoes3){
         this.shoesX=194;
         this.shoesY=565;
         this.persons[person].scoreShoes=25;
      }

      //person 4
      if(person == 3 && this.persons[person].armario[0] == this.person4Top1){
         this.topX=222;
         this.topY=190;
         this.persons[person].scoreTop=33.3;
      }

      if(person == 3 && this.persons[person].armario[0] == this.person4Top2){
         this.topX=180;
         this.topY=235;
         this.persons[person].scoreTop=25;
      }

      if(person == 3 && this.persons[person].armario[0] == this.person4Top3){
         this.topX=168;
         this.topY=235;
         this.persons[person].scoreTop=25;
      }

      if(person == 3 && this.persons[person].armario[1] == this.person4pant1){
         this.pantX=216;
         this.pantY=326;
         this.persons[person].scorePants=33.3;
      }

      if(person == 3 && this.persons[person].armario[1] == this.person4pant2){
         this.pantX=218;
         this.pantY=319;
         this.persons[person].scorePants=30;
      }

      if(person == 3 && this.persons[person].armario[1] == this.person4pant3){
         this.pantX=217;
         this.pantY=327;
         this.persons[person].scorePants=10;
      }

      if(person == 3 && this.persons[person].armario[2] == this.person4shoes1){
         this.shoesX=218;
         this.shoesY=591;
         this.persons[person].scoreShoes=33.3;
      }

      if(person == 3 && this.persons[person].armario[2] == this.person4shoes2){
         this.shoesX=210;
         this.shoesY=508;
         this.persons[person].scoreShoes=5;
      }

      if(person == 3 && this.persons[person].armario[2] == this.person4shoes3){
         this.shoesX=216;
         this.shoesY=598;
         this.persons[person].scoreShoes=15;
      }

      //person 5
      if(person == 4 && this.persons[person].armario[0] == this.person5Top1){
         this.topX=170;
         this.topY=200;
         this.persons[person].scoreTop=33.3;
      }

      if(person == 4 && this.persons[person].armario[0] == this.person5Top2){
         this.topX=178;
         this.topY=203;
         this.persons[person].scoreTop=27;
      }

      if(person == 4 && this.persons[person].armario[0] == this.person5Top3){
         this.topX=159;
         this.topY=210;
         this.persons[person].scoreTop=10;
      }

      if(person == 4 && this.persons[person].armario[1] == this.person5pant1){
         this.pantX=148;
         this.pantY=306;
         this.persons[person].scorePants=33.3;
      }

      if(person == 4 && this.persons[person].armario[1] == this.person5pant2){
         this.pantX=180;
         this.pantY=300;
         this.persons[person].scorePants=15;
      }

      if(person == 4 && this.persons[person].armario[1] == this.person5pant3){
         this.pantX=180;
         this.pantY=300;
         this.persons[person].scorePants=18;
      }

      if(person == 4 && this.persons[person].armario[2] == this.person5shoes1){
         this.shoesX=186;
         this.shoesY=628;
         this.persons[person].scoreShoes=33.3;
      }

      if(person == 4 && this.persons[person].armario[2] == this.person5shoes2){
         this.shoesX=188;
         this.shoesY=623;
         this.persons[person].scoreShoes=15;
      }

      if(person == 4 && this.persons[person].armario[2] == this.person5shoes3){
         this.shoesX=192;
         this.shoesY=594;
         this.persons[person].scoreShoes=5;
      }
   }

   shuffleArray(array){
      array.sort(()=> Math.random() - 0.5);
      return array;
   }

   calculate(){
      this.persons.forEach(e => {
         this.finalScore+=e.scoreTop;
         this.finalScore+=e.scorePants;
         this.finalScore+=e.scoreShoes;
      });

      console.log(this.finalScore);
   }
}

export default Game;
