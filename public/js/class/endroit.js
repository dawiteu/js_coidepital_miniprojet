export class Endroit{
    static nbpers = 0; 
    constructor(nom, perspres){
        this.nom = nom; 
        this.perspres = []; 
        if(perspres != undefined){
            this.perspres.push(perspres); 
            Endroit.nbpers++; 
        }
    }
    etat(){
        //console.log(this.perspres);
        if(this.perspres != undefined){
            console.log(`dans ${this.nom} il y a ${this.perspres.length} de personnes.`); 
        }else{
            console.log('il y a encore eprsonne. ');
        }
        
    }
}