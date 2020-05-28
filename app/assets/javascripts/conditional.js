$('.locationfield').on('change', function () {
  var value = $('.locationfield').first().val();
  if (value) {
    if (value  === "AA1 1AA")
    {
      $('#distanceFormGroup').show();
    }
    else {
      $('#distanceFormGroup').hide();
    }
  }
  else if (value === '') {
    $('#distanceFormGroup').hide();
  }
});