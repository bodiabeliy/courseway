const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
 anchor.addEventListener("click", (event) => {
  event.preventDefault();
  const block = anchor.getAttribute('href')
  document.querySelector('' + block).scrollIntoView({
   behavior: "smooth",
  })
 })
}