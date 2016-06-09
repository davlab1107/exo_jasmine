/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire. 
 */
var tailleString = function (texte) {
   var taille = texte.length;
    return taille ;
}
var remplaceECar = function (texte) {
    var replacement = texte.replace ("e"," ");
    return replacement;
}
var concatString = function (texte1, texte2) {
    var concatene = texte1 + texte2;
    return concatene;
}
var afficherCar5 = function (texte) {
    var str="texte";
    var supprstr = str.substring(1,2,3,4);
    return supprstr;
;
}
var afficher9Car = function (texte) {
    var str="Je dirait même qu\'ils sont excellent";
    var supprstr = str.substring(0,9);
    return supprstr;
   
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.replace(/^\s+/g,'').replace(/\s+$/g,'');
    
}
var IsString = function (texte) {
    return texte.IsString=true;
}
var AfficherExtensionString = function (texte) {
 return texte.split (".").pop();
}
var NombreEspaceString = function (texte) {
    return texte.split(' ').length - 1;
    
}
var InverseString = function (texte) {
    var texte = ('Après demain, à partir d\'aujourd\'hui?');
    return texte.split("").reverse().join("");
   
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    var x = 2;
    var y = 3;
   return Math.pow (x,y);
}
var valeurAbsolue = function () {
    return Math.abs(5);
}
var valeurAbsolueArray = function (ARRAY) {
  
return ARRAY.map (Math.abs);
}


var sufaceCercle = function () {
    x = 3.14;
    puissance = Math.pow(5,2);
    résultat = Math.round(x * puissance);
      
    return résultat;
}
var hypothenuse = function (ab, ac) {
     AC = Math.pow(5,2);
   AB = Math.pow(8,2);
   
   hypothenuse = AC + AB
   résultat = Math.sqrt(hypothenuse)
   
   return résultat;
    
    
}
var calculIMC = function (poids, taille) {
    poids = 65;
    taille = 1.75 * 1.75;
    
    IMC = Math.round ((poids / taille) * 100)/100;
    return IMC;
}