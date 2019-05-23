let red = 100;
let green = 100;
let blue = 100;
let wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo = 5;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
  // console.log(e.keyCode, e.which);
  
  if(e.keyCode ==38){
    red += wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    green += wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    blue += wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo; 
  }
  else if(e.keyCode ==40){
    red -= wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    green -= wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    blue -= wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo; 
  }

  switch(e.keyCode){
    case 37:
    red += wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    green += wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    blue += wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo; 
    break;

    case 39:
    red -= wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    green -= wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    blue -= wartoscOjakaJestPrzyciemnianeLubRozjasnianeTlo;
    break;
  }
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

window.addEventListener('keydown', changeColor)