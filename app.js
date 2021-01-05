const nav = document.querySelector(".nav-bar");
const heroContainer = document.querySelector(".main-container");
const logo = document.querySelector(".logo");
const title = document.querySelector("h1");
const btn = document.querySelector(".btn");

window.addEventListener("scroll", () => {
  const indicator = title.getBoundingClientRect().top;

  if (indicator < 50) {
    nav.classList.remove("dark");
    nav.classList.add("light");
    logo.classList.remove("dark");
    logo.classList.add("light");
  } else {
    nav.classList.add("dark");
    nav.classList.remove("light");
    logo.classList.add("dark");
    logo.classList.remove("light");
  }
});

btn.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const btnTop = e.target.getBoundingClientRect().top;
  const btnLeft = e.target.getBoundingClientRect().left;
const xInside  = x - btnLeft
const yInside  = y - btnTop
console.log(btnTop,btnLeft)
console.log(x,y)
console.log(xInside,yInside)
const circle =document.createElement('span')
circle.classList.add('circle')
circle.style.top = yInside + 'px'
circle.style.left = xInside + 'px'

btn.appendChild(circle)
setTimeout (() => circle.remove(), 500)
  
});
