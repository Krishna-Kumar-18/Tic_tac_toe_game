let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;

const winPattern = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 6, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congrulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winPattern)
    {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!="")
        {
            if(posVal1===posVal2 && posVal2===posVal3)
            {
                showWinner(posVal1);
            }
            else if(count == 9)
            {
                msg.innerText = "Match Draw";
                msgContainer.classList.remove("hide");
            }
        }

    }
};

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn)
        {
            turn = false;
            box.innerText = "X";
            box.style.color = "#083D77";
            count++;
        }
        else 
        {
            turn = true;
            count++;
            box.innerText = "O";
        }
        box.disabled = true;

        
        checkWinner();
    });
});

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);