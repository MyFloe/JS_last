const data = JSON.parse(card);
// console.log(data);
const AllItem = document.querySelector('.item-list');
data.forEach(element => {
    AllItem.insertAdjacentHTML('afterbegin', `
    <div class="item image">
    <img class="image__img" src="${element.img}" alt="pic1">
        <div class="image__overlay">
            <div class="apeared" id="${element.ID}">
                <img id="${element.ID}" src="${element.korzin}" alt="корзина">
                <p id="${element.ID}">${element.txtKorz}</p>
            </div>
        </div>
    <h1>${element.h1}</h1>
    <h4>${element.h4}</h4>
    <h2>${element.price}</h2>
    </div>
    `)
});

const data2 = JSON.parse(cardItems);
// console.log(data);
const CARDItem = document.querySelector('.cardItems');
data2.forEach(element => {
    CARDItem.insertAdjacentHTML('afterbegin', `
    <div class="firstcard" id="${element.IDD}" >
    
		<img class="first_img" src="${element.img}" alt="photo1"/>
		<div class="first_text">
            <h2 class="h2">${element.h2}</h2>
            <div class="first_p">
                <p>Price: <span class="price">${element.price}</span></p>
                <p>Quantity: <input type="number" value="${element.quantity}"></p>
            </div>
        </div>
        <div class="first_close"><img src="./img/Vector.png" alt="close"></div>
    </div>
    `)
    const close = document.querySelector('.first_close');
    const card = document.querySelector('.firstcard');
    close.addEventListener('click', ()=>{
        card.remove()
    })
});

// const clickCard = document.querySelector('.apeared');
// let count=0;
// let counter = 0;
// clickCard.onclick= function () {
// console.log('нажали на кнопку');
// }
// const click = function() {
//     count++;
//     console.log(`Товаров в корзине ${count}`);
// }

// clickCard.addEventListener('click', click);

const clickCards = document.querySelectorAll('.apeared');
clickCards.forEach(element =>{
    element.addEventListener('click', function(event) {
        const target=event.target;
        console.log(event.target.id);
    })
})



