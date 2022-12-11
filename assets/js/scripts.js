//Show today's date
currentDay = $('#currentDay');
// console.log(currentDay);
$(currentDay).text(moment().format('MMM Do YYYY'));

//Show timeblocks for each hr of the day 9-5
var container = $('.container');

var timeblocks = {
   9: '',
   10: '',
   11: '',
   12: '',
   13: '',
   14: '',
   15: '',
   16: '',
   17: ''
}

function updateAgenda(){
   $.each(timeblocks, function(key, value){
      var hour = key;
      var tasks = value;
      container.append(`
      <section class="row" id="hourSlot">
      <div class="timeblock hour">${hour}</div>
      <textarea name="tasks" id="tasks" rows="5" cols="80">${value}</textarea>
      <button class="saveBtn"></button>
      </section>
      `);
   })
}

//Bring any data from localStorage into the timeblocks when the page loads
if (JSON.parse(localStorage.getItem('hourly_tasks')) != null) {
   timeblocks = JSON.parse(localStorage.getItem('hourly_tasks'));
   updateAgenda();
}else{
   updateAgenda()
}

//Color code the timeblocks

var currentHour = $('.hour');

currentHour.each(function(){
   if((moment().format('H'))==$(this).text()){
      $(this).parent().addClass('present');
   } else if(parseInt((moment().format('H'))) > $(this).text()) {
      $(this).parent().addClass('past');
   }else{
      $(this).parent().addClass('future');
   }
   
})


//Allow the user to add text to the textarea 
var hourSlot = $('#hourSlot');
var tasks = $('#tasks');
var saveBtn = $('.saveBtn');
var dayplans = [];
var success = $('.success')

saveBtn.on('click',function(){
   tasks = ($(this).siblings('#tasks').val());
   hourSlot = ($(this).siblings('.hour').text()); 
   timeblocks[hourSlot] = tasks; 
   //Save the event to localStorage
   localStorage.setItem('hourly_tasks', JSON.stringify(timeblocks));
   success.show(1000);
   success.hide(1000);
})

