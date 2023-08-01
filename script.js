let image1=document.getElementById("image1");
let image2= document.getElementById("image2");
let btn1 =document.getElementById("buttonfire");
let btn2 =document.getElementById("buttonice");
let btn3= document.getElementById("result");
let display =document.getElementById("span");
let reset=document.getElementById("reset");

let user1=randomNum();
let user2=randomNum();
btn1.addEventListener("click",function(){
    
    
    image1.src=`./img/fire${user1}.png`;
    btn1.disabled=(true);
    btn2.addEventListener("click",function(){
        
        image2.src=`./img/ice${user2}.png`;
        btn2.disabled=(true);
        btn3.addEventListener("click",function(){
            const result = checkResult(user1,user2);
            display.innerText=result;
            btn3.disabled=(true);
         
        })
    })
})
reset.addEventListener("click", function () {
      image1.src = `./img/fire1.png`; 
image2.src = `./img/ice1.png`;
 btn1.disabled = false;
  btn2.disabled = false;
   btn3.disabled = false; 
   
    display.innerText = "";
     user1 = randomNum();
      user2 = randomNum(); });
function randomNum(){
    const randomNumber=Math.floor(1+Math.random()*6);
    return randomNumber;
}
function checkResult(dice1,dice2){
    if(dice1>dice2){
        return "Player 1 wins!";
    }else if(dice1<dice2){
        return "Player 2 wins!";
    }
    else{
        return "It is a tie.";
    }

}