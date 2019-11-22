// function enterTheCode()
window.onload = function() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    document.getElementById("container").innerHTML = this.responseText;
    var data = JSON.parse(this.responseText);
    
    
     var res=" ";
     for(var i=0;i<10;i++)
     {
       res =res+ "<p>" + data.articles[i].content + data.articles[i].description + "</p><br>";
      // container.append(res);
      
    document.getElementById("container").innerHTML = res ;
      console.log(res);
     }
    // document.getElementById("container").innerHTML = res ;
    //   document.getElementById("container").innerHTML=image;
   }
  };
  xmlhttp.open("GET", "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4a91622c18c14216a9c5dcac181ef7a0", true);
  xmlhttp.send();
 }
 
 
 
 
 
