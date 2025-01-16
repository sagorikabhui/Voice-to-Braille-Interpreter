function saveToHistory(currentText, currentBraille) {
    const historyOutput = document.getElementById('historyOutput');


    const historyItem = document.createElement('div');


    historyItem.innerHTML = `
        <strong>Text:</strong> ${currentText} <br>
        <strong>Braille:</strong> ${currentBraille} <br><br>
    `;


    historyOutput.appendChild(historyItem);
}


function startRecognition() {
    const language = document.getElementById('language').value;
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const textOutput = document.getElementById('textOutput');
    const brailleText = document.getElementById('brailleText');

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();


    recognition.lang = language === 'english' ? 'en-US' : 'hi-IN';

    startButton.disabled = true;
    stopButton.disabled = false;


    recognition.onresult = function (event) {
        const recognizedText = event.results[0][0].transcript;
        textOutput.innerHTML = recognizedText;
        const brailleConvertedText = convertToBraille(recognizedText, language);
        brailleText.innerHTML = brailleConvertedText;


        saveToHistory(recognizedText, brailleConvertedText);
    };


    recognition.start();


    stopButton.onclick = function () {
        recognition.stop();
        startButton.disabled = false;
        stopButton.disabled = true;
    };
}


function convertToBraille(text, language) {
    let brailleText = '';

    const brailleDict = language === 'english' ? englishBrailleDict : hindiBrailleDict;

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();
        brailleText += brailleDict[char] ? brailleDict[char] : '';
    }

    return brailleText;
}

const englishBrailleDict = {
    "a": "⠁",
    "b": "⠃",
    "c": "⠉",
    "d": "⠙",
    "e": "⠑",
    "f": "⠋",
    "g": "⠛",
    "h": "⠓",
    "i": "⠊",
    "j": "⠚",
    "k": "⠅",
    "l": "⠇",
    "m": "⠍",
    "n": "⠝",
    "o": "⠕",
    "p": "⠏",
    "q": "⠟",
    "r": "⠗",
    "s": "⠎",
    "t": "⠞",
    "u": "⠥",
    "v": "⠧",
    "w": "⠺",
    "x": "⠭",
    "y": "⠽",
    "z": "⠵",
    "0": "⠴",
    "1": "⠁",
    "2": "⠃",
    "3": "⠉",
    "4": "⠙",
    "5": "⠑",
    "6": "⠋",
    "7": "⠛",
    "8": "⠓",
    "9": "⠊",
    ".": "⠲",
    ",": "⠂",
    "?": "⠦",
    "'": "⠄",
    "-": "⠤",
    ":": "⠰",
    ";": "⠰",
    "!": "⠖",
    "&": "⠯",
};

const hindiBrailleDict = {
    "अ": "⠁",
    "आ": "⠃",
    "इ": "⠊",
    "ई": "⠒",
    "उ": "⠥",
    "ऊ": "⠦",
    "ऋ": "⠏",
    "ऍ": "⠇",
    "ऎ": "⠭",
    "ए": "⠽",
    "ऐ": "⠾",
    "ऑ": "⠿",
    "ऒ": "⠗",
    "ओ": "⠘",
    "औ": "⠣",
    "अं": "⠅",
    "अः": "⠃",
    "क": "⠅",
    "ख": "⠇",
    "ग": "⠛",
    "घ": "⠅⠇",
    "ङ": "⠝",
    "च": "⠉",
    "छ": "⠘",
    "ज": "⠚",
    "झ": "⠛⠚",
    "ञ": "⠏⠋",
    "ट": "⠓",
    "ठ": "⠘⠓",
    "ड": "⠁⠛",
    "ढ": "⠡",
    "ण": "⠋⠛",
    "त": "⠞",
    "थ": "⠧",
    "द": "⠙",
    "ध": "⠋⠙",
    "न": "⠝",
    "प": "⠏",
    "फ": "⠭",
    "ब": "⠃",
    "भ": "⠃⠩",
    "म": "⠍",
    "य": "⠽",
    "र": "⠗",
    "ल": "⠇",
    "व": "⠺",
    "श": "⠱",
    "ष": "⠹",
    "स": "⠎",
    "ह": "⠓",
    "क्ष": "⠞⠱",
    "ज्ञ": "⠘⠆",
    "०": "⠴",
    "१": "⠁",
    "२": "⠃",
    "३": "⠉",
    "४": "⠙",
    "५": "⠑",
    "६": "⠋",
    "७": "⠛",
    "८": "⠓",
    "९": "⠊",
};

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(nav, URL, li, a[href = "#${id}"]).classList.add('active');
        }
    });
});
function toggleFeedbackForm() {
    const feedbackForm = document.getElementById('feedbackForm');

    if (feedbackForm.style.display === 'none' || feedbackForm.style.display === '') {
        feedbackForm.style.display = 'block';
    } else {
        feedbackForm.style.display = 'none';
    }
}

const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        darkModeToggle.textContent = '🌙 Dark Mode';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.textContent = '☀️ Light Mode';
    }
});
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});
