let display = document.getElementById("display");
let degree = true;

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function back() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function toggleMode() {
    degree = !degree;
    alert(degree ? "Degree Mode" : "Radian Mode");
}

function func(type) {
    let x = Number(display.value);
    let angle = degree ? x * Math.PI / 180 : x;

    if (type === "sin") display.value = Math.sin(angle);
    if (type === "cos") display.value = Math.cos(angle);
    if (type === "tan") display.value = Math.tan(angle);

    if (type === "asin") display.value = Math.asin(x) * 180 / Math.PI;
    if (type === "acos") display.value = Math.acos(x) * 180 / Math.PI;
    if (type === "atan") display.value = Math.atan(x) * 180 / Math.PI;

    if (type === "sqrt") display.value = Math.sqrt(x);
    if (type === "cbrt") display.value = Math.cbrt(x);
    if (type === "log") display.value = Math.log10(x);
    if (type === "ln") display.value = Math.log(x);
}

function factorial() {
    let n = Number(display.value);
    let f = 1;
    for (let i = 1; i <= n; i++) f *= i;
    display.value = f;
}