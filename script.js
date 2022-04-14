const carte = [
    {
        name : 'toad',
        img : 'images/toad.png'
    },
    {
        name : 'superman',
        img : 'images/superman.jpg'
    },
    {
        name : 'donald',
        img : 'images/donald.jpg'
    },
    {
        name : 'toad',
        img : 'images/toad.png'
    },
    {
        name : 'superman',
        img : 'images/superman.jpg'
    },
    {
        name : 'donald',
        img : 'images/donald.jpg'
    }
];


carte.sort(() => {
    return 0.5 - Math.random();
});


/****************************************************
 *              Declaration of DOM
 * **************************************************/
const container = document.querySelector('.container');
const result = document.querySelector('span');

/****************************************************
 *              Declaration of tables
 * **************************************************/
let cacheClicked = [];
let cacheClickedId = [];
const carteWon = [];

/****************************************************
 *  Here we're going to create our cache card
 * it supposed to hide all our images 
 ****************************************************/
for(let i = 0; i < carte.length; i++){
    const cacheImg = document.createElement('img');
    cacheImg.setAttribute('src', 'images/blankgreen.jpg');
    cacheImg.setAttribute('data-id', i);
    container.appendChild(cacheImg);

    cacheImg.addEventListener('click', flipCard);
}



function flipCard(){
    const carteId = this.getAttribute('data-id');
    cacheClicked.push(carte[carteId].name);
    cacheClickedId.push(carteId);
    this.setAttribute('src', carte[carteId].img);

    if(cacheClicked.length === 2){
        setTimeout(showResult, 100);
    }
}

function showResult(){
    const image = document.querySelectorAll('img');
    const carteFirstSelectId = cacheClickedId[0];
    const carteSecondSelectId = cacheClickedId[1];

    if(cacheClicked[0]===cacheClicked[1]){
        alert('Great.. you found a match');
        image[carteFirstSelectId].setAttribute('src', 'images/white.png');
        image[carteSecondSelectId].setAttribute('src', 'images/white.png');
        carteWon.push(cacheClicked);
        console.log(carteWon);
    }else{
        image[carteFirstSelectId].setAttribute('src', 'images/blankgreen.jpg');
        image[carteSecondSelectId].setAttribute('src', 'images/blankgreen.jpg');
        alert('try again');
    }

    cacheClickedId = [];
    cacheClicked = [];

    result.textContent = carteWon.length;

    if(carteWon.length === carte.length/2){
        result.textContent = 'Congratulation, you won the game...';
    }
}
