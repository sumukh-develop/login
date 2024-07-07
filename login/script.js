const images = [
    'url(donatee.jpg)',
    'url(ngo2.jpg)',
    'url(ngo.jpg)',
    'url(donate1.jpg)'  
];

let currentIndex = 0;

const backgroundImage = document.querySelector('.background-image');

function changeBackgroundImage() {
    backgroundImage.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 3000); 
changeBackgroundImage();

function signInWithGoogle() {
    console.log("Signing in with Google...");
}

function signInWithFacebook() {
    console.log("Signing in with Facebook...");
}

