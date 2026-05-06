const CHECKBOX = "<svg viewBox='0 0 512 512' width='100' title='check-circle'><path d='M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z'/></svg>";

const UNCHECKBOX = "<svg viewBox='0 0 512 512' width='100' title='circle'> <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z'/></svg>"

let header = document.getElementById("header");
let listMaker = document.getElementById("list-maker");
let input = document.getElementById("text-box");
let addItems = document.getElementById("add-stuff");
let undoStuff = document.getElementById("undo-stuff");
let clearStuff = document.getElementById("clear-stuff");
let list = document.getElementById("list");
let Stuff = document.getElementById("stuff");

if (document.cookie != "") loadItems();

document.addEventListener("beforeunload", saveItems());  

document.addEventListener("keydown",(key) => {
  if (key.code == "Enter")
    addStuff(key);
  
});

function addStuff(event) {
  if (input.value != ""){
  let _newItem = input.value;
  let _elem = document.createElement("li");
    _elem.innerText = _newItem;
    _elem.innerHTML = _elem.innerHTML + UNCHECKBOX;   stuff.append(_elem);
    input.value = "";
    input.focus();  
  }
}


function clearAll(event){
  list.innerHTML = "";
}

//function crossItem(elem) {
// let parentLI
// = elem.parentElement;
// parentLI.style.textDecoration = "solid gray 0.1em line-through";
// parentLI.style.color = "gray";
// parentLI.innerHTML = CHECKBOX + parentLI.innerText
// }

// function crossItem(elem) {
// let parentLI
// = elem.parentElement;
// parentLI.style.textDecoration = "none";
// parentLI.style.color = "black";
// parentLI.innerHTML = UNCHECKBOX + parentLI.innerText
// }

// <svg viewBox="0 0 448 512" width="100" title="trash-alt">
//   <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" /> </svg>
  
  function saveItems() {
    document.cookie = "items=" + list.innerHTML;
    console.log(document.cookie);
  }
  
  function loaditems() {
    cookieArr = document.cookie.substring(6);
    list.innerHTML = cookieArr;
  }
