function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

locomotive();

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
    scroller: "#main",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

tl.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "#main",
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
    scroller: "#main",
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
    scroller: "#main",
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
    scroller: "#main",
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
    scroller: "#main",
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
    scroller: "#main",
    // markers: true,
    // start: "top 80%",
    end: "top 80%",
    // scrub: 1,
  },
});
