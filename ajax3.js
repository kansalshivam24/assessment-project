// function enterTheCode()
window.onload = function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      document.getElementById("container").innerHTML = this.responseText;
      var data = JSON.parse(this.responseText);
      console.log(data);
      
       var res=" ";
       for(var i=0;i<10;i++)
       {
         res =res+ "<p>" + "Station Name:-"+  data.fuel_stations[i].station_name + "<br>" + " Address:-"+ data.fuel_stations[i].street_address + ", " +data.fuel_stations[i].city  + ", " + data.fuel_stations[i].zip + "</p><br>";
        // container.append(res);
        
      document.getElementById("container").innerHTML = res ;
        console.log(res);
       }
      document.getElementById("container").innerHTML = res ;
        document.getElementById("container").innerHTML=image;
     }
    };
    xmlhttp.open("GET", "https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=0ITgzKsc7IADjCViacFA3SWJCZ3wAepHFexciY4f&location=Denver+CO",true);
    xmlhttp.send();
   }
   
   
   
   
   
   
   
   
   
   