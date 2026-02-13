const body = document.body;
// body.append("Hello world", "Bye");

// const div = document.createElement("div");
// div.innerText="Hello World!"
// div.textContent="Hello World2!"
// div.innerHTML = "<strong>Hello world 2</strong>"

// const strong = document.createElement("strong")
// strong.innerText = "Hello World3"
// div.append(strong)

// body.append(div);

const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

//removing element from DOM
// spanBye.remove() 
// div.append(spanBye)
// div.removeChild(spanHi) //removes 'Hii'

//modifying element attribute
// const attr = spanHi.getAttribute('id')
// console.log(attr);
// console.log(spanBye.id);

//set attribute
// spanHi.setAttribute("id", "new ID")
// spanHi.setAttribute("title","This is my title")
// spanHi.id="bdhheheh"

// //remove attribute
// spanHi.removeAttribute("id")
// spanHi.removeAttribute("title")

//---Modifying Data attribute---
console.log(spanHi.dataset)
spanHi.dataset.newName="hii"

//---Modifying Element Classes---
spanHi.classList.add("new-class")
spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi2")

//---Modifying Element Style---
spanHi.style.color="red"
spanBye.style.color="white"
spanBye.style.backgroundColor="green"

