const pull = document.querySelector("#pull");
const menu = document.querySelector("#echo");
const num  = 5;

function rand(n){
    return Math.ceil(Math.random() * n);
}

pull.addEventListener("click", function() {
    const c = rand(num);
    if (c === 0) {
        echo.innerHTML = "大吉";
    }
    else if (c === 1) {
        echo.innerHTML = "中吉";
    }
    else if (c === 2) {
        echo.innerHTML = "小吉";
    }
    else if (c === 3) {
        echo.innerHTML = "凶";
    }
    else {
        echo.innerHTML = "大凶";
    }});
