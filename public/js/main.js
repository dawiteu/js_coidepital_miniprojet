// les import's 
import {Endroit} from "./class/endroit.js"; 
import {Personne} from "./class/pers.js"; 



// constructeur\s 
let chat = { 
    type:"Animal", 
    race: "sphynx",
    maul: function(){
        setInterval( function() {
            console.log("miau"); 
        }, 1000)
    }
}
//chat.maul(); 

let cabinet = new Endroit("Cabinet");
let salleDattente = new Endroit("Salle d'attente");
let pharmacie = new Endroit("pharmatie"); 
let cim = new Endroit("Cimtière"); 


let Docteur = new Personne("Debuggteur", 0, cabinet); 

let pat1 = new Personne("Marcus", 100, "poche", "malade","mal indenté"); 
let pat2 = new Personne("Optimus", 200, "poche", "malade", "unsave"); 
let pat3 = new Personne("Sangoku", 80, "poche", "malade", "404");
let pat4 = new Personne("DarthVader", 110, "poche", "malade", "azmatique"); 
let pat5 = new Personne("Semicolon", 60, "poche", "malade", "syntaxError"); 

//let pat6 = new Personne("jspKi", 50, "poche", "malade", "covid");
let patients = []; 

let traitements = [
    {
        maladie:    "mal indenté", 
        remede:     "ctrl+maj+f",
        prix:       60
    },
    {
        maladie:    "unsave",
        remede:     "saveOnFocusChange",
        prix:       100
    },
    {
        maladie:    "404",
        remede:     "CheckLinkRelation",
        prix:       35
    },
    {
        maladie:    "azmatique",
        remede:     "Ventoline",
        prix:       40
    },
    {
        maladie:    "syntaxError",
        remede:     "f12+doc",
        prix:       20
    },
];

//console.log(traitements); 


//on deplace tout les patients ds la salle d'attente ; 
function placePatientSalleAtt(){
    for(let i=1; i < Personne.nbpers; i++){
        const patient = eval("pat"+i); // l'obj patient ;; 
        const etatDsante = Object.values(patient); 
        if(etatDsante[0] == 1 && etatDsante[4] == "malade"){
            patients.push(patient); 
            salleDattente.perspres.push(patient);
        }
    }
}


// le jeu 

//salleDattente.etat(); 
//cabinet.etat(); 

Docteur.seDeplace(cabinet); 

placePatientSalleAtt(); 

salleDattente.etat(); 

for(let i=0; i<patients.length; i++){

    const patActuel = patients[i]; 
    //console.log(patActuel); affiche l'objt personnes { ... , ... }; 

    if(patActuel.vivant == '1'){ // s'il est vivant ? 
        salleDattente.perspres.splice(salleDattente.perspres.indexOf(patActuel.nom), 1); 
        cabinet.perspres.push(patActuel); 
        console.log(`${patActuel.nom} entre au cabinet.`);
        console.log(`La malaide de ${patActuel.nom} est ${patActuel.maladie}.`);
        let trait = traitements.find(traitements => traitements.maladie == patActuel.maladie);
        if(trait){
            console.log(`Un remede existe pour cette pathologie du patient..`);
            console.log(`Le remede pour ${trait.maladie} c'est: ${trait.remede}.`);
            patActuel.argent-=50;
            Docteur.argent+=50; 
            console.log(`${patActuel.nom} a payer le docteur. `); 
            console.log(`${patActuel.nom} a maintenant ${patActuel.argent}€.`);
            cabinet.perspres.splice( cabinet.perspres.indexOf(patActuel.nom), 1); 
            console.log(`${patActuel.nom} quitte le cabinet.`); 
            patActuel.seDeplace(pharmacie);
            console.log(`Le traitement de ${patActuel.nom} coute: ${trait.prix}€.`);
            if(patActuel.argent <= trait.prix){
                console.log(`${patActuel.nom} n'as pas assez.. pour payer le trait.`);
                patActuel.vivant = 0; 
                patActuel.eds = "décédé"; 
                cim.perspres.push(patActuel); 
                console.log(`${patActuel.nom} est mort. Il est au cimtiere a la plce: ${cim.perspres.indexOf(patActuel)}`);
            }else{
                patActuel.eds="guerri";
                console.log(`${patActuel.nom} est guerri!`);
            }
        }else{
            console.log(`aucun remede possible`)
            patActuel.vivant = 0; 
            patActuel.eds = "décédé"; 
        }
        console.log('-------');
        salleDattente.etat();         
    }else{
        // le patient n'est pas vivant; 

    }

}


console.log(`Ce jour, au total, le doc. ${Docteur.nom} s'est fait ${Docteur.argent} euros.`)

console.log(patients);


/*

console.log(patients);

console.log(Docteur);


console.log(cabinet);
*/