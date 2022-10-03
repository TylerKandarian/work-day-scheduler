var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = moment().hours();
var userInput;
var hourSpan;

var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                        + momentNow.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
  }, 100);

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