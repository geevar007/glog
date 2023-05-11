var url = "https://script.google.com/macros/s/AKfycbzIukcrWtqF8AadmIkce4IchaeSyvcep18qZhjHFPOE6MHgLSo/exec";

var months = ['x',
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];
    var places=[];

    var arr = JSON.parse(localStorage.getItem("place"));

    
    
var gx= new Date();
var dd=gx.getDate();
 if(localStorage.getItem("seldD")){

var YearMonth=localStorage.getItem("seldD");
var myArray = YearMonth.split("-");
console.log("year= "+myArray[0] );
console.log("month= "+myArray[1] );
var nOM= months.indexOf(myArray[1])-1;
console.log("recovered  m is "+nOM);

var m = nOM;
var y= myArray[0];
console.log("number of month is "+m);

}
else {
var m = gx.getMonth();
var y= gx.getFullYear();
}
var sData;
var month;
var year;
const gWeeks =["ഞായർ ","തിങ്കൾ","ചൊവ്വ ","ബുധൻ ","വ്യാഴം ","വെള്ളി","ശനി"]
m++;

  $("#monthSelect").val(m);
  $("#yearSelect").html(y);
 //-----------------------------------------------------------------document ready-------------------------
  $(document).ready(function(){  
    
    if(localStorage.getItem("token")){

      document.getElementById("printRep").style.display="none";
      document.getElementById("itemTable").style.display="none";
  
  month =$( "#monthSelect option:selected" ).text();
  year = $("#yearSelect").text();
  gRefresh();

    }
       else{
    
window.location.href = "login.html"; }

});

//-------------------------------------------------------------gRefresh------------------------------------

function gRefresh(){
  $("#disMonth").html($( "#monthSelect option:selected" ).text());
  $("#disYear").html($("#yearSelect").text());
  $("#edisMonth").html($( "#monthSelect option:selected" ).text());
  $("#edisYear").html($("#yearSelect").text());
   $("#date").val(dd);
   $( "#mobileViewArea" ).load(window.location.href + " #mobileViewArea" );
   $( "#itemTable" ).load(window.location.href + " #itemTable" );  
   $( "#dateRibbon" ).load(window.location.href + " #dateRibbon" ); 
  $("#calenderTitle").html(month+" "+year);
    
    $body = $("body");
  
    
    if(localStorage.getItem(year+month)){
      console.log(month+year+" Data in local memory");
      var gPassD = JSON.parse(localStorage.getItem(year+month));
  setTimeout(function() {
        drawTables(gPassD); 
      }, 600);
      $( "#mobileViewArea" ).load(window.location.href + " #mobileViewArea" );
   $( "#itemTable" ).load(window.location.href + " #itemTable" );  
    
    }
    else{
  $body.addClass("loading"); 
      fetchData();
    }
    
    $("#monitor").val("");
   
      }
  //------------------------------------------------------------gRefresh End here---------------------------
  
  
  //-----------------------------------fetching data starts----------------------
  function fetchData(){
    
    jQuery.get(url+"?action=getItems&month="+month+"&year="+year, function(data, status){
      sData=JSON.stringify(data);
      localStorage.setItem(year+month,sData);
     drawTables(data);
      $body.removeClass("loading");
  
    }) }
 //-------------------------------------------------fetching data end--------------------------------------


