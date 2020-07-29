let squares = document.querySelectorAll(".color");
const button = document.getElementById("btn");
palleteArr = [];

function getRGB(){
    return Math.floor(Math.random()*256).toString();
}

function getColor(){
    let color = "rgb(";
    for(let i = 0; i < 3; i++){
        if(i < 2){
            color += (getRGB() + ", ");
        }
        else{
            color += (getRGB() + ")")
        }
    }
    return color;
}

function getPallete(){
    palleteArr = [];
    for(let i = 0; i < 6; i++){
        palleteArr.push(getColor());
    }
}

function fillPallete(){
    getPallete();
    squares.forEach((square, index) =>{
        square.style.backgroundColor = palleteArr[index];
        square.textContent = palleteArr[index];
    });
}

button.addEventListener("click", fillPallete);
