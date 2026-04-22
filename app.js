
const sliderhome = document.querySelector(".sliderMainElements");
const menu = document.querySelectorAll(".bottonElements");

 /* Products Elements Needed For Html */
const products = [

  /* BALENCIAGA */
  {
    Id: 1,
    Title: "BALENCIAGA",
    Price: 350,
    Desc: "  Balenciaga blends luxury craftsmanship with bold, modern design—clean, edgy, and made to stand out.",
     types:[
       {

        img: "Images/Balenciaga blue 1.png",
        color: "blue"

      },
      { 
        img: "Images/balenciaga black 11.png",
       color: "black",
      }

    ]
  },

  /* AIR FORCE */
  {
    Id: 2,
    Title: "AIR FORCE",
    Price: 550,
    Desc: "  Classic, clean, and always in style—Air Force delivers timeless streetwear with everyday comfort.  ",
    types: [
      
      {
        img: "Images/Airforce black 2.png",
       color: "black",
      },
      {
        img: "Images/Airforce white 22.png",
        color: "gray"
      }

    ]
  },

  /* NEW BALANCE */
  {
    Id: 3,
    Title: "NEW BALANCE",
    Price: 800,
    Desc: " New Balance blends comfort and performance with a laid-back style that fits any vibe.  ",
    types: [
      
      {
        img: "Images/New balance brown 1.png",
        color: "brown"
      },
      {
        
        img: "Images/New balance red 11.png",
       color: "red",
      }

    ]
  },

  /* NIKE*/
  {
    Id: 4,
    Title: "NIKE",
    Price: 150,
    Desc: " Nike combines innovation and style, pushing you to move better and look good doing it.  ",
    types: [
      
      {
         img: "Images/Nike green 1.png",
        color: "green"
        
      },
      {
       
        img: "Images/Nike black 11.png",
       color: "black",
      }

    ]
  },

  /* TIMBERLAND */
  {
    Id: 5,
    Title: "TIMBERLAND",
    Price: 450,
    Desc: " Timberland brings rugged durability and bold style, built to handle the streets and beyond. ",
    types: [
      
      {
        img: "Images/Timberland Black 1.png",
       color: "black",
      },
      {
        img: "Images/Timberland white 11.png",
        color: "gray"
      }

    ]
  }

]

Products = products[0];

const currentProductTitle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentproductDesc = document.querySelector(".productDesc");
const currentproductImage = document.querySelector(".productImage");
const currentproductColor = document.querySelectorAll(".colors");
const currentsize = document.querySelectorAll(".sizes");


menu.forEach( (element,index) => {
      element.addEventListener("click", () => {
   
        sliderhome.style.transform = ` translateX( ${-100 * index}vw) `
        Products = products[index];
        
        currentProductTitle.textContent = Products.Title;
        currentproductPrice.textContent = "$" + Products.Price;
        currentproductDesc.textContent = Products.Desc;
        currentproductImage.src = Products.types[0].img;

        currentproductColor.forEach( (color,index) => {
            color.addEventListener("click",() => {
              currentproductImage.src = Products.types[index].img;
            })
        })

         
        // Assign new colors for products
    currentproductColor.forEach( (colors,index) => {

        colors.style.backgroundColor = Products.types[index].color;

    })
        
      })
});

// Making The Sizes change background color when clicked on
currentsize.forEach( (size,index) => {
     size.addEventListener("click",() =>{

        currentsize.forEach( (size) => {
             size.style.backgroundColor = "white";
        size.style.color = "black";
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
     })
})