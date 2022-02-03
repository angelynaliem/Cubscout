//Query Selectors
const burger = document.querySelector(".burger");

//Event listeners
burger.addEventListener("click", navToggle);

//Functions
function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line-one", 0.5, { rotate: "45", y: 5, background: "black" });
    gsap.to(".line-two", 0.5, { rotate: "-45", y: -5, background: "black" });
    gsap.to(".menu-bar", 1, { clipPath: "circle(2500px at 100% -10%" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line-one", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".line-two", 0.5, { rotate: "0", y: 0, background: "black" });
    gsap.to(".menu-bar", 1, { clipPath: "circle(50px at 100% -10%" });
    document.body.classList.remove("hide");
  }
}
