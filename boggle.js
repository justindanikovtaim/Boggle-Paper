let boggleCube = [];
initializeBoard();

function initializeBoard(){
    let rowSpacer = 100;
let columnSpacer = 225;
let currentCube = 0; //cube counter

    for (i = 0; i < 4; i++) {
        for (x = 0; x < 4; x++) {
            boggleCube[currentCube] = document.createElement("img"); //create each of the 81 squares as an image in the document
            boggleCube[currentCube].src = "Images/boggleA.png"; //temporarily set image source 
            boggleCube[currentCube].style.width = "100px"; //currentCube to fit board
            boggleCube[currentCube].style.position = "absolute";
            boggleCube[currentCube].style.right = columnSpacer + "px"; //set the distance from the right side of the board
            boggleCube[currentCube].style.top = rowSpacer + "px"; //set the distance from the top
            boggleCube[currentCube].setAttribute("id", currentCube);
            document.getElementById("grid").appendChild(boggleCube[currentCube]); //add the image to the currentCubereen
    
            columnSpacer += 100; //add space between the right side for the next piece
            currentCube++; //move to the next square
        }
        rowSpacer += 100; //add space between the top for the next row
        columnSpacer = 225; // start back at the right side of the board
    }
}

let rotateAngles = [0, 90, 180, 270];
let rotateNum;
let randomNumber;
let Allcubes = [["U","M","C","O","T","I"], ["P","C","H","O","A","S"], ["S","D","I","Y","T","T"], 
                ["X","R","D","I","L","E"], ["L","Z","H","R","N","N"], ["I","U","N","E","S","E"],
                ["A","B","B","O","O","J"], ["W","T","O","O","T","A"], ["T","O","E","S","I","S"],
                ["L","D","E","Y","R","V"], ["I","H","N","U","Q","M"], ["E","Y","T","L","R","T"],
                ["E","H","N","E","G","W"], ["F","A","K","P","S","F"], ["E","A","N","A","E","G"],
                ["R","V","T","H","E","W"]];
let randomCubeOrder = [];
let possibleCubeNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function shuffle(){
    for(x = 0; x < 16; x ++){ //assign 0 - 15 in a random order in the array
        randomNumber = Math.floor(Math.random() * possibleCubeNumbers.length);
        randomCubeOrder[x] = possibleCubeNumbers[randomNumber];
        possibleCubeNumbers.splice(randomNumber, 1);//remove the number used from the array
        console.log(randomCubeOrder);
        console.log(possibleCubeNumbers);
    }

    for(i = 0; i<16; i++){
        randomNumber = Math.floor(Math.random() *6);//get a random number between 0 and 5
        rotateNum = rotateAngles[Math.floor(Math.random() * 4)]; //set the roation to one of the values in the Angles array
        boggleCube[i].style.transform = "rotate(" + rotateNum +"deg)"; 
        boggleCube[i].src = "Images/boggle" + Allcubes[randomCubeOrder[i]][randomNumber] + ".png";//set the source of the boggle cube
    }
    possibleCubeNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];// reset the array
}