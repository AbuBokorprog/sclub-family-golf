const tl = gsap.timeline();
const crs = document.querySelector("#cursor");
const crsBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crs.style.left = dets.x + "px";
  crs.style.top = dets.y + "px";
  crsBlur.style.left = dets.x - 150 + "px";
  crsBlur.style.top = dets.y - 150 + "px";
});
document.addEventListener("mousemove", function (dets) {});

tl.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
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
    markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 2,
  },
});
