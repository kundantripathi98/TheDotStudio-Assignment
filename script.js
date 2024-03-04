
//--------------------------------------title-------------------------------------------------
document.querySelectorAll(".card").forEach((e)=>{
    e.addEventListener("mouseover", ()=>{
        gsap.to(e.querySelector("#title"), {
         y: -15,
         opacity: 0,
         ease: Power4
         });
     });

     e.addEventListener("mouseleave", ()=>{
        gsap.to(e.querySelector("#title"), {
         y: 0,
         opacity: 1,
         ease: Power4
         });
     });
});
//--------------------------------------------------------------------------------------------------



//---------------------------------------------------------div--------------------------------------------------
document.querySelectorAll(".card").forEach((e) => {
    e.addEventListener("mouseover", () => {
        gsap.to(e.querySelector(".rectBox"), {
            width: "100%",
            opacity: 0.8,
            height: 250,
            duration: 0.95,
            ease: "power4"
        });
    });

    e.addEventListener("mouseleave", () => {
        gsap.to(e.querySelector(".rectBox"), {
            width: 0,
            height: 0,
            duration: 0.95,
            ease: "power4"
        });
    });
});

//---------------------------------------------------------------------------------------



//--------------------------------------------------text---------------------------------------------------
document.querySelectorAll(".card").forEach((e) => {
    e.addEventListener("mouseover", () => {
        gsap.to(e.querySelector(".rectBox h1"), {
            y: -15,
            opacity: 1,
            delay: 0.7,
            ease: "power4"
        });
        gsap.to(e.querySelector(".rectBox p"), {
            y: -15,
            opacity: 1,
            delay: 0.9,
            ease: "power4"
        });
    });
});

document.querySelectorAll(".card").forEach((e) => {
    e.addEventListener("mouseleave", () => {
        gsap.to(e.querySelector(".rectBox h1"), {
            display: "none",
            opacity: 0,
            ease: "power4"
        });
        gsap.to(e.querySelector(".rectBox p"), {
            display: "none",
            opacity: 0,
            ease: "power4"
        });
    });
});

// document.querySelectorAll(".card").forEach((e) => {
//     e.addEventListener("mouseleave", () => {
//         gsap.to(e.querySelector(".rectBox h1"), {
//             display: "block", // or "inline", depending on your HTML structure
//             opacity: 0,
//             ease: "power4"
//         });
//         gsap.to(e.querySelector(".rectBox p"), {
//             display: "block", // or "inline", depending on your HTML structure
//             opacity: 0,
//             ease: "power4"
//         });
//     });
// });

// document.querySelectorAll(".card").forEach((e) => {
//     e.addEventListener("mouseleave", () => {
//         gsap.to(e.querySelector(".rectBox h1"), {
//             opacity: 0,
//             ease: "power4",
//             display: "none"
//             // onComplete: function() {
//             //     e.querySelector(".rectBox h1").style.display = "none";
//             // }
//         });
//         gsap.to(e.querySelector(".rectBox p"), {
//             opacity: 0,
//             ease: "power4",
//             display: "none"
//             // onComplete: function() {
//             //     e.querySelector(".rectBox p").style.display = "none";
//             // }
//         });
//     });
    
//     e.addEventListener("mouseover", () => {
//         gsap.to(e.querySelector(".rectBox h1"), {
//             display: "block", 
//             y: -15,
//             opacity: 1,
//             delay: 0.7,
//             ease: "power4"
//         });
//         gsap.to(e.querySelector(".rectBox p"), {
//             display: "block", 
//             y: -15,
//             opacity: 1,
//             delay: 0.9,
//             ease: "power4"
//         });
//     });
// });





