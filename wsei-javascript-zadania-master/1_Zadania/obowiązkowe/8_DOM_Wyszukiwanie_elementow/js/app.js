document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    let element = document.getElementsByClassName('title');
    getDataAnimation = function(element){
        let newelement = element[0].dataset.animation;
        return newelement;
    }
    // zadanie 2
    const nav = document.getElementsByTagName('nav')[0];
    const li = nav.getElementsByTagName('li');
    console.log(li);

    //zadanie 3
    const article = document.querySelector('article.first');
    console.log("article");
    
});


