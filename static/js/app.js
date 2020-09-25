// write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// from data.js
var tableData = data;

// YOUR CODE HERE!  14.3.3 use bonus

// get a reference to the table body
var tbody= d3.select('tbody')
// console.log(tableData)

// loop through data 
tableData.forEach((sighting) => {
  var row=tbody.append("tr");
  Object.entries(sighting).forEach(([key,value]) => {
    var cell= row.append("td");
    cell.text(value);
  });
});

// Form input 14.3.8
// Select the button
var button = d3.select("#filter-btn")

// Select the form
// var resetButton = d3.select("#reset-filter-btn")

// Create event handlers for clicking the button or pressing the enter key
button.on("click", function(){


// remove any exisiting table
d3.select("tbody").html("");

// // prevent page from refreshing
// // d3.event.preventDefault();

// Select the input element and get the raw HTML node
var inputElement = d3.select("#datetime");

// Get the value property of the input element
var inputValue = inputElement.property("value");

// Print the value to the console
console.log(inputValue);

// filter data with datetimeequal to input value
var filterData=tableData.filter(sighting=> sighting.datetime===inputValue);
// print filter values
console.log(filterData);

filterData.forEach(function(selections){
  console.log(selections);

  // Append the row with 'tr' for each sighting
  var row=tbody.append('tr');

  //Use Object.entries to console.log each UFO Sighting Value
  Object.entries(selections).forEach(function([key, value]){
    console.log(key, value);

    // Append a cell to each row
    var cell=row.append('td');
    cell.text(value);
});
});
});         






