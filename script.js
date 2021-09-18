window.addEventListener("load", function () {
  // sliders
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
  // How wide is each slide
  const slideWidth = document.querySelector("#slider-wrapper").clientWidth;
  // total
  const totalWidth = slideCount * slideWidth + "px";
  // Dom elments
  const slider = document.querySelector("#slider-wrapper ul");

  const next = document.querySelector("next");

  const previous = document.querySelector("prev");

  let leftPosition = 0;
  let count = 0;

  slider.style.width = totalWidth;
  console.log(slider.style.width);

  next.addEventListener("click", function (e) {
    e.preventDefault();
    count += 1;
    
    if (count == slideCount) {
      // back to first image
    } else {
      // slide image
    }
  })
});