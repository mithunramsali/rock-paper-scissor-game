let compscore=0;
let userscore=0;


const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    // rock,paper,scissors; 
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame=()=>{
    console.log("game has draw ");
    msg.innerText="game was draw"
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose")
        msg.innerText=`you lose ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const gameplay=(userchoice)=>{
    console.log("user choice = ",userchoice);
    // generate computer choice;
    const compchoice=gencompchoice();
    console.log("comp choice = ", compchoice);
    if(userchoice==compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice=="rock"){
            // scissors,paper
            userwin=compchoice=="paper"?false:true;
        }else if(userchoice=="paper"){
            // rock,scissors
            userwin=compchoice=="scissors"?false:true;
        }
        else{
            userwin=compchoice=="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice)=>{
       choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        gameplay(userchoice);
    })
})