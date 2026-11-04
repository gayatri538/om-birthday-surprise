
function checkPassword() {
    const password = document.getElementById("password").value;

    if (password === "2") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("birthdayScreen").style.display = "block";
    } else {
        document.getElementById("error").innerText =
            "Oops! Wrong Password ❤️ Try Again!";
    }
}

function showGiftBox() {
    document.getElementById("openGiftButton").style.display = "none";
    document.getElementById("giftBox").style.display = "block";
}

function openGift() {
    const gift = document.querySelector("#giftBox .gift");
    gift.innerText = "💝";

    setTimeout(function () {
        startSurprise();
    }, 500);
}

function startSurprise() {
    document.getElementById("giftBox").style.display = "none";
    document.getElementById("surprise").style.display = "block";

    document.getElementById("surprise").scrollIntoView({
        behavior: "smooth"
    });

    createBalloons();
    createConfetti();
}

function createBalloons() {
    const balloonEmojis = ["🎈", "🎈", "💗", "🎈", "❤️"];

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");

        balloon.innerText = balloonEmojis[
            Math.floor(Math.random() * balloonEmojis.length)
        ];

        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.bottom = "-60px";
        balloon.style.fontSize = "35px";
        balloon.style.zIndex = "1000";
        balloon.style.pointerEvents = "none";

        document.body.appendChild(balloon);

        balloon.animate([
            { transform: "translateY(0)", opacity: 1 },
            { transform: "translateY(-110vh)", opacity: 0.8 }
        ], {
            duration: 5000 + Math.random() * 3000,
            iterations: 1
        });

        setTimeout(() => balloon.remove(), 8500);
    }
}

function createConfetti() {
    const emojis = ["🎉", "✨", "💖", "🎊", "⭐"];

    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement("div");

        confetti.innerText = emojis[
            Math.floor(Math.random() * emojis.length)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "24px";
        confetti.style.zIndex = "1001";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        confetti.animate([
            { transform: "translateY(0) rotate(0deg)" },
            { transform: "translateY(110vh) rotate(720deg)" }
        ], {
            duration: 3000 + Math.random() * 3000,
            iterations: 1
        });

        setTimeout(() => confetti.remove(), 6500);
    }
}
