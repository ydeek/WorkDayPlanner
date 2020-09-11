//display the current day and time on the top of the schedule using moment.js date and time format

$("#currentDay").text(moment().format('MMMM Do YYYY'));



// how to apply the colors to past, present, and future ?!! 
//create function to compare current time with time blocks
function checkTime() {
    //for 9am 
    var timeBlock = moment().startOf('day').add(9, "hours")
    //adjusting current time to the hour 
    var currentTime = moment().startOf("hour")
    //adding timeblock 1 if else statement
    if (currentTime > timeBlock) {
        $("#text-entry1").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry1").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry1").addclass("present");
    }

    var timeBlock = moment().startOf('day').add(10, "hours")
    var currentTime = moment().startOf("hour")
    if (currentTime > timeBlock) {
        $("#text-entry2").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry2").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry2").addclass("present");
    }
    var timeBlock = moment().startOf('day').add(10, "hours")
    var currentTime = moment().startOf("hour")
    if (currentTime > timeBlock) {
        $("#text-entry3").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry3").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry3").addclass("present");
    }
    var timeBlock = moment().startOf('day').add(11, "hours")
    var currentTime = moment().startOf("hour")
    if (currentTime > timeBlock) {
        $("#text-entry4").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry4").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry4").addclass("present");
    }
    var timeBlock = moment().startOf('day').add(12, "hours")
    var currentTime = moment().startOf("hour")
    if (currentTime > timeBlock) {
        $("#text-entry5").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry5").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry5").addclass("present");
    }
    var timeBlock = moment().startOf('day').add(1, "hours")
    var currentTime = moment().startOf("hour")
    if (currentTime > timeBlock) {
        $("#text-entry6").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry6").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry6").addclass("present");
    }
    var timeBlock = moment().startOf('day').add(10, "hours")
    var currentTime = moment().startOf("hour")
    if (currentTime > timeBlock) {
        $("#text-entry7").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry7").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry7").addclass("present");
    }
    var timeBlock = moment().startOf('day').add(10, "hours")
    var currentTime = moment().startOf("hour")
    if (currentTime > timeBlock) {
        $("#text-entry8").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry8").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry8").addclass("present");
    }
    var timeBlock = moment().startOf('day').add(10, "hours")
    var currentTime = moment().startOf("hour")
    if (currentTime > timeBlock) {
        $("#text-entry9").addClass("past");
    }
    else if (currentTime.thePrevious(timeblock)) {
        $("#text-entry9").addclass("future");
    }
    else if (currentTime.theSame(timeblock)) {
        $("#text-entry9").addclass("present");
    }
}
checkTime();

//make written text saved in local storage using jQuery 
//Change text of relavent timeblock to task here 
var timeBlocks = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

for (var i = 0; i < timeBlocks.length; i++) {
    var task = localStorage.getItem(timeBlocks[i]);
    $('#text-entry' + (i + 1)).text(task)
}




//timeblock: "9am" to "5pm"
//task: any string 
function saveTask(timeBlock, task) {
    localStorage.setItem(timeBlock, task);

}

$('save1').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})

$('save2').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})
$('save3').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})
$('save4').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})
$('save5').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})

$('save6').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})
$('save7').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})
$('save8').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})
$('save9').on('click', function () {
    saveTask('9am', $('text-entry1').text())
})




