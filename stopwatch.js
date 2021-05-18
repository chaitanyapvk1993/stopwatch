
var listElm = document.querySelector('#stopwatch');
var button1 = document.querySelector('#pause');
button1.disabled=true;
var button2 = document.querySelector('#stop');
var button3 = document.querySelector('#start');
button2.disabled=true;

//document.write(listElm);
var hor=0;
var mins=0;
var secs=0;
var initialtime=true;
function pauseTime() {
    //document.write(initialtime);
  if (initialtime ==false) {
    initialtime = true;
    button1.innerHTML="continue";
  }
  else if (initialtime == true) {
    initialtime = false;
    button1.innerHTML="pause";
     timeCycle();

  }
  //document.querySelector('#pause').Value="continue";
  
 

}
function resetTime() {
       // document.write(initialtime);
    
    
    initialtime = true;
    hor = 0;
    secs = 0;
    mins = 0;
    button1.disabled=true;
    button2.disabled=true;
    button3.disabled=false;
    button1.innerHTML="pause";
    listElm.innerHTML = '00:00:00';


}
function startTime()
{
    
    button3.disabled=true;
    button1.disabled=false;
    button2.disabled=false;
    
    
    if(initialtime==true)
    {
        initialtime=false;
        timeCycle();
    }
}
function timeCycle()
{
    
    if(initialtime==false)
    {
        hor=parseInt(hor);
        secs=parseInt(secs);
        mins=parseInt(mins);
        secs=secs+1;
        //document.write(secs);
    if(secs==60)
        {
            mins=mins+1;
            secs=0;
        }
        if(mins==60)
        {
            hor=hor+1;
            mins=0;
            secs=0;
        }
        if (secs < 10 || secs == 0) {
      secs = '0' + secs;
    }
    if (mins < 10 || mins == 0) {
      mins = '0' + mins;
    }
    if (hor < 10 || hor == 0) {
      hor = '0' + hor;
    }
    
 
    listElm.innerHTML = hor + ':' + mins + ':' + secs;
    setTimeout("timeCycle()", 1000);


    }
    


}