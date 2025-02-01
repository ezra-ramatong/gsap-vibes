import gsap from "gsap";

gsap.set(".flair", {
  xPercent: -50,
  yPercent: -50,
});

const cursorFollow = (e) => {
  let xTo = gsap.quickTo(".flair", "x", { duration: 0.5, ease: "power3" });
  let yTo = gsap.quickTo(".flair", "y", { duration: 0.5, ease: "power3" });
  xTo(e.clientX);
  yTo(e.clientY);
};

window.addEventListener("mousemove", cursorFollow);
