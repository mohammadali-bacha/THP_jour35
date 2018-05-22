function my_max() {

    var arr = [2, 3, 1, 8, 6, 7];

    var max = Math.max(...arr);

    console.log(max);

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



function reverse(mot) {

    var motInverse = "";

    // parcourir le mot de la fin vers le début

    for (var i = mot.length - 1; i >= 0; i--) {

        motInverse = motInverse + mot[i];

    }



    console.log(motInverse);

}



my_max()

vowel_count('hubert andre du bobard');

reverse('Bonjour monde !')