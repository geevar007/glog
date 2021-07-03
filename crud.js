/*<script type="text/javascript">*/

//Add your app script url here
// On each update in App Script You need to update url here.


var url = "https://script.google.com/macros/s/AKfycbzIukcrWtqF8AadmIkce4IchaeSyvcep18qZhjHFPOE6MHgLSo/exec";

var gx= new Date();
  
var m = gx.getMonth();

var y= gx.getFullYear();

m++;

  $("#monthSelect").val(m);
  $("#yearSelect").html(y);
 
  $(document).ready(function(){  
 
  
  /*-------------------------------------------------- Add Item Operation --------------------------------------------*/
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
      var month=$( "#monthSelect option:selected" ).text();
      var year= $("#yearSelect").text();
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
        timea:timea,
        timeb:timeb,
        from:from,
        to:to,
        mode:mode,
        km:km,
        purpose:purpose,
      },
      function(data,status){
        //alert("Data: " + data + "\nStatus: " + status);
        $body.removeClass("loading");
       gRefresh();
      
    });
  });
  
  /* ------------------------------------End Of Add Item Operation----------------------------------------------------- */
  
  /* --------------------------------------------------Read Operation ------------------------------------------*/
  



  gRefresh();










/*----------------- End of Read Operation */  
  

//mobile edit press ---------------------




$(document).on('click', '.meditItem', function(){  


  var tds = $(this).closest('div').children('p');
  //alert(tds[0].innerHTML) 
  
  var no  = tds[0].innerHTML;
  var date = tds[1].innerHTML;
  var timea = tds[2].innerHTML; 
  var timeb= tds[3].innerHTML; 
  var from  = tds[4].innerHTML;
  var to = tds[5].innerHTML;
  var mode = tds[7].innerHTML; 
  var km= tds[8].innerHTML;
  var purpose= tds[6].innerHTML;
  

  $('#no').val(no);
  $('#editdate').val(date);
  $('#edittimea').val(timea);
  $('#edittimeb').val(timeb);
  $('#editfrom').val(from);
  $('#editto').val(to);
  $('#editmode').val(mode);
  $('#editkm').val(km);
  $('#editpurpose').val(purpose);


  $('#editItemModal').modal('show');




});


//------------------------------------------------------------------------------------------------

$(document).on('click', '.mdeleteItem', function(){  
           


    var tds = $(this).closest('div').children('p');

     
     var no  = tds[0].innerHTML;
     //var date = tds[1].innerHTML;
     
     
     $('#deleteno').html(no);
     
     $('#deleteItemModal').modal('show');
    

  });


























  
  /* ---------------------------------------------- Edit / Update operationb -----------------------------------*/ 

   $(document).on('click', '.editItem', function(){  
           
    //alert('test');
      var tds = $(this).closest('tr').children('td');
       //alert(tds[0].innerHTML) 
       
       var no  = tds[0].innerHTML;
       var date = tds[1].innerHTML;
       var timea = tds[2].innerHTML; 
       var timeb= tds[3].innerHTML; 
       var from  = tds[4].innerHTML;
       var to = tds[5].innerHTML;
       var mode = tds[6].innerHTML; 
       var km= tds[7].innerHTML;
       var purpose= tds[8].innerHTML;
       

       $('#no').val(no);
       $('#editdate').val(date);
       $('#edittimea').val(timea);
       $('#edittimeb').val(timeb);
       $('#editfrom').val(from);
       $('#editto').val(to);
       $('#editmode').val(mode);
       $('#editkm').val(km);
       $('#editpurpose').val(purpose);
       
       

       $('#editItemModal').modal('show');
      
  
  });
  
  
  
   $("#editItemForm").submit(function(event) {
               event.preventDefault();

      var no = $("#no").val();
      var date = $("#editdate").val();
      var timea  = $("#edittimea").val();
      var timeb = $("#edittimeb").val();
      var from = $("#editfrom").val();
      var to = $("#editto").val();
      var mode  = $("#editmode").val();
      var km = $("#editkm").val();
      var purpose = $("#editpurpose").val();
      var month =$( "#monthSelect option:selected" ).text();
      var year = $("#yearSelect").text();
     

    //  alert(itemName);

    $('#editItemModal').modal('toggle');
    $body.addClass("loading"); 


      $.post(url,
      {
        action: "updateItem",
       no:no,
        date:date,
       // month:month,
       // year:year,
        timea:timea,
        timeb:timeb,
        from:from,
        to:to,
        mode:mode,
        km:km,
        purpose:purpose,
        month:month,
        year:year,
      },
      function(data1,status1){
        
      $body.removeClass("loading");
     // alert("Data: " + data1 + "\nStatus: " + status1); 

       // location.reload();
       gRefresh();
    });
  });



	/*------------------------------------------------ End of Edit / Update operationb -----------------------*/
	
	
	/*------------------------------------------------------------ Delete operation ------------------------------*/

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


   $("#deleteItemForm").submit(function(event) {
               event.preventDefault();
      
      var no = $("#deleteno").html();
      
      var month =$( "#monthSelect option:selected" ).text();
  

    //  alert(itemName);

      $('#deleteItemModal').modal('toggle');
      $body.addClass("loading"); 

      $.post(url,
      {
        action: "deleteItem",
        no:no,
        month:month,
       
       
      },
      function(data1,status1){
       $body.removeClass("loading");
        //alert("Data: " + data1 + "\nStatus: " + status1);
        gRefresh();
        //location.reload();
    });
  });
  
  
  /*-------------------------------------- End Delete operation -----------------------------------------*/
  
  $(document).on('click', '#prev', function(){ 


    y--;
$("#yearSelect").html(y);


  })

  $(document).on('click', '#next', function(){ 


    y++;
$("#yearSelect").html(y);

  })


