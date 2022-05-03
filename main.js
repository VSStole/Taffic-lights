"use strict";

function light(){
    const color =document.getElementsByClassName('color');
    color[0].style.background='red';
    color[1].style.background='gray';
    color[2].style.background='gray';

    function Yellow(){
        color[1].style.background='yellow';
    }
    function Green(){
    color[0].style.background='gray';
    color[1].style.background='gray';
    color[2].style.background='green';
    }

    const x = setTimeout(Yellow,4000);
    const y =setTimeout(Green,6000);
    const start =setInterval(light,10000);
}
light();

