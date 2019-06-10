//Global Variables
var score = 0;
var i = 1;
var ans = 1;

//Submit Answer Function
function submitAnswer() {
  y = document.getElementById("qans").value;
  var yy = y.toUpperCase();
  x = document.getElementById("question").value;
  if (ans === 1) {
    y = document.getElementById("qans").value;
    if (yy === "C") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  } else if (ans === 2) {
    y = document.getElementById("qans").value;
    if (yy === "D") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }
  else if (ans === 3) {
    y = document.getElementById("qans").value;
    if (yy === "C") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }
  else if (ans === 4) {
    y = document.getElementById("qans").value;
    if (yy === "A") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }
  else if (ans === 5) {
    y = document.getElementById("qans").value;
    if (yy === "A") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }
  else if (ans === 6) {
    y = document.getElementById("qans").value;
    if (yy === "D") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }
  else if (ans === 7) {
    y = document.getElementById("qans").value;
    if (yy === "B") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }
  else if (ans === 8) {
    y = document.getElementById("qans").value;
    if (yy === "A") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }
  else if (ans === 9) {
    y = document.getElementById("qans").value;
    if (yy === "D") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }
  else if (ans === 10) {
    y = document.getElementById("qans").value;
    if (yy === "A") {
      document.getElementById("question").value = "You are right";
      score++;
    } else {
      document.getElementById("question").value = "You are wrong";
    }
    document.view.qscore.value = score;
  }

  ans++;
}

// Ask Questions
function main() {
  if (i === 1) {
    document.view.qnum.value = i;
    document.view.question.value =
      "Where does South Park take place? \na)Toronto \nb)LA \nc)Colorado \nd)New York";
    document.view.qans.value = "";
  } else if (i === 2) {
    document.view.qnum.value = i;
    document.view.question.value =
      "How many seasons?? \na)11 \nb)21 \nc)23 \nd)22";
    document.view.qans.value = "";
  }
  else if (i === 3) {
    document.view.qnum.value = i;
    document.view.question.value =
      "When did it start? \na)1995 \nb)1996 \nc)1997 \nd)1998";
    document.view.qans.value = "";
  }
  else if (i === 4) {
    document.view.qnum.value = i;
    document.view.question.value =
      "Who is Stan's father? \na)Randy \nb)Jimbo \nc)Chef \nd)Kyle";
    document.view.qans.value = "";
  }
  else if (i === 5) {
    document.view.qnum.value = i;
    document.view.question.value =
      "Stan's best friend? \na)Kyle \nb)Jimmy \nc)Timmy \nd)Ike";
    document.view.qans.value = "";
  }
  else if (i === 6) {
    document.view.qnum.value = i;
    document.view.question.value =
      "Eric's last name? \na)Bob \nb)Jimbo \nc)Brown \nd)Cartman";
    document.view.qans.value = "";
  }
  else if (i === 7) {
    document.view.qnum.value = i;
    document.view.question.value =
      "How many siblings does Eric have? \na)2 \nb)0 \nc)3 \nd)4";
    document.view.qans.value = "";
  }
  else if (i === 8) {
    document.view.qnum.value = i;
    document.view.question.value =
      "What pet does Eric have? \na)Cat \nb)Dog \nc)Fish \nd)Bird";
    document.view.qans.value = "";
  }
  else if (i === 9) {
    document.view.qnum.value = i;
    document.view.question.value =
      "Who is their teacher? \na)Mr. Cartman \nb)Mr. Brown \nc)Mr. Ben \nd)Mr. Garrison";
    document.view.qans.value = "";
  }
  else if (i === 10) {
    document.view.qnum.value = i;
    document.view.question.value =
      "What was Cartman's themepark called? \na)Cartmanland \nb)Ericland \nc)Fattyland \nd)Funland";
    document.view.qans.value = "";
  }

  i++;
}
