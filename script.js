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

/* we sort randomly the images */
carte.sort(() => {
    return 0.5 - Math.random();
});

const container = document.querySelector('.container');
const cacheClicked = [];


for(let i = 0; i < carte.length; i++){
    const cacheImage = document.createElement('img');
    cacheImage.setAttribute('src', 'images/blankgreen.jpg');
    cacheImage.setAttribute('data-id', i);
    container.appendChild(cacheImage);
    
    cacheImage.addEventListener('click', flipCacheImage);
}


function flipCacheImage(e){
    const carteId = this.getAttribute('data-id');
    cacheClicked.push(carte[carteId]);
    
} 


/*
    Comment mettre une image random derrière un cache image chaque fois qu'on clique ??

        - j'attribue un id à chaque cache image,
        - à chaque id sera associé une image random de carte quand on aura cliqué dessus,
            en d'autre terme, il faut que je fasse correspondre les id
            par exemple, si je clique sur le cache id 3, ça considera que j'ai cliqué sur un id de la carte 

*/

/* 
        fonction flip cacheImage

    - je défini un id de mon tableau de carte équivalent à mon cache, : 
    - je défini un tableau de la carte choisit dont je vais attribuer un id.. carteClicked[cardID].push(carte) 

*/