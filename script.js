
const title = document.getElementById('hero-title');

var customNodeCreator = function(character) {
  return document.createTextNode(character);
}

const typewriter = new Typewriter(title, {
  loop: false,
  delay: 100,
  onCreateTextNode: customNodeCreator,
});

typewriter
  .pauseFor(300)
  .typeString('Hi, I am <span style="color: #e9ae1b">Lidia</span><br>')
  .pauseFor(300)
  .typeString('Software engineer')
  .pauseFor(300)
  .deleteChars(17)
  .pauseFor(300)
  .typeString('Web developer')
  .pauseFor(300)
  .deleteChars(13)
  .pauseFor(300)
  .typeString('Fullstack software engineer')
  .start();



/********************* NAVIGATION *******************/
const mobileLinks = document.getElementById("mobile-links");
const sandWichMenu = document.getElementById("sandwich");

function toggleSandwichMenu() {
    if (mobileLinks.style.display === "flex") {
      mobileLinks.style.display = "none";
    } else {
      mobileLinks.style.display = "flex";
      mobileLinks.style.flexDirection = "column";
      mobileLinks.style.alignItems = "flex-end";
    }
}


/* Hide the mobile-navbar on window resize */
window.addEventListener("resize", (event) => {
  if (window.innerWidth > 778) {
    mobileLinks.style.display = "none";
  } else {
    //
  }
});
