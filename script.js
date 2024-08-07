function getrandomnumber(min,max){
    return Math.floor(Math.random()*(max-min +1))+min;
}


let colors = ["red","blue","green","yellow","pink","grey","red"];
document.querySelector("#color-change").onclick=()=>{
   let randomindex = getrandomnumber(colors.length -1,0 );
   console.log(randomindex);
    document.querySelector("#original").style.backgroundColor = colors[randomindex]
}

document.querySelector("#changeText").onclick=()=>{
let z = document.querySelector("#input").value
document.querySelector("#original").innerHTML =z
}

document.querySelector("#btn-alert").onclick=()=>{
    let a = document.querySelector("#input").value
    alert(a);
}
   
   document.querySelector("#submitForm").onclick=()=>{
    let b = document.querySelector("#textInput").value;
   document.querySelector("#displayText").innerHTML= b
 }




 document.querySelector("#remove").onclick=()=>{
    let ol = document.querySelector("#list")
    let liitems = ol.querySelectorAll("li");
    ol.removeChild (liitems[liitems.length -1])

}
 document.querySelector("#add-task").onclick=()=>{
    let d = document.querySelector("#input-1").value
    let ul = document.querySelector("#list");
    let liitems1 = ul.querySelectorAll("li");
    ul.innerHTML+=(`<li> ${d} </li>`)
}


/** This is for navigation bar*/



document.querySelector("#original-0").style.display="block";
const allsections = document.querySelectorAll(".nav-section");
function hideallsection(){
    for(let i=0; i<allsections.length; i++){
        allsections[i].style.display="none"
    }
}

const allnav = document.querySelectorAll(".navlink")
for(let i=0; i<allnav.length;i++){
    allnav[i].onclick=()=>{
        hideallsection();
        allsections[i].style.display="block"
    }
}


document.querySelector("#section-0").style.display="block"
