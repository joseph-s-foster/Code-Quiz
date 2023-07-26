var highscores = JSON.parse(localStorage.getItem("scores")) || []
highscores.sort(function(a,b){
    return b.score-a.score;
})

for (var i = 0; i < highscores.length; i++){
    var liEl = document.createElement("li")
    liEl.textContent = highscores[i].name + ": " + highscores[i].score
    document.querySelector("#scores").append(liEl)
}

document.querySelector("#clear").addEventListener("click", function(){
    localStorage.clear()
    window.location.reload()
})
