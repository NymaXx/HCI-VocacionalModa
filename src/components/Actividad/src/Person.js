class Person {
   constructor(currentState, nude, initial, text,hints) {
      this.currentState = currentState; //si esta vestido o desvestido
      this.armario = [null,null,null];
      this.nude = nude;
      this.initial = initial;
      this.text = text;
      this.hints = hints;
      this.scoreTop=0;
      this.scorePants=0;
      this.scoreShoes=0;
   }

   paint(app) {
      if(this.currentState){
         app.image(this.initial, 160, 87,this.initial.width/4.5, this.initial.height/4.5);
      }else{
         app.image(this.nude, 160, 87,this.nude.width/4.5, this.nude.height/4.5);
      }

   }

}

export default Person;
