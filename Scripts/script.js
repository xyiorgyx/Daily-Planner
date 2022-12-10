


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
  function displayinfo () {

    for (i = 1; i <= 12; i++) {
      $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
    }
  }
  displayinfo();
  //
  // / TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  console.log(dayjs())
  const dateDiv = $('#currentDay')
  const date = dayjs().format('dddd MMMM D, YYYY')
  dateDiv.append(date)

  console.log(dayjs().hour())
});

