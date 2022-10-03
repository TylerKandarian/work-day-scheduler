var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var nineAm = $("#text9am");
var span9am = $("#9am");
var tenAm = $("#text10am");
var hour = moment().format('h a');
var hourSched = $(span9am).text();

// var userInput = ""

$("#currentDay").text(currentDate + " " + currentHour);

function initPage() {
  var init = JSON.parse(localStorage.getItem("9 am"));
  nineAm.text(init);
  console.log(hour);

  if (hour > hourSched) {
    console.log("yeah");
    nineAm.addClass("past");
  } else {
    console.log("nooo");
  }


} 

$(document).ready(function(){
  initPage()

    $("#button9am").on("click", function() {
        var input = $.trim(nineAm.val());
        console.log("9 am " + input);
        localStorage.setItem("9 am", JSON.stringify(input));
        localInput = JSON.parse(localStorage.getItem("9 am"));
        console.log(localInput);

      });

});