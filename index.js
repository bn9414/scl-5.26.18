var prev = document.getElementById('prev');
prev.addEventListener('click',function(){
  incre(-1);},false);

var nxt = document.getElementById('nxt');
nxt.addEventListener('click',function(){
  incre(1);
    clearInterval(xset);

},false);
 var ban = document.getElementsByClassName('ban');
var caphd = document.getElementsByClassName('hdtxt');
var j =0;

 function incre(k){
     j = j + k;
     if(j == -1){
         j = ban.length-1;
     }
     if(j == ban.length){
         j=0;
     }
    scrollImg(j);
 }
function scrollImg(z){
    ban[0].style.display="none";
    ban[1].style.display="none";
    /*ban[2].style.display="none";
    ban[3].style.display="none";
    ban[4].style.display="none";*/
    ban[z].style.display="block";
    
   caphd[0].style.display="none";
    caphd[1].style.display="none";
    /*caphd[2].style.display="none";
     caphd[3].style.display="none";
    caphd[4].style.display="none";*/
    caphd[z].style.display="block";                              
}
scrollImg(0);
var xset= setInterval(function(){incre(1);},4000);



var imgbor = document.getElementsByClassName("img-bor");
var smlimg = document.getElementsByClassName("sml-img");

var mainimg = document.getElementsByClassName("main-img");

window.onscroll = function() {tabsanim()};

  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
function tabsanim() {
    if(w>= 300){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
/*        
       imgbor[0].style.top="0px";
       imgbor[0].style.opacity="1";
       imgbor[0].style.animation="imgbr 1s";
        
        smlimg[0].style.opacity="1";
        smlimg[0].style.transition="opacity 3s";*/
        smlimg[0].style.right="-20px";
        smlimg[0].style.opacity="1";
       
        
        mainimg[0].style.top="30px"; 
        mainimg[0].style.left="-50px";
        mainimg[0].style.opacity="1";
      
    }
        
        
        if(w>700){
            if (document.body.scrollTop > 1372 || document.documentElement.scrollTop > 1372) {
                
               /* tt2[0].style.left="100px";
                tt2[0].style.top="-30px";
                   tt2[1].style.left="100px";
                tt2[1].style.top="-30px";
                
                   tt3[0].style.left="-20px";
                tt3[0].style.top="-60px";   tt3[1].style.left="-20px";
                tt3[1].style.top="-60px";*/
            }
        }
        
            if(w<700){
            if (document.body.scrollTop > 2020 || document.documentElement.scrollTop > 2020) {
                
                /*tt2[0].style.left="20px";
                tt2[0].style.top="-30px";
                   
                tt2[1].style.left="20px";
                tt2[1].style.top="-30px";
                
                   tt3[0].style.left="50px";
                tt3[0].style.top="30px";
                 tt3[1].style.left="50px";
                tt3[1].style.top="30px";*/
            }
        }
        
        /*logimg[0].style.backgroundSize="95%";
         navbar.style.height="95px";
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    
             navbar.style.height="75px";
            logimg[0].style.backgroundSize="200px"; 
    }*/
    
    }
}



