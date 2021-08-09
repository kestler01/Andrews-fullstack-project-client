const store = require('./store.js')
const Modal = require('bootstrap').Modal

const onSignUpSuccess = function () {
  $('#sign-up').trigger('reset')
  $('#sign-up-form-message').text('sign up successful, log in to continue')
  $('#sign-up-flip-in-button').show()
}

const onSignUpFailure = function () {
  $('#sign-up-form-message').text('sign up failed, try again')
}

const onSignInSuccess = function (response) {
  const myModal = new Modal($('#sign-in-form-modal'))
  console.log(response)
  $('#message-field').text(`Welcome ${response.user.userName}`)
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#sign-out-button').show()
  $('#change-pw-button').show()
  $('#update-profile-button').show()
  $('#sign-in').trigger('reset')
  // fill out update-profile form with user data, on submit an empty field would overwrite existing db entry and not all are required
  $('#update-profile-username-field').val(response.user.userName)
  $('#update-profile-mediums-field').val(response.user.mediums)
  $('#update-profile-bio-field').val(response.user.bio)
  // need to get user data from api, and change view to user homepage
  store.user = response.user
  store.user.pieces
    .forEach(
    // look up the piece data, ! - would be a seperate api call for each !?! f no- must popluate that array on call first.

    // make a card with the data,
    // append card into the page @ "#pieces-landing-pad"
    )
  // console.log(store)
  myModal._hideModal() // do not know why but hide and toggle methods are not working in this scenario with a submit and reset of the form before the hide.
  $('.modal-backdrop').hide() // janky but traditional modal methods aren't working here for some reason
}

const onSignInFailure = function () {
  $('#message-field').text('sign in failure')
  $('#sign-in').trigger('reset')
}

const onChangePwSuccess = function () {
  $('#pw-change-message-field').text('password updated')
}

const onChangePwFailure = function () {
  $('#change-password').trigger('reset')
  $('#pw-change-message-field').text('password change failed')
}

const onSignOutSuccess = function () {
  $('#message-field').text('you signed out')
  $('#sign-up-button').show()
  $('#sign-in-button').show()
  $('#sign-out-button').hide()
  $('#change-pw-button').hide()
  $('#new-game-button').hide()
  $('#game-board').addClass('startHidden')
  // store.user = null
  console.log(store)
}

const onSignOutFailure = function () {
  $('#message-field').text('sign out failure')
}

const onUpdateProfileSuccess = function (response) {
  console.log(response)
  $('update-profile-message-field').text('profile updated')
  $('#update-profile-username-field').val(response.user.userName)
  $('#update-profile-mediums-field').val(response.user.mediums)
  $('#update-profile-bio-field').val(response.user.bio)
}

const onUpdateProfileFailure = function (response) {
  $('update-profile-message-field').text('something went wrong')
  console.log(response)
}
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePwSuccess,
  onChangePwFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onUpdateProfileSuccess,
  onUpdateProfileFailure
}
