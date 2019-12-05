var container = document.querySelector('#container');
var content = document.createElement("div");
content.classList.add("grid");
const divs = document.getElementsByClassName("grid");
let currentDraw = defaultDraw;
createGrid(16);


function createGrid(x) {

    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            var content = document.createElement("div");
            content.classList.add("grid");
            content.style.width=(960/x)+ "px";
            content.style.height= 960/x + "px";
            container.appendChild(content);
        }
    }
    
    for(let i = 0; i<divs.length; i++){
    divs[i].addEventListener('mouseover', currentDraw);
}

};

function defaultDraw(){
    this.style.backgroundColor = '#000000';
};

function rgbDraw(){
    var r = Math.floor(Math.random()*256);          
    var g = Math.floor(Math.random()*256);          
    var b = Math.floor(Math.random()*256);          
    var rgb = 'rgb(' + r + ',' + g + ',' + b + ')'; 
    this.style.backgroundColor = rgb;
    
}


const clearGrid = document.getElementsByName('clearGrid');
clearGrid[0].addEventListener('click', function(){
    for(let i = 0; i<divs.length; i++ ){
        divs[i].style.backgroundColor = 'rgba(0,0,0,0)';
    }
})

const newGridButton = document.getElementsByName('newGrid');
newGridButton[0].addEventListener('click', function(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    let sides = prompt("How many per side?");
    createGrid(sides);
    
});

const rgbButton = document.getElementsByName('RGB');
rgbButton[0].addEventListener('click',function(){
    for(let i = 0; i<divs.length; i++){
        divs[i].addEventListener('mouseover', rgbDraw);
    }
});

const blackButton = document.getElementsByName('black');
blackButton[0].addEventListener('click',function(){
    for(let i = 0; i<divs.length; i++){
        divs[i].removeEventListener('mouseover', rgbDraw);
        divs[i].addEventListener('mouseover', defaultDraw);
    }
});


function colorShade(color) {
    const rgb = /\d\.\d/g;
    rgb[0] -= Math.round((255 / 100) * 10);
    rgb[1] -= Math.round((255 / 100) * 10);
    rgb[2] -= Math.round((255 / 100) * 10);
    return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  }
const darken = document.getElementsByName('darken');
darken[0].addEventListener('click',function(e){
    for(let i = 0; i<divs.length; i++){
       divs[i].removeEventListener('mouseover', rgbDraw);
       divs[i].removeEventListener('mouseover', defaultDraw);
       divs[i].addEventListener('mouseover', colorShade);
    }
});