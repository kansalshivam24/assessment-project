// function enterTheCode()
window.onload = function() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    document.getElementById("container").innerHTML = this.responseText;
    var data = JSON.parse(this.responseText);
    //  console.log("Where is my data!!!", data);
 
 
    var res = "<p>" + data.articles[0].author + data.articles[0].content + data.articles[0].description + "</p><br>"
    var res1 = "<p>" + data.articles[1].author + data.articles[1].content + data.articles[1].description + "</p><br>"
    var res2 = "<p>" + data.articles[2].author + data.articles[2].content + data.articles[2].description + "</p><br>"
    var res3 = "<p>" + data.articles[3].author + data.articles[3].content + data.articles[3].description + "</p><br>"
    var res4 = "<p>" + data.articles[4].author + data.articles[4].content + data.articles[4].description + "</p><br>"
 
 
    //  var res=" ";
    //  for(var i=0;i<10;i++)
    //  {
    //    res=res+"<p>"+obj[i].name+"</p>"
    //  }
    document.getElementById("container").innerHTML = res + res1 + res2 + res3 + res4;
    //   document.getElementById("container").innerHTML=image;
   }
  };
  xmlhttp.open("GET", "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=4a91622c18c14216a9c5dcac181ef7a0", true);
  xmlhttp.send();
 }
 
 
 
 
 
 
 
 
 
 
 
 //     function abc(){
 //         var data = null;
 
 // var xhr = new XMLHttpRequest();
 // // xhr.withCredentials = true;
 
 // xhr.addEventListener("readystatechange", function () {
 // 	if (this.readyState === this.DONE) {
 //         var data1 = JSON.parse(this.responseText);
 
 //         var sunrise = "<p>"+"Sunrise At: "+data1['sunrise']+"<p>";
 //         var sunset = "<p>"+"Sunset At: "+data1[1].sunset+"<p>";
 //         document.getElementById("container1").innerHTML=sunrise+sunset;
 
 // 		// console.log(data1);
 // 	}
 // });
 
 // xhr.open("GET", "https://sun.p.rapidapi.com/api/sun/?latitude=38.0000&longitude=-97.0000&date=2016-06-01",true);
 // xhr.setRequestHeader("x-rapidapi-host", "sun.p.rapidapi.com");
 // xhr.setRequestHeader("x-rapidapi-key", "f9aa842f69msh2171bbb34d0207fp137acajsn94bdc1c33c6a");
 
 // xhr.send(data);
 //         }
 
 //         function loadCity(){
 //             var city=document.getElementById("searchc").nodeValue;
 
 //             var unirest = require("unirest");
 
 // var req = unirest("GET", "https://sun.p.rapidapi.com/api/sun/");
 
 // req.query({
 // 	"city": "city"
 // });
 
 // req.headers({
 // 	"x-rapidapi-host": "sun.p.rapidapi.com",
 // 	"x-rapidapi-key": "f9aa842f69msh2171bbb34d0207fp137acajsn94bdc1c33c6a"
 // });
 //    console.log(city);
 //         }