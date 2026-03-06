var gData = decodeURIComponent(window.location.search);

var months = ['x',
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September',
    'October', 'November', 'December'
    ];
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
var year = jData[0].year;

$.each(jData, function (i, item) { 
      
      console.log("The I is= "+ ++i);
if(item.date!=0){
    $(
      "<tr>"+
      
      
      "<td>"+item.date+"-"+MM+"-"+year+"</td>"+
      "<td>"+item.timea+"</td>"+
     "<td>"+item.from+"</td>"+
      "<td>"+item.to+" &back"+"</td>"+
      "<td>"+item.mode+"</td>"+
      "<td>"+item.km+"</td>"+
      '<td >'+item.purpose+"</td>"+
      
    "</tr>").appendTo('#printTable')}})
$("#monthYear").html("for the month of  "+month+" "+year)
 $("#headding").html("Tour particulars of "+myName+" ("+desig+")"+", Office of"+hod+","+place);
$("#place").html(place);
$("#fName").html(myName);
$("#fDesig").html(desig);


function exportExcel(){

let data = oData
let rows = [];

data.items.forEach(item => {

rows.push([
item.date + "." + MM + "." + item.year + "  " + item.timea, // Column 1
item.from,                           // Column 2
item.to + " & back",                   // Column 3
item.km,                             // Column 4
item.mode,                           // Column 5
"", "", "", "", "", "","",  // Empty columns
item.purpose                         // Last column
]);

});

let ws = XLSX.utils.aoa_to_sheet(rows);

/* column widths similar to table */
ws["!cols"] = [
{wch:22},
{wch:14},
{wch:40},
{wch:5},
{wch:10},
{wch:5},
{wch:5},
{wch:5},
{wch:5},
{wch:5},
{wch:5},
{wch:5},
{wch:50}
];

let wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, "February");

XLSX.writeFile(wb, "TA Geevar " + month + " " + year + ".xlsx");

}


function nSave(){
      window.location.href = "newSave.html" +"?"+year+month;}

