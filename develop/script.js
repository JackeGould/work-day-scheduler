
$(document).ready(function() {
  // Get the current date using Day.js
  var currentDate = dayjs();

  // Format the date to include the day and date
  var formattedDate = currentDate.format('dddd, MMMM D, YYYY');

  // Display the formatted date in an element with the ID 'time-display' using jQuery
  $('#time-display').text(formattedDate);
});

$(document).ready(function () {
  // saveBtn click listener 
  $(".saveBtn").on("click", function () {
      // Get nearby values of the description in JQuery
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      localStorage.setItem(time, text);
      

  })

  function timeTracker() {
    // get current number of hours.
    var timeNow = dayjs().hour();
  
    // loop over time blocks
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour-")[1]);

        console.log(blockTime);
  
        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
  
        }
    })
  }
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));


timeTracker();
 // Save text in local storage
      
  })

// function timeTracker() {
//   //get current number of hours.
//   var timeNow = moment().hour();

//   // loop over time blocks
//   $(".time-block").each(function () {
//       var blockTime = parseInt($(this).attr("id").split("hour")[1]);

//       // To check the time and add the classes for background indicators
//       if (blockTime < timeNow) {
//           $(this).removeClass("future");
//           $(this).removeClass("present");
//           $(this).addClass("past");
//       }
//       else if (blockTime === timeNow) {
//           $(this).removeClass("past");
//           $(this).removeClass("future");
//           $(this).addClass("present");
//       }
//       else {
//           $(this).removeClass("present");
//           $(this).removeClass("past");
//           $(this).addClass("future");

//       }
//   })
// }

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
  // DONE

// handle displaying the time

    // Get item from local storage if any
//     $("#hour-9 .description").val(localStorage.getItem("hour-9"));
//     $("#hour-10 .description").val(localStorage.getItem("hour-10"));
//     $("#hour-11 .description").val(localStorage.getItem("hour-11"));
//     $("#hour-12 .description").val(localStorage.getItem("hour-12"));
//     $("#hour-1 .description").val(localStorage.getItem("hour-1"));
//     $("#hour-2 .description").val(localStorage.getItem("hour-2"));
//     $("#hour-3 .description").val(localStorage.getItem("hour-3"));
//     $("#hour-4 .description").val(localStorage.getItem("hour-4"));
//     $("#hour-5 .description").val(localStorage.getItem("hour-5"));


// timeTracker();