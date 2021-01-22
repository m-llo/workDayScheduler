var currentDay = $("#currentDay");
var date = luxon.DateTime.local().toFormat('MMMM dd, yyyy');


currentDay.append(date);

var hour = $(".time");



// need to change background color of input div depending on the time of day

 $(".taskInput").each(function(index, taskInput){
    var hr = $(taskInput).data("time")
    var currentHour = new Date().getHours();
    console.log(currentHour)
    // already happend
    if(hr < currentHour){
        $(taskInput).css("background-color","#A9A9A9")
        
// coming up
    } else if (hr > currentHour){
        $(taskInput).css("background-color","green")
// current hour
    }else {
        $(taskInput).css("background-color","red")

    }

 });



 var saveButton = $(".save");

// when save button is clicked need to push to local storage


$(saveButton).on("click", function(){
 console.log(this);
 console.log($(this).prev().val());
 var listItems = JSON.parse(localStorage.getItem("items")) || [];

 var savedItem = $(this).prev().val();
 console.log(savedItem);

 listItems.push(savedItem);
 localStorage.setItem("items", JSON.stringify(listItems));
 
})

// populate items

function populateList (){
var listItems = JSON.parse(localStorage.getItem("items")) || [];
var itemList = $(".taskInput");

$(itemList).each(function(index,listItems ){

$(itemList).text(listItems)

})
}