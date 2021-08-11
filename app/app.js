const events = require('./events.js')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePw)
  $('#sign-out-button').on('click', events.onSignOut)
  $('#update-profile').on('submit', events.onUpdateProfile)
  $('#new-piece').on('submit', events.onNewPiece)
  $('#pieces-landing-pad').on('click', '.dynamic-edit-piece-button', events.onEditPieceButton)
  $('#update-piece').on('submit', events.onUpdatePiece)
  $('#get-pieces-button').on('click', events.onGetPieces)
  $('#delete-Piece-Button').on('click', events.onDeletePiece)
})
