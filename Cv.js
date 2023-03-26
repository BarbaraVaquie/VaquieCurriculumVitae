$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}
let innercursor = document.querySelector('#cursor');
document.addEventListener('mousemove', movecursor);
function movecursor(e) {
  let x = e.clientX;
  let y = e.clientY;
 // console.log(x,y);
innercursor.style.left='${x}px';
innercursor.style.top='${y}px';
}
 $(".desplegable > span").click(function() {      
      $(this).next(".header3").toggle(500);
    });
