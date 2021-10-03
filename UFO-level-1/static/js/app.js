// from data.js
var tableData = data;

// create table with all UFO data
var table = d3.select("#ufo-table");
var tbody = table.select("tbody");

tableData.forEach(function(ufoData) {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
  });
});

// create event handler
var button = d3.select("#filter-btn");
button.on("click", runFilter);

// create filter for date
function runFilter() {
    // prevent the page from refreshing
    d3.event.preventDefault();
    
    var inputDateElement = d3.select("#datetime");
    var inputDate = inputDateElement.property("value");
    var filteredData = tableData.filter(d => d.datetime === inputDate);
    
    // clear table data
    tbody.html("");

    // create table with filtered data
    filteredData.forEach(function(ufoData) {
        var row = tbody.append("tr");
            Object.entries(ufoData).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
  });
});
}

