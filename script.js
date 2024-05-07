var score = 0;
updateScore();


function checkAnswer1(answer) {
    const result1 = document.getElementById('result1');
    if (answer === 'b') {
        result1.textContent = "ถูกต้อง PYT ย่อมาชื่อบริษัท ปัญญธารา";
        result1.style.color = 'green';
        score++;
    } else {
        result1.textContent = "Incorrect! Try again.";
        result1.style.color = 'red';
    }
    var divsToHide = document.getElementsByClassName("question1"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    updateScore();
}

function checkAnswer2(answer) {
    const result2 = document.getElementById('result2');
    if (answer === 'd') {
        result2.textContent = "ถูกต้อง ATN ย่อมาชื่อบริษัท ออลล์ เทรนนิ่ง";
        result2.style.color = 'green';
        score++;
    } else {
        result2.textContent = "Incorrect! Try again.";
        result2.style.color = 'red';
    }
    var divsToHide = document.getElementsByClassName("question2"); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
    updateScore();
}

function updateScore(){
    document.getElementById('score').innerHTML = score;
}