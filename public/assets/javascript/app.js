// CLICK HANDLERS AND AJAX
$(function () {

  // click handler for new burger
  $("#addburger").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // variable declaration for user input
    let newBurger = {
      burger: $("#burger").val().trim().toLowerCase()
    };

    // make sure that the user didn't enter blank input
    if (newBurger.burger !== "") {

      // Send the POST request and the new burger name
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("added new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );

      // reset the input value to blank
      $("#burger").val("");
    }
  });

  // click handler for changing status of burger
  $(".change-burger").on("click", function (event) {

    // variables to obtain burger's id and status
    let id = $(this).data("burgerid");
    let newDevoured = $(this).data("newdevoured");

    // devoured state is false, set it to true and vice versa
    if (newDevoured === 0) {
      newDevoured = 1;
    } else {
      newDevoured = 0;
    }

    // assign the changed devoured state to its key inside an object
    let newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request, passing the new devoured state
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("moved to devoured column");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // click handler for deleting burger
  $(".delete-burger").on("click", function (event) {

    // variable to obtain burger's id
    let id = $(this).data("burgerid");

    // Send the DELETE request with the appropriate id
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});

// FUNCTIONS TO RENUMBER LISTS

// variable for Temptation list numbers
let temp_number = 1;

// function to renumber Temptation list numbers
$('ul.temptation li span').each(function () {
  $(this).text(temp_number)
  temp_number++;
});

// variable for Gluttony list numbers
let glut_number = 1;

// function to renumber Gluttony list numbers
$('ul.gluttony li span').each(function () {
  $(this).text(glut_number)
  glut_number++;
});

// INPUT FOCUS

// place the focus in the new burger input
$("#burger").focus();