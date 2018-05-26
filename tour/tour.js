/* START: hl1 slide*/

//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	
        var second=document.getElementsByClassName('second');
        

function homeani()
{
    second[0].style.top="0px";
    second[0].style.opacity="1";
}
homeani();
        
	});


var second1=document.getElementsByClassName('second1');
var second2=document.getElementsByClassName('second2');

var ser=document.getElementsByClassName('ser-ss');
var frmimg=document.getElementsByClassName('frm-imgcon');
var hil=document.getElementsByClassName('hil');
var wid=document.getElementsByClassName('wid');
var temp=document.getElementsByClassName('templ');
var honey=document.getElementsByClassName('hony');

var hil11=document.getElementsByClassName('hil11');
var wid11=document.getElementsByClassName('wid11');
var temp11=document.getElementsByClassName('templ11');
var honey11=document.getElementsByClassName('hony11');

var hil21=document.getElementsByClassName('hil21');
var wid21=document.getElementsByClassName('wid21');
var temp21=document.getElementsByClassName('templ21');
var honey21=document.getElementsByClassName('hony21');

window.onscroll = function() {scrollani()};

  var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

function scrollani() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        for(i=0;i<3;i++){
       /* ser[i].style.top="0px";
        ser[i].style.opacity="1";*/}
      
    }
    
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        hil[0].style.top="0px";
        hil[0].style.opacity="1";
        
         wid[0].style.opacity="1";
         wid[0].style.top="0px";
            
                temp[0].style.opacity="1";
         temp[0].style.top="0px";
            
                honey[0].style.opacity="1";
         honey[0].style.top="0px";
       
      
    }
    
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        
      second1[0].style.top="0px";
    second1[0].style.opacity="1";
        
         hil11[0].style.top="0px";
        hil11[0].style.opacity="1";
        
         wid11[0].style.opacity="1";
         wid11[0].style.top="0px";
            
                temp11[0].style.opacity="1";
         temp11[0].style.top="0px";
            
                honey11[0].style.opacity="1";
         honey11[0].style.top="0px";
    }
     if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
        
      second2[0].style.top="0px";
    second2[0].style.opacity="1";
         hil21[0].style.top="0px";
        hil21[0].style.opacity="1";
        
         wid21[0].style.opacity="1";
         wid21[0].style.top="0px";
            
                temp21[0].style.opacity="1";
         temp21[0].style.top="0px";
            
                honey21[0].style.opacity="1";
         honey21[0].style.top="0px";
    }
    
    
        /*if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
            frmimg[0].style.opacity="1";
       
            
        }*/
    
 
}






var w = parseInt(window.innerWidth);
var galaact = document.getElementsByClassName('tr-bx');
galaact[0].addEventListener('click',function(){
    gallery(1);
    incre1(1);
},false);

galaact[1].addEventListener('click',function(){
    gallery(2);
    incre2(1);
    scrollImg(0);
    
},false);

galaact[2].addEventListener('click',function(){
    gallery(3);
    incre3(1);
    scrollImg3(0);
},false);

galaact[3].addEventListener('click',function(){
    gallery(4);
    incre4(1);
    scrollImg4(0);
},false);

var galaimg = document.getElementsByClassName('gala-imgs');
var hil = document.getElementsByClassName('hil');
var wid = document.getElementsByClassName('wid');
var templ = document.getElementsByClassName('templ');
var hony = document.getElementsByClassName('hony');
var bbhd = document.getElementsByClassName('bb-hhd');
var towbx = document.getElementsByClassName('tr-bx1');
 var frmimgcon = document.getElementsByClassName('frm-imgcon');


var hil11=document.getElementsByClassName('hil11');
var wid11=document.getElementsByClassName('wid11');
var templ11=document.getElementsByClassName('templ11');
var hony11=document.getElementsByClassName('hony11');


var hil21=document.getElementsByClassName('hil21');
var wid21=document.getElementsByClassName('wid21');
var templ21=document.getElementsByClassName('templ21');
var hony21=document.getElementsByClassName('hony21');