//-----------------------------------------------------------draw Tables function--------------------
    function drawTables(data) { 
      console.log("selected month updated "+year+month);
      localStorage.removeItem("seldD");
     if(data.tableEmpty == 'N'){  
      document.getElementById("printRep").style.display="block";
         document.getElementById("itemTable").style.display="block"; 
         document.getElementById("noRImg").style.display="none"; 
       var response = data.items;
     
        $.each(response, function (i, item) { 
          
          places.push(item.to);
          
              $(
                "<tr>"+
                "<td>"+item.no+"</td>"+
                "<td>"+item.date+"</td>"+
                "<td>"+item.timea+"</td>"+
               "<td>"+item.from+"</td>"+
                "<td>"+item.to+"</td>"+
                "<td>"+item.mode+"</td>"+
                "<td>"+item.km+"</td>"+
                '<td >'+item.purpose+"</td>"+
                "<td>"+
                   '<a href = "" class="editItem" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">edit</i></a>'+
                   '<a href = "" class="deleteItem" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>'+
                  "</td>"+
              "</tr>").appendTo('#itemTable');
  var timeMix=item.timea;
  var x =timeMix.split(" to ");
  const tDt = new Date(item.month+","+item.date+","+item.year);
  let day = gWeeks[tDt.getDay()];
  $('<div class="aDate"><p>'+item.date+'</p></div>').appendTo('#dateRibbon');//new line 
  
   $(
  '<div class="mySlip"><div id="dDate">'+
          '<div class="rDate">' +'<h1>'+item.date+'</h1>'+'</div>'+
          '<p>'+item.month+'   '+item.year+'  - '+day+'</p>'+'</div>'+
      '<div class=dData>'+                       
          '<p><b>Time:</b> '+x[0]+' <b>to:</b> '+x[1]+'</p>'+
          '<p><b>From: </b>'+item.from+' <b>To:</b> '+item.to+'</p>'+
           '<p><b>Purpose: </b>'+item.purpose+'</p>'+
           '<p><b>KM: </b>'+item.km+', <b>Mode: </b>'+item.mode+'</p></div>'+
        '</div>'+
  
   '<div class="dfoot">'+
   '<P >'+item.no+'</p>'+
   '<p hidden>'+item.date+'</p>'+
   '<p hidden>'+item.timea+'</p>'+
   '<p hidden>'+item.from+'</p>'+
   '<p hidden>'+item.to+'</p>'+
   '<p hidden>'+item.purpose+'</p>'+
   '<p hidden>'+item.mode+'</p>'+
   '<p hidden>'+item.km+'</p>'+
   '<a href = "" class="meditItem" data-toggle="modal"><i class="material-icons mEditbtn" data-toggle="tooltip" title="Edit">edit</i></a>'+
                   '<a href = "" class="mdeleteItem" data-toggle="modal"><i class="material-icons mDeletebtn" data-toggle="tooltip" title="Delete">&#xE872;</i></a>'+
    '</div>'
    ).appendTo('#mobileViewArea')});
   
    var twoArray = arr.concat(places)

    var test= JSON.stringify(removeDuplicates(twoArray));




    localStorage.setItem("place", test);
   
    
   
  
  }
   else{
    // dates=[];
    console.log("no data for selected month "+month);
  document.getElementById("printRep").style.display="none";
    document.getElementById("itemTable").style.display="none";
    document.getElementById("noRImg").style.display="block"; 
   $body.removeClass("loading"); 
  
   }
  
  
  }// ------------------------------------------------------------end function draw Tables -----------------



//--------------------------------------------------------------document ready End here-----------------------

//--------------------------------------------------------------multi dates submit-------------------------
    $("#btn_add_dates").click(function(){

      var dates =$("#monitor").val();
       month=$( "#monthSelect option:selected" ).text();
      year= $("#yearSelect").text();
if(dates==""){alert("Nothing to add")}

else{
  $('#myCalender').modal('toggle');
  $body.addClass("loading"); 
  $("#monitor").val("");
  $.post(url,
    {
      action: "multiDate",
      dates:dates,
      month:month,
      year:year,
	myKey:readKey(),
    },
    function(data,status){
      alert(data);
      $body.removeClass("loading");
    check(data);
       
    
    
  });
}
    })
//-------------------------------------------------------------multi Date submit End-------------------------




  /*---------------------------------------------------------- Add Item submit --------------------------*/
   $("#addItemform").submit(function(event) {
      event.preventDefault();
                /* stop form from submitting normally */
      var date = $("#date").val();
      var timea = $("#timea").val();
      var timeb = $("#timeb").val();
      var from = $("#from").val();
      var to = $("#to").val();
      var purpose = $("#purpose").val();
      var km = $("#km").val();
      //var month=$( "#monthSelect option:selected" ).text();
      //var year= $("#yearSelect").text();
      if ($('#mode').is(":checked")){var mode="Bus"}
    else{var mode="Dept:Jeep"}
     

      //alert(itemName);
      $('#addItemModal').modal('toggle');

      $body.addClass("loading"); 

      $.post(url,
      {
        action: "addItem",
        date:date,
        month:month,
        year:year,
        timea:timea+" to "+timeb,
        
        from:from,
        to:to,
        mode:mode,
        km:km,
        purpose:purpose,
	myKey:readKey(),
      },
      function(data,status){
        alert(data);
        $body.removeClass("loading");
       check(data);
      
    });
  });
  
  /* ---------------------------------------------------------Add item submit End---------------------- */
  
 
  

