let showscore = document.getElementById('score'); 
let showpoint = document.getElementById('point');
let shownum1 = document.getElementById('num1');
let showmark = document.getElementById('mark');
let shownum2 = document.getElementById('num2');
let showanswer = document.getElementById('answer');
let showresult = document.getElementById('result');
let showplus = document.getElementById('plus');
showplus.checked = true;
showmark.innerHTML = "+";
let score = 0;
let point = 0;
let num1 = 0;
let num2 = 0;
let total = 0;
showscore.innerHTML = score;
showpoint.innerHTML = point;

function random() {
    showpoint.innerHTML = point;
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    shownum1.innerHTML = num1;
    shownum2.innerHTML = num2;
}
function start() {
    random();
    point = 0;
    score = 0;
    showpoint.innerHTML = point;
    showscore.innerHTML = score;
    showanswer.value = '';
}
function btnanswer() {
    checkmark();
    if (total == showanswer.value) {
        showresult.innerHTML = 'ถูกต้อง';
        showresult.style.color = 'green';
        score += 1;
        showscore.innerHTML = score;
        showanswer.value = '';
    } else {
        showresult.innerHTML = 'ไม่ถูกต้อง!';
        showresult.style.color = 'red';
        showanswer.value = '';
    }
    point += 1;
    random();
}
function checkmark() {
    if (showmark.innerHTML == "+") {
        total = num1 + num2;
    } else if (showmark.innerHTML == "-") {
        total = num1 - num2;
    } else if (showmark.innerHTML == "×") {
        total = num1 * num2;
    } else if (showmark.innerHTML == "÷") {
        total = num1 / num2;
    }
}
function btnmark(value) {
    showmark.innerHTML = value;
}

random();