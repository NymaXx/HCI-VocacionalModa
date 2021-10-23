class Armario{
    constructor(tops, bots,shoes, index){
        this.show = 0;
        this.index = index;
        this.tops = tops;
        this.bots = bots;
        this.shoes= shoes;
    }

    paint(app) {
        switch(this.show){
            case 0:
                for (let i = 0; i < this.tops.length; i++) {
                    const e = this.tops[i];
                    if(this.index==1){
                        app.image(e, 480+(i*220), 280,e.width/5, e.height/5);
                    }else{
                        app.image(e, 560+(i*180), 280,e.width/5, e.height/5);
                    }
                }
                break;

            case 1:
                for (let i = 0; i < this.bots.length; i++) {
                    const e = this.bots[i];
                    if(this.index==1){
                        app.image(e, 480+(i*220), 230,e.width/4.5, e.height/4.5);
                    }else{
                        app.image(e, 560+(i*180), 230,e.width/4.5, e.height/4.5);
                    }
                    
                }
                break;

            case 2:
                for (let i = 0; i < this.shoes.length; i++) {
                    const e = this.shoes[i];
                    if(this.index==1){
                        app.image(e, 480+(i*220), 340,e.width/4.5, e.height/4.5);
                    }else if (this.index==3){
                        app.image(e, 560+(i*180), 280,e.width/4.5, e.height/4.5);
                    }else{
                        app.image(e, 560+(i*180), 340,e.width/4.5, e.height/4.5);
                    }
                }
                break;
        }
   }
}

export default Armario;