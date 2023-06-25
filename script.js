var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-4");

container.append(row);

var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>foo(data1)).catch((error)=>console.log(error));

function foo(data1){
    console.log(data1)
    for(var i=0;i<data1.length;i++){
       row.innerHTML+=
      
    
       `<div class="col-md-4">
       <div class="card" style="width: 18rem;">
       <p id="head">${data1[i].name}<br></p>
       <img class="card-img-top" src="${data1[i].flag}" alt="Card image cap">
       <div class="card-body">
         
         <p class="card-text">capital:${data1[i].capital}<br></p>
         <p class="card-text">Region:${data1[i].region}<br>
         </p>
         <p class="card-text">Country code:${data1[i].cioc}<br>
         </p>
         <a href="https://openweathermap.org/" class="btn btn-primary" onclick="showWeather('${data1[i].capital}')">Click for Weather</a>
       </div>
     </div>
     </div>`
    }  

    
    document.body.append(container);
}
foo();