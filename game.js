var player1 = localStorage.getItem("Player1");
var player2 = localStorage.getItem("Player2");

var player1Score = 0;
var player2Score = 0;

document.getElementById("player1_name").innerHTML = player1 + " :  ";
document.getElementById("player2_name").innerHTML = player2 + " :  ";
document.getElementById("player1_score").innerHTML =" " +  player1Score;
document.getElementById("player2_score").innerHTML =" " +  player2Score;


document.getElementById("player_question").innerHTML = "Question Turn : " + " " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + " " + player2;

var questionTurn = "player1";
var answerTurn = "player2";

function send(){
    getWord = document.getElementById("word").value;
    Word = getWord.toLowerCase();
    console.log("Word in lower case-" + " " + Word);

    char1 = Word.charAt(1);
    console.log(char1);
    LengthDiv2 = Word.length/2;
    console.log(LengthDiv2);
    char2 = Word.charAt(LengthDiv2);
    console.log(char2);
    char3 = Word.charAt(Word.length-1);
    console.log(char3);

    removeChar1 = Word.replace(char1,"_");
    removeChar2 = removeChar1.replace(char2,"_");
    removeChar3 = removeChar2.replace(char3,"_");
    console.log(removeChar3);

    QuestionWord = "<h4 id='word-display'>Q. " + removeChar3 + "</h4>";
    InputBox = "<br> Answer: <input type='text' id='input-checkbox'>";
    Button = "<br><br><button class='btn btn-lg' style='background-color: #5b60ff;' onclick='Check()'>Check</button>";
    Row = QuestionWord + InputBox + Button;
    console.log(Row);

    document.getElementById("output").innerHTML = Row;

    document.getElementById("word").value = '';
}

function Check(){
    var getAnswer = document.getElementById("input-checkbox").value;
    var AnswerGot = getAnswer.toLowerCase();
    var AnswerRequired = Word;
    console.log(AnswerGot);
    console.log(AnswerRequired);

    if(AnswerGot == AnswerRequired){
        if(answerTurn == "player1"){
            player1Score++;
            document.getElementById("player1_score").innerHTML =" " +  player1Score;
        }
        else if(answerTurn == "player2"){
            player2Score++;
            document.getElementById("player2_score").innerHTML =" " +  player2Score;
        }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn : " + " " + player2;
        
    }
    else{
        questionTurn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn : " + " " + player1;
        
    }
    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + " " + player2;
        
    }
    else{
        answerTurn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + " " + player1;
        
    }
    

    document.getElementById("output").innerHTML = '';


}





