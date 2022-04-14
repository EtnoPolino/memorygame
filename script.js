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
 *              Declaration of variables
 * **************************************************/
const container = document.querySelector('.container');

/****************************************************
 *  Here we're going to create our cache card
 * it supposed to hide all our images 
 ****************************************************/
for(let i = 0; i < carte.length; i++){
    const cacheImg = document.createElement('img');
    cacheImg.setAttribute('src', 'images/blankgreen.jpg');
    container.appendChild(cacheImg);

    cacheImg.addEventListener('click', flipCard);
}

/***
 * 
 */

function flipCard(){

}