//-------------------------------------------------------------mobile edit starts -------------------

$(document).on('click', '.meditItem', function(){  


  var tds = $(this).closest('div').children('p');
  //alert(tds[0].innerHTML) 
  
  var no  = tds[0].innerHTML;
  var date = tds[1].innerHTML;
 var timeatoB = tds[2].innerHTML; 
 var x= timeatoB.split(" to ");
var timea= x[0];
 var timeb= x[1];
  var from  = tds[3].innerHTML;
  var to = tds[4].innerHTML;
  var mode = tds[6].innerHTML; 
  var km= tds[7].innerHTML;
  var purpose= tds[5].innerHTML;
  

  $('#no').val(no);
  $('#editdate').val(date);
  $('#edittimea').val(timea);
  $('#edittimeb').val(timeb);
  $('#editfrom').val(from);
  $('#editto').val(to);
  
  $('#editkm').val(km);
  $('#editpurpose').val(purpose);
  if (mode=="Bus"){$('#eMode').prop('checked', true);}
  else { $('#eMode').prop('checked', false);};

  $('#editItemModal').modal('show');




});
//-------------------------------------------------------------mobile edit End ---------------------


//-------------------------------------------------------------mobile Deletec starts-----------------------

$(document).on('click', '.mdeleteItem', function(){  
           


    var tds = $(this).closest('div').children('p');

     
     var no  = tds[0].innerHTML;
     //var date = tds[1].innerHTML;
     
     
     $('#deleteno').html(no);
     
     $('#deleteItemModal').modal('show');
    

  });

//------------------------------------------------------------mobile Delete End-------------------------

  
  /* ----------------------------------------------------------- Edit start--------------------------------*/ 

   $(document).on('click', '.editItem', function(){  
           
    //alert('test');
      var tds = $(this).closest('tr').children('td');
       //alert(tds[0].innerHTML) 
       
       var no  = tds[0].innerHTML;
       var date = tds[1].innerHTML;
       var timeatoB = tds[2].innerHTML; 
       var x= timeatoB.split(" to ");
      var timea= x[0];
       var timeb= x[1];
       var from  = tds[3].innerHTML;
       var to = tds[4].innerHTML;
       var mode = tds[5].innerHTML; 
       var km= tds[6].innerHTML;
       var purpose= tds[7].innerHTML;
       

       $('#no').val(no);
       $('#editdate').val(date);
       $('#edittimea').val(timea);
       $('#edittimeb').val(timeb);
       $('#editfrom').val(from);
       $('#editto').val(to);
      
       $('#editkm').val(km);
       $('#editpurpose').val(purpose);
       if (mode=="Bus"){$('#eMode').prop('checked', true);}
       else { $('#eMode').prop('checked', false);};

       $('#editItemModal').modal('show');
      
  
  });
  //-------------------------------------------------------------Endit End------------------------------
  
  //-------------------------------------------------------------edit Submit ---------------------------
   $("#editItemForm").submit(function(event) {
               event.preventDefault();

      var no = $("#no").val();
      var date = $("#editdate").val();
      var timea  = $("#edittimea").val();
      var timeb = $("#edittimeb").val();
      var from = $("#editfrom").val();
      var to = $("#editto").val();
      
      var km = $("#editkm").val();
      var purpose = $("#editpurpose").val();
      //var month =$( "#monthSelect option:selected" ).text();
      //var year = $("#yearSelect").text();
      if ($('#eMode').is(":checked")){var mode="Bus"}
    else{var mode="Dept:Jeep"}



    //  alert(itemName);

    $('#editItemModal').modal('toggle');
    $body.addClass("loading"); 


      $.post(url,
      {
        action: "updateItem",
       no:no,
        date:date,
       timea:timea+" to "+timeb,
       from:from,
        to:to,
        mode:mode,
        km:km,
        purpose:purpose,
        month:month,
        year:year,
	myKey:readKey(),
      },
      function(data,status){
        
      $body.removeClass("loading");
     alert(data); 
     check(data);
    });
  });
  //-------------------------------------------------------------edit Submit End---------------------------

	/*------------------------------------------------------------table Delete operation -----------------*/

   $(document).on('click', '.deleteItem', function(){  
           
    //alert('test');

      var tds = $(this).closest('tr').children('td');
       //alert(tds[0].innerHTML) 
       
       var no  = tds[0].innerHTML;
       var date = tds[1].innerHTML;
       
       
       $('#deleteno').html(no);
       $('#deletedate').html("Travel Details");
       $('#deleteItemModal').modal('show');
      
  
		});
