const vibrationButton = document.getElementById("vibration");

vibrationButton.addEventListener("click", (event) => {
    console.log("lol");
    window.navigator.vibrate(200);
});