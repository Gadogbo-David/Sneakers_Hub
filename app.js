const sliderhome = document.querySelector(".sliderMainElements");
const menu = document.querySelectorAll(".bottonElements");

menu.forEach( (element,index) => {
      element.addEventListener("click", () => {
   
        sliderhome.style.transform = ` translateX( ${-100 * index}vw) `
        
      })
});