//---------------------------------------------------------------table Delete End----------------------------
//--------------------------------------------------------------table delete Submit Stars-------------------
   $("#deleteItemForm").submit(function(event) {
               event.preventDefault();
      
      var no = $("#deleteno").html();
      
      //var month =$( "#monthSelect option:selected" ).text();
  

    //  alert(itemName);

      $('#deleteItemModal').modal('toggle');
      $body.addClass("loading"); 

      $.post(url,
      {
        action: "deleteItem",
        no:no,
        month:month,
       myKey:readKey(),
       
      },
      function(data,status){
       $body.removeClass("loading");
        alert(data);
        check(data);
        
      
    });
  });
  //-----------------------------------------------------------table Delete submit End here--------------
  

  
  $(document).on('click', '#prev', function(){ 


    y--;
$("#yearSelect").html(y);
year=y;
gRefresh();

  })

  $(document).on('click', '#next', function(){ 


    y++;
$("#yearSelect").html(y);
year=y;
gRefresh();
  })


$("#monthSelect").change(function(){
   month =$( "#monthSelect option:selected" ).text();
  
  alert("view entries in "+month+" only");
 gRefresh();
});

//---------------------------------------------------------------  

$("#fromI").click(function(){
$('#from').val("Thrissur HQ");});
//--------------------------------------------------------------
$("#toI").click(function(){
  $('#to').val("Thrissur HQ");});
//--------------------------------------------------------------
  $("#purI").click(function(){
    $('#purpose').val("Assisting SSO for");});
//-----------------------------------------------------------------
   
   
 //----------------------------------multi date  buten press starts--------------   
    function gpress(x) {
 
   var y =$("#monitor").val();
$("#monitor").val(y+x+"x");
 }//---------------------------------multi date  buten press End--------------------


//---------------------------------------Print press Starts----------------
function save(){
   localStorage.setItem("seldD",year+"-"+month);
      window.location.href = "Save.html" +"?"+year+month;}
//----------------------------------------print press Ends-------------------------



//-------------------------------------Reading key- function starts---------------------
function readKey(){
      var gx =localStorage.getItem("token");
        return gx;
 } 
 //-------------------------------------Reading key- function End---------------------
 function check(data)
 {if(data!="Call Geevar"){
  console.log( "data is"+data);
  localStorage.removeItem(year+month);
  gRefresh();}}

  function clearMonth(){
    localStorage.removeItem(year+month);
    fetchData();
  }


 function gLogout(){
   var tempCash = localStorage.getItem("place")
    localStorage.clear();
    localStorage.setItem("place",tempCash);
    document.location.reload()
  }
//-----------------------------------------------Auto complete-----------------------
  function autocomplete(inp) {



 
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
       
  console.log("auto complete is running  received array is "+ arr);
  
  
        if (!val) { return false }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type=hidden value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
               
               
  
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {

      
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  
  
  
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("to"));



  
    
    function removeDuplicates(arr) {
        return arr.filter((item,
           index) => arr.indexOf(item) === index);
    }
 
    
