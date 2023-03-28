document.getElementById("printB").style.opacity="10%";
document.getElementById("posPaper").style.display="none"
document.getElementById("printing").style.display="none"
document.getElementById("messagebox").style.display="none"
document.getElementById("canselB").style.opacity="10%";
var gOutPut=0;
function enter() { 
    document.getElementById("printB").style.opacity="10%";
    var samplName= document.getElementById("sampleCode").value;
    $('#paper').load(document.URL + ' #paper');
    var x =samplName;
    
    setTimeout(function(){
    if (x == "" || x == null) {

        document.getElementById("messagebox").style.display="block";

        setTimeout(function(){ 
            document.getElementById("messagebox").style.display="none"

        },800);
        
        }
else { 
  
    var sampleNumber= document.getElementById("slNo").value;
    var endNumber= document.getElementById("endNo").value;
    var names = document.getElementsByClassName("name");
    var codes = document.getElementsByClassName("code");
    var no= Number(sampleNumber);
    var eNo= Number(endNumber);
    console.log("ending number is ="+eNo);
    
    
gOutPut=1;

    for(var i=0;i<27;i++){

if(no==0){no=""};

$(


"<div class=sticker>"+"<div class=printArea>"+ "<h3 class=name>"+samplName+"</h3>"+"<p class=code>"+no+"</p>"+"</div>"+"</div>"




).appendTo('#plain')
document.getElementById("enterB").style.opacity="10%";
document.getElementById("printB").style.opacity="100%";
document.getElementById("posPaper").style.display="block";
document.getElementById("canselB").style.opacity="100%";

if (no!=0){no++;};
if( eNo+1==no){no=0};

};

 }},100);}

 function gPrint(){
 if (gOutPut!=0){
   document.getElementById("enterB").style.opacity="100%";
    document.getElementById("posPaper").style.display="none";
    document.getElementById("printing").style.display="block";
    
    setTimeout(function()
    {document.getElementById("printing").style.display="none"},1800);

    setTimeout(function()
    {window.print()},850);}}


 function gCansel(){
document.getElementById("posPaper").style.display="none";
document.getElementById("canselB").style.opacity="10%";
document.getElementById("enterB").style.opacity="100%";
 }
 
