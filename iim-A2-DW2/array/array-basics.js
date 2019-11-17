/**
 * Exercice 1 :
 * Créez un tableau
 */
let array =[];
/**
 * Exercice 2
 * Créez un tableau avec des valeurs initiales : "orange", "red", "pink", "blue"
 */
let array1 = Array("orange", "red", "pink" ,"blue");
console.log(array1);
/**
 * Exercice 3
 * Créez un tableau ramplie de false et un maximum de 10 entrées
 */
let array2 = Array(10).fill(false);
console.log(array2);
/**
 * Exercice 4
 * Créez un tableau et ajoutez-y plusieurs valeurs
 */
let array3=[];
console.log(array3.push(1));
/**
 * Exercice 5
 * Créez un tableau et affichez la valeur deuxième valeur
 */
let array4=[1,2];
array4[1];
console.log(array4[array4.length-1]);

/**
 * Exercice 6
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la deuxième valeur
 */
let array5 = Array(10).fill(fruits);
console.log(array5);
array5.splice(1,2);
console.log(array5);


/**
 * Exercice 7 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la première valeur
 */
let array6 = Array(10).fill(veggies);
console.log(array6);
array6.shift();
console.log(array6);

/**
 * Exercice 8 :
 * Créez un tableau et ajoutez-y 10 éléments et supprimez la dernière valeur
 */
let array7 = Array(10).fill(proteins);
console.log(array7);
array7.pop();
console.log(array7);

/**
 * Exercice 9 :
 * Créez une matrice (un tableau à deux dimension x et y) et initialisez les valeurs de x et y à 0
 */
let array8 = [[0, 0],[0, 0],[0, 0]];


/**
 * Exercice 10 :
 * Créez une matrice (un tableau à deux dimension x et y) et affichez toute les valeurs
 */
for(let i = 0; i <= arr.length -1; i++){
    console.log('ma position :', arr[i]);   // si i = 0 => arr[0]
}

arr.forEach(function(o){
    console.log('ma position 2 :', o);
});


// Exo 11 : Immutabilité

const arr1 = ['Tab1'];
const arr2 = arr1;
arr1.splice(0,1);
console.log('arr 1 :', arr1);
console.log('arr 2 :', arr2);

const arrr1 = ['Tab1'];
const arrr2 = arrr1;