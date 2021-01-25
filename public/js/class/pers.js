export class Personne{
    static nbpers = 0; 
    static autres = [ 
        {nom: 'poche'},
        {nom:  'cabinet'}
    ]; // c'est soit une poche soit un cabinet. []; 

    constructor(nom, argent){ // eds Etat de Sante ;
        this.vivant = 1; 
        this.nom = nom; 
        this.argent = argent; 
        Personne.nbpers++;
    }
    seDeplace(nvendroit){ 
        console.log(`${this.nom} se deplace vers ${nvendroit.nom}.`);
        nvendroit.perspres.push(this); 
    }
}

export class Patient extends Personne{
    constructor(nom, argent, eds=0, maladie=0){
        super(nom,argent); 
        this.poche = []; 
        eds != 0 ? this.eds = eds: null; 
        maladie != 0 ? this.maladie = maladie : null; 
    }
}

export class Docteur extends Personne{
    constructor(nom, argent){
        super(nom, argent); 
        this.cabinet = []; 
    }
}