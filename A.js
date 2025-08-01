let w=document.getElementById("container").offsetWidth;
let h=document.getElementById("container").offsetHeight;
let contain =document.getElementById("container");
let count=0;
let maxbox=Math.floor((w*h)/1600);
function b(){
  let w=document.getElementById("container").offsetWidth;
let h=document.getElementById("container").offsetHeight;
let contain =document.getElementById("container");
let count=0;
let maxbox=Math.floor((w*h)/400);
do{
  let div =document.createElement("div");
  contain.appendChild(div)
  div.classList.add("box")
count++;
  
}
while(count<maxbox);
let boxes=document.querySelectorAll(".box");
boxes.forEach(box =>{
  box.addEventListener('mouseenter',()=>{
    gsap.to(box,{
      y:-40,
      rotate:600,
      zIndex:5,
      duration:1,
boxShadow: `
  2px 2px 4px rgba(0, 0, 0, 0.3),
  -2px -2px 4px rgba(0, 0, 0, 0.3),
  -2px 2px 4px rgba(0, 0, 0, 0.3),
  2px -2px 4px rgba(0, 0, 0, 0.3)
`,
    });
    
  });
  box.addEventListener('mouseleave',()=>{
    gsap.to(box,{
      y:0,
      rotate:0,
      zIndex:0,
      duration:1.5,
boxShadow: `
  2px 2px 4px rgba(0, 0, 0, 0),
  -2px -2px 4px rgba(0, 0, 0, 0),
  -2px 2px 4px rgba(0, 0, 0, 0),
  2px -2px 4px rgba(0, 0, 0, 0)
`,
    });
    
  });
});}
b();
window.addEventListener("resize",b);

console.log(w,h)
console.log(count)
console.log(maxbox)
