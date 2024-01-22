function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if(amount >= 1 && amount <= 100){
    createBoxes(amount);
    input.value = '';
  }
});
destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes(amount){
  destroyBoxes();
  for (let i = 0; i < amount; i++){
    const box = document.createElement('div');
    box.style.backgroundColor= getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;

    boxesContainer.appendChild(box);
  }
}
function destroyBoxes (){
  boxesContainer.innerHTML = '';
}

