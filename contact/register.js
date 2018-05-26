//paste this code under the head tag or in a separate js file.
	// Wait for window load
	/*$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});*/
//end preloads screen//

var swit1=document.getElementsByClassName('swit1');
var switp=document.getElementsByClassName('switp');
var frmimgcon = document.getElementsByClassName('frm-imgcon');
var formcont=document.getElementsByClassName('form_cont');
function grey(n){
    
    switp[0].style.color="#b5b5b5";
    switp[1].style.color="#b5b5b5";
    switp[2].style.color="#b5b5b5";
   /* switp[3].style.color="#b5b5b5";*/
    
    formcont[0].style.display='none';
    formcont[1].style.display='none';    
      formcont[2].style.display='none';
      /*formcont[3].style.display='none';*/
    
    swit1[0].className='swit1 swit1g';
      swit1[1].className='swit1 swit1g';
      swit1[2].className='swit1 swit1g';
       /* swit1[3].className='swit1 swit1g';*/
    
    formcont[n].style.display='flex';
  swit1[n].className='swit1';
    switp[n].style.color="#2193A8";
}
grey(0);
swit1[0].addEventListener('click',function(){grey(0);/*chng(0);*/},false);
swit1[1].addEventListener('click',function(){grey(1);chng(1);},false);
swit1[2].addEventListener('click',function(){grey(2);/*chng(2)*/},false);
/*swit1[3].addEventListener('click',function(){grey(3);},false);*/

function chng(g){

    if(g == 0){
        frmimgcon[0].classList.add("frmimg1");
        frmimgcon[0].classList.remove("frmimg2");
        frmimgcon[0].classList.remove("frmimg3");
       
        
    }
    if(g == 1){
        frmimgcon[0].classList.add("frmimg2");
        frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg3");
    }
     if(g == 2){
        frmimgcon[0].classList.add("frmimg3");
        frmimgcon[0].classList.remove("frmimg1");
        frmimgcon[0].classList.remove("frmimg2");
    }
}