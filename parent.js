const message = `
Thank you for being the most wonderful parents I could ever ask for.

Your love, sacrifices, prayers, and guidance have shaped me into the person I am today.

No words can truly explain how grateful I am to have you in my life.

May God continue to bless you, strengthen you, protect you, and fill your hearts with endless joy.

I love you more than words can ever express. ❤️
`;

const typingText = document.getElementById("typing-text");

let index = 0;
let typingSpeed = 45;


/* =========================
   TYPE THE MESSAGE
========================= */

function typeMessage() {

    if (index < message.length) {

        typingText.textContent += message.charAt(index);

        index++;

        setTimeout(typeMessage, typingSpeed);

    }

}


/* =========================
   RESTART MESSAGE
========================= */

function restartMessage() {

    typingText.textContent = "";

    index = 0;

    typeMessage();

}


/* =========================
   START WHEN PAGE LOADS
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        typeMessage();

    }, 1500);

});