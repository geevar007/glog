var gData = decodeURIComponent(window.location.search);

var months = ['x',
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];
    function save(){
      window.location.href = "save.html" +"?"+year+month;}
gData =gData.substring(1);
var oData = JSON.parse(localStorage.getItem(gData));
//var oData = JSON.parse(gData);
var jData = oData.items;
var myName = "Geevar kollanoor u"
var desig ="Lascar"
var place ="Thrissur"
var hod="Assistant Director (Soil Survey)"

var month=jData[0].month
var MM=months.indexOf(month);
let year = jData[0].year;
var sNumber=3;

$.each(jData, function (i, item) { 

     var timeatoB=item.timea;
      var x= timeatoB.split(" to ");
      var timea= x[0];
      var timeb= x[1];

    $(
      "<tr>"+
      
      
      "<td rowspan="+sNumber+">"+item.date+"-"+MM+"-"+year+"</td>"+
      "<td style=text-align:left>"+x[0]+"</td>"+
     "<td>"+item.from+"</td>"+
      "<td>"+item.to+"</td>"+
      "<td>"+item.mode+"</td>"+
      "<td rowspan=3>"+item.km+"</td>"+
      '<td >'+"Towards journey"+"</td>"+
      
    "</tr>"+

    "<tr>"+
      
      "<td></td>"+

      "<td colspan=3>"+"Halt at "+item.to+"</td>"+
       "<td >"+item.purpose+"</td>"+
       
     
     
      
    "</tr>"+
    "<tr>"+
      
      
      "<td style=text-align:right>"+x[1]+"</td>"+
     "<td>"+item.to+"</td>"+
      "<td>"+item.from+"</td>"+
     "<td>"+item.mode+"</td>"+
      '<td >'+"Return journey"+"</td>"+
      "</tr>"
    
    
    ).appendTo('#printTable')})
$("#monthYear").html("for the month of  "+month+" "+year)
 $("#headding").html("Tour particulars of "+myName+" ("+desig+")"+", Office of"+hod+","+place);
$("#place").html(place);
$("#fName").html(myName);
$("#fDesig").html(desig);
 