function gRefresh()
{ 
 
  $( "#mobileViewArea" ).load(window.location.href + " #mobileViewArea" );
  $( "#itemTable" ).load(window.location.href + " #itemTable" );
  var month =$( "#monthSelect option:selected" ).text();
  var year = $("#yearSelect").text();

  $body = $("body");
  $body.addClass("loading"); 
  
    jQuery.get(url+"?action=getItems&month="+month+"&year="+year, function(data, status){
    

    if(data.tableEmpty == 'N'){  
    var response = data.items;
    $(function () {
    $.each(response, function (i, item) { 
            $(
              "<tr>"+
              
              "<td>"+item.no+"</td>"+
              "<td>"+item.date+"</td>"+
              "<td>"+item.timea+"</td>"+
              "<td>"+item.timeb+"</td>"+
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
          
          });



          $.each(response, function (i, item) { 
            $(
              


'<div class="mySlip"><div id="dDate">'+
        '<p id="pMonth">'+item.month+'</p><h2>'+item.date+'</h2><p id="pYear">'+item.year+'</p></div>'+
   


        '<div class=dData>'+                       
        '<p><b>Time:</b> '+item.timea+' <b>to:</b> '+item.timeb+'</p>'+
        '<p><b>From: </b>'+item.from+' <b>To:</b> '+item.to+'</p>'+
         '<p><b>Purpose: </b>'+item.purpose+'</p>'+
         '<p><b>KM: </b>'+item.km+', <b>Mode: </b>'+item.mode+'</p></div>'+
        






    '</div>'+

 '<div class="dfoot">'+
 '<P >'+item.no+'</p>'+
 '<p hidden>'+item.date+'</p>'+
 '<p hidden>'+item.timea+'</p>'+
 '<p hidden>'+item.timeb+'</p>'+
 '<p hidden>'+item.from+'</p>'+
 '<p hidden>'+item.to+'</p>'+
 '<p hidden>'+item.purpose+'</p>'+
 '<p hidden>'+item.mode+'</p>'+
 '<p hidden>'+item.km+'</p>'+
 '<a href = "" class="meditItem" data-toggle="modal"><i class="material-icons mEditbtn" data-toggle="tooltip" title="Edit">edit</i></a>'+
                 '<a href = "" class="mdeleteItem" data-toggle="modal"><i class="material-icons mDeletebtn" data-toggle="tooltip" title="Delete">&#xE872;</i></a>'+



'</div>'
  ).appendTo('#mobileViewArea')});

 });




    $body.removeClass("loading");
    }
    else{
     
    $body.removeClass("loading"); 

    }
  });
  
  
  
  
 
}


$("#monthSelect").change(function(){
  var month =$( "#monthSelect option:selected" ).text();
  
  alert("view entries in "+month+" only");
 gRefresh();
});

  
});


