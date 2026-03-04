
// let card=document.querySelectorAll(".card")
// Object.assign(card[0].style,{
//     border:"2px solid red",
// })




let username;

document.getElementById("havclick").onclick=function(){
username=document.getElementById("txt").value;
document.getElementById("xt").textContent='Hello, '+username+'!';
}




const decreaseBtn = document.getElementById("decrease");
    const resetBtn    = document.getElementById("reset");
    const increaseBtn = document.getElementById("increase");
    const countLabel  = document.getElementById("countLabel");

    let count = 0;

    function updateDisplay() {
      countLabel.textContent = count;
    }

    decreaseBtn.onclick = () => {
      count--;
      updateDisplay();
    };

    resetBtn.onclick = () => {
      count = 0;
      updateDisplay();
    };

    increaseBtn.onclick = () => {
      count++;
      updateDisplay();
    };

    document.getElementById("havclick").onclick = () => {
      const username = document.getElementById("txt").value.trim();
      if (username) {
        alert("Xush kelibsiz, " + username + "!");
        document.getElementById("xt").textContent = "Salom, " + username + "!";
      } else {
        alert("Iltimos, username kiriting!");
      }
    };

    updateDisplay();