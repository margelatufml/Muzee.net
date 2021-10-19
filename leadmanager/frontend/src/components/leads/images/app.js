const hero=document.querySelector(".side-bar");
const logo=document.querySelector(".logo");
const sgup=document.querySelector(".sgup");
const content=document.querySelector(".content");
const mus=document.querySelector(".mus");
const hero1=document.querySelector(".text");
const animatie=document.querySelector(".muzee");
const animatie1=document.querySelector(".arrow");
const btn=document.querySelector(".close"); 
const btn2=document.querySelector(".gotobtn"); 

const tl=new TimelineMax();
btn.style.opacity="0";
function on (){
tl.fromTo(hero,1,{width:'5%'},{width:'100%',ease:Power2.easeInOut});
console.log(1);
btn.style.marginLeft="10px";
logo.style.opacity="0";
sgup.style.opacity="0";
content.style.opacity="0";
mus.style.opacity="0";
hero1.style.opacity="0";
animatie.style.opacity="0";
animatie1.style.opacity="0";
btn2.style.opacity="0";
setTimeout(() => {  btn.style.opacity="1";}, 1690);
}

function off(){
      tl.fromTo(hero,1,{width:'100%'},{width:'3%',ease:Power2.easeInOut});
      console.log(1); setTimeout(() => { btn.style.opacity="0"; }, 190);
      setTimeout(() => {  hero.style.position="absolute";
      logo.style.opacity="1";
      sgup.style.opacity="1";
      content.style.opacity="1";
      mus.style.opacity="1";
      hero1.style.opacity="1";
      animatie.style.opacity="1";
      animatie1.style.opacity="1";}, 1590);
      }


      /*function on (){
      if(x==0){
tl.fromTo(hero1,1,{width:'10%'},{width:'100%',ease:Power2.easeInOut});
      }
x=1;
console.log(1);
}
function off (){
if(x==1){
      tl.fromTo(hero1,1,{width:'40%'},{width:'10%',ease:Power2.easeInOut});
}
x=0;
      }
      */