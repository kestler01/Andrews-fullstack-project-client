const store = require('./store.js')
const Modal = require('bootstrap').Modal
// if (response.user.pieces.length !== 0) {
//   response.user.pieces.forEach((piece) => drawPieceCard(piece)); // here we iterate over the array, but I could start an index request instead ?
// }
const drawPieceCard = function (piece) {
  // getting piece data from the response
  console.log(piece)
  const { name, medium, description, link, _id } = piece
  // make a card with the data,
  // append card into the page @ "#pieces-landing-pad"
  $('#pieces-landing-pad').prepend(`
  <div class="col col-lg-3 card-sleeve">
    <div class="card" data-piece-id="${_id}" data-piece-link="${link}" data-piece-name="${name}" data-piece-medium="${medium}" data-piece-description="${description}">
      <img src="${link}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name} : ${medium} </h5>
        <p class="card-text">${description}</p>
        <a href="#" class="btn btn-primary dynamic-edit-piece-button"> open update modal </a>
      </div>
    </div>
  </div>
`)
}

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
  $('#sign-in-form-message').text('')
  $('#message-field').text(`Welcome ${response.user.userName}`)
  $('#sign-up-button').hide()
  $('#sign-in-button').hide()
  $('#sign-out-button').show()
  $('#change-pw-button').show()
  $('#update-profile-button').show()
  $('#sign-in').trigger('reset')
  $('#userPage').removeClass('startHidden')
  store.user = response.user
  const user = response.user
  $('#update-profile-username-field').val(user.userName)
  $('#update-profile-mediums-field').val(user.mediums)
  $('#update-profile-bio-field').val(user.bio)
  $('#user-name-home-view').text(user.userName)
  $('#user-medium-home-view').text(user.medium)
  $('#user-bio-home-view').text(user.bio)
  console.log(store)
  myModal._hideModal() // do not know why but hide and toggle methods are not working in this scenario with a submit and reset of the form before the hide.
  $('.modal-backdrop').hide() // janky but traditional modal methods aren't working here for some reason
}

const onSignInFailure = function () {
  $('#sign-in-form-message').text('sign in failure')
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
  $('#userPage').addClass('startHidden')
  $('#update-profile-button').hide()
  // store.user = null
  console.log(store)
}

const onSignOutFailure = function () {
  $('#message-field').text('sign out failure')
}

const onUpdateProfileSuccess = function (response) {
  console.log(response)
  $('#update-profile-message-field').text('profile updated')
  $('#update-profile-username-field').val(response.user.userName)
  $('#update-profile-mediums-field').val(response.user.mediums)
  $('#update-profile-bio-field').val(response.user.bio)
}

const onUpdateProfileFailure = function (response) {
  $('update-profile-message-field').text('something went wrong')
  console.log(response)
}
const onNewPieceSuccess = function (response) {
  console.log(response)
  drawPieceCard(response.piece)
  const myModal = new Modal($('#new-piece-form-modal'))
  $('#new-piece').trigger('reset')
  myModal._hideModal()
  $('.modal-backdrop').hide()
}

const onNewPieceFailure = function (response) {
  console.log(response)
  $('#new-piece-message-field').text('something went wrong')
}
const onGetPiecesSuccess = function (response) {
  console.log(response)
  $('#message-field').text('')
  $('#pieces-landing-pad').html('')
  if (response.pieces.length === 0 || !response.pieces) {
    $('#message-field').text(' You don\'t have any pieces yet')
  }
  response.pieces.forEach(piece => drawPieceCard(piece))
}
const onGetPiecesFailure = function (response) {
  console.log(response)
}
const EditPieceButtonTrigger = function () {
  const { pieceName, pieceMedium, pieceLink, pieceDescription } = store
  const myModal = new Modal($('#update-piece-form-modal'))
  $('#update-piece-name-field').val(`${pieceName}`)
  $('#update-piece-medium-field').val(`${pieceMedium}`)
  $('#update-piece-description-field').val(`${pieceDescription}`)
  $('#update-piece-link-field').val(`${pieceLink}`)
  myModal.show()
}

const onUpdatePieceSuccess = function (response) {
  console.log(response)
  const myModal = new Modal($('#update-piece-form-modal'))
  myModal._hideModal()
  $('.modal-backdrop').hide()
}

const onUpdatePieceFailure = function (response) {
  console.log(response)
  $('#update-piece-message-field').text('something went wrong')
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
  onUpdateProfileFailure,
  onNewPieceSuccess,
  onNewPieceFailure,
  onGetPiecesSuccess,
  onGetPiecesFailure,
  EditPieceButtonTrigger,
  onUpdatePieceSuccess,
  onUpdatePieceFailure
}
