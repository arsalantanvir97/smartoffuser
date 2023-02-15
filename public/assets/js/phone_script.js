$(document).ready(function () {
  var input = document.getElementById('phone');
  window.intlTelInput(input, {
    customPlaceholder: function (
      selectedCountryPlaceholder,
      selectedCountryData
    ) {
      return 'e.g. ' + selectedCountryPlaceholder;
    }
  });
});
