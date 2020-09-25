
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


// // Form input 14.3.8
// // Select the button
// var button = d3.select("#filter-btn")

// // Select the form
// var resetButton = d3.select("#reset-filter-btn")

// // Create event handlers for clicking the button or pressing the enter key
// button.on("click", runEnter);
// // resetButton.on("submit",runEnter);

// // remove any exisiting table
// d3.select("tbody").html("");

// // prevent page from refreshing
// // d3.event.preventDefault();

// // Select the input element and get the raw HTML node
// var inputElement = d3.select("#datetime");

// // Get the value property of the input element
// var inputValue = inputElement.property("value");

// // Print the value to the console
// // console.log(inputValue);

// function runEnter() {
// // Check if any data was entered in the filter box
// // If no data was entered, exits the function

//  if (inputValue === ""){
//   // alert("No value entered");
//   return console.log("No value entered");
// }

   
// //If there is something in the form, the function continues
//   else{

// /*Uses filter function and arrow function to run through the data
// and stores the entries that match the input date in a new array*/
// var filteredDate = tableData.filter(date => date.datetime === inputValue);
//   console.log(filteredDate);
        
//   if ( filteredDate.length === 0){
//     console.log("No data on that date exists");
//     window.alert("No data exists on that date!");
//     }

//   else {
// //Reset the table on each click
//         ufoTable.html("");
            
// //Add the header back to the empty table
//         ufoTableHeader = ufoTable.append('thead').append('tr');
//         ufoTableHeader.append('th').attr('class', 'table-head').text("Date");
//         ufoTableHeader.append('th').attr('class', 'table-head').text("City");
//         ufoTableHeader.append('th').attr('class', 'table-head').text("State");
//         ufoTableHeader.append('th').attr('class', 'table-head').text("Country");
//         ufoTableHeader.append('th').attr('class', 'table-head').text("Shape");
//         ufoTableHeader.append('th').attr('class', 'table-head').text("Comments");

// //Add tbody tag to append the filtered data
//         ufoTable.append('tbody');

// //Adds a row for each entry in the filtered data
//         filteredDate.forEach(date => {
//           row = ufoTable.select('tbody').append('tr');

// //Runs through the values of each entry and adds them to the row
//         Object.entries(date).forEach(([key,value]) => {
//           row.append('td').text(value);
//               })
//             })
//           }
//         }
// }





