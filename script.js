let task = [
    {
        id : 1,
        name : "Belajar DOM",
        status :true,
    },
    {
        id : 2,
        name : "Kerjakan Latihan",
        status :false,
    },
    {
        id : 3,
        name : "Explore JS",
        status :true,
    }
]

let btn_todo = document.getElementById('btn_click');

btn_todo.style.background = "green";
btn_todo.style.color = "white";

function btn_click(){
    let input_task = document.getElementById('task_form').value;
    
    if( input_task !== '' ){
        let id = task[task.length - 1].id + 1;
        let tempObj = {
            id ,
            name : input_task,
            status : false,
        }
        task.push(tempObj);
        getTask()
        document.getElementById('task_form').value = '';
        // console.log(task);
    } else {
        alert("Haaaaah KOSONG DI ISI SEK MAS")
    }
}

btn_todo.addEventListener('click', btn_click)
// console.log(btn_todo);
// console.log(task);

function getTask() {
    let tBody = document.getElementById('tBody');
    tBody.innerHTML='';
    task.forEach(task => {
        tBody.innerHTML += `<tr>
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.status}</td>
        </tr>`
    })
}

getTask();