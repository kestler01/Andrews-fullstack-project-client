const getFormFields = require('./../lib/get-form-fields.js')
const api = require('./api.js')
const store = require('./store.js')

const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api.signUp(formDataObj).then(ui.onSignUpSuccess).catch(ui.onSignUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api.signIn(formDataObj)
    .then(user => ui.onSignInSuccess(user))
    .catch(ui.onSignInFailure)
}
const onChangePw = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  console.log(formDataRaw)
  const formDataObj = getFormFields(formDataRaw)
  console.log(formDataObj)
  api
    .changePw(formDataObj)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFailure)
}

const onSignOut = function () {
  api.signOut().then(ui.onSignOutSuccess).catch(ui.onSignOutFailure)
}

const onUpdateProfile = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  const formDataObject = getFormFields(formDataRaw)
  api.updateProfile(formDataObject)
    .then(ui.onUpdateProfileSuccess)
    .catch(ui.onUpdateProfileFailure)
}

const onNewPiece = function (event) {
  event.preventDefault()
  const formDataRaw = event.target
  const formDataObject = getFormFields(formDataRaw)
  api.newPiece(formDataObject)
    .then(ui.onNewPieceSuccess)
    .catch(ui.onNewPieceFailure)
}

const onGetPieces = function (event) {
  event.preventDefault()
  api.getPieces()
    .then(ui.onGetPiecesSuccess)
    .catch(ui.onGetPiecesFailure)
}

const onEditPieceButton = function (event) {
  event.preventDefault()
  const cardDataRaw = event.target.parentNode.parentNode
  console.log(cardDataRaw)
  store.rawPiece = cardDataRaw
  console.log(store)
  console.log($(store.rawPiece).attr('data-piece-id'))
  store.pieceId = $(store.rawPiece).attr('data-piece-id')
  store.pieceLink = $(store.rawPiece).attr('data-piece-link')
  store.pieceName = $(store.rawPiece).attr('data-piece-name')
  store.pieceMedium = $(store.rawPiece).attr('data-piece-medium')
  store.pieceDescription = $(store.rawPiece).attr('data-piece-description')
  ui.EditPieceButtonTrigger()
}

const onUpdatePiece = function (event) {
  event.preventDefault()

  const formDataRaw = event.target
  const formDataObject = getFormFields(formDataRaw)
  console.log(formDataObject)
  api.updatePiece(formDataObject)
    .then(api.getPieces)
    .then(ui.onGetPiecesSuccess)
    .then(ui.onUpdatePieceSuccess)
    .catch(ui.onUpdatePieceFailure)
}

const onDeletePiece = function () {
  api.deletePiece()
    .then(api.getPieces)
    .then(ui.onGetPiecesSuccess)
    .then(ui.onUpdatePieceSuccess)
    .catch(ui.onUpdatePieceFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onUpdateProfile,
  onNewPiece,
  onEditPieceButton,
  onGetPieces,
  onUpdatePiece,
  onDeletePiece
}
