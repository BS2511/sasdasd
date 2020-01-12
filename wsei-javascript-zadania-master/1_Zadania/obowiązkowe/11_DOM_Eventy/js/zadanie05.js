window.addEventListener('DOMContentLoaded', event =>{
    console.log('DOM fully loaded and parsed');

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box =>{
        box.addEventListener("click", function(){
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style = `background: ${randomColor}`; 
        });
    });
});