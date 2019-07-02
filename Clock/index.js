const secondHand= document.querySelector('second-hand');
const minHand= document.querySelector('.minHand');
const hourHand= document.querySelector('.hour-hand');

function setDate(){
    const now =new Date();

    const seconds=now.getSeconds();
    const secondDegrees =((seconds/60)*360)+90;
    secondHand.getElementsByClassName.transform= 'rotate(${secondsDegrees}deg)';

}
setInterval(setDate, 1000);
setDate();