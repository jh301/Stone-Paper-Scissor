var Result = document.getElementById("rslt")
var FinalResult = document.getElementById("final-result")
// functi   on result();
var pl1=0
var pl2=0

var a=["Stone","Paper","Scissor"]


function strt(){
    Result.textContent ="Player one Chance"
}

function ply1(){
    pl1 = Math.floor(Math.random()*3)
    Result.textContent = a[pl1]
}
function ply2(){
    pl2 = Math.floor(Math.random()*3)
    Result.textContent +=" "+ a[pl2]
    result()
}


 function result(){
    let res =" "
    if(pl1 == 0 && pl2 == 1){
        res = "Player 2"+"  Winner!!" 
    }
    else if(pl1 == 0 && pl2 == 2){
        res = "Player 1"+"  Winner!!" 
    }
    else if(pl1 == 1 && pl2 == 2){
        res = "Player 2"+"  Winner!!" 
    }
    else if(pl1 == 2 && pl2 == 0){
        res = "Player 2"+"  Winner!!" 
    }
    else if(pl1 == 2 && pl2 == 1){
        res = "Player 1"+"  Winner!!" 
    }
    else if(pl1 == 1 && pl2 == 0){
        res = "Player 1"+"  Winner!!" 
    }
    else{
        res = "Draw"
    }
    FinalResult.textContent = res   
}
function rul(){
    document.getElementById("rul").textContent = "Rule's"
}