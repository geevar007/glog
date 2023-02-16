function enter() { 


    $('#paper').load(document.URL + ' #paper');


    setTimeout(function() {
        



        
      
  



  
    var samplName= document.getElementById("sampleCode").value;
    var sampleNumber= document.getElementById("slNo").value;
    var names = document.getElementsByClassName("name");
    var codes = document.getElementsByClassName("code");
    var no= Number(sampleNumber);
    console.log(no);
    
    if(no==0){
        no=""};


    for(var i=0;i<27;i++){

$(


"<div class=sticker>"+"<div class=printArea>"+ "<h3 class=name>"+samplName+"</h3>"+"<p class=code>"+no+"</p>"+"</div>"+"</div>"




).appendTo('#plain')

if (no!=0){no++;}
}
}, 600);





    }
    