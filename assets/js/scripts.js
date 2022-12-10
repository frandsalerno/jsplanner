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

$.each(timeblocks, function(key, value){
   var hour = key;
   var tasks = value;
   container.append(`
   <section class="row" id="hourSlot">
      <div class="timeblock hour">${hour}</div>
      <textarea name="tasks" id="tasks" rows="5" cols="80">${value}</textarea>
      <button class="saveBtn"></button>
   </section>
   `)
})

//Color code the timeblocks

var currentHour = $('.hour');

currentHour.each(function(){
   console.log();
   if((moment().format('H'))==$(this).text()){
      console.log($(this).text());
      $(this).parent().addClass('present');
      console.log('entro al if');
   } else if(parseInt((moment().format('H'))) > $(this).text()) {
      $(this).parent().addClass('past');
      console.log('entro al else if');
   }else{
      $(this).parent().addClass('future');
      console.log('entro al else');
   }
   
})


//Allow the user to add text to the textarea 
var hourSlot = $('#hourSlot');
var tasks = $('#tasks');
var saveBtn = $('.saveBtn');
var dayplans = [];

saveBtn.on('click',function(){
   tasks = ($(this).siblings('#tasks').val());
   hourSlot = ($(this).siblings('.hour').text()); 
   timeblocks[hourSlot] = tasks; 
})

//Save the event to localStorage

//Bring any data from localStorage into the timeblocks when the page loads

//

