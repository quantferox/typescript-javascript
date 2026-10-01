/* const element = document.getElementById("block");

let position = 0;

const animate = () => {
    setTimeout(() => {
        position += 1;
        element.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
    }, 100)
}

requestAnimationFrame(animate); */

//Easy variant animation
/*
const element = document.getElementById("block");
const animate = () => {
    let position = 0;
    return () => {
        if (!(position >= 1500)) {
            position += 1;
            element.style.transform = `translateX(${position}px)`;

            requestAnimationFrame(animationStep);
        }
    }
}

const animationStep = animate();

requestAnimationFrame(animationStep); */

//medium variant animation
/* 
const element = document.getElementById("block");
let angle = 0;

function animate() {
    angle += 0.05;
    const radius = 100;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    element.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate); */

/* const element1 = document.getElementById("block1");
const element2 = document.getElementById("block2");
const element3 = document.getElementById("block3");

let angle1 = 0, angle2 = 0, angle3 = 0;

function animate() {
    angle1 += 0.03;
    angle2 += 0.05;
    angle3 += 0.07;

    const radius1 = 100, radius2 = 150, radius3 = 200;
    const x1 = Math.cos(angle1) * radius1;
    const y1 = Math.sin(angle1) * radius1;
    const x2 = Math.cos(angle2) * radius2;
    const y2 = Math.sin(angle2) * radius2;
    const x3 = Math.cos(angle3) * radius3;
    const y3 = Math.sin(angle3) * radius3;

    element1.style.transform = `translate(${x1 + window.innerWidth / 2}px, ${y1 + window.innerHeight / 2}px)`;
    element2.style.transform = `translate(${x2 + window.innerWidth / 2}px, ${y2 + window.innerHeight / 2}px)`;
    element3.style.transform = `translate(${x3 + window.innerWidth / 2}px, ${y3 + window.innerHeight / 2}px)`;

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate); */