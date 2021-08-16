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
    duration: 10
});

gsap.to(".sub-text", {
    ScrollTrigger: {
        trigger: ".sub-text",
        start: "center left",
        end: "bottom 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 0,
    y: 0,
    rotation: 0,
    ease: "",
    duration: 10
});

gsap.to(".sub-text-intro", {
    ScrollTrigger: {
        trigger: ".sub-text-intro",
        start: "top left",
        end: "bottom 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 640,
    y: -380,
    rotation: 0,
    ease: "",
    duration:6
});

gsap.to(".sub-text-1", {
    ScrollTrigger: {
        trigger: ".sub-text-1",
        start: "top center",
        end: "bottom 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 20,
    y: 10,
    rotation: 0,
    ease: "bounce",
    duration: 10
});

gsap.to(".sub-text-2", {
    ScrollTrigger: {
        trigger: ".sub-text-2",
        start: "top center",
        end: "bottom 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 0,
    y: 0,
    rotation: 0,
    ease: "bounce",
    duration: 20
});

gsap.to(".sub-text-3", {
    ScrollTrigger: {
        trigger: ".sub-text-2",
        start: "center center",
        end: "bottom 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: -10,
    y: 30,
    rotation: 0,
    ease: "bounce",
    duration: 12
});

gsap.to(".sub-text-4", {
    ScrollTrigger: {
        trigger: ".sub-text-2",
        start: "center center",
        end: "bottom 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 640,
    y: -500,
    rotation: 0,
    ease: "bounce",
    duration: 12
});

gsap.to(".sub-text-5", {
    ScrollTrigger: {
        trigger: ".sub-text-2",
        start: "center center",
        end: "bottom 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 0,
    y: -290,
    rotation: 0,
    ease: "bounce",
    duration: 12
});

gsap.to(".sub-text-6", {
    ScrollTrigger: {
        trigger: ".sub-text-2",
        start: "center center",
        end: "bottom 0px",
        scrub: true,
        pin: true,
        markers: true
    },
    x: 620,
    y: -580,
    rotation: 0,
    ease: "bounce",
    duration: 12
});

let tl = gsap.timeline({
    ScrollTrigger: {
        trigger: ".sub-text",
        start: "top 50px",
        endTrigger: ".sub-text-2",
        end: "bottom 500px",
        scrub: true,
        pin: true,
        markers: true
    },
});

tl.to(".sub-text-2", {

    x: 0,
    y: 50,
    rotation: 0,
    ease: "bounce",
    duration: 45
})