
// from data.js
var tableData = data;

// YOUR CODE HERE!  14.3.3 use bonus

// get a reference to the table body
var tbody= d3.select('tbody'):

// loop through data 
tableData.array.forEach(ufoReport => {
  var row=tbody.append("tr");
  Object.enteries(ufoReport).forEach(([key,value])=>{
    var cell= row.append("td");
    cell.text(value);
  });
});

Form input 14.3.8
// Select the button
var button = d3.select("#filter-btn)

// Select the form
var form = d3.select("#form")

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

ufoTable=d3.select("#ufo-table");

tableData.array.forEach(sightings => {
  row=ufoTable.append('tr');

  Object.entries(sightings).forEach(([key,value]) =>{
    row.append('td').text(value);
});
});



// Create the function to run for both events
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Print the value to the console
  console.log(inputValue);


  // get table references
function buildTable(data) {
  // First, clear out any existing data
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
   // Append a row to the table body
   // Loop through each field in the dataRow and add
   // each value as a table cell (td)
//Create a fuction for handleClink()
  // Grab the datetime value from the filter
  // Check to see if a date was entered and filter the
  // data using that date.
   // Apply `filter` to the table data to only keep the
   // rows where the `datetime` value matches the filter value
  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.



