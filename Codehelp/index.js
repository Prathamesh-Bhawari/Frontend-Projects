document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".menu-button-container");
    const menuContent = document.querySelector(".menu-content");
    const cross = document.querySelector(".cancel-button-container");


    ham.addEventListener("click", function () {
        gsap.set(menuContent, {display: "block"});
        gsap.set(ham, {display: "none"});
        gsap.set(cross, {display: "block"});
    });

    cross.addEventListener("click", function() {
        gsap.set(menuContent, {display: "none"});
        gsap.set(ham, {display: "block"});
        gsap.set(cross, {display: "none"});
    });

    const person1 = document.querySelector(".person1");
    const person2 = document.querySelector(".person2");
    const person3 = document.querySelector(".person3");
    const person4 = document.querySelector(".person4");
    const person5 = document.querySelector(".person5");
    const person6 = document.querySelector(".person6");

    const aboutperson1 = document.querySelector(".aboutperson1");
    const aboutperson2 = document.querySelector(".aboutperson2");
    const aboutperson3 = document.querySelector(".aboutperson3");
    const aboutperson4 = document.querySelector(".aboutperson4");
    const aboutperson5 = document.querySelector(".aboutperson5");
    const aboutperson6 = document.querySelector(".aboutperson6");

    person1.addEventListener("mouseenter" ,function (){
        gsap.set(aboutperson1, {display:"block"});
        gsap.from(aboutperson1, {opcaity:0, x:10});
    });

    person1.addEventListener("mouseleave" ,function (){
        gsap.set(aboutperson1, {display:"none"});
    });

    person2.addEventListener("mouseenter" ,function (){
        gsap.set(aboutperson2, {display:"block"});
        gsap.from(aboutperson2, {opcaity:0, x:10});
    });

    person2.addEventListener("mouseleave" ,function (){
        gsap.set(aboutperson2, {display:"none"});
    });

    person3.addEventListener("mouseenter" ,function (){
        gsap.set(aboutperson3, {display:"block"});
        gsap.from(aboutperson3, {opcaity:0, x:10});
    });

    person3.addEventListener("mouseleave" ,function (){
        gsap.set(aboutperson3, {display:"none"});
    });

    person4.addEventListener("mouseenter" ,function (){
        gsap.set(aboutperson4, {display:"block"});
        gsap.from(aboutperson4, {opcaity:0, x:10});
    });

    person4.addEventListener("mouseleave" ,function (){
        gsap.set(aboutperson4, {display:"none"});
    });

    person5.addEventListener("mouseenter" ,function (){
        gsap.set(aboutperson5, {display:"block"});
        gsap.from(aboutperson5, {opcaity:0, x:10});
    });

    person5.addEventListener("mouseleave" ,function (){
        gsap.set(aboutperson5, {display:"none"});
    });

    person6.addEventListener("mouseenter" ,function (){
        gsap.set(aboutperson6, {display:"block"});
        gsap.from(aboutperson6, {opcaity:0, x:10});
    });

    person6.addEventListener("mouseleave" ,function (){
        gsap.set(aboutperson6, {display:"none"});
    });
});