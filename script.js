function creerCompte(initiale) {
 var solde = initiale;
return {
retirer : function(montant) {
 if (solde - montant >= 0) {
 solde = solde - montant;
 return  "Voici votre argent : $ " +
montant;
 }
 return "solde insuffisants."
},
deposer: function(montant) {
 solde = solde + montant;
 return 
},
verifierSolde : function () {
    return "Votre solde est :" + solde
}
 }}

 function makeCounter(initiale) {
    var number = initiale
    return {
        up : function () {
            number++ 
            return number
        },
        down : function () {
            number--
            return number
        },
        reset : function () {
            return initiale
        }
    }
 }
 var x = makeCounter(4)




 function Tv(chaine) {
    var n = chaine
    n = 0
    return {
         watch : function () {
        return "vous regardez maintenant la chaîne " + n
       },
         changeChannel : function (x) { 
         n += x
        return "changement vers la chaîne " +  n
       } 
    }
}
var maTv = Tv()