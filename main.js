let userscore = 0;
let compscore = 0;

const options = document.querySelectorAll(".option");

const msg = document.querySelector("#msg")
const userid =document.querySelector("#user-score")
const compid =document.querySelector("#comp-score")

const GenComp = () => {
    const choices = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * 3)
    return choices[rand];

}



const ShowWin = (userWin ,userChoice,CompChoice) => {
    if (userWin) {
        userscore++
        userid.innerText = userscore
        msg.innerText = `you win, your ${userChoice} beats ${CompChoice}`
        msg.style.backgroundColor ="green"
    } else {
        compscore++
        compid.innerText =compscore
        msg.innerText = ` you lose ${CompChoice} beats your ${userChoice}`
   msg.style.backgroundColor ="red"
    }
}


const drawgame = () => {
    console.log("Game was draw ")
      msg.innerText ="Game was draw"
         msg.style.backgroundColor ="rgb(11, 11, 79)"
}

const PlayGame = (userChoice) => {

    const CompChoice = GenComp()

    if (CompChoice === userChoice) {
        drawgame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = CompChoice === "scissors" ? false : true;
        } else {
            userWin = CompChoice === "rock" ? false : true;
        }


        ShowWin(userWin ,userChoice , CompChoice)
    }
}
options.forEach((options) => {
    options.addEventListener("click", () => {
        const userChoice = options.getAttribute("id");
        PlayGame(userChoice);
    })
});
