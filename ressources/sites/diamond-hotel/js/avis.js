
const stars = document.querySelectorAll(".note-notation i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        console.log(index1);
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('note-color') : star.classList.remove('note-color')
        })
   }) 
});

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function () {
    body.classList.toggle('open');
});