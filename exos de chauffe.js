function inverser(mot) {

    var motInverse = "";



    // Solution 1 : ajouter chaque lettre au début du mot inversé

    for (var i = 0; i < mot.length; i++) {

        motInverse = mot[i] + motInverse;

    }



    // Solution 2 : parcourir le mot de la fin vers le début

    /*for (var i = mot.length - 1; i >= 0; i--) {

        motInverse = motInverse + mot[i];

    }*/



    return motInverse;

}


function vowel_count(mot) {

    var nbVoyelles = 0;

    for (var i = 0; i < mot.length; i++) {

        var lettre = mot[i].toLowerCase();

        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||

            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {

            nbVoyelles++;

        }

    }

    console.log(nbVoyelles);

}





vowel_count('hubert andre du bobard');



function my_max() {

    var arr = [2, 3, 1, 8, 6, 7];

    var max = Math.max(...arr);

    console.log(max);

}





my_max();