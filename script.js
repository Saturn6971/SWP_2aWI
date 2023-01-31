window.onload = function () {
    var name = prompt("What is your name");
    
    var space = document.getElementById("space");
    
    space.innerHTML = name + "'s Bakery";
}






var num = 0;
let text = document.getElementById("Levels").innerHTML;
function cookieClick()  {num += 1;
    var numbers = document.getElementById('num');
    numbers.innerHTML=num;

    




if ( num > 50){
    num +=5;
    // lvl1
    document.getElementById("Levels").innerHTML = text.replace("LVL = 1", "LVL = 2");
   
}
if (num > 150){
    num +=10;
    // lvl2
    document.getElementById("Levels").innerHTML = text.replace("LVL = 1", "LVL = 3");
}
if(num>500){
    num +=69;
    document.getElementById("Levels").innerHTML = text.replace("LVL = 1", "LVL = 4");
}   //lvl3

if( num >= 1000){
    num += 800;
    document.getElementById("Levels").innerHTML = text.replace("LVL = 1", "LVL = MAX");

} //lvl ende
}


function popUP() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  
  function never() {
    location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
  }


 