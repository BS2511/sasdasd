window.addEventListener('DOMContentLoaded', (event) =>{
    console.log('DOM fully loaded and parsed');

    const buttons = [
        document.querySelector('#button1'),
        document.querySelector('#button2'),
        document.querySelector('#button3'),
    ];

    const counters = [...document.querySelectorAll('.counter')];

    buttons.forEach((button,index) => {
        button.addEventListener('click', () =>{
            const value = parseInt(counters[index].innerText);
            //dokończ tutaj
        })
    })
})