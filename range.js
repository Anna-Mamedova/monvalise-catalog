function controlFromSlider(fromSlider, toSlider) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C4C7C7', '#8E9192', toSlider);
    if (from > to) {
      fromSlider.value = to;
    }
}

function controlFromSlider1(fromSlider1, toSlider1) {
  const [from, to] = getParsed(fromSlider1, toSlider1);
  fillSlider(fromSlider1, toSlider1, '#C4C7C7', '#8E9192', toSlider1);
  if (from > to) {
    fromSlider1.value = to;
  }
}
  
function controlToSlider(fromSlider, toSlider) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C4C7C7', '#8E9192', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
      toSlider.value = to;
    }   
}

function controlToSlider1(fromSlider1, toSlider1) {
  const [from, to] = getParsed(fromSlider1, toSlider1);
  fillSlider(fromSlider1, toSlider1, '#C4C7C7', '#8E9192', toSlider1);
  setToggleAccessible(toSlider1);
  if (from <= to) {
    toSlider1.value = to;
  }   
}
  
function getParsed(currentFrom, currentTo) {
    const from = parseInt(currentFrom.value, 10);
    const to = parseInt(currentTo.value, 10);
    return [from, to];
}

function getParsed1(currentFrom, currentTo) {
  const from = parseInt(currentFrom.value, 10);
  const to = parseInt(currentTo.value, 10);
  return [from, to];
}
  
function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - to.min;
    const toPosition = to.value - to.min;
    controlSlider.style.background = `linear-gradient(
    to right,
    ${sliderColor} 0%,
    ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
    ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
    ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
    ${sliderColor} 100%)`;
}

function fillSlider1(from, to, sliderColor, rangeColor, controlSlider) {
  const rangeDistance = to.max-to.min;
  const fromPosition = from.value - to.min;
  const toPosition = to.value - to.min;
  controlSlider.style.background = `linear-gradient(
  to right,
  ${sliderColor} 0%,
  ${sliderColor} ${(fromPosition)/(rangeDistance)*100}%,
  ${rangeColor} ${((fromPosition)/(rangeDistance))*100}%,
  ${rangeColor} ${(toPosition)/(rangeDistance)*100}%, 
  ${sliderColor} ${(toPosition)/(rangeDistance)*100}%, 
  ${sliderColor} 100%)`;
}
  
function setToggleAccessible(currentTarget) {
    const toSlider = document.querySelector('#toSlider');
    if (Number(currentTarget.value) <= 0 ) {
      toSlider.style.zIndex = 2;
    } else {
      toSlider.style.zIndex = 0;
    }
}

function setToggleAccessible1(currentTarget) {
  const toSlider1 = document.querySelector('#toSlider1');
  if (Number(currentTarget.value) <= 0 ) {
    toSlider1.style.zIndex = 2;
  } else {
    toSlider1.style.zIndex = 0;
  }
}
  
const fromSlider = document.querySelector('#fromSlider');
const toSlider = document.querySelector('#toSlider');
const fromSlider1 = document.querySelector('#fromSlider1');
const toSlider1 = document.querySelector('#toSlider1');
  
fillSlider(fromSlider, toSlider, '#C4C7C7', '#8E9192', toSlider);
setToggleAccessible(toSlider);

fillSlider1(fromSlider1, toSlider1, '#C4C7C7', '#8E9192', toSlider1);
setToggleAccessible(toSlider1);
  
fromSlider.oninput = () => controlFromSlider(fromSlider, toSlider);
toSlider.oninput = () => controlToSlider(fromSlider, toSlider);

fromSlider1.oninput = () => controlFromSlider(fromSlider1, toSlider1);
toSlider1.oninput = () => controlToSlider(fromSlider1, toSlider1);