window.addEventListener("load", function () {

  // sliders
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
  // How wide is each slide
  const slideWidth = document.querySelector("#slider-wrapper").clientWidth;
  // total
  const totalWidth = slideCount * slideWidth + "px";
  // Dom elments
  const slider = document.querySelector("#slider-wrapper ul");
  let btn = document.getElementById("start");

  let leftPosition = 0;
  let count = 0;
  slider.style.width = totalWidth;
  
  // 
  let timer;

    btn.addEventListener("click", function (e) {
    let bthId = document.querySelector("#slider-controls a").id;
    if (bthId == "start") {
      startInterval();
    } else {
      stopInterval();
    }
  });

  function startInterval() {
    btn.id = "stop"
    btn.innerText = "Stop";
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

    function stopInterval() {
      console.log("stop");
        btn.id = "start";
        btn.innerText = "Start";
      clearInterval(timer);
  }
    
});