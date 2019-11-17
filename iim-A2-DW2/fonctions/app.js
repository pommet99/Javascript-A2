/**
 * Exercice 1 :
 * créer une fonction avec un argument, qui affiche l’argument
 */

function test1(argument){
    console.log(argument);

}
test1("Salut ca va ");

/**
 * Exercice 2 :
 * créer une fonction qui prend un nombre en argument et qui le multiplie par deux et retourne le résultat.
 */

function test2(num){
    return num * 2;
}
console.log(test2(4));

/**
 * Exercice 3 :
 * créer une fonction qui détermine si le nombre passé en argument est pair ou impaire.
 */

function modulo(nb){
    if (nb%2){
        return "impaire";
    } else{
        return "pair";
    }
}
console.log(modulo(10));

/**
 * Exercice 4 :
 * Créer une fonctionne qui s’invoque elle-même
 */

(function bonjour(a){
    console.log('bonjour :', a);
})(1);
 // mettre parathese autout fonction pour qu'elle s'invoque elle même 

/**
 * Exercice 5 :
 * Affichez la liste des arguments dans un tableau, sans directement utilisez les arguments en eux même
 */

function display(a,b,c){
    console.log(arguments);
}
display(1,2,3);

/**
 * Exercice 6 :
 * Reproduire la suite de fibonnacci : 1-1-2-3-5-8-9-17
 */

 function fibonnacci(nb){
     if(nb < 2){
         return nb;
     }
     console.log('fib :',nb);
     return fibonnacci(nb-1) + fibonnacci(nb-2);
 }

 console.log(fibonnacci(12));