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
  const stop = document.getElementById("stop");

  let leftPosition = 0;
  let count = 0;
  slider.style.width = totalWidth;
  
  let timer;
  nextButton();

  function startInterval() {
    timer = setInterval(() => {
      count += 1;
      if (count == slideCount) {
        // back to first image
        count = 0;
      }
      // slide image
      leftPosition = `-${count * slideWidth}px`;
      slider.style.left = leftPosition;
    }, 2000);
  }

  function nextButton() {
    next.addEventListener("click", function (e) {
      console.log("next");
      startInterval();
    });
  }
  
  stop.addEventListener("click", function (e) {
    console.log("stop");
    clearInterval(timer);
  });

});