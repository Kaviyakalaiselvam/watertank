var count = 0;

function flowButton() {
    var waterElement = document.querySelector(".water");
    var container = document.getElementById("container");
    var tap = document.querySelector(".tap");
    var waterFlow = document.getElementById("waterflow");
    document.getElementById("waterflow").innerHTML=value;
    if (count % 2 === 0) {
        waterElement.style.backgroundColor = "skyblue";
        container.style.backgroundColor="#3498db"
        waterElement.style.animation = "waterflowbutton 15s linear forwards";
        tap.style.backgroundColor = "blue";
        waterFlow.style.backgroundColor = "skyblue"; 
    } else {
        waterElement.style.animationPlayState = "paused";
        tap.style.backgroundColor = "black";
        waterFlow.style.backgroundColor = "white"; 
          }
    count++;
}

 
