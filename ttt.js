let boxes=document.querySelectorAll(".box");
let rebtn=document.querySelector("#rebtn");
let newGameBtn= document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msgcontainer")
let msg =document.querySelector("#msg");


let turnO= true; //playerX and playerO
let count=0; //to tack draw

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8]
];
const resetGame=()=>{
    turnO= true;
    count= 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
box.addEventListener("click", ()=> {
    if(turnO){
        //playerO
        box.innerText="0";
        turnO=false;
    }
    else{
        //playerX
        box.innerText="x"
        turnO=true;
    }
    box.disabled = true;
    
    count ++;



  let isWinner=  checkWinner();

  if (count === 9 && !isWinner){
    gameDraw();
    }
  });

});

const gameDraw =() =>{
    msg.innerText=`It's a draw. `;
    msg.container.classList.remove("hide");
    disableBoxes();
  }
 
const disableBoxes= () => {
    for(let box of boxes){
        box.disabled=true;
    }

}
const enableBoxes= () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};

const showWinner=(winner) => {
    msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner= ()=> {
    for (let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;


        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                return true;
            }

        }
    }
};

newGameBtn.addEventListener("click", resetGame);
rebtn.addEventListener("click",resetGame);





































































































