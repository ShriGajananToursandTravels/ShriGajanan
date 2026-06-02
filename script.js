// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});

});

// ======================
// HEADER EFFECT
// ======================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

header.style.background = "#000";
header.style.boxShadow =
"0 5px 20px rgba(0,0,0,0.3)";

}else{

header.style.background =
"rgba(0,0,0,0.92)";

header.style.boxShadow = "none";

}

});

// ======================
// BOOKING FORM
// ======================

const bookingForm =
document.getElementById("bookingForm");

bookingForm.addEventListener("submit",
function(e){

e.preventDefault();

const button =
bookingForm.querySelector("button");

button.innerHTML =
"Sending Request...";

button.disabled = true;

setTimeout(()=>{

alert(
"Thank You!\n\nYour booking request has been received.\n\nShri Gajanan Tours & Travels will contact you shortly on your mobile number."
);

bookingForm.reset();

button.innerHTML =
"Send Booking Request";

button.disabled = false;

},1500);

});

// ======================
// SCROLL REVEAL
// ======================

const revealElements =
document.querySelectorAll(
".card,.vehicle-card,.gallery-grid img,.contact-box,.why-grid div"
);

function reveal(){

const trigger =
window.innerHeight * 0.85;

revealElements.forEach(el=>{

const top =
el.getBoundingClientRect().top;

if(top < trigger){

el.style.opacity = "1";
el.style.transform =
"translateY(0px)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity = "0";

el.style.transform =
"translateY(50px)";

el.style.transition =
"all 0.8s ease";

});

window.addEventListener("scroll",
reveal);

reveal();

// ======================
// BUTTON ANIMATION
// ======================

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mouseenter",
()=>{

btn.style.transform =
"scale(1.05)";

});

btn.addEventListener("mouseleave",
()=>{

btn.style.transform =
"scale(1)";

});

});

// ======================
// ACTIVE MENU HIGHLIGHT
// ======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

const sectionHeight =
section.clientHeight;

if(pageYOffset >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});

// ======================
// WHATSAPP BUTTON PULSE
// ======================

const whatsapp =
document.querySelector(".whatsapp");

setInterval(()=>{

whatsapp.style.transform =
"scale(1.15)";

setTimeout(()=>{

whatsapp.style.transform =
"scale(1)";

},400);

},3000);

// ======================
// FOOTER YEAR
// ======================

const footer =
document.querySelector("footer");

const year =
new Date().getFullYear();

footer.innerHTML = `
<div class="footer-logo">
<img src="images/logo.png"
alt="Logo"
width="80">
</div>

<h3>
Shri Gajanan Tours & Travels
</h3>

<p>
Comfortable Ride • Safe Journey • Reliable Service
</p>

<p>
Khamgaon • Buldhana • Maharashtra
</p>

<p>
© ${year} All Rights Reserved
</p>
`;

// ======================
// PAGE LOAD ANIMATION
// ======================

window.addEventListener("load",()=>{

document.body.style.opacity = "1";

});

console.log(
"Shri Gajanan Tours & Travels Loaded Successfully"
);