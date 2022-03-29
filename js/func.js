const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDay() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90; //ecuacion para sacar los segundos en grados
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;//le pongo el estilo rotate con la variable ya calculada

    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
};

setInterval(setDay, 1000);