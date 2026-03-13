let body=document.querySelector("body");

Object.assign(body.style,{
    backgroundImage: "url('https://i.pinimg.com/originals/c5/51/8f/c5518f6f76ee92d55cd9b520cabc29d6.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   backgroundAttachment: "fixed", 
   margin: "0",
});




let block=document.querySelector(".block");

Object.assign(block.style,{
    display: "flex",
    alignItems: "center",
    
    justifyContent: "center",
    marginTop: "0px",
});



let card=document.querySelector(".card");


Object.assign(card.style,{
    width: "400px",
    height: "250px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "0px 0px 10px 10px",
    color:"whilemodel",
     display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
});



let txt = document.querySelector(".tx");

txt.innerHTML = "Where are you map";

Object.assign(txt.style,{
    fontSize: "30px",
    color: "#afaf78",
});












document.querySelectorAll(".bt").forEach(btn => {
    btn.innerHTML = "Click";
});



// Birinchi tugma uchun
const firstBtn = document.querySelectorAll(".bt")[0];

Object.assign(firstBtn.style, {
    width: "130px",
    height: "40px",
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    backgroundColor: "#ffaa6767",
    color: "#f69b32",
    transition: "all 0.3s ease"   
});

firstBtn.addEventListener("mouseenter", () => {
    Object.assign(firstBtn.style, {
        backgroundColor: "#ff8c00",   
        color: "white",
        transform: "scale(1.08)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        cursor: "pointer",
        borderRadius: "15px",
        transition: "all 0.3s ease-in-out",
        boxShadow: `
                0 0 8px 2px rgba(100,180,255,0.6),
                0 0 18px 6px rgba(100,180,255,0.45),
                0 0 35px 12px rgba(100,180,255,0.25),
                0 0 60px 20px rgba(100,180,255,0.12)
            `
    });
});

firstBtn.addEventListener("mouseleave", () => {
    Object.assign(firstBtn.style, {
        backgroundColor: "#ffaa6767", 
        color: "#f69b32",
        transform: "scale(1)",
        boxShadow: "none",
        borderRadius: "3px",
        transition: "all 0.3s ease-in-out"
    });
});



// function greet(name, callback) {
//    alert('Hi' + ' ' + name);
//     callback();
// }

// function callMe() {
//     alert('My new code script house tutorial is ready');
// }

// greet('Saidxon', callMe);





let card1=document.querySelector(".card1");


Object.assign(card1.style,{
   
     display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexwrap: "wrap",
});


let block1=document.querySelector(".block1");

Object.assign(block1.style,{
 display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: "40px",
     width: "100%",
    maxWidth: "100%",
    height: "250px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "16px",
    color:"whilemodel",
    flexwrap: "wrap",
})

let ph=document.querySelector(".ph");

Object.assign(ph.style,{
    width: "35px",
    height: "35px",
})


document.getElementById("bt1").addEventListener("click", () => {
    window.location.href = "in4.html";
});


const firstBtn1 = document.getElementById("bt1");

Object.assign(firstBtn1.style, {
    width: "130px",
    height: "40px",
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    backgroundColor: "#77665967",
    color: "#1d7be6d2",
    transition: "all 0.3s ease",   
    marginRight:"20px",
});

firstBtn1.addEventListener("mouseenter", () => {
    Object.assign(firstBtn1.style, {
        backgroundColor: "#77665967",   
        color: "#1d7be6",
        transform: "scale(1.08)",
        boxShadow: "0 10px 12px rgba(0,0,0,0.25)",
        cursor: "pointer",
        borderRadius: "1.5px",
        transition: "all 0.3s ease-in-out",
        boxShadow: `
                0 0 9px 4px rgba(89, 173, 20, 0.6),
                0 0 15px 8px rgba(0, 0, 0, 0.74),
                0 0 40px 12px rgba(173, 157, 11, 0.67),
                0 0 50px 16px rgba(38, 134, 224, 0.12)
            `,

    });
});

firstBtn1.addEventListener("mouseleave", () => {
    Object.assign(firstBtn1.style, {
        backgroundColor: "#77665967", 
        color: "#1d7be6d2",
        // transform: "scale(1)",
        boxShadow: "none",
        borderRadius: "1.5px",
        transition: "all 0.3s ease-in-out"
    });
});





document.getElementById("bt2").addEventListener("click", () => {
    window.location.href = "in3.html";
});


const firstBtn2 = document.getElementById("bt2");

Object.assign(firstBtn2.style, {
    width: "130px",
    height: "40px",
    padding: "10px",
    border: "none",
    borderRadius: "3px",
    backgroundColor: "#77665967",
    color: "#1d7be6d2",
    transition: "all 0.3s ease"   ,
    marginLeft:"20px"
});

firstBtn2.addEventListener("mouseenter", () => {
    Object.assign(firstBtn2.style, {
        backgroundColor: "#77665967",   
        color: "#1d7be6",
        transform: "scale(1.08)",
        boxShadow: "0 10px 12px rgba(0,0,0,0.25)",
        cursor: "pointer",
        borderRadius: "1.5px",
        transition: "all 0.3s ease-in-out",
        boxShadow: `
                0 0 8px 2px rgba(89, 173, 20, 0.6),
                0 0 18px 6px rgba(0, 0, 0, 0.74),
                0 0 35px 12px rgba(173, 157, 11, 0.67),
                0 0 60px 20px rgba(38, 134, 224, 0.12)
            `
    });
});

firstBtn2.addEventListener("mouseleave", () => {
    Object.assign(firstBtn2.style, {
        backgroundColor: "#77665967", 
        color: "#1d7be6d2",
        // transform: "scale(1)",
        boxShadow: "none",
        borderRadius: "1.5px",
        transition: "all 0.3s ease-in-out"
    });
});
