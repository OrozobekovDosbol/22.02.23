let example = document.querySelector("p");
example.className = "example";
example.style.color = "red";
example.textContent = "😜" +  example.textContent + "🐱‍🐉";

let example1 = document.querySelector("p:nth-child(2)");
example1.className = "example1";
example1.style.color = "white";
example1.style.backgroundImage = "url(./ffoonn.jpeg)";
example1.style.backgroundSize = "10px";
example1.style.padding = "20px";
example1.style.boxSizing = "border-box  "

let example2 = document.querySelector("p:nth-child(3)")
example2.className = "example2";
example2.style.color = "yellow";
example2.style.fontWeight = "700"

let example3 = document.querySelector("p:nth-child(4)");
example3.className = "example3";
example3.style.color = "blue";
example3.style.transform = "rotate(-45deg)"
example3.style.width = "100px";
example3.style.height = "100px";


let example4 = document.querySelector("body");
let list = document.createElement("ul");
example4.append(list);
console.log(example4);


for (let i = 1; i <= 10; i++) {
  let example6 = document.createElement("li");
  document.body.append(example6);
  example6.textContent = "Example " + i;
}

// document.querySelector("li:nth-child(6)").style.fontWeight = "900";







// let name = prompt("Whats your name?", "?");
// console.log(name);

// let age = prompt("How old are you?");
// console.log(+age + 10)

// alert("This is very good website");

let button1 = document.querySelector("button"); 
button1.addEventListener("click", function() {
  alert("Hello");
});

document.querySelector('#remove-paragraph').addEventListener('click', function() {
  document.querySelector('p').remove();
});

document.querySelector('#remove-li').addEventListener('click', function(){
  document.querySelector('li').remove();
});

document.querySelector('#remove-li').addEventListener('click', function(){
  document.querySelector('li').remove();
});


let article = document.querySelector('article');
document.querySelector('#add-p').addEventListener('click', function() {
  let p = document.createElement("p");
  p.textContent = "Blabla";
  
  article.append(p);
});


let toogleThemeBtn = document.querySelector
("#toggle-theme");
toogleThemeBtn.addEventListener('click', function() {
  if(document.body.className === "dark-mode"){
    document.body.className = "";
  }
  else{
    document.body.className = "dark-mode"
  }
})