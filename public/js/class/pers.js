export class Personne{
    static nbpers = 0; 
    static autres = [ 
        {nom: 'poche'},
        {nom:  'cabinet'}
    ]; // c'est soit une poche soit un cabinet. []; 

    constructor(nom, argent, autre, eds=0, maladie=0){ // eds Etat de Sante ;
        this.vivant = 1; 
        this.nom = nom; 
        this.argent = argent; 

        // j'avoue, c'est ULTRA sale. Mais ca fonctionne.
        if(autre != undefined){ 
            if(autre == "poche"){
                this.poche = [];
                //this.poche.push(autre); 
            }else{
                this.cabinet = []; 
                //this.cabinet.push(autre);
            }
        }
        eds != 0 ? this.eds = eds: null; 
        maladie != 0 ? this.maladie = maladie : null; 
        // si eds != 0 && == malade ==> alors ajouter maladie. Ce sera pour le v0.2 beta
        Personne.nbpers++;
    }
    seDeplace(nvendroit){ 
        console.log(`${this.nom} se deplace vers ${nvendroit.nom}.`);
        nvendroit.perspres.push(this); 
    }
}