function gallery(g){

    if(g == 1){
        frmimgcon[0].classList.add("frmimg1");
        frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg4");
        galaimg[0].style.display="flex";
        
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
        
        /*hil[0].style.background="url(images/hillc.svg)";
        */
        hony[0].classList.remove('hony1');
        wid[0].classList.remove('wid1');
        templ[0].classList.remove('templ1');

        
    hil[0].className="hil hil1";    
        bbhd[0].style.color="#d53132";
        galaact[0].style.borderBottom="3px solid #d53132";
        galaact[0].classList.add("tr-bx1");
     
        
       /* wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeycw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
    }
    else if(g == 2){
             frmimgcon[0].classList.add("frmimg2");
         frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg4");
        galaimg[0].style.display="none";
        galaimg[1].style.display="flex";
        galaimg[2].style.display="none";
        galaimg[3].style.display="none";
       hil[0].classList.remove('hil1');
        templ[0].classList.remove('templ1');
        hony[0].classList.remove('hony1');
      /*  wid[0].style.background="url(images/wildc.svg)";*/
         wid[0].className="wid wid1";
   
        bbhd[1].style.color="#d53132";
        galaact[1].style.borderBottom="3px solid #d53132";
        galaact[1].classList.add("tr-bx1");
        
       /* hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
         
    }
    else if(g == 3){
        frmimgcon[0].classList.add("frmimg3");
         frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg4");
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="flex";
        galaimg[3].style.display="none";
         wid[0].classList.remove('wid1');
          hil[0].classList.remove('hil1');
          hony[0].classList.remove('hony1');
        /*templ[0].style.background="url(images/templec.svg)";*/
        templ[0].className="templ templ1";
        bbhd[2].style.color="#d53132";
        galaact[2].style.borderBottom="3px solid #d53132";
        galaact[2].classList.add("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[3].style.color="#777";
        galaact[3].style.borderBottom="3px solid #ebeef0";
        galaact[3].classList.remove("tr-bx1");
    }
    else if(g == 4){
       frmimgcon[0].classList.add("frmimg4");
         frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg1");
        
        galaimg[0].style.display="none";
        galaimg[1].style.display="none";
        galaimg[2].style.display="none";
        galaimg[3].style.display="flex";
        
     /*   hony[0].style.background="url(images/honeycc.svg)";*/
        templ[0].classList.remove('templ1');
         wid[0].classList.remove('wid1');
          hil[0].classList.remove('hil1');
          
        hony[0].className="hony hony1";
        bbhd[3].style.color="#d53132";
        galaact[3].style.borderBottom="3px solid #d53132";
        galaact[3].classList.add("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[2].style.color="#777";
        galaact[2].style.borderBottom="3px solid #ebeef0";
        galaact[2].classList.remove("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[1].style.color="#777";
        galaact[1].style.borderBottom="3px solid #ebeef0";
        galaact[1].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[0].style.color="#777";
        galaact[0].style.borderBottom="3px solid #ebeef0";
        galaact[0].classList.remove("tr-bx1");
    }
}
gallery(1);

var galaact = document.getElementsByClassName('tr-bx');
galaact[4].addEventListener('click',function(){
    gallery1(1);
  
},false);

galaact[5].addEventListener('click',function(){

    gallery1(2);
    
},false);

galaact[6].addEventListener('click',function(){
   gallery1(3);
    
},false);

galaact[7].addEventListener('click',function(){
   gallery1(4);
},false);

var galaimg = document.getElementsByClassName('gala-imgs');
var hil = document.getElementsByClassName('hil');
var wid = document.getElementsByClassName('wid');
var templ = document.getElementsByClassName('templ');
var hony = document.getElementsByClassName('hony');
var bbhd = document.getElementsByClassName('bb-hhd');
var towbx = document.getElementsByClassName('tr-bx1');
 var frmimgcon = document.getElementsByClassName('frm-imgcon');
function gallery1(g){

    if(g == 1){
        /*frmimgcon[1].classList.add("frmimg1");
        frmimgcon[1].classList.remove("frmimg2");
        frmimgcon[1].classList.remove("frmimg3");
        frmimgcon[1].classList.remove("frmimg4");*/
        galaimg[4].style.display="flex";
        
        galaimg[5].style.display="none";
        galaimg[6].style.display="none";
        galaimg[7].style.display="none";
        
        /*hil[0].style.background="url(images/hillc.svg)";
        */
        hony11[0].classList.remove('hony1');
        wid11[0].classList.remove('wid1');
        templ[0].classList.remove('templ1');

        
    hil11[0].className="hil hil11 hil1";    
        bbhd[4].style.color="#d53132";
        galaact[4].style.borderBottom="3px solid #d53132";
        galaact[4].classList.add("tr-bx1");
     
        
       /* wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[5].style.color="#777";
        galaact[5].style.borderBottom="3px solid #ebeef0";
        galaact[5].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[6].style.color="#777";
        galaact[6].style.borderBottom="3px solid #ebeef0";
        galaact[6].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeycw.svg)";*/
        bbhd[7].style.color="#777";
        galaact[7].style.borderBottom="3px solid #ebeef0";
        galaact[7].classList.remove("tr-bx1");
    }
    else if(g == 2){
             /*frmimgcon[0].classList.add("frmimg2");
         frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg4");*/
        galaimg[4].style.display="none";
        galaimg[5].style.display="flex";
        galaimg[6].style.display="none";
        galaimg[7].style.display="none";
       hil11[0].classList.remove('hil1');
        templ11[0].classList.remove('templ1');
        hony11[0].classList.remove('hony1');
      /*  wid[0].style.background="url(images/wildc.svg)";*/
         wid11[0].className="wid wid11 wid1";
   
        bbhd[5].style.color="#d53132";
        galaact[5].style.borderBottom="3px solid #d53132";
        galaact[5].classList.add("tr-bx1");
        
       /* hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[4].style.color="#777";
        galaact[4].style.borderBottom="3px solid #ebeef0";
        galaact[4].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[6].style.color="#777";
        galaact[6].style.borderBottom="3px solid #ebeef0";
        galaact[6].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[7].style.color="#777";
        galaact[7].style.borderBottom="3px solid #ebeef0";
        galaact[7].classList.remove("tr-bx1");
         
    }
    else if(g == 3){
        /*frmimgcon[0].classList.add("frmimg3");
         frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg4");*/
        galaimg[4].style.display="none";
        galaimg[5].style.display="none";
        galaimg[6].style.display="flex";
        galaimg[7].style.display="none";
         wid11[0].classList.remove('wid1');
          hil11[0].classList.remove('hil1');
          hony11[0].classList.remove('hony1');
        /*templ[0].style.background="url(images/templec.svg)";*/
        templ11[0].className="templ templ11 templ1";
     bbhd[6].style.color="#d53132";
        galaact[6].style.borderBottom="3px solid #d53132";
        galaact[6].classList.add("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[5].style.color="#777";
        galaact[5].style.borderBottom="3px solid #ebeef0";
        galaact[5].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[4].style.color="#777";
        galaact[4].style.borderBottom="3px solid #ebeef0";
        galaact[4].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[7].style.color="#777";
        galaact[7].style.borderBottom="3px solid #ebeef0";
        galaact[7].classList.remove("tr-bx1");
    }
    else if(g == 4){
       /*frmimgcon[0].classList.add("frmimg4");
         frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg1");*/
        
        galaimg[4].style.display="none";
        galaimg[5].style.display="none";
        galaimg[6].style.display="none";
        galaimg[7].style.display="flex";
        
     /*   hony[0].style.background="url(images/honeycc.svg)";*/
        templ11[0].classList.remove('templ1');
         wid11[0].classList.remove('wid1');
          hil11[0].classList.remove('hil1');
          
        hony11[0].className="hony hony11 hony1";
        bbhd[7].style.color="#d53132";
        galaact[7].style.borderBottom="3px solid #d53132";
        galaact[7].classList.add("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[6].style.color="#777";
        galaact[6].style.borderBottom="3px solid #ebeef0";
        galaact[6].classList.remove("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[5].style.color="#777";
        galaact[5].style.borderBottom="3px solid #ebeef0";
        galaact[5].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[4].style.color="#777";
        galaact[4].style.borderBottom="3px solid #ebeef0";
        galaact[4].classList.remove("tr-bx1");
    }
}
gallery1(1);

/*3*/
galaact[8].addEventListener('click',function(){
    gallery2(1);
  
},false);

galaact[9].addEventListener('click',function(){

    gallery2(2);
    
},false);

galaact[10].addEventListener('click',function(){
   gallery2(3);
    
},false);

galaact[11].addEventListener('click',function(){
   gallery2(4);
},false);

var galaimg = document.getElementsByClassName('gala-imgs');
var hil = document.getElementsByClassName('hil');
var wid = document.getElementsByClassName('wid');
var templ = document.getElementsByClassName('templ');
var hony = document.getElementsByClassName('hony');
var bbhd = document.getElementsByClassName('bb-hhd');
var towbx = document.getElementsByClassName('tr-bx1');
 var frmimgcon = document.getElementsByClassName('frm-imgcon');
function gallery2(g){

    if(g == 1){
        /*frmimgcon[1].classList.add("frmimg1");
        frmimgcon[1].classList.remove("frmimg2");
        frmimgcon[1].classList.remove("frmimg3");
        frmimgcon[1].classList.remove("frmimg4");*/
        galaimg[8].style.display="flex";
        
        galaimg[9].style.display="none";
        galaimg[10].style.display="none";
        galaimg[11].style.display="none";
        
        /*hil[0].style.background="url(images/hillc.svg)";
        */
        hony21[0].classList.remove('hony1');
        wid21[0].classList.remove('wid1');
        templ21[0].classList.remove('templ1');

        
    hil21[0].className="hil hil21 hil1";    
        bbhd[8].style.color="#d53132";
        galaact[8].style.borderBottom="3px solid #d53132";
        galaact[8].classList.add("tr-bx1");
     
       9
       /* wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[9].style.color="#777";
        galaact[9].style.borderBottom="3px solid #ebeef0";
        galaact[9].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[10].style.color="#777";
        galaact[10].style.borderBottom="3px solid #ebeef0";
        galaact[10].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeycw.svg)";*/
        bbhd[11].style.color="#777";
        galaact[11].style.borderBottom="3px solid #ebeef0";
        galaact[11].classList.remove("tr-bx1");
    }
    else if(g == 2){
             /*frmimgcon[0].classList.add("frmimg2");
         frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg4");*/
        galaimg[8].style.display="none";
        galaimg[9].style.display="flex";
        galaimg[10].style.display="none";
        galaimg[11].style.display="none";
       hil21[0].classList.remove('hil1');
        templ21[0].classList.remove('templ1');
        hony21[0].classList.remove('hony1');
      /*  wid[0].style.background="url(images/wildc.svg)";*/
         wid21[0].className="wid wid21 wid1";
   
        bbhd[9].style.color="#d53132";
        galaact[9].style.borderBottom="3px solid #d53132";
        galaact[9].classList.add("tr-bx1");
        
       /* hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[8].style.color="#777";
        galaact[8].style.borderBottom="3px solid #ebeef0";
        galaact[8].classList.remove("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[10].style.color="#777";
        galaact[10].style.borderBottom="3px solid #ebeef0";
        galaact[10].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[11].style.color="#777";
        galaact[11].style.borderBottom="3px solid #ebeef0";
        galaact[11].classList.remove("tr-bx1");
         
    }
    else if(g == 3){
        /*frmimgcon[0].classList.add("frmimg3");
         frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg4");*/
        galaimg[8].style.display="none";
        galaimg[9].style.display="none";
        galaimg[10].style.display="flex";
        galaimg[11].style.display="none";
         wid21[0].classList.remove('wid1');
          hil21[0].classList.remove('hil1');
          hony21[0].classList.remove('hony1');
        /*templ[0].style.background="url(images/templec.svg)";*/
        templ21[0].className="templ templ21 templ1";
     bbhd[10].style.color="#d53132";
        galaact[10].style.borderBottom="3px solid #d53132";
        galaact[10].classList.add("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[9].style.color="#777";
        galaact[9].style.borderBottom="3px solid #ebeef0";
        galaact[9].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[8].style.color="#777";
        galaact[8].style.borderBottom="3px solid #ebeef0";
        galaact[8].classList.remove("tr-bx1");
        
        /*hony[0].style.background="url(images/honeyw.svg)";*/
        bbhd[11].style.color="#777";
        galaact[11].style.borderBottom="3px solid #ebeef0";
        galaact[11].classList.remove("tr-bx1");
    }
    else if(g == 4){
       /*frmimgcon[0].classList.add("frmimg4");
         frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg3");
        frmimgcon[0].classList.remove("frmimg1");*/
        
        galaimg[8].style.display="none";
        galaimg[9].style.display="none";
        galaimg[10].style.display="none";
        galaimg[11].style.display="flex";
        
     /*   hony[0].style.background="url(images/honeycc.svg)";*/
        templ21[0].classList.remove('templ1');
         wid21[0].classList.remove('wid1');
          hil21[0].classList.remove('hil1');
          
        hony21[0].className="hony hony21 hony1";
        bbhd[11].style.color="#d53132";
        galaact[11].style.borderBottom="3px solid #d53132";
        galaact[11].classList.add("tr-bx1");
        
        /*templ[0].style.background="url(images/templew.svg)";*/
        bbhd[10].style.color="#777";
        galaact[10].style.borderBottom="3px solid #ebeef0";
        galaact[10].classList.remove("tr-bx1");
        
        /*wid[0].style.background="url(images/wildw.svg)";*/
        bbhd[9].style.color="#777";
        galaact[9].style.borderBottom="3px solid #ebeef0";
        galaact[9].classList.remove("tr-bx1");
        
        /*hil[0].style.background="url(images/hillw.svg)";*/
        bbhd[8].style.color="#777";
        galaact[8].style.borderBottom="3px solid #ebeef0";
        galaact[8].classList.remove("tr-bx1");
    }
}
gallery2(1);




