const toggle = document.getElementById('toggle');
const flexy = document.getElementById('flexy');
const Basic = document.getElementById('Basic');
const Proffesional = document.getElementById('Proffesional');
const Master = document.getElementById('Master');
const pricebox1 = document.querySelector('.price-box1');
const pricebox2 = document.querySelector('.price-box2');
const pricebox3 = document.querySelector('.price-box3');

Basic.addEventListener('click', (e) => {
    pricebox1.classList.add('price-box-premium');
    pricebox2.classList.remove('price-box-premium');
    pricebox3.classList.remove('price-box-premium');
});
Master.addEventListener('click', (e) => {
    pricebox3.classList.add('price-box-premium');
    pricebox1.classList.remove('price-box-premium');
    pricebox2.classList.remove('price-box-premium');
});
Proffesional.addEventListener('click', (e) => {
    pricebox2.classList.add('price-box-premium');
    pricebox1.classList.remove('price-box-premium');
    pricebox3.classList.remove('price-box-premium');
});

toggle.addEventListener('change', (e) => {
    flexy.classList.toggle('show-mjesecno');

});