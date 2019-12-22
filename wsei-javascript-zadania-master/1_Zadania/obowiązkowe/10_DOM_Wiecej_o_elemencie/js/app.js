document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

});

// zadanie 2

    document.getElementById("name").innerHTML = "test";

//zadanie 4

//otrzymamy listę wszystkich elementów li    
const lst = document.querySelectorAll(".ex4 ul li");
for(let i = 0; i < lst.length; i++){
    if(i%2==0){
    lst[i].dataset.id = i;
    }
}

//const to zmienna której nie można redefiniować 
