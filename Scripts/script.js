


// saves stored data when save button is pushed.
$(document).ready(function () {
  const saveButton = $('button');
  saveButton.on('click', function () {
    var content = $(this).siblings('.description').val();
    var timeSlot = $(this).parent().attr('id');
    console.log(timeSlot);
    console.log(content);
    localStorage.setItem(timeSlot, content)

  });

  // function displays all stored data when refreshed
  function displayinfo() {

    for (i = 9; i <= 20; i++) {
      $(`${i} .description`).val(localStorage.getItem(`${i}`));
    }
  }
  displayinfo();


  // will change color of the text area based on the time
  function ColorChnge() {

    for (i = 9; i <= 20; i++) {
      var boxHour = $(this).attr(`${i}`);
      var newBoxHour = $(boxHour).attr('id');
      var boxHourInt = parseInt(newBoxHour);
      var currentHour = dayjs().hour();
      console.log(boxHour)
      console.log(currentHour)
      console.log('Id Value:' + boxHourInt)
      if (boxHourInt < currentHour) {
        $(boxHour).addClass('past');
      }
      else if (boxHourInt == currentHour) {
        $(boxHour).addClass('present');
      }
      else {
        $(boxHour).addClass('future');
      }
    }
  }

ColorChnge();
 
  const dateDiv = $('#currentDay')
  const date = dayjs().format('dddd MMMM D, YYYY')
  dateDiv.append(date)

  console.log(dayjs().hour())
});

