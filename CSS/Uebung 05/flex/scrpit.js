var penis = 1
 
 
let text = document.getElementById("Levels").innerHTML;
function penisClick()  {penis += 1;
    var numbers = document.getElementById('penis');
    numbers.innerHTML=penis;


    if ( penis > 50){
    penis +=1;
    // lvl1
    document.getElementById("Levels").innerHTML = location.replace("https://www.youtube.com/watch?v=9Ew461CAlmQ"); 
    
}
}