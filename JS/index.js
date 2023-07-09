var CountDowData = new Date ("January 01, 2023 01:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = CountDowData - now;
    var days = Math.floor(distance / (24*60*60*1000));
    var hours = Math.floor((distance % (24*60*60*1000))/ (60*60*1000));
    var minutes = Math.floor((distance % (60*60*1000))/ (60*1000));
    var seconds = Math.floor((distance % (60*1000))/ 1000);
   
    document.getElementById("res").innerHTML = ""; 
    if (days > 0){
    document.getElementById("res").innerHTML += days + "dias &#9910; " ; 
    document.getElementById("res").innerHTML += hours + "horas &#9910; "  ; 
    document.getElementById("res").innerHTML += minutes + "minutos &#9910; " ;
    document.getElementById("res").innerHTML += seconds + "segundo" ;
   }

   else if (hours > 0){
      document.getElementById("res").innerHTML += days + "dias &#9910; " ; 
      document.getElementById("res").innerHTML += hours + "horas &#9910; "  ; 
      document.getElementById("res").innerHTML += minutes + "minutos &#9910; " ;
      document.getElementById("res").innerHTML += seconds + "segundo" ;
     }

     else if (minutes > 0){
      document.getElementById("res").innerHTML += days + "dias &#9910; " ; 
      document.getElementById("res").innerHTML += hours + "horas &#9910; "  ; 
      document.getElementById("res").innerHTML += minutes + "minutos &#9910; " ;
      document.getElementById("res").innerHTML += seconds + "segundo" ;
     } else {
      document.getElementById("res").innerHTML += "&#9910" + seconds + "&#9910";
     }

         if (distance <= 0){
            clearInterval(x);
            Document.getElementById("res").innerHTML = "Fim do ano novo";
            document.getElementById ("res2").style.display = "block";
         }
}, 1000);

