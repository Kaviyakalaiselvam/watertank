let  count=0
function opentap(){
    var waterElement=document.getElementById("water")
    var can=document.getElementById("can")
    var tap=document.getElementById("taphandle")
    var water =document.getElementById("waterflow")  
    var water3=document.getElementById("water3")
    if(count%2===0){
        waterElement.style.backgroundColor= "#d3d3d3"
        can.style.backgroundColor="skyblue"
        waterElement.style.animation="wateropen 10s linear forwards"
        tap.style.background="green"
        water.style.background="skyblue"
        
    } 
   else{
        waterElement.style.animationPlayState="paused";
        tap.style.background="red"
        water.style.background= "white"
    }
    count++;
}

let  count1=0
function opentap1(){
    var waterElement1=document.getElementById("water1")
    var can1=document.getElementById("can1")
    var tap1=document.getElementById("taphandle1")
    var water1 =document.getElementById("waterflow1")  
    var water3=document.getElementById("water3")
    if(count1%2===0){
        waterElement1.style.backgroundColor= "#d3d3d3"
        can1.style.backgroundColor="cyan"
        waterElement1.style.animation="wateropen1 10s linear forwards"
        tap1.style.background="green"
        water1.style.background="cyan"
        water3.style.background="lightblue"
    } 
   else{
        waterElement1.style.animationPlayState="paused";
        tap1.style.background="red"
        water1.style.background= "white"
        water3.style.background="skyblue"
    }
    count1++;
}


let  count2=0
function opentap2(){
    var waterElement2=document.getElementById("water2")
    var can2=document.getElementById("can2")
    var tap2=document.getElementById("taphandle2")
    var water2 =document.getElementById("waterflow2")  
    var water3=document.getElementById("water3")
    if(count2%2===0){
        waterElement2.style.backgroundColor= "#d3d3d3"
        can2.style.backgroundColor="blueviolet"
        waterElement2.style.animation="wateropen1 10s linear forwards"
        tap2.style.background="green"
        water2.style.background="blueviolet"
        water3.style.backgroundColor="lavender"
    } 
   else{
        waterElement2.style.animationPlayState="paused";
        tap2.style.background="red"
        water2.style.background= "white"
        water3.style.background="skyblue"
    }
    count2++;
}

