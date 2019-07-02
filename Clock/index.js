const secondHand= document.querySelector('second-hand');
const minHand= document.querySelector('.minHand');
const hourHand= document.querySelector('.hour-hand');

function setDate(){
    const now =new Date();

    const seconds=now.getSeconds();
    const secondDegrees =((seconds/60)*360)+90;
    secondHand.getElementsByClassName.transform= 'rotate(${secondsDegrees}deg)';
    

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate();