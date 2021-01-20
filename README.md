# Game Crave

Contributors
- [Joe Lopez](https://github.com/Codo-Baggins)

## Overview

- Game Crave is an application that allows users to add games that they may be interested in to a wish list for them to come back to in the future.  

## Tech Used

- JavaScript
- React
- Router
- Jest
- Sass

## Getting Started 

1. Fork the repo by clicking the "Fork" button in the top right corner of the page
2. Clone down your forked repo to your local machine by using the command `git clone git@github.com:Codo-Baggins/game_crave.git` in your terminal
3. `cd` into the cloned down directory on your local machine 
4. Run `npm start` in the terminal 
5. Navigate to the localhost url that is provided after running the last command

## Navigating 

1. Upon loading the application, a user will be greeted with a header that has the title Game Crave and a couple of buttons for navigating to different pages next to it.  
2. Below the header, a user will see a search bar where they can type in the name of a video game. Lets go ahead and type in the name of a video game.  Try typing in Pacman, Fortnite, Call Of Duty, or any other of your favorite video games and then click the "Search For Game" button (*Note:* If the name of the video game you type is not found, then nothing will display on the page after clicking the button).  
3. Great! After searching the game you will be brought to a page that contains all of the details of that searched game. Lets go ahead and take a look at what we have.  Scrolling down the page, you will see the title of the game, all of the stores that you are able to purchase the game at, and a description about the game.  
4. Like the game that you searched but can't afford it yet? Let's go ahead and add it to your wish list.  Click on the "ADD TO WISH LIST" button that's below the game description.  
5. Sweet! Lets add another game. Scroll back to the search form at the top of the page. Try typing in "Star Wars Battlefront" or "God of War" into the search field and click the "Search For Game" button.  Now, add it to our Wish List" just as we did before by clicking the "ADD TO WISH LIST" button. Feel free to add more games by repeating this process.  
6. Awesome! Now lets take a look at all of the games that we have on the wish list. Scroll to the top of the page and click the "My Wish List" button. 
7. After completing the last step, you will be brought to a page of all the video games that have been added to your wish list.  
8. Should you want to remove any game from this list, just click on the game you want to remove. Now, you should be able to scroll down to the bottom of the page and click on the "REMOVE FROM WISH LIST" button. The game will now be out of your wish list!
9. From there, you can return home by either clicking on the "Game Crave" title or "Home" button at the top of the page.  

## Challenges
- Many previously unencountered errors really shortened how much work time I had

## Future Iterations
- Have the search form return a handlful of results from the API rather than just a single match
- Allow for user login with authentication
- Add error handling for when a game is not found
- Add additional stylings to make the site look more appealing
