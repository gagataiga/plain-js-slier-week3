window.addEventListener("load", function () {

  // sliders
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
  // How wide is each slide
  const slideWidth = document.querySelector("#slider-wrapper").clientWidth;
  // total
  const totalWidth = slideCount * slideWidth + "px";
  // Dom elments
  const slider = document.querySelector("#slider-wrapper ul");

  const next = document.getElementById("next");

  const previous = document.getElementById("prev");

  let leftPosition = 0;
  let count = 0;
  slider.style.width = totalWidth;
  //
  next.addEventListener("click",function (e) {
    e.preventDefault();
    count += 1;
    if (count == slideCount) {
      // back to first image
      count = 0;
    }
    // slide image
    leftPosition = `-${count * slideWidth}px`;
    slider.style.left = leftPosition;
  });

  
  previous.addEventListener("click", function (e) {
    e.preventDefault();
    count--;
    if (count < 0) {
      count = slideCount - 1;
    }
    //slidImage
    console.log("ここは呼ばれます");
    leftPosition = `-${count * slideWidth}px`;
    slider.style.left = leftPosition;
  });

});