# eventPlanner
https://fast-springs-87530.herokuapp.com/

### 12/03/2019:

Event Planner
A web server with registered API endpoints, pushing dynamically built html from handlebar templates with SQL data.

We have built an event planner app with UIs for event planners and another for event attendees.

### Technology used:
##### javascript
##### jQuery
##### Node.js
##### MySQL
##### sequelize
##### handlebars
##### moment.js
##### fullcalendar
##### bootstrap

### Our product is built around our database consisting of 3 tables:
## Users
## Events
## Notifications

The Planners complete a form to create the event, this is sent via ajax in a `POST` to the api/events endpoint. Existing events will have edit and delete buttons.
Edit on click will do a `PUT` to `api/events`, triggering a sequelize update call to the database.
They can then navigate to the current events page at /events/ where a `GET` to `api/events` will

New users complete a form, on click, the form data is sent in a `POST` request to api/users, inserting a new row in to the users table.
We pull a list of existing users with a GET request to api/users.
Clicking on an existing user will route to `/userss/:id`
The users are able to see a list of all existing events with a `GET` to our `api/events`
If a user clicks on an event, a modal is shown with the event details and "Interested!" and "No Thanks!" buttons. If the user clicks "Interested!", a `POST` is made to api/notifications triggering an insert into notifications where the current user is the sender and the owner of the event is the recipient with a default text of `${user.name} is interested in attending ${event.name}!`
The user will be added to the JSON object in event.attendees
The users page displays a calendar to be populated with the events the current user exists in attendees for.

For your viewing pleasure, our original design notes are below:
# notes
Event Planner:
CRUDS events
Creates events
Deletes events
update events you are owner of
Events:
	id
	name
	type
	Location
	style?
	attendee list (userID)
	owner (userID)

send invites to users (calendar?)

Feature sets:
Event Attendee

Event Planner


Back-end
1)
server.js
api routes (GET/POST+callback logic)

GET - existing users of specified type(vendors, customers[eventCreators], guests)
select * from users where type = ?

POST - user creation

2)
sql schema design+seed
sequelize logic/queries
models
index.js

Front-end:
3)
front-end JS
index.js
handlebar templates /views(bootstrap?)



survey type model for customers - type of event, dates, etc
	-> creates web pages for the event dynamically

3 UIs: Customers, Vendors, Guests

Basic Info (user/group name, next event?)
Calendar
available events?

Database tables:
Users/Groups aka Vendors (id, name, type, rsvp'd)
id: int,
name: string,
type: string, (customer, guests, vendors)
phone number: int,
email: string

Event
id:
name:
type:
attendees:
owner:
venue:
caterer:
DJ:
otherVendor(s):

Vendors:
ID:
name:
type: (venue, caterer, DJ, other)
address:
phone:
email:

Events (venue, caterer, DJ, date/time, attendees, owner)
Vendors (venues, caterers, DJs, capacity, location, style?)
Calendar

landing page:
show list of existing users


2 user types, 2 views
Guest, Planner, Vendors

Guests:
Display existing user Info
Will see a list of existing events (findAll)
Can RSVP to open events (links that fire Modals? [super cool!!])
calendars

Alex:
event Deletes/edit
event create to write owner userID to event.owner
write attendee list to event modal

Christopher:
Notification table
fix modals
implement calendar

new technology - https://fullcalendar.io/?
