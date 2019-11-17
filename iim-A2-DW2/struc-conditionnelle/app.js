/**
 * Exercice 1 :
 * Écrire un code qui affiche en fonction de l’âge, majeur ou mineur.
 */
/*const age = prompt('ton age ?');

if (age >= 18){
    alert('majeur');
}
else{
    alert('mineur');
}*/



/**
 * Exercice 2 :
 * Ecrire un code qui affiche en fonction de l’heure (entre 0 et 24) : Bon réveil (entre 0 et 8), Bonjour (entre 8 et 17),
 * Bonsoir (entre 17 et 22) et Bonne nuit (entre 22 et 8) et par défaut il affichera  Heuu.
 */

 var heure = prompt('quel heure ?');

 if (heure < 8){
     alert('Bon réveil');
 }
 else if (heure>8 && heure<17){
     alert('Bonjour');
 }
 else if (heure>17 && heure<22){
     alert('Bonsoir');
 }
 else{
    alert('Bonne Nuit');
}

/**
 * Exercice 3 :
 * Même que exercice 1, mais utilisé les conditions ternaires
 */
const age2;
 console.log (const age2 = +promt ('ton age ?') >=18 ? alert ('majeur') : alert ('mineur'));
