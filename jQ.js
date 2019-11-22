/* Player with player id */
function loadCity() {
   var str = document.getElementById("search").value;
  
   if (str.length == 0) {
    document.getElementById("container").innerHTML = "";
    return;
   } else {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      //  document.getElementById("container").innerHTML=this.responseText;
      var obj = JSON.parse(this.responseText);
  
  
      var sunset = "<p>" + "Sunset At: " + obj[1].sunset + "<p>";
      var sunrise = "<p>" + "Sunrise At: " + obj[3].sunrise + "<p>";
      document.getElementById("container1").innerHTML = sunset + sunrise;
  
     }
    }
   }
   xhr.open("GET", "https://sun.p.rapidapi.com/api/sun/?latitude=38.0000&longitude=-97.0000&date=2016-06-01", true);
   xhr.setRequestHeader("x-rapidapi-host", "sun.p.rapidapi.com");
   xhr.setRequestHeader("x-rapidapi-key", "f9aa842f69msh2171bbb34d0207fp137acajsn94bdc1c33c6a");
   xhr.send();
  
  }
  /* Player with player id Ends */