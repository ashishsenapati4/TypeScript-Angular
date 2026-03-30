//DOM - Accessing childern of an element

console.log(window);
console.log(document.body); 
document.body.style.background="yellow";
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

//first child node or firstElement
console.log(document.body.childNodes[0]);

//last child node or lastElement
console.log(document.body.childNodes[document.body.childNodes.length-1]);

//convert child nodes(node list) to array..
let arr = Array.from(document.body.childNodes);
console.log(arr);

//-----Parents and Siblings of an Element-----
console.log(document.body.firstChild);
let a = document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement);
console.log(a);
console.log(a.firstChild);
console.log(a.firstChild.nextSibling);