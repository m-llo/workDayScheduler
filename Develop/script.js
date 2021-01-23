var currentDay = $("#currentDay");
var date = luxon.DateTime.local().toFormat('MMMM dd, yyyy');
var inputField = $(".taskInput");
var hour = $(".time");
var savedList = [" ", " ", " ", " ", " ", " ", " ", " ", " ",];







// need to change background color of input div depending on the time of day

$(".taskInput").each(function (index, taskInput) {
    var hr = $(taskInput).data("time")
    var currentHour = new Date().getHours();
    console.log(currentHour)
    // already happend
    if (hr < currentHour) {
        $(taskInput).css("background-color", "#A9A9A9")

        // coming up
    } else if (hr > currentHour) {
        $(taskInput).css("background-color", "green")
        // current hour
    } else {
        $(taskInput).css("background-color", "red")

    }

});




var saveButton = $(".save");

// when save button is clicked need to push to local storage
// need to clear specific line of saved storage and replace with new value once clicked

$(saveButton).on("click", function () {
    var listItems = JSON.parse(localStorage.getItem("items"));
    var list = [...listItems];
    var savedItem = $(this).prev().val();
    // var savedItemIndex = $(this).prev().data("index");
    var savedItemIndex = $(this).prev().attr("data-index");
    savedItemIndex = parseInt(savedItemIndex);
    // var listItemsIndex = $.inArray(savedItem, list);
    var listItemsIndex = list[savedItemIndex];
    // var listItemsIndex = $(listItems).index()



    // console.log("coming from html user input", savedItem);
    console.log(typeof savedItemIndex);
    console.log("local storage index ", listItemsIndex);
    console.log("coming from local storage ", list);


    for (var i = 0; i < list.length; i++) {

        if (listItemsIndex === savedItemIndex) {
        //  var updatedList =  $(listItems[listItemsIndex]).replaceWith(savedItem)
          var updatedList = list.splice(listItemsIndex, 1);
        console.log("new list " , updatedList);
            // localStorage.setItem("items", JSON.stringify(listItems));
        }

    };

    // listItems.push(savedItem);
    // localStorage.setItem("items", JSON.stringify(listItems));


})

// populate items loop if possible

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
    var initialArray = [" "," "," "," "," "," "," "," "," ",];
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTasks !== null) {
        savedList = storedTasks;
    }else{

        localStorage.setItem("items", JSON.stringify(initialArray))
    

    }
    console.log(savedList);

    // // This is a helper function that will render todos to the DOM
    renderList();
}
init();
currentDay.append(date);

$(".taskInput").css({ "font-size": "200%", "text-align": "center" });
