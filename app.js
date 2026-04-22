
const sliderhome = document.querySelector(".sliderMainElements");
const menu = document.querySelectorAll(".bottonElements");

 /* Products Elements Needed For Html */
const products = [

  /* BALENCIAGA */
  {
    Id: 1,
    Title: "BALENCIAGA",
    Price: 350,
    Desc: "  BALENCIAGA BALENCIAGA BALENCIAGA BALENCIAGA BALENCIAGA",
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
    Desc: "  AIR FORCE AIR FORCE AIR FORCE AIR FORCE AIR FORCE  ",
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
    Desc: " NEW BALANCE NEW BALANCE NEW BALANCE NEW BALANCE NEW BALANCE  ",
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
    Desc: "  NIKE NIKE NIKE NIKE NIKE NIKE NIKE NIKE NIKE NIKE NIKE  ",
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
    Desc: " TIMBERLAND TIMBERLAND TIMBERLAND TIMBERLAND TIMBERLAND ",
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
const currentsize = document.getElementsByClassName(".size");


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

 