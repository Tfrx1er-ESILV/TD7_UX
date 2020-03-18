# TD7_UX

#Usefull links :

To create a gitignore : 
https://www.gitignore.io

To create a dApp:
https://www.dappuniversity.com/articles/ethereum-dapp-react-tutorial


Question 1 : git repo has been sucessfully shared with the teacher

Question 2 : We've taken our past template of ERC721 with the three function _safemint x2 and _mint. Whitch makes our contract mintable.

Question 3 : We've implemented two things, a string name called SMBT and a uint256 counter that increment itslef every time the function _mint_ is called.
Having a global variable enables us to create a simple function that anyone ca call to get how many token have been created so far.

Question 4 : We have created a react app using npm and the library "create-react-app"

Question 5 :  To connect the react app to the block chain we have used web3.js. It allows us to connect to the blockchain ( locally here) and communicate with it. 

Question 6 : We have to call the public parameter 'name' of the contract with web3js and displayed it.

Question 7 : Every mint function of ERC721 are internals, because of this our Minter contract has to be an inheritance of ERC721. After these operations, we write a simple gomint function and the work is done.

Question 8 : 

Question 9 : We've set up docker and created an image to run our own "shell". That went by creating trow files, dockerfile and dockerignore. However, because of the react file package_lock.json we could run our own docker container.
We didn't kept the command we used but even with package-lock.json is our .dockerignore the error still occured.

