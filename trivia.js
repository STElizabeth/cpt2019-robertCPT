<!DOCTYPE html>
<html>
<head>
	<title>Trivia Quiz</title>
	<script>
    
var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        Score++
        
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}


	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Which one of these is a percussion instrument? \na)Trumpet \nb)Euphonium \nc)Viola \nd)Glockenspiel";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which one of these songs did Ludwig van Beethoven write? \na)Ode to Joy \nb)To a Wild Rose \nc)Rejoice \nd)Hallelujah Chorus";
    document.view.qans.value=""
}


	i++; 
}
    </script>

</head>

<body LINK="F7DD5E" VLINK="F7DD5E" ALINK="F7DD5E" onLoad="main()">
<br>
<FORM name="view">  
	Question: &nbsp;<input type="text" name="qnum" size="2" >&nbsp;<input type="button" name="go" value=" Next Question" onClick=main()>
    <br>
    <br>
    Answer:&nbsp;&nbsp;&nbsp; <input type="text" id="qans" size="2">&nbsp;<input type="button" value="Submit Answer" onClick=submitAnswer()>
	<br>
    <br>
    Score: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="number" id= "qscore" name="qscore" size="2">
	<br>
	<br>
	<TEXTAREA COLS=31 ROWS=9 id="question"  wrap="virtual"></TEXTAREA> 
</FORM>
</body>

</html>