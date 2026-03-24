let icon = document.querySelector("i");
let hero = document.getElementById("hero");
let header = document.querySelector("header");
let select = document.getElementsByTagName("select");

let dark = false;

icon.onclick = () => {
  dark = !dark;

  if (dark) {
    hero.style.backgroundColor = "hsl(237, 17%, 21%)";
    header.style.backgroundColor = "hsl(237, 17%, 21%)";
    for (let s of select) s.style.backgroundColor = "hsl(237, 17%, 21%)";
    icon.style.color = "hsl(13, 100%, 72%)";
  } else {
    hero.style.backgroundColor = "";
    header.style.backgroundColor = "";
    for (let s of select) s.style.backgroundColor = "";
    icon.style.color = "";
  }
};

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
let open=document.querySelector(' .menu .list');
let close=document.querySelector(' .menu .lost');
let side=document.querySelector('.left');
const mq = window.matchMedia("(max-width: 776px)");







function setLayout() {
  if (mq.matches) {
    // موبايل: القائمة مخفية افتراضياً وزر open ظاهر
    side.style.display = "none";
    open.style.display = "";
    close.style.display = "none";
  }
 else {
    // ديسكتوب: القائمة تظهر عادي بدون أزرار
    side.style.display = "";
    open.style.display = "none";
    close.style.display = "none";
  }
}

// شغّله أول ما الصفحة تفتح
setLayout();

// شغّله كل ما يتغير حجم الشاشة
mq.addEventListener("change", setLayout);

open.onclick = () => {
  if (mq.matches) {
    close.style.display = "block";
    open.style.display = "none";
    side.style.display = "block";
  }
};

close.onclick = () => {
  if (mq.matches) {
    close.style.display = "none";
    open.style.display = "block";
    side.style.display = "none";
  }
};