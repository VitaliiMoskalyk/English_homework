import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebP();

const bill = document.querySelectorAll(".Bill");
const max = document.querySelectorAll(".Max");
const speakButton = document.querySelectorAll("#speakButton");
const textButton = document.querySelector("#textButton");
let i = 0;

function arrayConcat(a, b) {
  let result = [];
  let len = a.length >= b.length ? a.length : b.length;
  for (let i = 0; i < len; i++) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
  }
  return result;
}

function speak(text, voice) {
  // create a SpeechSynthesisUtterance to configure the how text to be spoken
  let speakData = new SpeechSynthesisUtterance();
  speakData.volume = 1; // From 0 to 1
  speakData.rate = 1; // From 0.1 to 10
  speakData.pitch = 2; // From 0 to 2
  speakData.text = text;
  speakData.lang = "en";
  speakData.voice = voice;

  // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking
  speechSynthesis.speak(speakData);
}
const arr = arrayConcat(bill, max);

textButton.addEventListener("click", () => {
  textButton.innerText = "Continue the dialogue";

  arr[i].parentNode.classList.add("visible");
  speakButton[i].addEventListener("click", (e) => {
    function getVoices() {
      let voices = speechSynthesis.getVoices();
      if (!voices.length) {
        // some time the voice will not be initialized so we can call speak with empty string
        // this will initialize the voices
        let utterance = new SpeechSynthesisUtterance("");
        speechSynthesis.speak(utterance);
        voices = speechSynthesis.getVoices();
      }

      return voices;
    }

    if ("speechSynthesis" in window) {
      let voices = getVoices();

      speak(e.currentTarget.parentElement.innerText, voices[1]);
    } else {
      console.log(" Speech Synthesis Not Supported 😞");
    }
  });
  i++;

  if (i === arr.length) {
    textButton.setAttribute("disabled", "");
    textButton.innerText = "Finished";
  }
});

const tabs = document.querySelectorAll(".nav-link");

tabs.forEach((i) => {
  if (i.href === location.href) {
    i.classList.add("active");
  } else {
    i.classList.remove("active");
  }
});
console.log(location.href, tabs);

// Volume of  noise
let vid = document.getElementById("myAudio");
vid.volume = 0.08;
