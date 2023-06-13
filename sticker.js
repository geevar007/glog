document.getElementById("printB").style.opacity="10%";
document.getElementById("posPaper").style.display="none"
document.getElementById("printing").style.display="none"
document.getElementById("messagebox").style.display="none"
document.getElementById("canselB").style.opacity="10%";
var gOutPut=0;

updateTime();


function enter() { updateTime();
    var printName="";
    var printNo="";
    document.getElementById("printB").style.opacity="10%";
    var samplName= document.getElementById("sampleCode").value;
    $('#paper').load(document.URL + ' #paper');
    var x =samplName;
    
    setTimeout(function(){
    if (x == " " || !x ) {
        document.getElementById('sTime').style.display="none";
        document.getElementById("messagebox").style.display="block";

        setTimeout(function(){ 
            document.getElementById("messagebox").style.display="none"
            document.getElementById('sTime').style.display="block";

        },800);
        
        }
else { 
  
    var sampleNumber= document.getElementById("slNo").value;
    var endNumber= document.getElementById("endNo").value;
    var names = document.getElementsByClassName("name");
    var codes = document.getElementsByClassName("code");
    var exno= no= Number(sampleNumber);
    var eNo= Number(endNumber);
    var position =document.getElementById("locat").value;
    var status="Start"; 
  
    
    
gOutPut=1;

    for(var i=0;i<27;i++){


if (position) { 
                 if (i==position-1) {printName=samplName; printNo  = exno;no = exno;status="Stop"}  
                else{  printNo = no;  if (status=="Start"){ printNo=""} }
                }
 else {   printNo = no; if (status=="Start") {  printName=samplName;} }


if(no==0){printNo=""};

$(


"<div class=sticker>"+"<div class=printArea>"+ "<h3 class=name>"+printName+"</h3>"+"<p class=code>"+printNo+"</p>"+"</div>"+"</div>"




).appendTo('#plain')
document.getElementById("enterB").style.opacity="10%";
document.getElementById("printB").style.opacity="100%";
document.getElementById("posPaper").style.display="block";
document.getElementById("canselB").style.opacity="100%";

if (no!=0){no++;};
if( eNo+1==no ){no=0; if(document.querySelector('#endPrint').checked){ printName="";status="Stop"}     };

};

 }},100);}

 function gPrint(){updateTime()
 if (gOutPut!=0){
   document.getElementById("enterB").style.opacity="100%";
    document.getElementById("posPaper").style.display="none";
    document.getElementById('sTime').style.display="none";
    document.getElementById("printing").style.display="block";
    
    setTimeout(function()
    {document.getElementById("printing").style.display="none";
    document.getElementById('sTime').style.display="block";},1800);

    setTimeout(function()
    {window.print()},850);}}


 function gCansel(){ updateTime()
document.getElementById("posPaper").style.display="none";
document.getElementById("canselB").style.opacity="10%";
document.getElementById("enterB").style.opacity="100%";
 }
 function updateTime(){
    var d = new Date(); //object of date()
	var hr = d.getHours();
	var min = d.getMinutes();
    if (hr>12)
    { hr = hr-12;
    min= min+" PM"}
    if (hr==0) {hr=12}
   document.getElementById('sTime').innerHTML= hr+":"+min;
}

