# memorygame

we're going to create a memory game.

there are 6 images, you'll click on you of them and will try to find the one that are the same.
    how much try will i put ? dont know...
    score counting..
    Failed Attempt counting..

Keeping thing simple


-----------------------------------------------------------------

We will define a fixed id for each of of blankgreen cart we created.
we will try to associate everyelement of our array CARTE to an ID we previously created
  
  We will define an id for each of of blankgreen cart we created.
  we will try to associate everyelement of our array CARTE to an ID we previously created
  so we're supposed to have schematically for our CARD when we click
       [id, name of the image];
  Everytime we click, we will put the name in a array, when this latter array reach a rank of 2, we compare index 0 and 1
   if they have the same name, show our message 'you won' and we put an white card to hide the card finded, or else we just continue.

------------------------------------------------------------------
                
    algorithm for the flipCard ?

 *  declaration 'in scope' of variable :  CARTE_ID = CacheImg.ID
 *  declaration 'outside scope' of variable as empty Array : CacheClicked
 *         fill CacheClicked with carte(CARTE_ID).name              // this give us the name of image everytime we click
 *  declaration 'outside scope' of variable as empty Array : CacheCLickedID
 *         fill CacheCLickedID with CacheCLickedID with CARTE_ID
 * 
 *      if lenght of CacheClicked == 2 then
 *          we set a timeOut function with the subfunction "SHOWRESULT" with 100ms                // the point for this is to allow both image to appear before diplaying our alert function              
 * 

 -------------------------------------------------------------------
    
    algorithm for the SHOWRESULT function

*      here everytime we will have to cover the correct result with a white card as said above, so for the ID's concerned we will attribuate them a white card
 *      
 *  declaration 'in scope' of variable (DOM) querySelectorAll  : Image
 *  declartion 'in scope' of variable of the ID's selected : carteFirstSelectId, carteSecondSelectId  
 *      
 *     if CacheClicked[0] === CacheClicked[1] then
 *          alert of victory...
 *          set the attribute of Image[carteFirstSelectId] with image of a white card
 *          set the attribute of Image[carteSecondSelectId] with image of a white card
 *     or else
 *          set the attribute of Image[carteFirstSelectId] with image of a blankgreen card
 *          set the attribute of Image[carteSecondSelectId] with image of a blankgreen card
 *          alert of losing...
 *     end if
 *          
 * 
 * 
 * 
 *Now we need to write the score and define the score.. the maximum score should be 3 because we have 3x2 same elements on our carte array.. So for
 * so max_score = n / 2   with n being the lenght of carte array
 * 
 *      Declaration 'outside scope' of a variable (DOM) querySelector : Result
 *      Declaration 'outside scope' of variable as empty Array : carteWon
 * 
 *      Result.TextContent = lenght of carteWon
 *      
 *      if (lenght of carteWon === carte.lenght / 2 ) then
 *          Result.TextContent = 'End of the game...'
 *      end if.


/**
  * One problem... when we click 2 times on the same image, it count it :( 
  */