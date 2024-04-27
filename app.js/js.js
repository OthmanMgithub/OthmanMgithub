"use strict";
let scrollp = document.getElementById("scrollParent");
let right = document.getElementById("rightArrow");
let left = document.getElementById("leftArrow");
let body = document.getElementsByTagName("body");

right.addEventListener('click' , ()=>{
    scrollp.scrollBy(500 , 0);
});

left.addEventListener('click' , ()=>{
    scrollp.scrollBy(-500 , 0);
});


let input = document.getElementById("input");
let sBtn = document.getElementsByClassName("subscribeBtn");

let upward = document.getElementById("arrowUp");

upward.addEventListener('click' , ()=> {
    window.scrollTo(0 , 0);
});

let val = input.value;

let num = 10;

sBtn.addEventListener('click' , (evt)=>{
    evt.preventDefault();
    if(val.length >= num){
        console.log(val);
    }
    else{
        console.error("should type 10 characters at least");
    }
});