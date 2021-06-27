/*<script type="text/javascript">*/

//Add your app script url here
// On each update in App Script You need to update url here.


var url = "https://script.google.com/macros/s/AKfycbzIukcrWtqF8AadmIkce4IchaeSyvcep18qZhjHFPOE6MHgLSo/exec";

  
  $(document).ready(function(){  
 
  var gx= new Date();
  
  var m = gx.getMonth();

var y= gx.getFullYear();

m++;

    $("#monthSelect").val(m);
    $("#yearSelect").html(y);
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
      var mode = $("#mode").val();
      var month =$( "#monthSelect option:selected" ).text();
      var year = $("#yearSelect").text();

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
        location.reload();
      
    });
  });
  
  /* ------------------------------------End Of Add Item Operation----------------------------------------------------- */
  
  /* --------------------------------------------------Read Operation ------------------------------------------*/
  $body = $("body");
  $body.addClass("loading"); 
  var month =$( "#monthSelect option:selected" ).text();
  var year = $("#yearSelect").text();
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
      });

    $body.removeClass("loading");
    }
    else{
     
    $body.removeClass("loading"); 

    }
  });
  
/*----------------- End of Read Operation */  
  
  
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

        location.reload();
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
     

    //  alert(itemName);

      $('#deleteItemModal').modal('toggle');
      $body.addClass("loading"); 

      $.post(url,
      {
        action: "deleteItem",
        no:no,
       
      },
      function(data1,status1){
       $body.removeClass("loading");
        //alert("Data: " + data1 + "\nStatus: " + status1);
        
        location.reload();
    });
  });
  
  
  /*-------------------------------------- End Delete operation -----------------------------------------*/
  
  $(document).on('click', '#prev', function(){ 


    year--;
$("#yearSelect").html(year);

  })

  $(document).on('click', '#next', function(){ 


    year++;
$("#yearSelect").html(year);

  })







  
});


