const swup = new Swup();

const tl = gsap.timeline()

tl.fromTo(".text", {duration: 1.5, opacity: 0, delay: 0.25}, {duration: 1, opacity: 1, stagger: .75})
tl.to(".text", {duration: 1, opacity: 0, delay: .3, stagger: .5})
tl.to(".intro", {duration: 0.5, opacity: 0})
tl.to(".intro", {y: "-100%"})