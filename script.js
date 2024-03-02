
//locomotive smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {videos: ["https://cdn.cuberto.com/cb/home/hero/1.mp4", "2.mp4"]});

// var main = document.querySelector("#main")
// var crsr = document.querySelector("#cursor")

// main.addEventListener("mousemove", function(tag){
//     crsr.style.left = tag.x +"px"
//     crsr.style.top = tag.y -20+"px"
// })

gsap.to(".f-left-elem",{
    scrollTrigger:{
        trigger:"#featured-images",
        pin:true,
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1,
    },
    y:"-300%",
    ease:Power1
})

// gsap.to(".f-left-elem", {
//     scrollTrigger: {
//         trigger: "#featured-images",
//         pin: true,
//         start: "top top",
//         end: "bottom bottom",
//         endTrigger: ".last",
//         scrub: 1
//     },
//     y: "-300%",
//     ease: Power1 
// })

//f-right 
// Shery.imageEffect(".images", {
//     style: 5,
//     slideStyle: (setScroll) => {
//       window.addEventListener("scroll", () => {
//         setScroll(window.scrollY / innerHeight); //Updating the scroll
//       });
//     },
//   });

