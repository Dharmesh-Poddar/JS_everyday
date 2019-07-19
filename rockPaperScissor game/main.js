let userScore =0 ;
let computerScore =0;
const userScore_span =document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".score-board");
const resultp = document.querySelector(".result > p");
const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissors_div= document.getElementById("s");

function convertWord(word) {
    if(word=="r")
      return "rock";
    else if(word =="p")
       return "paper";
       else 
        return 
          scissor;

}

function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML =userScore;
    computerScore_span.innerHTML =computerScore;
    resultp.innerHTML= `${convertWord(userChoice)}  beat ${convertWord(computerChoice)}`;





}

function getComputerChoice(){
   
    const choices= ['r','p','s'];
    const randomChoice= Math.floor(Math.random()*3);

    return choices[randomChoice];
}
function game(userChoice){
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice)
   {
       case "rs":
       case "pr":
       case "sp":
         win(userChoice, computerChoice);

         break;
       case "rp":
       case "ps":
       case "sr":
       console.log("user loses");
          break;
       case "rr":
       case "pp":
       case "ss":
        console.log("its a draw. ");
        break;


   }
   



}

function main(){


rock_div.addEventListener('click',function(){
    game("r");


})

paper_div.addEventListener('click',function(){
   game("p");


})
scissors_div.addEventListener('click',function(){
 game("s");

})
}

main();
