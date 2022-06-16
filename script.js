
var countShot = 0;
var bulletPosition = random(1, 6);
var btnShot = document.querySelector("#shot");
var currentPlayer = 1;
var baraban = document.querySelector("#baraban");

btnShot.onclick = start;

/* первый клик по кнопке начать*/
function start() {
    btnShot.className = "off";
    var bullet = document.querySelector("#bullet");
        bullet.style.display = "block";

    var revolver = document.querySelector("#revolver");
        revolver.style.display = "block";

  
    btnShot.onclick = "";
    var rotate = 0;
    var timer = setInterval(function() {
        rotate = rotate + 10;
        baraban.style.transform = "rotate(" + rotate + "deg)";
        if (rotate > 300) {
            bullet.style.display = "none";
        }
        if (rotate == 720) {
            clearInterval(timer);
            btnShot.innerText = "Сделать выстрел";
        btnShot.onclick = shot;

        btnShot.className = "";
        }
    }, 50)
    
}


function random(min, max) { 
 return Math.floor( Math.random() * (max - min) + min );
}


var rotateBaraban = 0;
function shot() {
    countShot = countShot + 1;
    if (bulletPosition == countShot) {
       var blood = document.createElement("div");
        blood.id = "blood";
        var player = document.querySelector("#player" + currentPlayer);
        player.appendChild(blood);
    
        endGame();
    } else { 
        
        
        if (currentPlayer == 1) {
            rotationRight();
            currentPlayer = 2;
        } else {
            rotationLeft();
            currentPlayer = 1;
        }
        var rotate = rotateBaraban;
        var timer = setInterval(function () { 
            rotate = rotate + 10;
            baraban.style.transform = "rotate(" + rotate + "deg)";
            if (rotate == rotateBaraban + 60) { 
                clearInterval(timer);
                rotateBaraban = rotate;
            }
        }, 10)
        baraban.style.transform = "rotate(" + rotateBaraban + "deg)";
    }
  /*  alert(countShot);*/
}


var revolver = document.querySelector("#revolver");
function rotationRight() {
   revolver.style.background = 'url("images/revolver-right.png") no-repeat'

}
rotationRight();

var revolver = document.querySelector("#revolver");
function rotationLeft() {
   revolver.style.background = 'url("images/revolver-left.png") no-repeat'
}
rotationLeft();

function endGame() {
    alert("GAME OVER");
    btnShot.innerText = "Рестарт";
    btnShot.onclick = restart;
}

function restart() {
location.reload();
}
 
    