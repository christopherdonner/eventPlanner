$(document).ready(function() {
  $("#updateEventForm").hide();
  var eventName = $("#event-name");
  var eventType = $("#event-type");
  var eventLocation = $("#event-location");
  var style = $("#event-style");
  var eventStart = $("#event-start");
  var eventEnd = $("#event-end");

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

  var handleEventFormSubmit = function(eve) {
    eve.preventDefault();

    var event = {
      name: eventName.val().trim(),
      type: eventType.val().trim(),
      location: eventLocation.val().trim(),
      style: style.val().trim(),
      startTime: eventStart.val().trim(),
      endTime: eventEnd.val().trim()
    };

    if (
      !(
        event.name &&
        event.type &&
        event.location &&
        event.style &&
        event.startTime &&
        event.endTime
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

  // Add event listeners to the event submit and delete buttons
  $("#submitEvent-btn").on("click", handleEventFormSubmit);

  //update event
  $("#edit-event-btn").on("click", function(event) {
    event.preventDefault();
    $("#updateEventForm").toggle();
  });

  //myModalEvent
  $(".btn-modal-event").on("click", function(event) {
    event.preventDefault();
    $("#myModalEvent").modal("show");
  });
});
