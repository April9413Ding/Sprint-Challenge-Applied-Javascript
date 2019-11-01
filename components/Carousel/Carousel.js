/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel(){
  const carouselBox = document.createElement("div"),
  leftBtn = document.createElement("div"),
  imgOne = document.createElement("img"),
  imgTwo = document.createElement("img"),
  imgThree = document.createElement("img"),
  imgFour = document.createElement("img"),
  rightBtn = document.createElement("div");

  carouselBox.appendChild(leftBtn);
  carouselBox.appendChild(imgOne);
  carouselBox.appendChild(imgTwo);
  carouselBox.appendChild(imgThree);
  carouselBox.appendChild(imgFour);
  carouselBox.appendChild(rightBtn);

  carouselBox.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");

  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  imgOne.src = "./assets/carousel/mountains.jpeg";
  imgTwo.src = "./assets/carousel/computer.jpeg";
  imgThree.src = "./assets/carousel/trees.jpeg";
  imgFour.src = "./assets/carousel/turntable.jpeg";

  imgOne.style.display = "block";

  const imgList = [imgOne,imgTwo,imgThree,imgFour];

  rightBtn.addEventListener("click",()=>{
    let currentImgIndex;
    imgList.forEach(item =>{
      if(item.style.display == "block"){
        currentImgIndex = imgList.indexOf(item);
      }
    })
    imgList[currentImgIndex].style.display = "none";
    if(currentImgIndex == imgList.length-1){
      currentImgIndex = -1;
    }
    imgList[currentImgIndex+1].style.display = "block";
  });

  leftBtn.addEventListener("click",()=>{
    let currentImgIndex;
    imgList.forEach(item =>{
      if(item.style.display == "block"){
        currentImgIndex = imgList.indexOf(item);
      }
    })
    imgList[currentImgIndex].style.display = "none";
    if(currentImgIndex == 0){
      currentImgIndex = imgList.length;
    }
    imgList[currentImgIndex-1].style.display = "block";
  });

  return carouselBox;
}

const carouselCont = document.querySelector(".carousel-container");
carouselCont.appendChild(createCarousel());
