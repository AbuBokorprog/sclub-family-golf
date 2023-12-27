const tl = gsap.timeline();
const crs = document.querySelector("#cursor");
const crsBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crs.style.left = dets.x + 30 + "px";
  crs.style.top = dets.y + "px";
  crsBlur.style.left = dets.x - 250 + "px";
  crsBlur.style.top = dets.y - 270 + "px";
});

let h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crs.style.scale = 3;
    crs.style.border = "1px solid #fff";
    crs.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crs.style.scale = 1;
    crs.style.border = "1px solid #fff";
    crs.style.backgroundColor = "#95c11e";
  });
});

tl.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

tl.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});

tl.from("#about-us img, #about", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 2,
  },
});

tl.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});

// colon1
gsap.from("#colon1", {
  y: -50,
  x: -50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // start: "top 80%",
    // end: "top 50%",
    // scrub: 1,
  },
});
gsap.from("#colon2", {
  y: 50,
  x: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    // start: "top 80%",
    end: "top 80%",
    // scrub: 1,
  },
});
gsap.from("#page4 h4", {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "body",
    // markers: true,
    // start: "top 80%",
    end: "top 80%",
    // scrub: 1,
  },
});
