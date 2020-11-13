function buttonLogin(){
    var name1 = document.getElementById("player1Name_input").value;
    var name2 = document.getElementById("player2Name_input").value;

    localStorage.setItem("Player1",name1);
    localStorage.setItem("Player2",name2);

    window.location = "game.html";
}