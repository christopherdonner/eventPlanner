$(document).ready(function() {
  $("#updateEventForm").hide();
  var eventName = $("#event-name");
  var eventType = $("#event-type");
  var eventLocation = $("#event-location");
  var style = $("#event-style");
  var eventStart = $("#event-start");
  var eventEnd = $("#event-end");

  //   var eventList = $("#event-list");

  //Events methods
  var API = {
    saveEvent: function(event) {
      return $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/events",
        data: JSON.stringify(event)
      });
    },
    getEvent: function() {
      return $.ajax({
        url: "api/events",
        type: "GET"
      });
    },
    deleteEvent: function(id) {
      return $.ajax({
        url: "api/events/" + id,
        type: "DELETE"
      });
    },
    updateEvent: function(id) {
      return $.ajax({
        url: "api/events/" + id,
        type: "PUT"
      });
    }
  };

  //refreshEvents gets new Events from the db and repopulates the list
  //   var refreshEvents = function() {
  //     API.getEvent().then(function(data) {
  //       var events = data.map(function(event) {
  //         var $a = $("<a>")
  //           .text(
  //             event.name.toUpperCase() +
  //               " " +
  //               event.type +
  //               " " +
  //               event.location +
  //               " " +
  //               event.style +
  //               " " +
  //               event.startTime +
  //               " " +
  //               event.endTime
  //           )
  //           .attr("href", "/events/" + event.id);

  //         var $li = $("<li>")
  //           .attr({
  //             class: "list-group-items",
  //             "data-id": event.id
  //           })
  //           .append($a);

  //         var $button = $("<button>")
  //           .addClass("btn btn-danger float-right delete")
  //           .text("ｘ");

  //         $li.append($button);

  //         return $li;
  //       });

  //       eventList.empty();
  //       eventList.append(events);
  //     });
  //   };

  var handleEventFormSubmit = function(eve) {
    eve.preventDefault();

    var event = {
      name: eventName.val().trim(),
      type: eventType.val().trim(),
      location: eventLocation.val().trim(),
      style: style.val().trim(),
      start: eventStart.val().trim(),
      end: eventEnd.val().trim()
    };

    if (
      !(
        event.name &&
        event.type &&
        event.location &&
        event.style &&
        event.start &&
        event.end
      )
    ) {
      alert("You must enter text for the event and the rest of information!");
      return;
    }

    $("#eventForm").hide();
    $("#planner-btn").hide();
    alert("You successfully created a New event!");
    API.saveEvent(event).then(function() {
      refreshEvents();
    });
    eventName.val("");
    eventType.val("");
    eventLocation.val("");
    style.val("");
    eventStart.val("");
    eventEnd.val("");
  };

  // handleEventFormSubmit is called whenever we submit a new Event
  // Save the new Event to the db and refresh the list

  //Events
  // handleEventDeleteBtnClick is called when a user's delete button is clicked
  // Remove the user from the db and refresh the list
  //   function handleDeleteBtnClick() {
  //     var idToDelete = $(this)
  //       .parent()
  //       .attr("data-id");

  //     API.deleteEvent(idToDelete).then(function() {
  //       refreshEvents();
  //     });
  //   }
  // Add event listeners to the event submit and delete buttons
  $("#submitEvent-btn").on("click", handleEventFormSubmit);
  //   $("#delete-event-btn").on("click", function() {
  //     handleDeleteBtnClick();
  //   });

  //update event
  $("#edit-event-btn").on("click", function(event) {
    event.preventDefault();
    $("#updateEventForm").toggle();
  });

  //myModalEvent
  $(".btn-modal-event").on("click", function(event) {
    event.preventDefault();
    $("#myModalEvent").modal("show");
    console.log(this.name);
    console.log(startTime);
    console.log(endTime);
  });
});
