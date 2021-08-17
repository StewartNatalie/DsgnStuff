gsap.registerPlugin(ScrollTrigger);

gsap.to(".text", {
    ScrollTrigger: {
        trigger: ".text",
        start: "center right",
        end: "center 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 0,
    rotation: 0,
    ease: "",
    duration: 0
});

gsap.to(".sub-text", {
    ScrollTrigger: {
        trigger: ".sub-text",
        start: "center left",
        end: "bottom 500px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 0,
    y: 0,
    rotation: 0,
    ease: "",
    duration: 0
});


let tl = gsap.timeline({
    ScrollTrigger: {
        trigger: ".sub-text",
        start: "top 50px",
        endTrigger: ".sub-text",
        end: "bottom 500px",
        scrub: true,
        pin: true,
        markers: true
    },
});

tl.to(".sub-text", {

    x: 0,
    y: 0,
    rotation: 0,
    ease: "bounce",
    duration: 0
})