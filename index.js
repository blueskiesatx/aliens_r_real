$(document).ready(function() {
    $("dataTable").DataTable();
} );

//Used given HTML startercode.
//Get references to each tbody element (date, city, state, country, shape, and button)
var $tbody = document.querySelector("#table-body");
var $dateInput = document.querySelector("#date-input");
var $cityInput = document.querySelector("#city-input");
var $stateInput = document.querySelector("#state-input");
var $countryInput = document.querySelector("#country-input");
var $shapeInput = document.querySelector("#shape-input");
var $submitButton = document.querySelector("#submit");

//Set the variable for data set
var alien_sightings = dataSet;

//Rendered table initially
renderTable();

//Created a function to render table
function renderTable() {

    //Loop thru data set
    for (var i = 0; i < alien_sightings.length; i++) {
    
        //Inserted a row
        var $row = $tbody.insertRow(i);

        //Get current object & keys
        var sighting = alien_sightings[i];
        var fields = Object.keys(sighting);

        //Inserted alien_sightings
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = sighting[field];
        };
    };
};

//This is a submit button with eventlistener, called filterInput when clicked
$submitButton.addEventListener("click", filterInput);

//Created a function to filter by date
function filterDate(encounter) {
    return encounter.datetime == $dateInput.value.trim().toLowerCase();
};

//Created a function to filter  by city
function filterCity(encounter) {
    return encounter.city == $cityInput.value.trim().toLowerCase();
};

//Created a function to filter by state
function filterState(encounter) {
    return encounter.state == $stateInput.value.trim().toLowerCase();
};

//Created a function to filter by country
function filterCountry(encounter) {
    return encounter.country == $countryInput.value.trim().toLowerCase();
};

//Created a function to filter by encounterd shape
function filterShape(encounter) {
    return encounter.shape == $shapeInput.value.trim().toLowerCase();
};

//Created a function to filter by event input
function filterInput(event) {

    //Prevented default
    event.preventDefault();

    //Reset the data set each time button is clicked
    alien_sightings = dataSet;

    //Created filters based on input
    if ($dateInput.value) {
        alien_sightings = alien_sightings.filter(filterDate);
    };

    if ($cityInput.value) {
        alien_sightings = alien_sightings.filter(filterCity);
    };

    if ($stateInput.value) {
        alien_sightings = alien_sightings.filter(filterState);
    };

    if ($countryInput.value) {
        alien_sightings = alien_sightings.filter(filterCountry);
    };

    if ($shapeInput.value) {
        alien_sightings = alien_sightings.filter(filterShape);
    };

    if (!$dateInput && !$cityInput && !$stateInput && !$countryInput && !$shapeInput) {
        alien_sightings = dataSet;
    };

    //Cleared inputs for next run
    $dateInput.value = "";
    $cityInput.value = "";
    $stateInput.value = "";
    $countryInput.value = "";
    $shapeInput.value = "";

    //Re-rendered the table
    $tbody.innerHTML = "";
    renderTable();
};