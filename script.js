
$(document).ready(function() {
    function displayCurrentDay() {
const currentDate = dayjs().format('dddd, MMMM D YYYY, h:mm A');
$('#currentDay').text(currentDate);

    }
    displayCurrentDay();


//function to color code time blocks
function colorCodeTimeBlocks() {
const currentHour = dayjs().hour();

$('.time-block').each(function() {
const blockHour = parseInt($(this).attr('id').split('-')[1]);

if (blockHour < currentHour) {
$(this).removeClass('present future').addClass('past');
} else if(blockHour === currentHour) {
$(this).removeClass('past future').addClass('present');
} else {
    $(this).removeClass('past present').addClass('future');
}


});
}

//function to color code time blocks
colorCodeTimeBlocks();

//event listener for entering events and saving to local storage
$('.description').on('blur', function() {
const hour = $(this).parent().attr('id');
const eventText = $(this).val().trim();

localStorage.setItem(hour, eventText);
});

//function to load saved events from local storage
function loadSavedEvents() {
$('.description').each(function() {
const hour = $(this).parent().attr('id');
const savedEvent = localStorage.getItem(hour);

if (savedEvent) {
    $(this).val(savedEvent);
}




});
}
//call the function to load saved events
loadSavedEvents();

});








