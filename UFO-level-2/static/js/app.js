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

// create filters for date, city, state, country and shape
// allow for multiple filter inputs and skip blank inputs with IF statement
function runFilter() {
    
    d3.event.preventDefault();
    
    filteredData = tableData;

    var inputDateElement = d3.select("#datetime");
    var inputDate = inputDateElement.property("value");
    if(inputDate != ""){
        var filteredData = tableData.filter(d => d.datetime === inputDate);
    }

    var inputCityElement = d3.select("#city");
    var inputCity = inputCityElement.property("value");
    if(inputCity != ""){
    var filteredData = filteredData.filter(d => d.city === inputCity);
    }
    
    var inputStateElement = d3.select("#state");
    var inputState = inputStateElement.property("value");
    if(inputState != ""){
    var filteredData = filteredData.filter(d => d.state === inputState);
    }

    var inputCountryElement = d3.select("#country");
    var inputCountry = inputCountryElement.property("value");
    if(inputCountry != ""){
    var filteredData = filteredData.filter(d => d.country === inputCountry);
    }

    var inputShapeElement = d3.select("#shape");
    var inputShape = inputShapeElement.property("value");
    if(inputShape != ""){
    var filteredData = filteredData.filter(d => d.shape === inputShape);
    }

    // clear table
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

