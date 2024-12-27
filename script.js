
var user_input = document.getElementById("user_input");
var tasks = document.getElementById("tasks");

function add_task(){

if(user_input.value === ""){
    alert("Please type something");
}
else{
   let li= document.createElement("li");
   li.innerHTML= user_input.value;
   tasks.appendChild(li); 
   let span = document.createElement("span");
   span.innerHTML="\u00d7";
   li.appendChild(span);  
   saveData();
}
user_input.value = "";
}

tasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
     e.target.classList.toggle("strike");
     saveData();
    }
    else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove();   }
}, false);
 function saveData(){
    localStorage.setItem("data", tasks.innerHTML); 
 }
 function showData(){
    tasks.innerHTML= localStorage.getItem("data");
 }
 showData();