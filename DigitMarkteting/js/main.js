// scroll button
onscroll=()=>{
  console.log(window.scrollY);
}
let arrowUp=document.querySelector('.arrowUp');
window.onscroll=()=>{
  if(window.scrollY>100){
    arrowUp.style.display='block';
  }else{
    arrowUp.style.display='none';
  }
}
arrowUp.onclick=()=>{
  window.scrollTo({
    top:0,
    right:0,
    behavior:'smooth'
  })
}
// light&dark mode
let icon = document.querySelector(".btnDARK");
let header = document.querySelector("header");
let hero = document.querySelector("#hero");
let grow=document.querySelector('#grow');
let meet=document.querySelector('#meeting');
let Blog=document.querySelector('#Blog');
let Q=document.querySelector("#questions");
let  ST=document.querySelector("#stay");
let p = document.getElementsByTagName("p");
let h1=document.getElementsByTagName("h1");
let h2=document.getElementsByTagName("h2");
let h3=document.getElementsByTagName("h3");
let h6=document.getElementsByTagName("h6");
let h5=document.getElementsByTagName("h5");
let a=document.getElementsByTagName("a");
let DB=document.querySelectorAll(".dropbtn");
let aw=document.querySelectorAll(".arrow");
let DC=document.querySelectorAll(".dropdown-content");
let gg=document.querySelector(".btnG");
let DRDO=document.querySelectorAll(".dropdown");


let dark = false;
icon.onclick = () => {
  dark = !dark;

  if (dark) {
    hero.style.backgroundColor = "hsl(0, 0%, 1%)";
    grow.style.backgroundColor = "hsl(210, 7%, 6%)";
    meet.style.backgroundColor = "hsl(210, 7%, 6%)";
    Blog.style.backgroundColor = "hsl(0, 0%, 1%)";
    Q.style.backgroundColor = "hsl(210, 7%, 6%)";
     ST.style.backgroundColor = "hsl(210, 7%, 6%)";
    header.style.backgroundColor = "hsl(0, 0%, 1%)"; 
    gg.style.backgroundColor = "hsl(0, 0%, 1%)";
    gg.onmouseover=function(){
      gg.style.backgroundColor="hsl(222, 80%, 42%)";
    }
    gg.onmouseout=function(){
      gg.style.backgroundColor="black";
     }        
   for(let i =0 ;i<h1.length;i++){
      h1[i].style.color="white";  
    }
     for(let j =0 ;j<h2.length;j++){
      h2[j].style.color="white";  
    }
     for(let l =0 ;l<p.length;l++){
      p[l].style.color="white";  
    }
      for(let m =0 ;m<h6.length;m++){
      h6[m].style.color="white";  
    }
     for(let u =0 ;u<h5.length;u++){
      h5[u].style.color="white";  
    }
     for(let n =0 ;n<a.length;n++){
    a[n].style.color="white";                     
    }
     for(let k =0 ;k<h3.length;k++){
      h3[k].style.color="white";                     
    }
     for(let v =0 ;v<DB.length;v++){
      DB[v].style.color="white";                     
    }
    for(let w =0 ;w<aw.length;w++){
      aw[w].style.border= "solid white";
       aw[w].style.display="inline-block";
        aw[w].style.padding="3px";
         aw[w].style.transform="rotate(45deg)";
        aw[w].style.transition="0.3s";
         aw[w].style.borderWidth="0px 2px 2px 0px";
          aw[w].style.marginLeft="5px";                       
    }
     for(let c =0 ;c<DC.length;c++){
      DC[c].style.backgroundColor="hsl(0, 0%, 1%)";                     
    }
   
    
  } else {
    hero.style.backgroundColor = "";
    header.style.backgroundColor = "";
     grow.style.backgroundColor = "";
    meet.style.backgroundColor = "";
    Blog.style.backgroundColor = "";
    Q.style.backgroundColor = "";
     ST.style.backgroundColor = "";
      gg.style.backgroundColor = "white";
      
      for(let i =0 ;i<h1.length;i++){
      h1[i].style.color="";  
    }
     for(let j =0 ;j<h2.length;j++){
      h2[j].style.color="";  
    }
     for(let l =0 ;l<p.length;l++){
      p[l].style.color="";  
    }
      for(let m =0 ;m<h6.length;m++){
      h6[m].style.color="";  
    }
     for(let u =0 ;u<h5.length;u++){
      h5[u].style.color="";  
    }
     for(let n =0 ;n<a.length;n++){
    a[n].style.color="";                     
    }
     for(let k =0 ;k<h3.length;k++){
      h3[k].style.color="";                     
    }
     for(let v =0 ;v<DB.length;v++){
      DB[v].style.color="";                     
    }
     for(let w =0 ;w<aw.length;w++){
      aw[w].style.border= "";
       aw[w].style.display="";
        aw[w].style.padding="";
         aw[w].style.transform="";
        aw[w].style.transition="";
         aw[w].style.borderWidth="";
          aw[w].style.marginLeft="";                       
    }
    for(let c =0 ;c<DC.length;c++){
      DC[c].style.backgroundColor="";                     
    }
   
     
  }
};
// onclick lista

DRDO.forEach((element, index) => {
  element.onclick = function() {
  
    const targetContent = DC[index];
  
    if (targetContent.style.display === "block") {
      targetContent.style.display = "none";
    } else {
      targetContent.style.display = "block";
    }
  };
});

DRDO.forEach((element, index) => {
  element.onclick = function() {
    const targetDropdown = DC[index];
    if (targetDropdown.style.display === "block") {
      targetDropdown.style.display = "none";  
    } else {
      targetDropdown.style.display = "block";  
    }
  };
});

// inner HTML 
// اختيار العناصر الثلاثة من داخل منطقة الكتابة
const spanI = document.querySelector('.typing-area .I');
const spanII = document.querySelector('.typing-area .II');
const spanIII = document.querySelector('.typing-area .III');

const textI = spanI.textContent.trim();
const textII = spanII.textContent.trim();
const textIII = spanIII.textContent.trim();

spanI.textContent = '';
spanII.textContent = '';
spanIII.textContent = '';

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeAndErase(element, text) {
  element.classList.add('typing'); 
  for (let i = 0; i <= text.length; i++) {
    element.textContent = text.substring(0, i);
    await wait(600);
  }
  await wait(700);
  for (let i = text.length; i >= 0; i--) {
    element.textContent = text.substring(0, i);
    await wait(300);
  }
  element.classList.remove('typing'); 
  await wait(200);
}

async function run() {
  while (true) {
    await typeAndErase(spanI, textI);
    await typeAndErase(spanII, textII);
    await typeAndErase(spanIII, textIII);
    await wait(1000);
  }
}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu ul');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

window.addEventListener('load', run);