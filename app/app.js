const events = require('./events.js')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePw)
  $('#sign-out-button').on('click', events.onSignOut)
  $('#update-profile').on('submit', events.onUpdateProfile)
})
