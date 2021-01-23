var currentDay = $("#currentDay");
var date = luxon.DateTime.local().toFormat('MMMM dd, yyyy');
var inputField = $(".taskInput");
var hour = $(".time");
var savedList = [];
var saveButton = $(".save");


$(".taskInput").each(function (index, taskInput) {
    var hr = $(taskInput).data("time")
    var currentHour = new Date().getHours();
    if (hr < currentHour) {
        $(taskInput).css("background-color", "#A9A9A9")
    } else if (hr > currentHour) {
        $(taskInput).css("background-color", "green")
    } else {
        $(taskInput).css("background-color", "red")
    }
});


$(saveButton).on("click", function () {
    
        var listItems = JSON.parse(localStorage.getItem("items"));
        console.log('local storage arr', listItems)
        var userInputValue = $(this).prev().val();
        var savedItemIndex = $(this).prev().attr("data-index");
        savedItemIndex = parseInt(savedItemIndex);
        console.log("html index", savedItemIndex)
        listItems[savedItemIndex] = userInputValue
        console.log(listItems)

    localStorage.setItem("items", JSON.stringify(listItems));
});


function renderList() {
    var nine = $("#nine");
    nine.val(savedList[0]);

    var ten = $("#ten");
    ten.val(savedList[1]);

    var eleven = $("#eleven");
    eleven.val(savedList[2]);

    var tweleve = $("#tweleve");
    tweleve.val(savedList[3]);

    var thirteen = $("#thirteen");
    thirteen.val(savedList[4]);

    var fourteen = $("#fourteen");
    fourteen.val(savedList[5]);

    var fifteen = $("#fifteen");
    fifteen.val(savedList[6]);

    var sixteen = $("#sixteen");
    sixteen.val(savedList[7]);

    var seventeen = $("#seventeen");
    seventeen.val(savedList[8]);
}


function init() {
    // Get stored todos from localStorage
    var storedTasks = JSON.parse(localStorage.getItem("items"));
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTasks !== null) {
        savedList = storedTasks;
    } 
    renderList();
}
init();
currentDay.append(date);
$(".taskInput").css({ "font-size": "200%", "text-align": "center" });
