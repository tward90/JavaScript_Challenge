// from data.js
var tableData = data;

// YOUR CODE HERE!

// Define where you would like your table rows inserted

var tbody = d3.select("tbody");

// Append a new tr with respective td's for each sighting
tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Define button location
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing

    d3.event.preventDefault();

    // Select the input element

    var inputElement = d3.select("#datetime");

    // Get the value property of the input element

    var inputValue = inputElement.property("value");

    // Use the form input to filter the data by blood type

    var filterEvents = tableData.filter(row => row.datetime === inputValue)

    // Test filter function

    console.log(filterEvents)

    // Replace full table with filtered results
    tbody.selectAll('tr').remove()


    filterEvents.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};