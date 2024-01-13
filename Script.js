document.addEventListener("DOMContentLoaded",function(){
    getNotes();
})

let input = document.querySelector(".input");

input.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        todo(input.value);
        saveNotes();
    }
})
let box = document.querySelector(".box");
let todo = (item)=>{
    let list = document.createElement("li");
    list.innerHTML = `${item} <i class="fa-solid fa-xmark"></i>`;
    box.appendChild(list);

    list.querySelector("i").addEventListener("click",function(){
        list.remove();
        saveNotes();
    })
}

let saveNotes = ()=>{
    let notes = document.querySelectorAll("li");
    let data = [];
    notes.forEach((note)=>{
        data.push(note.textContent.trim());
    })
    localStorage.setItem("notes",JSON.stringify(data));
    console.log(data);
}

let getNotes = ()=>{
    let notes = localStorage.getItem("notes");
    let note = JSON.parse(notes);
    note.forEach((not)=>{
        todo(not);
    })
}