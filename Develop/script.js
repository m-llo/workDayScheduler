var currentDay = $("#currentDay");
var date = luxon.DateTime.local().toFormat('MMMM dd, yyyy');
var inputField = $(".taskInput");
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
// need to clear specific line of saved storage and replace with new value once clicked

$(saveButton).on("click", function(){
 var listItems = JSON.parse(localStorage.getItem("items")) || [];
 var savedItem = $(this).prev().val();
 console.log(savedItem);
 var savedItemIndex = $(this).prev().data("index")
 console.log(savedItemIndex)
 
 
//  console.log(listItems[2]);
 $(listItems).pop(savedItemIndex)
 console.log("spliced: " + listItems)


 
 

 listItems.push(savedItem);
 localStorage.setItem("items", JSON.stringify(listItems));
 
 
})

// populate items loop if possible

function renderList (){
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

var savedList = [];
function init() {
    // Get stored todos from localStorage
    var storedTasks = JSON.parse(localStorage.getItem("items"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedTasks !== null) {
      savedList = storedTasks;
    }
    console.log(savedList);
  
    // // This is a helper function that will render todos to the DOM
    renderList();
  }
  init();
  currentDay.append(date);
  $(".taskInput").css({"font-size":"200%", "text-align":"center"});
  