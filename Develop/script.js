//Display today's date and time
var currentDay = document.querySelector(".currentDay")
var currentTime = document.querySelector(".currentTime")

currentDay = moment().format("ddd, MMMM Do")
currentTime = moment().format("HH:mm a")
$(".currentDay").text(currentDay) 
$(".currentTime").text(currentTime)

//function checks time of row
const rows = document.querySelector("hour")
let currentHour = parseInt(moment().format('H'))


// for (var i = 0, row; row = rows[i]; i++) {
//     let 
//     rowIdString = row.id, rowHour;
//     console.log(rowIdString)
//     if (rowIdString) {
//         rowHour = parseInt(rowIdString) 
//     }
//     if(rowHour) {
//         if(currentHour === rowHour) {
//             setColor(row,"green")
//         } else if((currentHour < rowHour) && (currentHour > rowHour - 6)) {
//             setColor(row, "grey")
//         } else if((currentHour > rowHour) && (currentHour < rowHour + 6)) {
//             setColor(row, "lightblue")
//         } else{
//             setColor(row, "white")
//         }
//     }

// }

// //Function to indicate if timeslot has passed
// function colorIndicator() {
//     if (currentTime ===  ) {

//     }
// }





//Event listener to save input
var description = document.querySelector(".description")
var saveBtn = document.querySelector(".saveBtn")
var inputs = []

function renderInputs() {
    description.innerHTML = ""
    console.log(inputs)
}

//Get stored inputs from LocalStorage
function init() {
    var storedInputs = JSON.parse(localStorage.getItem("inputs"))

    if (storedInputs !== null) {
        inputs = storedInputs 
    }
    renderInputs()
}

//Save inputs in localStorage
function storeInput() {
    localStorage.setItem("inputs", JSON.stringify(inputs))
}

//listens for save button and stores input made render to the page
saveBtn.addEventListener("click", function(event) {
    event.preventDefault()
    console.log("clicked")

    inputs.push(description) 

    storeInput()
    renderInputs()
})    

init()





















