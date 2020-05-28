/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll();
  $('main.govuk-main-wrapper#main-content').closest('div.govuk-width-container').removeClass('govuk-width-container')
})

// import 'bootstrap';