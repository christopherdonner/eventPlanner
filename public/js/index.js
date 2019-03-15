$(document).ready(function() {
  //User button hiding planner-btn
  $("#userRegistration").hide();
  $("#eventForm").hide();
  $("#user-btn").on("click", function(event) {
    event.preventDefault();
    $("#planner-btn").toggle();
    $("#userRegistration").fadeToggle(1000);
    $(".usersListBox").hide();
  });
  //register-btn toggling user and planner btns
  $("#user-btn").hide();
  $("#planner-btn").hide();
  $("#register-btn").on("click", function(event) {
    event.preventDefault();
    $("#titleBooking").fadeOut();
    $("#user-btn").toggle();
    $("#planner-btn").toggle();
  });
  //planner-btn toggling user-btn
  $("#planner-btn").on("click", function(event) {
    event.preventDefault();
    $("#user-btn").toggle();
    $(".usersListBox").hide();
    $("#eventForm").fadeToggle(1000);
  });

  // Get references to page elements
  //user reference
  var userName = $("#user-name");
  var userType = $("#user-type");
  var userPhone = $("#user-phone");
  var userEmail = $("#user-email");

  var userList = $("#user-list");

  // The API object contains methods for each kind of request we'll make
  var API = {
    saveUser: function(user) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/userss",
        data: JSON.stringify(user)
      });
    },
    getUsers: function() {
      return $.ajax({
        url: "api/userss",
        type: "GET"
      });
    },
    deleteUser: function(id) {
      return $.ajax({
        url: "api/userss/" + id,
        type: "DELETE"
      });
    },
    getEvent: function(id) {
      return $.ajax({
        url: "/api/events/" + id,
        type: "GET"
      });
    },
    RSVP: function(id) {
      return $.ajax({
        url: "/api/notify/" + id,
        type: "POST"
      });
    }
  };

  // refreshUsers gets new users from the db and repopulates the list
  var refreshUsers = function() {
    API.getUsers().then(function(data) {
      var users = data.map(function(user) {
        var $a = $("<a>")
          .text(
            user.name.toUpperCase() +
              " " +
              user.type +
              " " +
              user.phone +
              " " +
              user.email
          )
          .attr("href", "/userss/" + user.id);

        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": user.id
          })
          .append($a);

        var $button = $("<button>")
          .addClass("btn btn-danger float-right delete")
          .text("ｘ");

        $li.append($button);

        return $li;
      });

      userList.empty();
      userList.append(users);
    });
  };

  // handleFormSubmit is called whenever we submit a new user
  // Save the new user to the db and refresh the list
  var handleFormSubmit = function(event) {
    event.preventDefault();

    var user = {
      name: userName.val().trim(),
      // type: userType.val().trim(),
      phone: userPhone.val().trim(),
      email: userEmail.val().trim()
    };

    if (!(user.name && user.phone && user.email)) {
      alert("You must enter user text and other information!");
      return;
    }

    API.saveUser(user).then(function() {
      refreshUsers();
    });

    userName.val("");
    userType.val("");
    userPhone.val("");
    userEmail.val("");
  };

  // handleDeleteBtnClick is called when an user's delete button is clicked
  // Remove the user from the db and refresh the list
  var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
      .parent()
      .attr("data-id");

    API.deleteUser(idToDelete).then(function() {
      refreshUsers();
    });
  };

  // Add event listeners to the submit and delete buttons
  $("#submitBtn").on("click", handleFormSubmit);
  userList.on("click", ".delete", handleDeleteBtnClick);

  $(".event").on("click", function() {
    var id = $(this).attr("eventID");
    console.log("event click " + id);
    API.getEvent(id).then(function() {
      $("#results-modal").modal("toggle");
    });
  });

  $("#RSVP").on("click", function(id) {
    console.log("RSVP" + id);
    alert("You have expressed interest in this event");
    API.RSVP(id.id);
  });
});

var clock = setInterval(function() {
  $("#trainClock").text(moment());
}, 1000);


//clock
// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line no-unused-vars
var clock=setInterval(function(){$("#trainClock").text(moment());}, 1000);

$("#calendar").fullCalendar({
  // put your options and callbacks here
  defaultView: 'agendaWeek'
});