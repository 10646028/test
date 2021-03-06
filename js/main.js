$ = jQuery;

$(window).scroll(function () {
  // 底圖變色控制
  // 設置整個網頁的高度
  let scrollEnd = document.documentElement.scrollHeight;
  var scroolNow = $(window).scrollTop();
  var opacityVal = scroolNow / scrollEnd / 1.4 ;

  document.getElementsByClassName("bg1")[1].style.opacity = (1 - opacityVal);
  document.getElementsByClassName("bg2")[0].style.opacity = opacityVal;

  //text-section 透明度控制
  for (var i =0; i<document.getElementsByClassName('text-section').length; i++){
    var textOpacity = getPosition(document.getElementsByClassName('text-section')[i])['y'];
    document.getElementsByClassName('text-section')[i].style.opacity = scroolNow/textOpacity;
  }
});


// nav 控制開關，預設#over關閉
// over     = 選單展開時覆蓋整個頁面的區塊
// openbtn  = 展開選單的按鈕
// closebtn = 關閉選單的按鈕
document.getElementById('over').style.display="none";
document.getElementById('openbtn').addEventListener('click',function(){
  document.getElementById('over').style.display="block"
  document.getElementById('openbtn').style.display = "none";
})
document.getElementById('closebtn').addEventListener('click',function(){
  document.getElementById('openbtn').style.display="block"
  document.getElementById('over').style.display = "none";
})
document.getElementById('over').addEventListener('click',function(){
  document.getElementById('openbtn').style.display="block"
  document.getElementById('over').style.display = "none";
})

// loading 動畫
$(document).ready(function () {
  document.getElementById("container").style.display = "none";
  setTimeout(function () {
    document.getElementById("load").style.display = "none";
    document.getElementById("container").style.display = "block";
  }, 5000);
});

// document.getElementById("load").style.display = "none";
// document.getElementById("container").style.display = "block";




function getPosition (element) {
  var x = 0;
  var y = 0;
  // 搭配上面的示意圖可比較輕鬆理解為何要這麼計算
  while ( element ) {
    x += element.offsetLeft - element.scrollLeft + element.clientLeft;
    y += element.offsetTop - element.scrollLeft + element.clientTop;
    element = element.offsetParent;
  }

  return { x: x, y: y };
}