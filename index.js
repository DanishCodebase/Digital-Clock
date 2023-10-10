const hel = document.getElementById("hour");
const mel = document.getElementById("minute");
const sel = document.querySelector(".sec");
const ampmel = document.getElementById("ampm");

function Clock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hel.innerHTML = h;
    mel.innerHTML = m;
    sel.innerHTML = s;
    ampm.innerHTML = ampm;

    setTimeout(Clock, 1000);
}

Clock();
