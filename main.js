let taches = document.getElementById("tchc");

let tasks = [
    {
        "title" : "Mamiya",
        "date" : "10-10-2024",
        "isDone": false
    },

];
 
function gtstrg(){
    JSON.parse( localStorage.getItem("mama")) != null ?
        tasks = JSON.parse( localStorage.getItem("mama")) :
        tasks=[];
        data();
   

}

gtstrg();
function data(){
 taches.innerHTML = ''
 let index=0;
 for(task of tasks){
let content = `
 <div class="tch ${task.isDone ? '' : 'done' }">
                <div style="color: black;">
                        <h2>${task.title}</h2>
                        <i class="fa-solid fa-calendar-days"></i>
                        <span>${task.date}</span>
                        
                </div> 
                <div style="display: flex; justify-content: space-around; align-items: center;">
                    <button class="circl" onclick="delet(${index})" style="background: rgb(114, 0, 0);">
                        <i class="fa-solid fa-trash"></i>
                    </button>

                    ${task.isDone ? `
                        <button onclick="toggleTaskComplition(${index})" class="circl" style="background: rgb(0, 50, 30);">
                        <i class="fa-solid fa-check"></i>
                    </button>
                        ` : `
                        <button onclick="toggleTaskComplition(${index})" class="circl" style="background: rgb(180, 15, 90);">
                      <i class="fa-solid fa-ban"></i>
                    </button>
                        ` }

                    <button onclick="update(${index})" class="circl" style="background: rgba(0, 16, 197,0.692);">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>

                    
                </div>
            </div>
`;   
taches.innerHTML += content
index++;
}   
}

let ajout = document.getElementById('Ajout')
ajout.addEventListener("click",()=>{
  let now = new Date()
   let dat = now.getDate() + "-" + (now.getMonth()+1) + "-" + now.getFullYear()+"/"+now.getHours()+":"+now.getMinutes()
  let taskname =  prompt(" Enter Title the Task :")
  if(valid(taskname)){
     console.log(taskname)
  }else{
    alert("invalid title !")
    taskname =  prompt(" Enter Title the Task :")

  }
   
//    let dat =
   let objt = {
    "title" : taskname,
    "date" : dat,
    "isDone": false
}
   tasks.push(objt);
   storg()
//    localStorage.setItem('mama',JSON.stringify(tasks));
   data();
})

function delet(index){
    let task = tasks[index]
    let iscon = confirm("are you sure to delet task  : " + task.title)
    if(iscon == true){
        tasks.splice(index,1)
        storg();
    data(); 
    }
   
}

function update(index){ 
    let task = tasks[index]
    let newnem = prompt("please add new Title :", task.title)
   
   task.title = newnem
   storg()
     alert(newnem)
   data()
}

function toggleTaskComplition(index){
    let task = tasks[index]
    task.isDone = !task.isDone 
    data();
}


function storg(){
    localStorage.setItem('mama',JSON.stringify(tasks));
}

function valid(title){
   let regextitle = /^[A-Za-z ,.'-]{3,50}$/
   return regextitle.test(title) ;
}