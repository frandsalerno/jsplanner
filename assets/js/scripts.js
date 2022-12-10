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
   <section class="row">
      <div class="timeblock hour">
         ${hour}
      </div>
      <textarea name="tasks" id="tasks">
         ${value}
      </textarea>
      <button class="saveBtn">
      </button>
   </section>
   `)
})

//Color code the timeblocks

var hour = $('.hour');

if((moment().format('H'))==hour){
   hour.parent().addClass('present');
} else if((moment().format('H'))>hour) {
   hour.parent().addClass('past');
}else{
   hour.parent().addClass('future');
}

//Allow the user to add text to the textarea 
var tasks = $('#tasks');
var saveBtn = $('.saveBtn');


//Save the event to localStorage

//Bring any data from localStorage into the timeblocks when the page loads

//

